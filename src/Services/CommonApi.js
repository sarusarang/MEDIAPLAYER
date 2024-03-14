import axios from "axios";

const CommonApi= async(reqMethod,apiurl,body)=>{

    const reqConfig ={

        method:reqMethod,
        url:apiurl,
        data:body,
        headers:{"Content-type":"application/json"}

    }

    return await axios(reqConfig).then((res)=>{return res}).catch((err)=>{return err})

}

export default CommonApi