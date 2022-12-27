import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SpecifiCountry from '../SpecifiCountry/SpecifiCountry';
import './Home.css'

export default function Home() {
  const [total, setTotal] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const URL = process.env.REACT_APP_PORT
      console.log(`${URL}/totalRecords`);
      const data = await axios.get(`${URL}/totalRecords`)
      setTotal(data.data);
    }

    fetchData()
      .catch(console.error);
  }, [])
  return (
    <div>
      <div className='container-1'>
        <h5>World total statistic</h5>
        <div className='box-1' >
          TotalConfirmed: {total.TotalConfirmed}
        </div>
        <div className='box-1'>
          TotalDeaths: {total.TotalDeaths}
        </div>
        <div className='box-1'>
          TotalRecovered: {total.TotalRecovered}
        </div>
      </div>
      <div>
        <SpecifiCountry />
      </div>
    </div>
  )
}
