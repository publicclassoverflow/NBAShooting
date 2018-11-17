import React from 'react';
import { ShotChart } from "./ShotChart";
import { Profile } from "./Profile";

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Profile/>
        {/* playerId from mpn nba package - Vince Carter used for instance */}
        <ShotChart playerId={1713}/>
      </div>
    )
  }
}
