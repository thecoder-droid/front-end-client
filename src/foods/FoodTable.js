import React from "react";
// import styled from 'styled-components';
// import {makeStyles} from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import {Button, Card, Table} from 'reactstrap'
import APIURL from '../helpers/environment';


const FoodTable = (props) => {
  const deleteFood = (food) => {
    fetch(`${APIURL}/api/food/${food.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchFoods());
  };

  const foodMapper = () => {
    return props.foods.map((food, index) => {
      return (
        <tr key={index}>
          <Card>
          <td >{food.name}</td>
          <td>{food.image}</td>
          <td>{food.ingredients}</td>
          <td>{food.description}</td>
          <td>{food.recipe}</td>
          <td>
          <Button size="small" color="dark">Share</Button> 
            <Button
              color="warning"
              onClick={() => {
                props.editUpdateFood(food);
                props.updateOn();
              }}
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={() => {
                deleteFood(food);
              }}
            >
              Delete
            </Button>
          </td>
          </Card>
        </tr>
      );
    });
  };

  return (
    <>
      <h2>Food Posts From All Around</h2>
      <hr />
      <Table>
        <tbody>{foodMapper()}</tbody>
      </Table>
    </>
  );
};

export default FoodTable;
