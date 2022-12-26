import axios from 'axios';
import React, { useState } from 'react'
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import './SpecifiCountry.css'

export default function SpecifiCountry() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [country, setCountry] = useState();
    const [results, setResults] = useState([]);
    const fetchData = async () => {
        const URL = process.env.REACT_APP_PORT
   
        const data = await axios.get(`${URL}/totalCountryRecords/?from=${startDate.toISOString()}&to=${endDate.toISOString()}&country=${country}`)
        setResults(data.data);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        fetchData()
    };


    return (
        <>
            <div className="search-bar col-lg-8 mx-auto ">
                <h5>Get statistics for a Specifi country</h5>
                <form action="#" onSubmit={handleSearch}>
                    <div className="row  ">
                        <div className="form-group col-lg-4 d-flex justify-content-start">
                            <input
                                type="text"
                                name="search"
                                placeholder="Country?"
                                id="country"
                                onChange={(e) => {
                                    setCountry(e.target.value);
                                }}
                                required
                            />
                        </div>

                        <div className="form-group col-lg-3">
                            <input
                                type="date"
                                data-date-format="yyyy-mm-dd"
                                onChange={(e) => {
                                    setStartDate(new Date(e.target.value));
                                }}
                                required
                            />
                            <label>
                                <i className="fa fa-calendar"></i>
                            </label>
                        </div>
                        <div className="form-group col-lg-3">
                            <input
                                type="date"

                                onChange={(e) => {
                                    setEndDate(new Date(e.target.value));
                                }}
                                required
                            />
                            <label>
                                <i className="fa fa-calendar"></i>
                            </label>
                        </div>


                        <div className="form-group col-lg-2 d-flex justify-content-center">
                            <input type="submit" value="Search" className="submit " />
                        </div>
                    </div>
                </form>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-between mt-3">
                {results.map((record, idx) => (
                    <SearchResultCard key={idx} date={record.Date} cases={record.Cases} />
                ))}
            </div>
        </>
    );
}