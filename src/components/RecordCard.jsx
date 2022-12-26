import axios from 'axios';
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'


export default function RecordCard(props) {

    const handleDelete = async (record) => {
        const URL = process.env.REACT_APP_PORT
        const data = await axios.delete(`${URL}/record/${props.record.id}`)
    };
    return (
        <div>
            <Row className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>{props.record.country}</Card.Title>
                            <Card.Text>
                                {props.record.date}
                            </Card.Text>
                            <Button onClick={handleDelete} variant="primary">Delete</Button>

                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}
