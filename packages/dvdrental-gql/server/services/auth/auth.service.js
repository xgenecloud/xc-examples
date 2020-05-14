const {BaseService} = require('xc-core');
const Strategy = require('./strategies');
const passport = require('passport');
const util = require('util');
const nodemailer = require('nodemailer');

const uuidv4 = require('uuid/v4');

class AuthService extends BaseService {

  constructor(app = {}) {
    super(app)
    this.app = app;

    this.users = app.$dbs.primary.users;
    new Strategy({app})
    this.transporter = nodemailer.createTransport(app.$config.mailer.options)
  }

  async SignIn(args, {req, res, next}) {
    req.body = args.data;
    try {
      let data = await new Promise((resolve, reject) => {

        passport.authenticate('local', async (err, user, info) => {

          try {

            if (!user || !user.email) {

              if (err) {
                return reject(err)
              }

              if (info) {
                return reject(info)
              }

              return reject({msg: 'Your signin has failed'});

            }

            await util.promisify(req.login.bind(req))(user);
            resolve(user)

          } catch (e) {
            console.log(e);
            reject(e);
          }

        })(req, res, next);
      });


      return data;
    } catch (e) {
      console.log(e)
      throw e;
    }


  }

  async SignUp(args, {req}) {


      let user = await this.users.findOne({where: `(email,eq,${args.data.email})`});
      if (user && user.email) {
        throw new Error({msg: `Email '${args.data.email}' already registered`})
      }

      user = await this.users.insert(args.data);

      await this.transporter.sendMail({
        from: this.app.$config.mailer.from,
        to: "pranavcbalan@gmail.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: `<p> verification url : http://localhost:8080/api/v1/auth/email/validate/${user.email_verification_token}</p>`
      })

      await util.promisify(req.login.bind(req))(user);
      return user;

  }

  async SignOut(args, {req}) {
    req.session.destroy();
    return true;
  }

  async PasswordForgot(args) {
    try {
      let email = args.email;
      if (!email) {
        throw new Error('Please enter your email address.')
      }

      let user = await this.users.findOne({where: `(email,eq,${email})`});
      if (!user || !user.email) {
        throw new Error('This email is not registered with us.')
      }

      const token = uuidv4();

      user.reset_password_token = token;
      user.reset_password_expires = new Date(Date.now() + (60 * 60 * 1000))

      await this.users.updateByPk(user.id + '', user);

      await this.transporter.sendMail({
        from: this.app.$config.mailer.from,
        to: "pranavcbalan@gmail.com",
        subject: "Message title",
        text: "Plaintext version of the message",
        html: `<p> Token : ${token}</p>`
      })


      return true;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }


  async EmailValidate(args) {
    try {
      const token = args.tokenId;
      const user = await this.users.findOne({where: `(email_verification_token,eq,${token})`});
      if (!user || !user.email) {
        throw new Error('Invalid verification url');
      }

      user.email_verification_token = '';
      user.email_verified = true;
      await this.users.updateByPk(user.id, user);
      return true;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async PasswordReset(args, {req}) {
    try {
      const token = args.tokenId;
      const user = await this.users.findOne({where: `(reset_password_token,eq,${token})`});
      if (!user || !user.email) {
        throw new Error('Invalid reset url');
      }
      if (user.reset_password_expires < new Date()) {
        throw new Error('Password reset url expired');
      }
      if (user.provider && user.provider !== 'local') {
        throw new Error('Email registered via social account');
      }

      user.salt = null;
      user.password = args.password;
      user.reset_password_expires = null;
      user.reset_password_token = '';

      await this.users.updateByPk(user.id, user);

      await util.promisify(req.login.bind(req))(user);
      user.salt = null;
      user.password = null;

      return true;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async Me(data, {req}) {
    return req.user;
  }


}

module.exports = AuthService;