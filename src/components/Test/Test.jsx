import { useFetch } from "../hooks/useFetch"
import { useState,useEffect } from "react"
import axios from 'axios'
const Test = () => {
  const url = 'https://gorest.co.in/public/v2/posts'
  
  const [pending,setPending] = useState(false)
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)


  const getData = async () =>{
    setPending(true)

    try{
      
      const response = await axios.get(url)
      setData(response.data)

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      {pending && <p>Loading</p>}
      
      {data && data.map((val,idx)=>(
        <div key={idx}>
          <p>{val.title}</p>
        </div>
      ))}

      {/* <form onSubmit={submit}>
        <input 
        type="text"
        name='title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input 
        type="text"
        name='body'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
       
       <button>Send</button>
      </form> */}
    </div>
  )
}



// const [title,setTitle] = useState('')
//   const [body,setBody] = useState('')

//   const {data,error,pending,postData} = useFetch(url)
   
//   const submit =(e)=>{
//     e.preventDefault()

//     postData(form)
  
//   }
//   const form = {
//     id:'1',
//     user_id: '2',
//     title,
//     body
//   }

export default Test