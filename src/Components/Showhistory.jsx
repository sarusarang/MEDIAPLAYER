import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { historyshow } from '../Services/allApi';
import { delehistory } from '../Services/allApi';
import { toast } from 'react-toastify';

function Showhistory() {

  const [seehis, setshowhistory] = useState([])
  const [handledele, setdele] = useState({})

  const getdata = async () => {

    const res = await historyshow()
    setshowhistory(res.data)

  }

  const handledelete = async (id) => {

    const resdele = await delehistory(id)
    setdele(resdele.data)

    console.log(resdele.status);

    if (resdele.status >= 200 && resdele.status < 300) {

      toast.success("History Successfully deleted")

    } else {

      toast.error("cannot delete history")
    }

  }

  useEffect(() => {
    getdata()
  }, [handledele])

  return (

    <>


      <div>


        <Table striped="columns">

          <thead>

            <tr>
              <th>TITTLE</th>
              <th>URL</th>
              <th>DATE AND TIME</th>
              <th>DELETE</th>
            </tr>

          </thead>


          {

            seehis ?

              seehis.map(item => (

                <tbody>

                  <tr>

                    <td>{item.caption}</td>
                    <td>{item.url}</td>
                    <td>{item.date}</td>
                    <td><i onClick={() => handledelete(item.id)} className="fa-solid fa-trash-can" style={{ color: '#ff0000' }}></i></td>
                  </tr>


                </tbody>


              )) :

              <h1>NO HISTORY FOUND</h1>


          }

        </Table>


      </div>





    </>
  )
}


export default Showhistory