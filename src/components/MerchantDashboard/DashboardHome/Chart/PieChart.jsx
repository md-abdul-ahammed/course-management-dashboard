import React from 'react';
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import {CanvasJSChart} from 'canvasjs-react-charts'

class PieChart extends React.Component {
	render() {
		const options = {
			animationEnabled: true,
    //   cornerRadius:'50px',
	
	  backgroundColor : 'transparent',
			title: {
				text: "Revenue",
				fontSize: 20,
				fontFamily: "DM Sans",
				fontWeight: "bold",
				horizontalAlign: "left",
			},
			subtitles: [{
				text: "Total Revenue",
				verticalAlign: "center",
				fontSize: 20,
				maxWidth: 100,
				dockInsidePlotArea: true,
				fontFamily: "DM Sans",
				fontWeight: "bold",
			}],
			data: [{
				type: "doughnut",
				// showInLegend: true,
        radius:'72%',
				indexLabel: "{name}: {y}",
				// yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Online", y: 5 , color: "#5B93FF" },
					{ name: "Offline", y: 31 , color: "#FF8F6B"},
					{ name: "Hybrid", y: 40 , color: "#FFD66B"},
					// { name: "Satisfied", y: 17 },
					// { name: "Neutral", y: 7 }
				]
			}]
		}
		return (
		<div className='pt-4 pl-4'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default PieChart;
