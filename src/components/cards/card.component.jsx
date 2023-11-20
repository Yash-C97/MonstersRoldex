/*import React, {Component} from "react";
import './card.style.css'
class Card extends Component{
    render(){
        const { id, name, email } = this.props.monster;
        return(
            <div className='cards-container' key={id}>
            <img alt={`monster: ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <p>{email}</p>
            <h1>{name}</h1>
          </div>
        )
    }
}

export default Card;*/

import React, { Component } from "react";
import './card.style.css';

class Card extends Component {
  render() {
    // Destructuring with a default value in case this.props.monster is undefined
    const { id = '', name = '', email = '' } = this.props.monster || {};

    return (
      <div className='cards-container' key={id}>
        <img alt={`monster: ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <p>{email}</p>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Card;
