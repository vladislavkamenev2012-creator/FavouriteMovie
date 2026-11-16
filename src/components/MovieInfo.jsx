import React from 'react';

class MovieInfo extends React.Component {
    render() {
        const { title, director, year, studio } = this.props;

        return (
            <div className="info">
            <h2>{title}</h2>
            <p><b>Режисер:</b> {director}</p>
            <p><b>Рік випуску:</b> {year}</p>
            <p><b>Кіностудія:</b> {studio}</p>
            </div>
        );
    }
}

export default MovieInfo;