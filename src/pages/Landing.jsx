import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Landing() {


  return (
    <>


      <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>

        <div className='d-flex p-5 shadow'>


          <div className="col d-flex flex-column justify-content-center">

            <h1>MEDIA PLAYER 2024</h1>
            <p>Explore media player for youtube video upload and management.You can add and manage videos,categories and even more</p>

            <div>

              <Link className='btn btn-success' to={'/dash'}>Explore</Link>

            </div>

          </div>

          <div className="col">

            <img src="https://i.pinimg.com/originals/83/82/06/83820619a50bc4676d642561a9fe7355.gif" className='img-fluid' alt="img" />

          </div>

        </div>

      </div>


      <div className='mt-3 p-5'>

        <h2 className='text-center'>Features</h2>

        <div className='d-flex mt-2 p-4 flex-row justify-content-center'>


          <Card style={{ width: '18rem', marginRight: '5%',backgroundColor:'transparent' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/652746/screenshots/1844317/upload_animation.gif" />
            <Card.Body>
              <Card.Title>Upload Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
             
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem', marginRight: '5%', backgroundColor:'transparent' }}>
            <Card.Img variant="top" src="https://cdn.dribbble.com/users/34556/screenshots/1680799/play.gif" />
            <Card.Body>
              <Card.Title>Watch Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>


          <Card style={{ width: '18rem', marginRight: '5%',backgroundColor:'transparent' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/5e/64/c4/5e64c4917fd67c71a4a93820cddee7a8.gif" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              
            </Card.Body>
          </Card>


        </div>


      </div>


      <div className='mt-5 mb-5 d-flex justify-content-center flex-row align-items-center'>


        <div className="col-md-6 ps-5">

          <h1>SIMPLE FAST & SEURED</h1>

          <p style={{textAlign:'justify'}}>Media player 2024 is a platform for simple and faster youtube video uploading and management you can watch videos and add vdieos to your playist and you can see the watch history.</p>



        </div>

        <div className="col-md-6 ps-5">

          <iframe width="560" height="315" src="https://www.youtube.com/embed/uJMCNJP2ipI?si=z7AdNj2_R28DnNQB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



        </div>



      </div>




    </>
  )


}

export default Landing