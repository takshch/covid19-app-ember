import { helper } from '@ember/component/helper';

function addCommas(args, namedArgs) {
  let { number } = namedArgs;

  let modifiedNumber;
  if (typeof number === 'number') {
    modifiedNumber = number
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return modifiedNumber;
}

export default helper(addCommas);
