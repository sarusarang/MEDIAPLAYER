import React from 'react'
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deletevideo } from '../Services/allApi';
import { toast } from 'react-toastify';
import { showhis } from '../Services/allApi';
import { delehistory } from '../Services/allApi';

function Videocard({ video, setdelvideos, cat }) {

    const [show, setShow] = useState(false);


    const handleClose = () => {
        setShow(false)

        showhis(History)
    };


    const [History, sethistory] = useState({

        caption: video?.caption,
        url: video?.url,
        date: "",
        id: video?.id
    })

    const handleShow = () => {

        sethistory({ ...History, date: new Date() })
        setShow(true)



    };



    const handeldelete = async (id) => {

        const res = await deletevideo(id)


        if (res.status >= 200 && res.status < 300) {

            const delehis = await delehistory(id)
            setdelvideos(res)
            toast.success("video deleted successfully")


        } else {

            toast.error("video deletion Failed")
        }

    }

    const handledrag = (e, id) => {

        console.log(id);
        e.dataTransfer.setData("videoId", id)

    }


    return (
        <>

            <Card draggable onDragStart={(e) => { handledrag(e, video?.id) }} className='video-card me-4 mb-4  col-md-4 col-12' style={{ width: '18rem', backgroundColor: 'transparent' }} onClick={handleShow}>

                <Card.Img variant="top" src={video?.img} />

                <Card.Body className='d-flex flex-row justify-content-between' >

                    <Card.Title>{video?.caption}</Card.Title>

                    {

                        !cat &&
                        <i className="fa-solid fa-trash-can" onClick={() => { handeldelete(video.id) }} style={{ color: '#f50000' }}></i>
                    }

                </Card.Body>

            </Card>




            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video?.caption}</Modal.Title>
                </Modal.Header>

                <Modal.Body>


                    <iframe width="100%" height="315" src={video?.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </Modal.Body>




            </Modal>



        </>
    )
}

export default Videocard