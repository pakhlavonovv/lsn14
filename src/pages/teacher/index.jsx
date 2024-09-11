import { useEffect } from "react"
import axios from "axios"
import { TeacherTable } from "@components"

const Index = () => {
    useEffect(()=> {
        axios.get("http://localhost:3000/teacher").then(res=> {
            console.log(res)
        })
    })
  return (
    <div><h1>Teacher</h1>
    <TeacherTable/>
      </div>
  )
}

export default Index