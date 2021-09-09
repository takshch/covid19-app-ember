import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card', function (hooks) {
  setupRenderingTest(hooks);

  test('it should not render if data props is not passed', async function (assert) {
    await render(hbs`<Card />`);

    assert.dom('[data-test-card]').doesNotExist();
  });

  test('card heading should be "Global" if country in data is available', async function (assert) {
    this.set('data', {
      CountryCode: "IN",
    });
    await render(hbs`<Card @data={{this.data}} />`);

    assert.dom('[data-test-card-heading]').exists().containsText('Global');
  });

  test('card heading should be country name if Country in data is available', async function (assert) {
    this.set('data', {
      Country: "India",
      CountryCode: "IN",
    });
    await render(hbs`<Card @data={{this.data}} />`);

    assert.dom('[data-test-card-heading]').exists().containsText(this.data.Country);
  });

  test('card heading should be country name if Country in data is available', async function (assert) {
    this.set('data', {
      Country: "India",
      CountryCode: "IN",
    });
    await render(hbs`<Card @data={{this.data}} />`);

    assert.dom('[data-test-card-heading]').exists().containsText(this.data.Country);
  });

  test('card should have badges of heading starting with "New" or "Total" only', async function (assert) {
    this.set('data', {
      Country: "India",
      CountryCode: "IN",
      NewConfirmed: 37875,
      TotalConfirmed: 33096718,
      Slug: "india",
    });
    await render(hbs`<Card @data={{this.data}} />`);
    
    assert.dom('[data-test-card-badge]').exists({ count: 2 });
    const badgesHeading = Array.from(this.element.querySelectorAll('[data-test-card-badge-heading]'));
    const badgesValues = Array.from(this.element.querySelectorAll('[data-test-card-badge-value]'));

    assert.strictEqual(badgesHeading.length, 2);
    assert.strictEqual(badgesValues.length, 2);

    badgesHeading.forEach(async (heading)=>{
      const hasHeading = /^New|^Total/.test(heading.textContent.trim());
      assert.strictEqual(hasHeading, true);
    });

    badgesValues.forEach((value)=>{
      const hasValue = /37,875|33,096,718/.test(value.textContent.trim());
      assert.strictEqual(hasValue, true);
    });
  });
});
