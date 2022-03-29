import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";


class Movies extends Component {
    state = {
        movies: getMovies(),
      };
    
      handleDelete = (movie) => {
        let id = movie._id;
        let { movies } = this.state;
        let newMovies = movies.filter((movie) => movie._id !== id);
        console.log(newMovies);
        this.setState({ movies: newMovies });
      };
    
    render() { 
        const { movies } = this.state;
        return (  <div>
            <h1>
              {movies.length !== 0
                ? `Showing ${movies.length} movies in the database`
                : "There are no movies in the database"}
            </h1>
            {movies.length !== 0 && (
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>stock</th>
                    <th>rate</th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((movie) => (
                    <tr key={movie._id}>
                      <td>{movie.title}</td>
                      <td>{movie.genre.name}</td>
                      <td>{movie.numberInStock}</td>
                      <td>{movie.dailyRentalRate}</td>
                      <td>
                        <button onClick={() => this.handleDelete(movie)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>);
    }
}
 
export default Movies;