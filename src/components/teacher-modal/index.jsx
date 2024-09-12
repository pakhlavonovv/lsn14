import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField, Select, MenuItem, InputLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({open, handleClose, course}) {
  const [form, setForm] = useState({})
  const handleChange = (event) => {
      const {name, value} = event.target
      setForm({...form, [name]: value})
  }
  const handleSubmit = async() =>{
    try {
      const res = await axios.post("http://localhost:3000/teacher", form)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <form className='d-flex flex-column gap-4' onSubmit={handleSubmit}>
          <div className='d-flex flex-column gap-2'>
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
          labelId='demo-simple-select-labe'
          fullWidth
          id="demo-simple-select"
          name='age'
          label="Course name"
          onChange={handleChange}
        >
          {
            course.map((item, index) => {
              return <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
            })
          }
        </Select>
        <TextField fullWidth label="Teacher name" name='name' onChange={handleChange} id="fullWidth" />
        <Button style={{
          width: "140px"
        }} variant='contained' color='primary' onClick={handleSubmit}>Save</Button>
          </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
