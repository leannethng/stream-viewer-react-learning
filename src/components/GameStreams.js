import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Streams from './Streams';


function GameStreams({match, location}){
  const[streamData, setStreamData] = useState([]);
  const [viewers, setViewers] = useState(0);

useEffect(() =>{
  const fetchData = async () => {
    const result = await api.get(
      `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
    );
    let dataArray =  result.data.data;
    let finalArray = dataArray.map(stream => {
      let newURL = stream.thumbnail_url
      .replace('{width}', '440')
        .replace('{height}', '248');
        stream.thumbnail_url = newURL;
        return stream;
    });

    let totalViewers = finalArray.reduce((acc, val) => {
      return acc + val.viewer_count
    }, 0);

    setViewers(totalViewers);
    setStreamData(finalArray);
  };

  fetchData();
}, [location.state.gameID]);

  return(
  
      // {/* id is being called from the link name on App.js */}
      // {/* <li>{match.params.id}</li> */}
      // {/* igameID is being called from the state declared in the Games.js file */}
      // {/* <li>{location.state.gameID}</li> */}
      // {/* Checking the data is working */}
      // {/* <li>{viewers}</li> */}
      <div className="container">

        <h1 className="text-light display-4 font-weight-bold"> {match.params.id} Streams</h1>
        <h3 className="text-light  font-weight-bold"> {viewers} currently watching {match.params.id}</h3>
        <div className='card-group d-flex flex-wrap'>
           {/* {gameKeys}  */}
           {streamData.map(stream => (
            <div key={stream.id} className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-5">
              <div className="card bg-transparent border-0" >                  
              <a
                    className="card-link d-block text-truncate stream__thumbnail"
                    href={ "http://twitch.tv/" + stream.user_name}
                    target = "_blank"
                    
                  >
                <img className=" card-img-top" src={stream.thumbnail_url} />
                </a>
              
                <p className="card-subtitle text-light font-weight-bold d-block text-truncate mt-2">{stream.user_name}</p>
                <p className="card-text text-white-50">{stream.viewer_count} Live Viewers</p>
                      
              </div>
            </div>
          ))};
                
      </div>
    </div>
 
  );
}

export default GameStreams;