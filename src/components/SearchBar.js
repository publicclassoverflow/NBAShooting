import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';


export class SearchBar extends React.Component {
  state = {
    dataSource: [],
  }

  onSelect = (value) => {
    console.log('onSelect', value);
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : nba.searchPlayers(value).map(
        ({fullName}) => fullName
      )
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        className="search-bar"
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        placeholder="Player Name"
      >
        <Input suffix={ <Icon type="search" /> } />
      </AutoComplete>
    );
  }
}