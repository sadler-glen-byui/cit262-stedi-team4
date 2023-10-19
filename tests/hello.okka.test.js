import hello from "../utils/hello.okka"
import assert from 'assert'

it("Test ara hello program", ()=>{

    const helloString = hello();

    assert.equal(helloString,"okka");

});