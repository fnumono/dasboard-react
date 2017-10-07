import React, { Component } from 'react';
import BarChart from './BarChart';
import WorldMap from './WorldMap';

import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';


export default class App extends Component {



  render() {
  	charts(FusionCharts)

  	var salesChartConfigs = {
    width: "1000",
    height: "400",
    type: "column2d",
	dataSource: {
		chart: {
	        caption: "Harry's SuperMart",
	        subCaption: "Top 5 stores in last month by revenue",
	        numberPrefix: "$",
	        theme: "fint"
	    },
	    data: [{
	        label: "Bakersfield Central",
	        value: "880000"
	    }, {
	        label: "Garden Groove harbour",
	        value: "730000"
	    }, {
	        label: "Los Angeles Topanga",
	        value: "590000"
	    }, {
	        label: "Compton-Rancho Dom",
	        value: "520000"
	    }, {
	        label: "Daly City Serramonte",
	        value: "330000"
	    }]
	}
};



    return (
    	<div>
      <div>React simple starter</div>
      <div>
      <ReactFC {...salesChartConfigs} />
 
      <BarChart data={[5,10,1,3]} size={[500,500]} />
      <WorldMap/>
      </div>

      </div>
    );
  }
}
