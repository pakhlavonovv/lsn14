import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { TeacherTable, TeacherModal } from "@components"
import Button from "@mui/material/Button/Button"

const Index = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
    useEffect(()=> {
        axios.get("http://localhost:3000/teacher").then(res=> {
            setData(res?.data)
        })
    }, [])
    const handleClose =()=> {
      setOpen(false)
    }
  return (
    <div>
    <TeacherTable open={open} handleClose={handleClose}/>
    <Button variant="contained" color="primary" onClick={()=> setOpen(true)}>Open Modal</Button>
    <TeacherModal data={data}/>
      </div>
  )
}

export default Index