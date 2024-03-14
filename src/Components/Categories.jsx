import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addcategories } from '../Services/allApi';
import { toast } from 'react-toastify';
import Showcategories from './Showcategories';


function Categories() {

  const [show, setShow] = useState(false);
  const [showcatg,setshowcatg]=useState({})

  const handleClose = () =>{
    setShow(false)
    setcata({
      Categories:"",videos:[]
    })
  }

  const handleShow = () => setShow(true);
  const [cata,setcata]=useState({

    Categories:"",videos:[]

  })



  const getcategory=(e)=>{

    var data =e.target.value

    if(data){

      setcata({...cata,Categories:data})

    }
    
  
  }




  const handlesave= async()=>{

    
    if(cata.Categories){

      const res = await addcategories (cata)

      if(res.status>=200 && res.status<300){

        toast.success("Categories add successfully")
        handleClose()
        setshowcatg(res.data)
  
  
      }else{
  
        toast.error("unable to add Categories")
      }
      

    }else{

      toast.error("Unable to add Categories")

    }

   

  }

  return (

    <>

      <div className='d-grid'>

        <Button variant='primary' onClick={handleShow} className='btn'>Add Category</Button>

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
                <Form.Label>Enter Category Name</Form.Label>
                <Form.Control type="text" name='category' onChange={(e)=>{getcategory(e)}} placeholder="Category" />
              </Form.Group>
              
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlesave}>Save</Button>
          </Modal.Footer>
        </Modal>

        <div className='w-100 h-100  d-flex flex-column mt-4 show-category'>

          

          <Showcategories showcatg = {showcatg} />
          

        </div>

      </div>



    </>


  )
}

export default Categories