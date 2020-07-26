import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class CovidController extends Controller {
    @tracked searchData = this.model.Countries.sort(function(current,next){
        if(current['TotalConfirmed'] > next['TotalConfirmed']){
            return -1;
        }
        else if(current['TotalConfirmed'] < next['TotalConfirmed']){
            return 1;
        }
    });
    @tracked index = 5;
    @tracked tempData = this.searchData;
    @tracked displayData = this.tempData.slice(0,5);
    @tracked error_message = null;

    @action
    changeTempData(e){
        this.tempData = this.searchData.filter(function(obj){
            return obj.Country.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
        });
        this.error_message = null;
        if(this.tempData.length === 0){
            this.error_message = "Record Not Found";
        }
        console.log(this.tempData);
        this.changeDisplayData(5);
    }

    @action
    changeDisplayData(index){
        this.displayData = this.tempData.slice(0,index);
    }
    
    @action 
    viewMore(){
        this.index = this.index + 5;
        this.changeDisplayData(this.index);
    }
}
