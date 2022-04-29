var helloWord = require('./index');
describe('hello world', ()=>{
    it('should return hello',()=>{
        expect(helloWord()).toEqual("hello world")
    })
})
