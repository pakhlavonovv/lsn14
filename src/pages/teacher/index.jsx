import { useEffect } from "react"
import axios from "axios"

const Index = () => {
    useEffect(()=> {
        axios.get("http://localhost:3000/teacher").then(res=> {
            console.log(res)
        })
    })
  return (
    <div><h1>Teacher</h1></div>
  )
}

export default Index