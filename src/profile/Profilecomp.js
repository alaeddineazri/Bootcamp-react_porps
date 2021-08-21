import {Card ,Button } from "react-bootstrap";
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import propTypes from "prop-types";



const Profilecomp = (props) => {
    return (
        <div>

            <Card style={{ backgroundColor: 'lightblue',width: 900 }}>
            <Card.Img  src= {props.img} style={{  width: 300  }} />
            <Card.Body>
            <Card.Title  style={{ fontSize: "50px", color: "red", fontFamily: "Roboto" }}>{props.fullName}</Card.Title>
            <Card.Text  style={{ fontSize: "30px", fontFamily: "Roboto" }}>
            {props.profession}
            </Card.Text>
            <Card.Text  style={{ fontSize: "30px",  fontFamily: "Roboto" }} >
            {props.bio}
            </Card.Text>
    <Button onClick={(e) =>props.onHandleName(e, "Hello " + props.fullName + "!") ? 
                        props.onHandleName(e, "Hello " + props.fullName + "!")
                : (e) => props.onHandleName(e, "Hello ghost")
            }variant="danger">Hi click me </Button>
            </Card.Body>
</Card>
        </div>
    )
}
Profilecomp.defaultProps = {
    fullName: "ghost",
    bio: "wooooooow",
    profession: "killer",
  };
  Profilecomp.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    onHandleName: propTypes.func
  };
export default Profilecomp;
