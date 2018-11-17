import React from 'react';
import { ShotChart } from "./ShotChart";

export class Main extends React.Component {
  render() {
    return (
      <div>
        {/* playerId from mpn nba package - Vince Carter used for instance */}
        <ShotChart playerId={1713}/>
      </div>
    )
  }
}