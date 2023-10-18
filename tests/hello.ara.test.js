import hello from "../utils/hello.ara"
import assert from 'assert'

it("Test ara hello program", ()=>{

    const helloString = hello();

    assert.equal(helloString,"Arã");

});