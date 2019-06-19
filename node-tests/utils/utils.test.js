const expect = require('expect');
const utils = require('./utils');

describe('utils', () => {
  describe('#square' , () => {
    it('it should square a num', () => {
      var res = utils.square(2) ;
      
      if (res !== 4) {
        throw new Error( `expected 4 ,but got ${res}.`)
      }
      });
  })
  it('it should add two nums', ()=> {
    var res = utils.add(23, 18);
    expect(res).toBe(41).toBeA('number'); 
  });
  it('should async add two numbers' , (done) => {
    utils.asyncAdd(4 , 3 , (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
    });
    
    it('should async square' , (done) => {
    utils.asyncSquare(6,(res) => {
    expect(res).toBe(36).toBeA('number');
    done();
    });
    });
});





//throw new Error('Value not correct')//
//if (res !== 44) {
 // throw new Error(`expected 41 but got ${res}.`)}







it('it should expect some values' , () => {
expect({name: 'mari'}).toNotEqual({name: 'Mari'});
});

//expect([2,3,4]).toExclude(2) ; //

                                                    