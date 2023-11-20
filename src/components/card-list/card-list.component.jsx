/*import React, { Component } from 'react';
import './card-list.styles.css';
import Card from '../cards/card.component';

class CardList extends Component {
  render() {


     const {filteredMonsters}=this.props;
 

    return (
      <div className='card-list'>
        {
        filteredMonsters.map((monster) => { 
          return (
           <Card monsters={monster}/>
          );
        })}
      </div>
    );
  }
}

export default CardList;*/


import './card-list.styles.css';
import Card from '../cards/card.component';

const CardList=({monsters})=> {
       return (
      <div className='card-list'>
        {monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    )
    
  }


export default CardList;

          

        
