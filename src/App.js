import REact from 'react';
import movie from './assests/movie.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td><img src={movie} alt="movie" className="movie-icon" /></td>
            <td>Movie Application</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
