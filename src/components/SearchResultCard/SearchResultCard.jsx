import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './SearchResultCard.css'

export default function SearchResultCard(props) {
    return (
        <div>
            <Row  className="g-4">

                <Col>
                    <Card className='masterCard'>
                        <Card.Body>
                            <Card.Title style={{ color: 'red' }}>Date : {props.date}</Card.Title>
                            <Card.Text>
                              Number of Confirmed Cases :  {props.cases}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}
