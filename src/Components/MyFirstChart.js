import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class MYFirstChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myChart: ""
        }
        
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    

    render() {
        const options = {
            title: {
                text: 'My chart'
            },
            series: [{
                data: [1, 2, 3, 3, 2, 1, 2, 20, 9, 6, 8, 3, 9, 1]
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

export default MYFirstChart;

