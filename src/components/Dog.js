import React from 'react';
import FavoriteActions from "./FavoriteActions";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Dog = ({id, name, toggle, getStatus}) => {
    return <Card>
     <li key={id} style={{
        margin: "15px"
    }}>
                            <span style={{
                                display: "inline-block",
                                marginRight: "15px"
                            }}>
                                <Link to={`/details/${id}`}>{name}</Link>
                            </span>
        <FavoriteActions toggle={toggle} id={id} getStatus={getStatus}/>
    </li>
    </Card>                        
};

Dog.propTypes ={
    id: PropTypes.number,
    name: PropTypes.string,
    toggle: PropTypes.bool,
    getStatus: PropTypes.object,
}

Dog.defaultProps = {
    id: 16737,
    name: "Nanny",
    toggle: true,
    getStatus: {
        "name": "Nanny",
        "description": "Nanny - Nanny is getting on up in age, but she is still sweet and very affectionate. She is at...",
        "image": "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46650756/1/?bust=1574401486&width=600",
        "age": "Senior",
        "published_at": "2019-11-22T05:34:42+0000",
        "breed": "Golden Retriever",
        "id": "16737"
    }
}

export default Dog;