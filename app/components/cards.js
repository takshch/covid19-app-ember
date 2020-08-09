import Component from '@glimmer/component';

export default class CardsComponent extends Component{
    get sortByCase(){
        let { data } = this.args;
        let keywordsAllowed = ["New","Total"];
        return Object.keys(data).filter(keys=>keys.indexOf(keywordsAllowed[0])!==-1 || 
        keys.indexOf(keywordsAllowed[1]) !==  -1).reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    }
}
