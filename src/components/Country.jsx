import axios from "axios";
import { useEffect, useState } from "react";
// import "./Country.css";
// import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CountryCard from "./CountryCard";
import { Button, Card, ListGroup } from "react-bootstrap";

export default function Country() {
    const [allCountries, setAllCountries] = useState([]);

    const navigate = useNavigate();
    const handleAddRecord = async (record) => {
        const newRecord = {
            country: record.Country,
            totalConfirmedCases: record.TotalConfirmed,
            totalDeathsCases: record.TotalDeaths,
            totalRecoveredCases: record.TotalRecovered,
            Date: record.Date,
        }
        const URL = process.env.REACT_APP_PORT
        console.log(newRecord)

        axios.post(`${URL}/record`, newRecord)
            .then((data) => {
                console.log(data.data);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            const URL = process.env.REACT_APP_PORT
            const data = await axios.get(`${URL}/summary`)
            setAllCountries(data.data.Countries);
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <>
            <section>
                <div className="d-flex flex-column mt-5">
                    <h2 >Covid19 Statistics for All Countries </h2>
                    <div >
                        <div className="row h-25 mt-5">
                            {allCountries.map((record, idx) => (
                                <div key={idx} className="col-md-3 mt-3">
                                    <Card  style={{ width: '18rem', height: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title style={{ color: 'red' }}>  Country:{" "}{record.Country}  </Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item>Total Confirmed Cases: {record.TotalConfirmed}</ListGroup.Item>
                                                <ListGroup.Item>Deaths Cases: {record.TotalDeaths}</ListGroup.Item>
                                                <ListGroup.Item>Total Recovered Cases: {record.TotalRecovered}</ListGroup.Item>
                                            </ListGroup>
                                            <Button onClick={() => handleAddRecord(record)} variant="primary">ADD TO MY RECORDS </Button>

                                        </Card.Body>
                                    </Card>



                                    {/* 

                                    <div className="">
                                        <h2>
                                            Country:{" "}
                                            {record.Country}
                                        </h2>
                                        <ul className="">
                                            <li>Total Confirmed Cases: {record.TotalConfirmed}</li>
                                            <li>Total Deaths Cases: {record.TotalDeaths}</li>
                                            <li>Total Recovered Cases: {record.TotalRecovered}</li>

                                            <li>Date: {record.Date}</li>
                                        </ul>
                                        <div className="add-btn">
                                            <button
                                                id="delete-btn"
                                                // class="btn btn-primary btn-lg  "
                                                onClick={() => handleAddRecord(record)}
                                            >
                                                ADD TO MY RECORDS                                            </button>
                                        </div>
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}