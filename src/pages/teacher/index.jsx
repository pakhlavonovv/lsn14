import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { TeacherTable } from "@components"

const Index = () => {
  const [data, setData] = useState([])
    useEffect(()=> {
        axios.get("http://localhost:3000/teacher").then(res=> {
            setData(res?.data)
        })
    })
  return (
    <div><h1>Teacher</h1>
    <TeacherTable data={data}/>
    {/* <TeacherModal/> */}
      </div>
  )
}

export default Index