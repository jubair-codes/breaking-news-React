import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './TopHeadlines.css';

const TopHeadlines = (props) => {
    console.log(props.article);
    const { title, description, urlToImage } = props.article;

    return (
        <Card>
            <Card.Img variant="top" src={urlToImage} className='article-image'/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default TopHeadlines;