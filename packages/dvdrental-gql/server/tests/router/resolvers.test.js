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
  
  /**** Country : START ****/
  describe('Country', function () {
    
    /**** Query : START ****/
    it('CountryList', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryList(limit:5){ country_id country } }`
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const list = res.body.data.CountryList;
        expect(list).length.to.be.most(5)
        expect(list[0]).to.have.all.keys(['country_id', 'country'])
        done()
      })
    });
    
    it('CountryList - with sort', function (done) {
      // todo: order -> sort
      
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryList(sort:"-country_id"){ country_id country } }`
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const list = res.body.data.CountryList;
        expect(list[0]).to.have.all.keys(['country_id', 'country'])
        
        expect(list).satisfy(array => {
          let i = array.length;
          while (--i) {
            if (array[i].country_id > array[i - 1].country_id) return false;
          }
          return true
        }, 'Should be in descending order')
        
        done()
      })
    });
    
    it('CountryList - with limit', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryList(limit:6){ country_id country } }`
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const list = res.body.data.CountryList;
        expect(list[0]).to.have.all.keys(['country_id', 'country'])
        expect(list).to.have.length.most(6)
        done()
      })
    });
    
    it('CountryList - with offset', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryList(offset:0,limit:6){ country_id country } }`
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const list1 = res.body.data.CountryList;
        expect(list1[0]).to.have.all.keys(['country_id', 'country'])
        request(app)
        .post('/graphql')
        .send({
          query: `{ CountryList(offset:1,limit:5){ country_id country } }`
        })
        .expect(200, function (err, res1) {
          if (err) done(err);
          const list2 = res1.body.data.CountryList;
          expect(list2[0]).to.have.all.keys(['country_id', 'country'])
          expect(list2).satisfy(arr => arr.every(({country, country_id}, i) =>
            country === list1[i + 1].country && country_id === list1[i + 1].country_id
          ), 'Both data should need to be equal where offset vary with 1')
          
          done()
        });
      })
    });
    
    it('CountryList - nested count', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryList{ country_id country CityCount} }`
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const list = res.body.data.CountryList;
        expect(list[0]).to.have.all.keys(['country_id', 'country', 'CityCount'])
        expect(list[0].CityCount).to.be.a('number')
        expect(list[0].CityCount % 1).to.be.equal(0);
        done()
      })
    });
    
    it('CountryList - nested CityList', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryList{ country_id country CityList { city country_id }} }`
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const list = res.body.data.CountryList;
        expect(list[0]).to.have.all.keys(['country_id', 'country', 'CityList'])
        expect(list[0].CityList).to.be.a('Array')
        expect(list[0].CityList[0]).to.be.a('object');
        expect(list[0].CityList[0]).to.have.all.keys(['country_id', 'city'])
        expect(Object.keys(list[0].CityList[0])).to.have.length(2)
        expect(list[0].CityList[0].country_id).to.be.equal(list[0].country_id)
        done()
      })
    });
    
    it('CountryRead', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryRead(id: "1"){ country_id country } } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryRead;
        expect(data).to.be.a('object')
        expect(data).to.have.all.keys(['country_id', 'country'])
        
        done()
      })
    });
    
    it('CountryExists', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryExists(id: "1") } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryExists;
        expect(data).to.be.a('boolean')
        expect(data).to.be.equal(true)
        done()
      })
    });
    
    it('CountryExists - with non-existing id', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryExists(id: "9999999999999999") } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryExists;
        expect(data).to.be.a('boolean')
        expect(data).to.be.equal(false)
        done()
      })
    });
    
    it('CountryFindOne', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryFindOne (where: "(country_id,eq,1)"){ country country_id } } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryFindOne;
        expect(data).to.be.a('object')
        expect(data).to.have.all.keys(['country', 'country_id'])
        expect(data.country_id).to.be.equal(1);
        done()
      })
    });
    
    it('CountryCount - filter by id', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryCount (where: "(country_id,eq,1)") } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryCount;
        expect(data).to.be.a('number')
        expect(data).to.be.equal(1);
        done()
      })
    });
    
    it('CountryDistinct', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryDistinct(columnName: "last_update") { last_update } } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryDistinct;
        expect(data).to.be.a('array')
        expect(data[0]).to.be.a('object')
        expect(data[[0]]).to.have.all.keys(['last_update'])
        expect(data[0].last_update).to.be.match(/\d+/);
        done()
      })
    });
    
    
    it('CountryGroupBy', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryGroupBy(fields: "last_update",limit:5) { last_update count  } } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryGroupBy;
        expect(data.length).to.be.most(5);
        expect(data[0].count).to.be.greaterThan(0);
        expect(data[0].last_update).to.be.a('string');
        expect(Object.keys(data[0]).length).to.be.equal(2);
        done()
      })
    });
    
    it('CountryGroupBy - Multiple', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryGroupBy(fields: "last_update,country",limit:5) { last_update country count  } } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryGroupBy;
        expect(data.length).to.be.most(5);
        expect(data[0].count).to.be.greaterThan(0);
        expect(data[0].last_update).to.be.a('string');
        expect(data[0].country).to.be.a('string');
        expect(Object.keys(data[0]).length).to.be.equal(3);
        done()
      })
    });
    
    it('CountryAggregate', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryAggregate(func: "sum,avg,min,max,count", columnName : "country_id") { sum avg min max count  } } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryAggregate;
        expect(data).to.be.a('array');
        if (data.length) {
          expect(data[0].min).to.be.a('number');
          expect(data[0].max).to.be.a('number');
          expect(data[0].avg).to.be.a('number');
          expect(data[0].sum).to.be.a('number');
          expect(data[0].count).to.be.a('number').and.satisfy(num => num === parseInt(num), 'count should be an integer');
          expect(Object.keys(data[0]).length).to.be.equal(5);
        }
        done();
      })
    });
    
    it('CountryDistribution', function (done) {
      request(app)
      .post('/graphql')
      .send({
        query: `{ CountryDistribution(columnName : "country_id") { range count  } } `
      })
      .expect(200, function (err, res) {
        if (err) done(err);
        const data = res.body.data.CountryDistribution;
        expect(data).to.be.a('array');
        expect(data[0].count).to.be.a('number');
        expect(data[0].count).satisfies(num => num === parseInt(num) && num >= 0, 'should be a positive integer');
        expect(data[0].range).to.be.a('string');
        expect(data[0].range).to.be.match(/^\d+-\d+$/, 'should match {num start}-{num end} format')
        done();
      })
    });
    
    /**** Query : END ****/
    
    /**** Mutation : START ****/
    describe('Mutation', function () {
      
      const COUNTRY_ID = 9999;
      const COUNTRY_CREATE_ID = 9998;
      const COUNTRY_NAME = 'test-name';
      
      
      before(function (done) {
        // create table entry for update and delete
        let db = appContext.$dbs.primaryDb('country');
        db.insert({
          country_id: COUNTRY_ID,
          country: COUNTRY_NAME
        }).finally(done())
      })
      
      after(function (done) {
        
        // delete table entries which is created for the test
        let db = appContext.$dbs.primaryDb('country');
        db.whereIn('country_id', [COUNTRY_ID, COUNTRY_CREATE_ID])
        .del()
        .finally(done())
      })
      
      it('CountryCreate', function (done) {
        request(app)
        .post('/graphql')
        .send({
          query: `mutation{ CountryCreate( data : { country: "abcd", country_id : ${COUNTRY_CREATE_ID} }) { country_id country } } `
        })
        .expect(200, function (err, res) {
          if (err) done(err);
          const data = res.body.data.CountryCreate;
          expect(data).to.be.a('object');
          expect(data.country_id).to.be.a('number');
          expect(data.country).to.be.equal('abcd');
          done();
        })
      });
      
      
      it('CountryUpdate', function (done) {
        request(app)
        .post('/graphql')
        .send({
          query: `mutation{ CountryUpdate( id : "${COUNTRY_ID}", data : { country: "abcd" }) { country_id country } } `
        })
        .expect(200, function (err, res) {
          if (err) done(err);
          const data = res.body.data.CountryUpdate;
          expect(data).to.be.a('object');
          // todo:
          done();
        })
      });
      
      it('CountryDelete', function (done) {
        request(app)
        .post('/graphql')
        .send({
          query: `mutation{ CountryDelete( id : "${COUNTRY_ID}"){ country } } `
        })
        .expect(200, function (err, res) {
          if (err) done(err);
          const data = res.body.data.CountryDelete;
          expect(data).to.be.a('object')
          // todo:
          done();
        })
      });
    })
    
    
    /**** Mutation : END ****/
    // 		CountryCreateBulk(data: [CountryInput]): [Int]
    // 		CountryUpdateBulk(data: [CountryInput]): [Int]
    // 		CountryDeleteBulk(data: [CountryInput]): [Int]
    // 	},
  });
  /**** Country : END ****/
});