import sayHello from '../utils/hello.glen.js';
import assert from 'assert';

it('Testing Glens Hello', () => {
  const hello = sayHello();

  assert.equal(hello, 'Glen');
});
