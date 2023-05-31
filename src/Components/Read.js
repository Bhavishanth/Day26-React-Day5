import React, { useEffect, useState } from 'react';
import { API_URL } from '../constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Read.css'

function Read() {

    const [apiData, setAPIData] = useState([]);
    const navigate = useNavigate();

    const deleteFun = async (id)=> {
      await axios.delete(API_URL + id);
      callGetAPI();

  }

  const updateFun = ({ firstname, age, id })=> 
  {
      localStorage.setItem('id', id)
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('age', age)
      
      navigate('/Update')

  }

    const callGetAPI = async () => {

      const resp = await axios.get(API_URL);
      setAPIData(resp.data);
      

    }

    useEffect( ()=> {

      callGetAPI();

    },[])

  return (
    <div class = "bodyclass">
      <table class = "tableread">
        <thead>
          <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Delete</th>
          <th>Update</th>
          </tr>
          </thead>
          <tbody>
          {
            apiData.map( data => (
              <tr key={data.id}>
          <td>{data.firstname}</td>
          <td>{data.age}</td>
          <td><button type="button" onClick={ ()=>

    deleteFun(data.id)}>Delete</button></td>
    <td><button type="button" onClick={ ()=>
        updateFun(data)}>Update</button></td>
          </tr>
             ) )
          }
          </tbody>
      </table>
    </div>
  )
}

export default Read