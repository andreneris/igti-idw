import assert from 'assert';
import sayHello from '../src/say_hello';


describe('sayHello test', ()=>{
    it('should return greet with excitement',()=>{
        assert.equal(sayHello('test'), 'Hello test!');
    })
})