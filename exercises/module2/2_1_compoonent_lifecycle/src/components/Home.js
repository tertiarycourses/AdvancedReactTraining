import React, { Component } from 'react';
import Card from './Card';
import data from '../data/data.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }

  }

  componentWillMount() {
    this.setState({
      cards: data,
    });
  }
  render() { 
    return ( 
      <div className="Grid animated bounceInUp">
        {
          this.state.cards.map((card) => (
            <Card 
              card={card} 
            />
          ))
        }
      </div>
     )
  }
};
 
export default Home;
