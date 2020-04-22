import React from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import HighchartsReact from 'highcharts-react-official';

HighchartsMore(ReactHighcharts.Highcharts)

class PolarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myChart: ""
        }        
    }    

    render() {
        const options = {
            chart: {
                polar: true
            },
        
            title: {
                text: 'Highcharts Polar Chart'
            },
        
            subtitle: {
                text: 'Also known as Radar Chart'
            },
        
            pane: {
                startAngle: 0,
                endAngle: 360
            },
        
            xAxis: {
                tickInterval: 45,
                min: 0,
                max: 360,
                labels: {
                    format: '{value}°'
                }
            },
        
            yAxis: {
                min: 0
            },
        
            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },
        
            series: [{
                type: 'column',
                name: 'Column',
                data: [8, 7, 6, 5, 4, 3, 2, 1],
                pointPlacement: 'between'
            }, {
                type: 'line',
                name: 'Line',
                data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                type: 'area',
                name: 'Area',
                data: [1, 8, 2, 7, 3, 6, 4, 5]
            }]
        }

        const config = {
             chart: {
            polar: true
          },
          xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }]
        }

        const config1 = {
            chart: {
                polar: true
            },
        
            title: {
                text: 'Highcharts Polar Chart'
            },
        
            subtitle: {
                text: 'Also known as Radar Chart'
            },
        
            pane: {
                startAngle: 0,
                endAngle: 360
            },
        
            xAxis: {
                tickInterval: 45,
                min: 0,
                max: 360,
                labels: {
                    format: '{value}°'
                }
            },
        
            yAxis: {
                min: 0
            },
        
            plotOptions: {
                series: {
                    pointStart: 0,
                    pointInterval: 45
                },
                column: {
                    pointPadding: 0,
                    groupPadding: 0
                }
            },
        
            series: [{
                type: 'column',
                name: 'Column',
                data: [8, 7, 6, 5, 4, 3, 2, 1],
                pointPlacement: 'between'
            }, {
                type: 'line',
                name: 'Line',
                data: [1, 2, 3, 4, 5, 6, 7, 8]
            }, {
                type: 'area',
                name: 'Area',
                data: [1, 8, 2, 7, 3, 6, 4, 5]
            }]
        }
        return (
            <div>
                <ReactHighcharts
                    config={config}
                /> 
                <ReactHighcharts
                    config={config1}
                />  
                <HighchartsReact 
                highcharts={Highcharts}
                options={options}
                />  
            
            </div>)

    }
}

export default PolarChart;

