import { padLeft, padRight } from '../src/pad';

QUnit.module('$pad');

QUnit.test('should pad left', function shouldCallImmediately(assert) {
  assert.expect(1);

  assert.strictEqual(padLeft('1248', 16, '*'), '************1248');
});

QUnit.test('should pad right', function shouldCallImmediately(assert) {
  assert.expect(1);

  assert.strictEqual(padRight('1248', 16, '*'), '1248************');
});
