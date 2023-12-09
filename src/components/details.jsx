import { useState,useEffect,useContext } from 'react'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';


function Details(props) {

  const initialState = {
    avatar:'',
    details:{
        city:'',
        company:'',
        position:''
    },
    id:'',
    name:''
  }
 
  const [data, setData] = useState(initialState);

  useEffect(() => {
    var url='https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'+props.info.id+'.json'
    console.log(url)
    axios.get(url)
    .then(function (response) {
      console.log(response)
      return response.data 
    })
    .then(data => setData(data))
    .catch(function (error) {
      console.log(error);
    })

  }, [props.info.id]) 


  return( 
    <>

      <div className="card position-absolute top-0 start-50" style={{ width: '28rem' }}>
        <img src={data.avatar} className="card-img-top" alt=""></img>
        <div className="card-body">
          <p className="card-text">{data.name}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{data.details.city}</li>
          <li className="list-group-item">{data.details.company}</li>
          <li className="list-group-item">{data.details.position}</li>
        </ul>

      </div>
     </>
  )
}

export default Details
