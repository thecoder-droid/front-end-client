import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import APIURL from '../helpers/environment';


const FoodEdit = (props) => {
  const [editName, setEditName] = useState(props.foodToUpdate.name);
  const [editImage, setEditImage] = useState(props.foodToUpdate.image);
  const [editIng, setEditIng] = useState(props.foodToUpdate.ingredients);
  const [editDesc, setEditDesc] = useState(props.foodToUpdate.description);
  const [editRec, setEditRec] = useState(props.foodToUpdate.recipe);
  const foodUpdate = (event, food) => {
    event.preventDefault();
    fetch(`${APIURL}/api/food/${props.foodToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        food: {
          name: editName,
          image: editImage,
          ingredients: editIng,
          description: editDesc,
          recipe: editRec,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchFoods();
      props.updateOff();
    });
  };

  return (
    <Modal isOpen={props.updateActive}>
      <Button onClick={props.updateOff}>Close</Button>

      <ModalHeader className="edit-form-head">Edit Food Post</ModalHeader>
      <ModalBody className="edit-form">
        <Form onSubmit={foodUpdate} className="edit-form">
          <FormGroup>
            <Label htmlFor="name">Edit Name of Dish:</Label>
            <Input
              name="name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="image">Edit Image of Dish</Label>
            <Input 
            name="image"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ingredients">Edit Ingredients List:</Label>
            <Input
              name="ingredients"
              value={editIng}
              onChange={(e) => setEditIng(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Edit Short Description of Dish:</Label>
            <Input
              name="description"
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="recipe">Edit Recipe Link:</Label>
            <Input
              name="recipe"
              value={editRec}
              onChange={(e) => setEditRec(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Update the Food Post!</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default FoodEdit;
