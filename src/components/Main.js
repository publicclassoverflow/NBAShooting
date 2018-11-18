import React from 'react';
import nba from 'nba';
import { ShotChart } from "./ShotChart";
import { Profile } from "./Profile";

export class Main extends React.Component {
  state = {
    // playerId: nba.findPlayer('Vince Carter').playerId, // Vince Carter used for instance
    // playerId: nba.findPlayer('Kawhi Leonard').playerId, // Kawhi Leonard used for instance
    playerId: nba.findPlayer('Stephen Curry').playerId, // Steph used for instance
    playerInfo: {},
  }

  componentDidMount() {
    nba.stats.playerInfo({
      PlayerID: this.state.playerId
    }).then((info) => {
      const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
      console.log(playerInfo);
      this.setState({
        playerInfo: playerInfo,
      });
    });
  }

  render() {
    return (
      <div className="main">
        <Profile playerId={this.state.playerId} playerInfo={this.state.playerInfo}/>
        <ShotChart playerId={this.state.playerId}/>
      </div>
    );
  }
}
