import React, { useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import db from './fb';
import './TinderCards.css'

function Card() {
    const [people, setPeople] = useState([])

    useEffect(() => {
      db.collection('people').onSnapshot(snapshot => {
        const p = snapshot.docs.map(doc => doc.data());
        setPeople(p);
        console.log(p)
      });
    }, []);

  return (
    <div className="card-container"> 
        <h4>Tinder Cards</h4>
        {/* {tCard} */}
        <div className="tinderCards__cardContainer">
          {people.map(person => {
            return  <TinderCard
                    className="swipe"
                    key= {person.name}
                    preventSwipe={['up', 'down']}
                  >
                  <div 
                      style={{ backgroundImage: `url(${person.url})`}}
                      className="card"
                  >
                  <h3>{person.name}</h3>
                  {console.log(person.name)}
                  </div>
              </TinderCard>
          })}
        </div>
    </div>
  )
}

export default Card