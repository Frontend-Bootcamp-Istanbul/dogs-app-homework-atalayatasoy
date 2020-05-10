import React from 'react';
import dogs from "../dogsdata";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';




const Secilen = (props) => {
    const secilenId = props.match.params.id
    const image = dogs.find((e) => e.id === secilenId).image
    const name = dogs.find((e) => e.id === secilenId).name
    const description = dogs.find((e) => e.id === secilenId).description
    const breed = dogs.find((e) => e.id === secilenId).breed
    const age = dogs.find((e) => e.id === secilenId).age
    
    
    return (
        <div>
            

        <Card>
            <CardImg src={image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardTitle>{age} / {breed}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
            
         
            
        </div>
    )
}


export default Secilen