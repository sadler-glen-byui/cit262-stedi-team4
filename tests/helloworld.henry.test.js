import sayHello from '../utils/helloworld.glen.js';
import assert from "assert";

it('Testing Henry Hello', () => {
    const hello = sayHello();

    assert.equal(hello,'Henry')
    
});
