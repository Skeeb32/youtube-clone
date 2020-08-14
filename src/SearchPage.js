import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
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

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Pokemon Journeys has the entire Pokemon fandom excited and with good reason! It’s a show that values its long history and the fans who have kept the dream of Ash Ketchum alive for so long. Now that the new Netflix series has fans interested in Ash again, they face an impossible problem. How do you get caught up on a show that has been running for over twenty years and has twenty canonical movies?

      Well don’t worry because we have got you covered! We have Ash’s entire wild ride through the Pokemon world right here for you in one condensed video. Watch as we recap some of the best moments from the original anime and early movies. Of course, some of the best pokemon as well!
      
      Then we’ll move on to popular sequel seasons like Pokemon: Ruby and Sapphire, Pokemon: X and Y, Pokemon: Sun and Moon, and ultimately Pokemon Journeys. Meet all of Ash’s friends ranging from Misty and Brock to May and Max and more! If you thought his rivalry with Gary was bad, just wait until you find out about Paul!
      
      Also find out about how Ash went from a beleaguered competitor who constantly lost every conference he competed in, to a champion at last! Not to mention trying to keep up with just how many times that ten year old kid has saved the world. 
      
      So let’s not waste any time! Here are all the best moments from Ash’s incredible journey from the original Pokemon to Pokemon Journeys!"
        timestamp="59 seconds ago"
        channel="Pokémon"
        title="Pokémon: Ash’s Ketchum Adventure from Season 1 to Journeys"
        image="https://i.ytimg.com/an_webp/QznqmX0PIVY/mqdefault_6s.webp?du=3000&sqp=CMKNxPkF&rs=AOn4CLDAWgEaTw0dXUwWategucSGo4IM2w"
      />
    </div>
  );
}

export default SearchPage;
