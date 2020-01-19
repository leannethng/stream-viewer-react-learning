import React, {useState, useEffect} from 'react';
import api from '../api';

function Streams(){
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const result = await api.get('https://api.twitch.tv/helix/streams');
      let dataArray = result.data.data;
      console.log(dataArray);
    }
    fetchData();

  },[]);
  return(
    <div> Stream Component</div>
  )
}

export default Streams;