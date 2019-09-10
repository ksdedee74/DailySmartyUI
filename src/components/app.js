import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from "./search-bar"; 
import RecentPost from "./recentPosts";


export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Logo/>
          <SearchBar/>
          <RecentPost/>
        </div>
      </div>
    );
  }
}
