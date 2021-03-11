import React from 'react';
import movie from './assests/movie.png'
import './App.css';

function App() {
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
              <h3>Movie Search</h3>
            </td>
          </tr>
        </tbody>
      </table>

      <input placeholder="Enter search movie..." className="input-movie"
            />
    </div>
  );
}

export default App;
