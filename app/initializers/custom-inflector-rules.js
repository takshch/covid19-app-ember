import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.uncountable('country');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};

