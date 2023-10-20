import sayHello from '../utils/hello.henry.js';
import assert from "assert";

it('Testing Henry Hello', () => {
    const hello = sayHello();

    assert.equal(hello,'Henry')
    
});
