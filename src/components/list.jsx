import { useState,useEffect } from 'react'
import axios from 'axios'
import Details from './Details'
import 'bootstrap/dist/css/bootstrap.min.css';


//API на axios

function List(){
  
  const [data, setData] = useState();
  const [info, setInfo] = useState({id:'0',name:''});

  useEffect(() => {
    var url="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    axios.get(url)
      .then(function (response) {
        return response.data 
      })
      .then(data => setData(data))
      .catch(function (error) {
        console.log(error);
      })
  
    }, []) 
    
    function handleClick(e) {
      e.preventDefault();
      setInfo({id:e.currentTarget.id,name:e.currentTarget.value})
    }
  
    console.log('info',info)

  return (
      <> 
       {info.id=== '0'?false: <Details info={info}/>}
       <div className="list-group" style={{ width: '18rem' }}>    
          {data?.map((elem)=>
            <button id={elem.id}  value={elem.name} onClick={handleClick} key={elem.id} className="list-group-item list-group-item-action">
              {elem.name}
            </button>
          )}       
        </div> 
      </>
    )
}

export  default List

