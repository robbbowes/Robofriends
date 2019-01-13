import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { id, name, email } = this.props;
        return (
            <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow tc'>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        )
    }
}

export default Card;