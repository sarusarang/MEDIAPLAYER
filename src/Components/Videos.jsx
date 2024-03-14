import React from 'react'
import Videocard from './Videocard'
import { getvideos } from '../Services/allApi'
import { useState,useEffect } from 'react'



function Videos({status}) {
  
  const [allvideos,setallvideo]=useState([])
  const [delvideos,setdelvideos]=useState({})

  useEffect(()=>{
    getdata()
  },[status,delvideos])



  const getdata = async ()=>{

    const res = await getvideos()
    setallvideo(res.data)
  }
  
  return (
    
    <>

    <div className='p-5 row '>
      
      {

        allvideos?

        allvideos.map(item=>(

          <Videocard video={item} setdelvideos={setdelvideos}/>


        ))

        :
        <h1>NO VIDEOS TO DISPLAY</h1>

      }


      


    </div>
    
    
    
    </>


  )
}

export default Videos