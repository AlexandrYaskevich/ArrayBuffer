import ArrayBufferConverter from '../arraybaffer';
import getBuffer from '../getbuffer';

test('load buffer', () => {
  const newbuffer = new ArrayBufferConverter();
  newbuffer.load(getBuffer());
  expect(newbuffer.buffer).toEqual(getBuffer());
});

test('array buffer', () => {
  const arraybuffer = new ArrayBufferConverter();
  arraybuffer.load(getBuffer());
  expect(arraybuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});