import React from 'react';
import movie from './assests/movie.png'
import './App.css';
import MovieRow from './MovieRow.js'

class App extends React.Component {
  constructor(props){
    super(props)
    
    const movie=[
      {
        id: "0",
        poster_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        title: "Avengers: Infinity War",
        overview: "The Avengers as an organization was emphasized in The Avengers. This film featured Iron Man, Captain America, Hulk and Thor being recruited by Avengers' founder Nick Fury to fight, alongside S.H.I.E.L.D. agents Black Widow and Hawkeye, the villain Loki, who leads an invasion of New York City with a Chitauri army."
      },
      {
        id: '1',
        poster_src: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
        title: 'The Avengers',
        overview: 'The second overview'
      }
    ]

    var movieRows=[];
    movie.forEach((movie)=>{
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie} />
      movieRows.push(movieRow)
    })

    this.state={rows: movieRows}
  }
  render(){
    return (
      <div className="App">
        <table style={{
          backgroundColor: '#000',
          display: 'block',
          color: '#fff', 
          fontSize: '30px', 
          paddingLeft: '16'
        }}>
          <tbody>
            <tr>
              <td><img src={movie} alt="movie" className="movie-icon" /></td>
              <td>
                <h3>READ YOUR MOVIE</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input placeholder="Enter search movie..." className="input-movie"/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
