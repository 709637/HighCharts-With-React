import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class BarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myChart: ""
        }        
    }    

    render() {
        const options = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
             }]
        }
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                />            </div>)

    }
}

export default BarChart;

