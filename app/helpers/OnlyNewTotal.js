import { helper } from '@ember/component/helper';

function OnlyNewTotal(args) {
  let [arrayCovid] = args;
  let keywordsAllowed = ['New', 'Total'];
  return Object.keys(arrayCovid)
    .filter(
      (keys) =>
        keys.indexOf(keywordsAllowed[0]) !== -1 ||
        keys.indexOf(keywordsAllowed[1]) !== -1
    )
    .reduce((obj, key) => {
      obj[key] = arrayCovid[key];
      return obj;
    }, {});
}

export default helper(OnlyNewTotal);
