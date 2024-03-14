import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {


  return (

    <>

      <div>


        <Navbar className="bg-body-tertiary bg">

          <Container>

            <Navbar.Brand href="#home" className='text-white'>
             
            <i className="fa-solid fa-compact-disc fa-spin" style={{color:'#fcfcfc'}}></i>

              {' '}
            MEDIA PLAYER
            </Navbar.Brand>

          </Container>


        </Navbar>



      </div>


    </>


  )


}

export default Header