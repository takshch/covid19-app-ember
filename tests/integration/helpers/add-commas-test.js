import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | add-commas', function (hooks) {
  setupRenderingTest(hooks);

  test('add commas in number', async function (assert) {
    this.set('number', 4700);

    await render(hbs`{{add-commas number=this.number}}`);

    assert.dom(this.element).hasText('4,700');
  });

  test('should return nothing if number is not passed', async function (assert) {
    this.set('number', '4700');

    await render(hbs`{{add-commas number=this.number}}`);

    assert.dom(this.element).hasText('');
  });

  test('should return only if number is passed', async function (assert) {
    this.set('number', 8100);

    await render(hbs`{{add-commas number=this.number}}`);

    assert.dom(this.element).hasText('8,100');
  });
});
