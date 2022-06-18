import {useState,useEffect} from 'react'

export const useFetch = (url,method='GET') =>{

  const [pending,setPending] = useState(false)
  const [data,setData] = useState(null)
  const [error,setError] = useState(null)
  const [option,setOption] = useState(null)

  const postData = (postData) =>{
    
    setOption({
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(postData)
    })

  }

  useEffect(()=>{

    const getData = async (dataoptions)=>{

      setPending(true)
  
      try{
        const response = await fetch(url,{dataoptions})
        const result = await response.json()
        setData(result)
        if(result){
          setPending(false)
        }
      }catch(err){
        console.log(err)
        setError(err)
      } 
  
  
    }
    if(method === 'GET'){
      getData() 
    }
    if(method === 'POST' && option){
      getData(option)
    }
  

  },[url,method,option])

 return {data,error,pending,postData} 
}