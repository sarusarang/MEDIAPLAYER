import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {


  return (


    <>

      <div className='w-100 d-flex flex-column justify-content-center bg-footer'>

        <div className='d-flex justify-content-around p-3'>


          <div className='col p-5'>

            <h4>Media player 2024</h4>

            <p style={{textAlign:'justify'}}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>


          </div>

          <div className='col p-5'>

            <h4>Links</h4>
            <Link to={'/'} style={{color:'green',textDecoration:'none'}}>Landing</Link> <br />
            <Link to={'/dash'} style={{color:'green',textDecoration:'none'}}>Dashboard</Link> <br />
            <Link to={'/his'} style={{color:'green',textDecoration:'none'}}>History</Link>


          </div>


          <div className='col p-5'>

            <h4>Reference</h4>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target='_blank' style={{color:'green',textDecoration:'none'}}>Bootstrap</a> <br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'green',textDecoration:'none'}}>React-Bootstrap</a> <br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'green',textDecoration:'none'}}>React</a>


          </div>

          



        </div>


        <div className='text-center'>

          <p>&copy;MediaPlayer 2024</p>

        </div>



      </div>




    </>


  )



}

export default Footer