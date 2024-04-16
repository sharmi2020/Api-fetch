// import React from 'react'
import './App.css';
import{useState,useEffect}from "react";

const App = () => {
const [fetch,setFetch]=useState([])
const[loading,setLoading]=useState(true);
const[error,setError]=useState(null);

const useEffect=(()=>{
     fetcher()
},[])

const fetcher= async()=>{
  try{
    let response = await fetch('https://api.example.com/data');
    if(!response.ok){
      throw new Error("response was not ok");
    }
    const data=await response.json();
    setFetch(data);
    setLoading(false)
  }catch(e){
    setError(e.message);
    setLoading(false);
  }
}

  return (
    <div>
    {loading?(
    <p>Loading....</p>
    ):error?(
      <p>Error:{error}</p>
    ):(
      <ul>
        {fetch.map((item)=>{
          <li key={item.id}>{item.name}</li>
        })}
      </ul>
    )
    }
</div>
  )
}

export default App