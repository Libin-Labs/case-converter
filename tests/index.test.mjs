import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('converts camel to snake', () => {
  assert.equal(api.convertCase('helloWorld', 'snake'), 'hello_world');
});
test('converts acronym boundaries', () => {
  assert.equal(api.convertCase('HTTPServerID', 'kebab'), 'http-server-id');
});
test('converts snake to Pascal', () => {
  assert.equal(api.convertCase('some_value', 'pascal'), 'SomeValue');
});
test('converts words to camel', () => {
  assert.equal(api.convertCase('some value', 'camel'), 'someValue');
});
test('handles punctuation', () => {
  assert.equal(api.convertCase('hello.world!', 'kebab'), 'hello-world');
});
test('rejects unsupported style', () => {
  assert.throws(() => api.convertCase('x', 'title'), RangeError);
});
