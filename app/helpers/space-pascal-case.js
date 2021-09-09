import { helper } from '@ember/component/helper';

function spacePascalCase(args) {
  let [string] = args;
  if (typeof string !== 'string' || string.length === 0) return;

  let regex = /($[a-z])|[A-Z][^A-Z]+/g;
  let wordsSplit = string.match(regex).join(' ');
  if (wordsSplit.length > string.length) {
    return wordsSplit;
  }
}

export default helper(spacePascalCase);
