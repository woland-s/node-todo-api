const expect = require('expect');
const rewire = require('rewire');

var app = rewire('/app');

describe('App' , () => {
var db = {
  saveUser: expect.createSpy()
};
app.__set__('db', db);

it('should call the spy correctly' , () => {
var spy = expect.createSpy();
spy('mari', 23);
expect(spy).toHaveBeenCalledWith('mari' , 23);
});

it('should call saveUser with user object', () => {
var email = 'm.darchiashvili@gmail.com' ;
var password = '123abc';

app.handleSignup(email , password);
expect(db.saveUser).toHaveBeenLastCalledWith({email,password});
});

});


