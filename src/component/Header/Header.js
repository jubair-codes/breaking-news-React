import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
                <Container>
                    <h1>Welcome to Our Website</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Container>
        </div>
    );
};

export default Header;