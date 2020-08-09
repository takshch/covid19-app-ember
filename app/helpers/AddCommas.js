import { helper } from '@ember/component/helper';

function AddCommas(...args){
    let [number]  = args;
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default helper(AddCommas);