/* eslint-disable */
const {expect} = require('chai');
const request = require('supertest');
const session = require('supertest-session');
const {Components} = require('xc-core');

describe('Our application', function () {

  let app, appServer, httpSession, appContext;

  before(function (done) {

    (async () => {

      appContext = new Components(require('../app.config').config);
      await appContext.init();

      appContext.router.start();
      app = appContext.$router;
      appServer = appContext.$router.server;
      httpSession = session(app);


      // replacing email service with dummy object
      appContext.$services.AuthService.transporter = {
        sendMail(...args) {
          console.log(args)
        }
      }


    })().then(done).catch(done);
  });


  after(function (done) {
    if (appServer) appServer.close();
    done()
    process.exit();
  });


  /**** Authentication : START ****/
  describe('Authentication', function () {

    const EMAIL_ID = 'abc@g.com'
    const VALID_PASSWORD = '1234566778';

    it('Signup with valid email', function (done) {
      request(app)
        .post('/graphql')
        .send({
          query: `mutation{ SignUp(data : { email: "${EMAIL_ID}", password: "${VALID_PASSWORD}"}){  email  id }}`
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          if (res.body.errors) {
            const errorMsg = res.body.errors[0].message;
            expect(errorMsg).to.be.a('string')
          } else {
            const data = res.body.data;
            expect(data.SignUp).to.be.a('object')
            expect(data.SignUp.email).to.be.equal(EMAIL_ID)
          }
          done();
        });
    });

    it('Signup with invalid email', function (done) {
      request(app)
        .post('/graphql')
        .send({
          query: `mutation{ SignUp(data : { email: "test", password: "${VALID_PASSWORD}"}){  email  id }}`
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          const errorMsg = res.body.errors[0].message;
          expect(errorMsg).to.be.a('string')
          done();
        });

    });

    it('Signin with valid email', function (done) {
      httpSession
        .post('/graphql')
        .send({
          query: `mutation{ SignIn(data : { email: "${EMAIL_ID}", password: "${VALID_PASSWORD}"}){  email  id }}`
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          const data = res.body.data;
          expect(data.SignIn).to.be.a('object')
          expect(data.SignIn.email).to.be.equal(EMAIL_ID)
          done();
        });

    });

    it('me', function (done) {
      httpSession
        .post('/graphql')
        .send({
          query: `{ Me{  email  id }}`
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          const data = res.body.data;
          expect(data.Me).to.be.a('object')
          expect(data.Me.email).to.be.equal(EMAIL_ID)
          done();
        });

    });

    it('SignOut', function (done) {
      httpSession
        .post('/graphql')
        .send({
          query: `mutation { SignOut }`
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          const data = res.body.data;
          expect(data.SignOut).to.be.true;
          done();
        });

    });

    it('Signin with invalid email', function (done) {
      request(app)
        .post('/graphql')
        .send({
          query: `mutation{ SignIn(data : { email: "abc@abcc.com", password: "randomPassord"}){  email  id }}`
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          const errorMsg = res.body.errors[0].message;
          expect(errorMsg.indexOf('not registered')).to.be.greaterThan(-1)
          done();
        });

    });

    it('Forgot password with a non-existing email id', function (done) {
      request(app)
        .post('/graphql')
        .send({
          query: `mutation{ PasswordForgot(email: "abc@abcc.com")}`
        })
        .expect(200, function (err, res) {
          if (err) done(err);

          const errorMsg = res.body.errors[0].message;
          expect(errorMsg).to.be.equal("This email is not registered with us.")
          done();
        })
    });

    it('Forgot password with an existing email id', function (done) {
      request(app)
        .post('/graphql')
        .send({
          query: `mutation{ PasswordForgot(email: "${EMAIL_ID}")}`
        })
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          expect(res.body.data.PasswordForgot).to.be.true
          done();
        })
    });

    it('Email validate with an invalid token', function (done) {
      request(app)
        .post('/graphql')
        .send({
          query: `mutation{ EmailValidate(tokenId: "invalid-token-id")}`
        })
        .expect(200, function (err, res) {
          if (err) done(err);
          const errorMsg = res.body.errors[0].message;
          expect(errorMsg).to.be.equal("Invalid verification url")
          done()
        })
    });

    it('Reset Password with an invalid token', function (done) {
      request(app)
        .post('/graphql')
        .send({
          query: `mutation{ PasswordReset(password:"somePassword",tokenId: "invalid-token-id")}`
        })
        .expect(200, function (err, res) {
          if (err) done(err);
          const errorMsg = res.body.errors[0].message;
          expect(errorMsg).to.be.equal("Invalid reset url")
          done()
        })
    });
  });

  /**** Authentication : END ****/

});