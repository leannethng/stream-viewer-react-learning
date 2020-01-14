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
        .replace('{width}', '300')
        .replace('{height}', '300');
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
    <div>
      <h1>Most Popular Games</h1>
        <div className='card-group d-flex flex-wrap  '>
           {/* {gameKeys}  */}
           {games.map(game => (
            <div key={game.id} className=" col-lg-4 col-md-4 col-md-1 col-sm-6 mt-5 ">
              <div className="card text-center">
                <img className="card-img-top" src={game.box_art_url} />
                <div className="card-body">
                  <h5 className="card-title">{game.name}</h5>
                
                </div>
                <div className="card-footer">
                    <button className="btn btn-success">
                      {/* Creating dynamic link */}
                      <Link
                        className="link"
                        to={{
                          pathname: "game/" + game.name,
                          state: {
                            gameID: game.id
                          }
                        }}
                      >
                        {game.name} streams{" "}
                      </Link>
                    </button>
                  </div>
              </div>
            </div>
          ))};
                
      </div>
    </div>
     
  );
 
}

export default Games;