import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function Record() {
    const [allRecords, setAllRecords] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const URL = process.env.REACT_APP_PORT
            const data = await axios.get(`${URL}/record`)
            setAllRecords(data.data);
        }
        fetchData()
            .catch(console.error);
    }, [isDeleted])



    const handleDelete = async (record) => {
        const URL = process.env.REACT_APP_PORT
        const data = await axios.delete(`${URL}/record/${record.id}`)
        setIsDeleted(!isDeleted);
    };

    return (
        <>
            <section>
                <div className="d-flex flex-column mt-5">
                    <div className="row row-cols-1 row-cols-md-2  justify-content-between mt-5">
                        {allRecords.length > 0 ? allRecords?.map((record,idx) => (
                            <div key={idx}>
                                <Row className="g-4">
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title style={{ color: 'red' }}>{record.country}</Card.Title>
                                                <Card.Text>
                                                    {record.Date}
                                                </Card.Text>
                                                <Button onClick={() => handleDelete(record)} variant="primary">Delete</Button>

                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                            </div>
                        )) : <div className="mx-5 my-5">
                            <h5>
                                NO AVAILABLE RECORDS
                            </h5>
                        </div>}
                    </div>

                </div>
            </section>
        </>)
}
