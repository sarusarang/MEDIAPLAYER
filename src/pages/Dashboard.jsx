import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../Components/Addvideos'
import Videos from '../Components/Videos'
import Categories from '../Components/Categories'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Dashboard() {

  const [status,setstatus]=useState({})

  return (

    <>
<Link to={'/his'} style={{textDecoration:'none'}} >HISTORY</Link>
      
      <Row>

        <Col sm='1' md='1'>

          <Addvideos setstatus={setstatus}/>

        </Col>

        <Col sm='4' md='8'>
          
          <Videos status={status}/>


        </Col>

        <Col sm='2' md='3'>

          <Categories/>

        </Col>

      </Row>

      <ToastContainer/>



    </>


  )
}

export default Dashboard