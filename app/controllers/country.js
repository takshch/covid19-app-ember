import Controller from '@ember/controller';

export default class CountryController extends Controller {
	get dataGenerator(){
		let confirmedData = this.model.countryArray.map((dataObject,index) => {
			return {x: new Date(dataObject.Date), y: dataObject.Confirmed };
		});
		let deathData = this.model.countryArray.map((dataObject,index) => {
			return {x: new Date(dataObject.Date), y: dataObject.Deaths };
		});
		let activeData = this.model.countryArray.map((dataObject,index) => {
			return {x: new Date(dataObject.Date), y: dataObject.Active };
		});
		let recoveredData = this.model.countryArray.map((dataObject,index) => {
			return {x: new Date(dataObject.Date), y: dataObject.Recovered };
		});
		console.log(activeData);

		let data = {
			datasets: 
			[
				{	
		            label: 'Confirmed', // Name the series
		            data:confirmedData, // Specify the data values array
		            fill: false,
		            borderColor: '#FE9500', // Add custom color border (Line)
		            backgroundColor: '#FE9500', // Add custom color background (Points and Fill)
		            // borderWidth: 1 // Specify bar border width
		        },
	            {
		            label: 'Deaths', // Name the series
		            data: deathData, // Specify the data values array
		            fill: false,
		            borderColor: '#BF0204', // Add custom color border (Line)
		            backgroundColor: '#BF0204', // Add custom color background (Points and Fill)
		            // borderWidth: 1 // Specify bar border width
		        },
		        {
		            label: 'Active', // Name the series
		            data: activeData, // Specify the data values array
		            fill: false,
		            borderColor: '#EB0306', // Add custom color border (Line)
		            backgroundColor: '#EB0306', // Add custom color background (Points and Fill)
		            // borderWidth: 1 // Specify bar border width
		        },
		        {
		            label: 'Recovered', // Name the series
		            data: recoveredData, // Specify the data values array
		            fill: false,
		            borderColor: '#82CA20', // Add custom color border (Line)
		            backgroundColor: '#82CA20', // Add custom color background (Points and Fill)
		            // borderWidth: 1 // Specify bar border width
		        }
	        ],
		};
		return data;
	}

	get optionsObject(){
		return {
			responsive: true,
	  		maintainAspectRatio: false,
			scales: {
	            xAxes: [
	            	{
		                type: 'time',
		                time: {
		                    unit: 'day'
		                },
			            distribution: 'series',
			        }
	            ],
	        },
	        legend: {
	            labels: {
	                fontColor: 'black',
					fontSize: 16,
					fontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					padding: 9,
					lineHeight: 1.5,
					labelString: 'Covid19 Records of US',
					display: true,
	            }
	        }	
		};
	}

}


