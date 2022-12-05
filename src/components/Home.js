import React from 'react'
import { useState,useEffect } from 'react'
import RestaurantCard from './RestaurantCard';
import {Row,Col} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { restaurantList } from '../actions/restAction';

function Home() {
 
  
  const dispatch = useDispatch()

 const result = useSelector(state=>state.restReducer)
 let {restaurants} = result
 console.log(restaurants)

  useEffect(()=>{
    // fetchData()
     dispatch(restaurantList())
 },[])

//  console.log(restaurantList)

return (
    <Row className='px-3'>

      {
        restaurants.map(restaurants=>(
          <Col className='py-3' sm={12} md={6} lg={4} xl={3}> 
          <RestaurantCard data={restaurants}/>
          </Col>
       
        ))
      }
    
    </Row>
  )
}

export default Home


// Redux - for reduce coupling... manage states
// Propse Drilling 
// store ...component



// api call inside the async
//  use effect hook - 2 arguments - callback fun & array

// javascript have only one call stack 
// API/Server call - it will come into the micro task queue
// callback function - (set time out) -it will come into the callback queue
// callback hell - waiting

// HttpClient - for making http methods


// props is an object...in object there is a key...in that key the object will be directly assign in a curley braces...that is destructuring