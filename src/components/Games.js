import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function Games(){
  const [games, setGames] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
     
      const result = await api.get('https://api.twitch.tv/helix/games/top');
      // console.log(result.data.data);
      let dataArray = result.data.data
      // return dataArray
      let finalArray = dataArray.map((game) => {
        let newURL = game.box_art_url
        .replace('{width}', '285')
        .replace('{height}', '380');
        game.box_art_url = newURL;
        
        return game;
      });
  
      setGames(finalArray);
      
    };
    fetchData();
    console.log()
  }, []);




    console.log(games)
  
  // const gameKeys = 

  return (
    <div className="container">
      <h1 className="text-light display-4 font-weight-bold">Top Games</h1>
        <div className='card-group d-flex flex-wrap'>
           {/* {gameKeys}  */}
           {games.map(game => (
            <div key={game.id} className=" col-xl-2 col-lg-3 col-md-4  col-sm-6 mt-5">
              <div className="card bg-transparent border-0" >
                
                  <Link
                    className="card-link d-block text-truncate stream__thumbnail"
                    to={{
                      pathname: "game/" + game.name,
                      state: {
                        gameID: game.id
                      }
                    }}
                  >
                    <img className=" card-img-top " src={game.box_art_url} />
                  </Link>
                
                
                 
                      {/* Creating dynamic link */}
                      <p
                        className="card-text text-light font-weight-bold d-block text-truncate mt-2"
                        to={{
                          pathname: "game/" + game.name,
                          state: {
                            gameID: game.id
                          }
                        }}
                      >
                        {game.name} streams{" "}
                      </p>
              </div>
            </div>
          ))};
                
      </div>
    </div>
     
  );
 
}

export default Games;