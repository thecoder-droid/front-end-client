import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import FoodCreate from './FoodCreate';
import FoodTable from './FoodTable';
import FoodEdit from './FoodEdit';

const FoodIndex = (props) => {
    const [foods, setFoods] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [updateActiveCreate, setUpdateActiveCreate] = useState(false);
    const [foodToUpdate, setFoodToUpdate] = useState({});

    const fetchFoods = () => {
        fetch('http://localhost:3000/api/food/', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((logData) => {
            setFoods(logData)
        })
    }

    const editUpdateFood =(food) => {
        setFoodToUpdate(food);
        console.log(food);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    const createOn = () => {
        setUpdateActiveCreate(true);
    }

    const createOff = () => {
        setUpdateActiveCreate(false);
    } 

    useEffect(() => {
        fetchFoods();
    }, [])

    return ( 
       <Container>
               <Row md="7">
               <Col md="12">
                <FoodCreate createOn={createOn} createOff={createOff} token={props.token} fetchFoods={fetchFoods} updateActiveCreate={updateActiveCreate}/> 
                </Col>
                </Row>
                <br/>
           <Row>
               <Col md="12">
                    <FoodTable foods={foods} editUpdateFood={editUpdateFood} updateOn={updateOn} updateOff={updateOff} fetchFoods={fetchFoods} token={props.token}/>
               </Col>
               <Col md="5">
               <FoodEdit foodToUpdate={foodToUpdate} updateOn={updateOn} updateOff={updateOff} token={props.token} fetchFoods={fetchFoods} updateActive={updateActive}/>
               </Col>
           </Row>
       </Container>
     );
}
 
export default FoodIndex;