import React from 'react'
import { useState, useEffect } from 'react'
import { getcategories, getspecificvideos, updatecategory } from '../Services/allApi'
import { delecatg } from '../Services/allApi'
import { toast } from 'react-toastify'
import Videocard from './Videocard'

function Showcategories({ showcatg }) {

    const [catg, setcatg] = useState([])
    const [dele, setdele] = useState({})

    const getcat = async () => {

        const res = await getcategories()
        setcatg(res.data)

    }

    const handledel = async (id) => {

        const res = await delecatg(id)

        if (res.status >= 200 && res.status < 300) {

            toast.success("Categories Deleted Successfully")
            setdele(res.data)

        } else {

            toast.error("Unable to delete Categories")
        }

    }

    useEffect(() => {

        getcat()

    }, [dele, showcatg])


    const handledrop = async (e, id) => {

        console.log("category id" + id);

        const vid = e.dataTransfer.getData("videoId")

        console.log("dropped video id" + vid);

        let catagory = catg.find(item => item.id == id)

        const res = await getspecificvideos(vid)

        catagory.videos.push(res.data)

        const resupdate = await updatecategory(id, catagory)

        if (resupdate.status >= 200 && resupdate.status < 300) {

            toast.success(`${res.data.caption} is added to ${catagory.Categories}`)
            getcat()

        } else {

            toast.error("unable to add videos to category")
        }


    }

    const handledragover = (e) => {
        e.preventDefault()
        console.log("Dragging over category");


    }

    return (
        <>

            {
                catg ?

                    catg.map(item => (

                        <div droppable onDrop={(e) => { handledrop(e, item?.id) }} onDragOver={(e) => { handledragover(e) }} className='w-80 mt-3 mb-1 p-3  inner-category' style={{ marginLeft: '3%', marginRight: '3%' }}>

                            <span>{item.Categories}</span><i className="ms-5 fa-solid fa-trash-can float-end" onClick={() => { handledel(item.id) }} style={{ color: '#f00000' }}></i>


                            <div>

                                {

                                    item?.videos.map(v => (

                                        <Videocard video={v} cat={true} />

                                    ))
                                }

                            </div>

                        </div>


                    )) :

                    <h1>no Categories added</h1>


            }

        </>
    )
}

export default Showcategories