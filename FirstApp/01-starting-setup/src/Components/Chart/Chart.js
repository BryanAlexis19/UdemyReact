import React from 'react'
import ChartBar from './ChartBar'
import "./Chart.css"

const Chart = (props) => {


    const values = props.dataPoints.map((expenses)=>{
        return expenses.value;
    })
    
    const totalMaximun = Math.max(...values);

    return (
        <div className="chart">
            { props.dataPoints.map((datapoint) =>            
            <ChartBar 
                key={datapoint.label}
                value={datapoint.value}
                maxValue={totalMaximun}
                label={datapoint.label}
            />
            )}
        </div>
    )
}

export default Chart
