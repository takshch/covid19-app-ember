import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | space-pascal-case', function (hooks) {
  setupRenderingTest(hooks);

  test('adds space in PascalCased format string to separate it into words', async function (assert) {
    this.set('string', 'TotalConfirmed');

    await render(hbs`{{space-pascal-case this.string}}`);

    assert.dom(this.element).hasText('Total Confirmed');
  });

  test('should return nothing if string is empty', async function (assert) {
    this.set('string', '');

    await render(hbs`{{space-pascal-case this.string}}`);

    assert.dom(this.element).hasText('');
  });

  test('should return nothing if string is not PascalCase formatted', async function (assert) {
    this.set('string', 'camelCase');

    await render(hbs`{{space-pascal-case this.string}}`);

    assert.dom(this.element).hasText('');
  });
});
