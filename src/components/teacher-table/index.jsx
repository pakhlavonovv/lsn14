import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button/Button';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import { TeacherModal } from '@components'
import { useState } from 'react';


export default function BasicTable({data}) {
  const [open, setOpen] = useState(false)
  const handleClose =()=> {
    setOpen(false)
  }
  const deleteItem = (id) => {
    try {
      axios.delete(`http://localhost:3000/teacher/${id}`)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  const editItem = (id) => {
    setOpen(true)
    try {
      axios.put(`http://localhost:3000/teacher/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (

    <TableContainer component={Paper}>
      <TeacherModal open={open} handleClose={handleClose}/>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center">T/R</TableCell>
            <TableCell align="center">Teacher Name</TableCell>
            <TableCell align="center">Course name</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
          <TableCell align="center">{index + 1}</TableCell>

              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.course}</TableCell>
              <TableCell align="center"><Button onClick={()=> deleteItem(row.id)} variant='contained' color='error'>Delete</Button>
              <Button className='ms-2' onClick={()=> editItem(row.id)} variant='contained' color='success'>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}