import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({data}) {
    console.log(data);
  return (
    <Link style={{textDecoration:'none', color:'white'}} to={`restaurant/${data.id}`}>
 <Card >
      <Card.Img variant="top" src={data.photograph} className="p-3" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          <p>Cuisine : {data.cuisine_type}</p>

         {/* {data.neighborhood} */}
         
         <p>Neighbourhood : {data.neighborhood}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestaurantCard