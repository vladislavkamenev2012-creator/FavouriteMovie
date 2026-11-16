import React from 'react';
import MovieInfo from './MovieInfo';

class MovieCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { likes: 0 };
    }

    componentDidMount() {
        console.log(`MovieCard: компонент змонтовано`)
    }

    componentDidUpdate() {
    console.log('MovieCard: компонент оновлено, лайків:', this.state.likes);
    }

    componentWillUnmount() {
        console.log('MovieCard: компонент видалено');
    }

    handleLike = () => {
        this.setState((prev) => ({ likes: prev.likes + 1 }));
    };

    render() {
    const { movie } = this.props;

    return (
        <div className="card">
            <img className="poster" src={movie.poster} alt={movie.title} />
            <div className="card-body">
            <MovieInfo
                title={movie.title}
                director={movie.director}
                year={movie.year}
                studio={movie.studio}
            />
            <button className="like-btn" onClick={this.handleLike}>
                👍 Подобається: {this.state.likes}
            </button>
            </div>
        </div>
        );
    } 
}

export default MovieCard;