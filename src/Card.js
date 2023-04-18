import React, {useEffect} from 'react'
import TinderCard from 'react-tinder-card'

function Card() {
    const [people, setPeople] = useState([{
        name: "Steve Jobs",
        url: ""
        },
        {
          name: "Mark Zuckerburg",
          url: ""
        }
    ])
  return (
    <div className="tinder-card"> 
        {people.map(person => {
            <TinderCard>
                <div 
                    className="card"
                    style={{ backgroundImage: `url(${person.url})`}}
                >
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
        })}
    </div>
  )
}

export default Card