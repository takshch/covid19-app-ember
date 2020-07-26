import { helper } from '@ember/component/helper';

function SpacePascalCase(args){
    let [string] = args;
    return string.replace(/([A-Z][a-z])/g," $1").trim();
}
export default helper(SpacePascalCase);