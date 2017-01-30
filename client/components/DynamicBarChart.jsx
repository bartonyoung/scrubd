import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react';
import Player from '@vimeo/player';

// for displaying count of comments at intervals

// note: should also move BarDatum and data transform logic out of component file

class DynamicBarChart extends React.Component {


  render() {
    const dbData = this.props.comments;
    console.log("comments: " + this.props.comments);
    console.log("duration: " + this.props.duration);
    const numInc = 40;
    var videoLength = this.props.duration;
    var incrementLength = videoLength / numInc;
    const barData = [];

    class BarDatum {
      constructor(timeName, timeLower, timeUpper) {
        this.timeName = timeName; // not as important
        this.timeLower = timeLower;
        this.timeUpper = timeUpper;
        this.count = 0;
      }
    }
    // create array of time increments
    for (var i = 0; i < numInc; i++) {
      const barDatumCopy = new BarDatum(Math.round(i * (incrementLength) + (incrementLength)), (i * (incrementLength)), i * (incrementLength) + (incrementLength));
      barData.push(barDatumCopy);
    }

    // loop through array of dbData
    for (var i = 0; i < dbData.length; i++) {
      const BarDatumIndex = Math.floor(dbData[i].time_stamp / incrementLength);
      if (barData[BarDatumIndex]) {
        barData[BarDatumIndex].count += 1;
      }
    }


    return (
      <div>
        {console.log("duration === " + this.props.duration)}
        <BarChart
          width={600} height={80} data={barData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="timeName" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8">
            {
            barData.map((entry, index) => (
              <Cell cursor="pointer" fill={'#721111'} key={`cell-${index}`} />
            ))
          }
          </Bar>
        </BarChart>

      </div>
    );
  }
}

export default DynamicBarChart;
