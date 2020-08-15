import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2020"
          views="3.2M Views"
          timestamp="3 days ago"
          channelImage="https://avatars0.githubusercontent.com/u/55864051?s=400&u=d17ca8209ac548d3d3033ddbe93f9741b7123263&v=4"
          channel="Shaqib Habib"
          image="https://i.ytimg.com/vi/J6rVaFzOEP8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC50RZg-h1YCrv-n8T8kNoUJH6BAg"
        />
        <VideoCard
          title="Every Pokemon Anime Series Ranked from Worst to Best"
          views="1M Views"
          timestamp="3 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj9IN5ckfM8Z7FJpAY5qwFN04yu3IJeOBWp7g=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Animated Ginger"
          image="https://i.ytimg.com/an_webp/cZpvCC6_RiU/mqdefault_6s_480x270.webp?du=3000&sqp=CIKS3vkF&rs=AOn4CLBalctTy3C80qtieL9AJ6MmAcyxAA"
        />

        <VideoCard
          title="🔴 How to Make Money Coding with REACT JS"
          views="22K Views"
          timestamp="Streamed 1 month ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Clever PRogrammer"
          image="https://i.ytimg.com/an_webp/n8NyJxy27uk/mqdefault_6s.webp?du=3000&sqp=CPO83vkF&rs=AOn4CLDTzD7C_rjcYoSlIuLvvzrXn4nl9w"
        />

        <VideoCard
          title="Data Analysis with Python: Part 1 of 5 (Live Course)"
          views="278 Views"
          timestamp="1 hour ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Animated Ginger"
          image="https://i.ytimg.com/vi/EsDFiZPljYo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDQqwdSEPTxEiaYxoFxQkAwaalaw"
        />

        <VideoCard
          title="lofi hip hop radio - beats to relax/study to"
          views="3.7M Views"
          timestamp="10 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj1ME7zG6pJG6689WU13fYHmafnUGK7IMeWIg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Streaming Cow"
          image="https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=CJDI3vkF-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQgUjKJIY__tDOcp1UZKkz5NqBNg"
        />

        <VideoCard
          title="Dragon Ball Super - Goku Black Saga / Future Trunks full saga"
          views="20.2M Views"
          timestamp="8 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ghx42IpK24SHjB994Lg5mJbVIdPC1q5upcaKg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Shaqib Habib"
          image="https://i.ytimg.com/an_webp/U_NtUA86xZ8/mqdefault_6s.webp?du=3000&sqp=CNiJ3vkF&rs=AOn4CLAa9NpodhNsk5PCXVM5N4p1Yx8VQw"
        />

        <VideoCard
          title="USPS: Last Week Tonight with John Oliver (HBO)"
          views="7.1M Views"
          timestamp="3 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gjz6io9RJjTqDd5jAj1ZB9vQIbkMtHZAy1p6Q=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="LastWeekTonight"
          image="https://i.ytimg.com/an_webp/IoL8g0W9gAQ/mqdefault_6s.webp?du=3000&sqp=CMTJ3vkF&rs=AOn4CLDwbdqrLNaPwdMBtf69LGTw6zMm-w"
        />

        <VideoCard
          title="Barry Allen Meets Justice League Flash (Ezra Miller) | Crisis on Infinite Earths Crossover"
          views="6M Views"
          timestamp="7 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GgXU-P7iSwZek51vN4YXqItLM49G7SPn2lPwg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Crisis Clips"
          image="https://i.ytimg.com/an_webp/wt26xI5fw2w/mqdefault_6s_480x270.webp?du=3000&sqp=CIi23vkF&rs=AOn4CLCfQP8kqq6HG13Aq4NSfo7bpYVjoA"
        />

        <VideoCard
          title="Trump Plainly Admits Plan to Limit Mail-In Voting | The Daily Social Distancing Show"
          views="492K Views"
          timestamp="1 day ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ghb_ywcHCQ4QOx0odAVd4gh0cQp1BzE54X5jg=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="They Daily Show with Trevor Noah"
          image="https://i.ytimg.com/an_webp/P-F83NMMmQg/mqdefault_6s.webp?du=3000&sqp=CNi43vkF&rs=AOn4CLAO9ApPG3H5CO_WkT9NTs-ku5BxLg"
        />

        <VideoCard
          title="Cricket Corruption | Patriot Act with Hasan Minhaj | Netflix"
          views="3.3M Views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj_kD_9yNI9KrmU5NYGdMfZuekjcdAg1MNGjw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Patriot Act"
          image="https://i.ytimg.com/an_webp/v5DWJv1hiwM/mqdefault_6s_480x270.webp?du=3000&sqp=CIrB3vkF&rs=AOn4CLDW3cXINQLSCy65Qs-1Y18e9vaggA"
        />

        <VideoCard
          title="Best Of Arijit Singh And Atif Aslam Songs 2019 | NEW HINDI ROMANTIC LOVE SONGS | Bollywood SonGS"
          views="31.2M Views"
          timestamp="23 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GiXm-7_-WONCtrCwkEj_DPzLbxI7l7YqriByA=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Best of Bollywood"
          image="https://i.ytimg.com/vi/JmU3og5n8pw/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBfjna35ETT2s4eeSXUNRE48ZM9Fg"
        />
        <VideoCard
          title="he saved my life"
          views="114K Views"
          timestamp="5 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Ggt5K1cZd9JJ67vlxWpAHbOKdioCAj1_QBTaQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Will Smith"
          image="https://i.ytimg.com/an_webp/Itr3jnGNNEo/mqdefault_6s.webp?du=3000&sqp=CLLP3vkF&rs=AOn4CLBwWA_fkfyUdjZljDGttuokaLTJ9w"
        />
        <VideoCard
          title="The One Piece Timeline"
          views="301.2M Views"
          timestamp="8 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gi1sPYoDbCYxqVZGwQzDTd5L5ZrZphEQG9JaQ=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="One Piece"
          image="https://i.ytimg.com/an_webp/tuFp3Iv1T4E/mqdefault_6s_480x270.webp?du=3000&sqp=CNWz3vkF&rs=AOn4CLA7Br61yzKacNnfsgdNFrYx7bSeog"
        />
        <VideoCard
          title="Kabira Full Song Yeh Jawaani Hai Deewani - Ranbir Kapoor, Deepika Padukone"
          views="2B Views"
          timestamp="7 years ago"
          channelImage="https://i.ytimg.com/an_webp/jHNNMj5bNQw/mqdefault_6s_480x270.webp?du=3000&sqp=CJzF3vkF&rs=AOn4CLDYApTdJYr4JUQBxMNtK6LTjbOriQ"
          channel="T Seriese"
          image="https://i.ytimg.com/an_webp/jHNNMj5bNQw/mqdefault_6s_480x270.webp?du=3000&sqp=CJzF3vkF&rs=AOn4CLDYApTdJYr4JUQBxMNtK6LTjbOriQ"
        />
        <VideoCard
          title="1 Hour Studio Ghibli Lofi Mix"
          views="354K Views"
          timestamp="11 days ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhJLQz9kDewIgQNDKe4N-LQcD-7sXgp5Oe0pw=s68-c-k-c0x00ffffff-no-rj-mo"
          channel="Studio Ghibli"
          image="https://i.ytimg.com/an_webp/LMTGQqUUyzk/mqdefault_6s_480x270.webp?du=3000&sqp=CI_E3vkF&rs=AOn4CLAceLrO0x9YEd7tbAcfGpMEFWXuLQ"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
