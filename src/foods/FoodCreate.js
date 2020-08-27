import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import APIURL from '../helpers/environment';


const FoodCreate = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.token);

    fetch(`${APIURL}/api/food/`, {
      method: "POST",
      body: JSON.stringify({
        food: {
          name: name,
          image: image,
          ingredients: ingredients,
          description: description,
          recipe: recipe,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setName("");
        setImage("");
        setIngredients("");
        setDescription("");
        setRecipe("");
        props.fetchFoods();
        props.createOff();
      });
  };

  return (
    <>
      <Button onClick={props.createOn} color="warning">Make a Food Post</Button>
      <Modal isOpen={props.updateActiveCreate}>
        <Button onClick={props.createOff}>Close</Button>
        <ModalHeader className="create-form-head">Make a Food Post</ModalHeader>
        <ModalBody className="create-form">
          <Form onSubmit={handleSubmit} className="create-form">
            <FormGroup>
              <Label htmlFor="name">Name of Dish</Label>
              <Input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="image">Image of Dish</Label>
              <Input
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="ingredients">Ingredients List</Label>
              <Input
                name="ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="description">Short Description of Dish</Label>
              <Input
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="recipe">Link to Recipe</Label>
              <Input
                name="recipe"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
              />
            </FormGroup>
            <Button type="submit">Click to Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default FoodCreate;
