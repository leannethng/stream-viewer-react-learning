import React, {useState, useEffect} from 'react';
import api from '../api';

function Streams(){
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const result = await api.get('https://api.twitch.tv/helix/streams');
      let dataArray = result.data.data;
      console.log(dataArray);
      
      let gameIDs = dataArray.map(streams => {
        return streams.game_id;
      });
      console.log(gameIDs);
      let baseURL = 'https://api.twitch.tv/helix/games?'
      let queryParams = "";
      gameIDs.map(id => {
        return(queryParams = queryParams + `id=${id}&`)

      });
      let finalURL = baseURL + queryParams;
      console.log(finalURL);
      let gameNames = await api.get(finalURL);
      let gameNameArray = gameNames.data.data;

      let finalArray = dataArray.map(stream => {
        stream.gameName = '';
        gameNameArray.map(name => {
          if(stream.game_id === name.id){
            return stream.gameName = name.name 
          }
        });
        let newURL = stream.thumbnail_url
        .replace('{width}', '440')
        .replace('{height}', '248');
        stream.thumbnail_url = newURL;
        return stream
      });
      setChannels(finalArray);
    };
    
    fetchData();

  },[]);
  return(
    <div className="container">

      <h1 className="text-light display-4 font-weight-bold"> Most Popular Live Streams</h1>
    
      <div className='card-group d-flex flex-wrap'>
        {/* {gameKeys}  */}
        {channels.map(channel => (
          <div key={channel.id} className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-5">
            <div className="card bg-transparent border-0" >                  
              <a
                className="card-link d-block text-truncate stream__thumbnail"
                href={ "http://twitch.tv/" + channel.user_name}
                target = "_blank"
                      
                    >
                <img className=" card-img-top" src={channel.thumbnail_url} />
              </a>
              <p className="card-subtitle text-light font-weight-bold d-block text-truncate mt-2">{channel.user_name}</p>
        <p className="card-text text-light">{channel.gameName}</p>
        <p className='text-white-50'>{channel.viewer_count} Live Viewers</p>
                    
            </div>
          </div>
        ))};
              

      
      </div>
    </div>
  );
}

export default Streams;