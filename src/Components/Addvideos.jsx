import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Uploadvideo } from '../Services/allApi';
import {toast} from 'react-toastify'



function Addvideos({setstatus}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [video,setvideo]=useState({

        caption:"",url:"",img:""
    })

    const getdata=(e)=>{

        const {name,value}=e.target

        // console.log(name,value);

        if(name=="caption"){

            setvideo({...video,caption:value})

        }

        
        if(name=="url"){

            let furl =value
            furl =furl.split("v=")
            let vurl = `https://www.youtube.com/embed/${furl[1]}?si=rqkupr8X1Xn3bwas&autoplay=1`

            setvideo({...video,url:vurl})

        }

        
        if(name=="img"){

            setvideo({...video,img:value})

        }

    }

    const upload= async ()=>{

        const {caption,url,img}=video

        if(!caption || !url || !img) {

            toast.error("FAILED TO UPLOAD VIDEO")
           

        }else{

            const res = await Uploadvideo(video)
            if(res.status>=200 && res.status<300){

                setstatus(res.data)
               toast.success("Video Uploaded")
                handleClose()
                setvideo("")
            }
            else{

                toast.error("Failed")
            }
            
        }

    }

    return (

        <>

            <span className='btn' onClick={handleShow}><i className="fa-solid fa-cloud-arrow-up fa-bounce fa-lg"></i></span>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>



                    <Form>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Caption</Form.Label>
                            <Form.Control type="text" name='caption' onChange={(e)=>{getdata(e)}} placeholder="URL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Video Url</Form.Label>
                            <Form.Control type="text" name='url' onChange={(e)=>{getdata(e)}} placeholder="URL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Image Url</Form.Label>
                            <Form.Control type="text" name='img' onChange={(e)=>{getdata(e)}} placeholder="URL" />
                        </Form.Group>

                       
                    </Form>


                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={upload}>Upload</Button>

                </Modal.Footer>
            </Modal>

        </>





    )
}

export default Addvideos