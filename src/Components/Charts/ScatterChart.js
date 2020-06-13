import React from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import {data} from './ScatterChartData';

HighchartsMore(ReactHighcharts.Highcharts)

class ScatterChart extends React.Component {
    constructor(props) {
        super(props);  
    }    

    render() {
        
        return (
            <div>
                <h1>Scatter Chart</h1>
                <ReactHighcharts
                    config={data}
                />  
                <HighchartsReact 
                highcharts={Highcharts}
                options={data}
                />  
            
            </div>)

    }
}

export default ScatterChart;

