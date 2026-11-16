import React from 'react';
import MovieCard from './components/MovieCard';
import './App.css';

class App extends React.Component {
  render() {
    const movie = {
      title: `Початок   (Inception)`,
      director: 'Крістофер Едвард Нолан',
      year: 2010,
      studio: `Warner Bros. Pictures`,
      poster: `/poster.jpg`,
    };

    return (
      <div className="App">
      <h1>Улюбленний кінофільм</h1>
      <MovieCard movie={movie} />
      </div>
    );
  }
}

export default App;