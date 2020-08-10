import React from 'react';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
  return (
      <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow 
      image="https://i.ytimg.com/an_webp/ZHCWuNBZexs/mqdefault_6s.webp?du=3000&sqp=CJWTxPkF&rs=AOn4CLDfV34dL4bv4sn4x7ny8QsqpelMxA"
      channel="Starter Squad"
      verified
      subs="732K"
      noOfVideos={382}
      description="The starter Pokemon rebel against humanity and decide to evolve themselves."
      
      />




    </div>
  );
}

export default SearchPage;
