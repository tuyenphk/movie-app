import React, { Component } from 'react'
import './App.css'

class MovieRow extends Component {
    viewMovie(){
        console.log("try to view movie")
        const url = "https://themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return (
            <table key={this.props.movie.id} className="table-movie">
                <tbody>
                <tr>
                    <td><img alt="poster" width="100" src={this.props.movie.poster_src} /></td>
                    <td>
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                        <input type="button" onClick={this.viewMovie.bind(this)} value="View" className="button-view" />
                    </td>
                    &nbsp;
                </tr>
                </tbody>
            </table>
        )
    }
}

export default MovieRow;
