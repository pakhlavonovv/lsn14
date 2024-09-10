import Button from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import './sass/style.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../utils/notification';

const Index = () => {
  const [ form, setForm ] = useState({})
  const [disabled, setDisabled] = useState(false )
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(10)
  useEffect(() => {
    if(count === 3){
      setInterval(() => {
          setTime(prev => prev - 1)
      }, 1000)
    }
  }, [count])
  const navigate = useNavigate()
  const handleChange = (event) => {
    const {name, value} = event.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.username == 'Admin'){
        navigate('/admin')
        Notification({title: "Success", type: 'success '})

    } else if(form.username == 'Student'){
      navigate('/student')
    } else {
      Notification({title: 'Somewhere have an error, please try again', type: 'error'})
      setCount(prev => prev + 1)
    }
  } 

  return (
    <div>
      <div className="container mt-5">
      <ToastContainer />
        <div className="row">
          <div className="col-md-4 offset-3">
            <div className="card" style={{width: "500px"}}>
              <div className="card-header">
                <h1 className='text-center'>Sign In</h1>
              </div>
              <div className="card-body">
                <form id='form' style={{display: "flex", flexDirection: 'column', gap: '6px'}} onSubmit={handleSubmit}>
              <TextField disabled={count == 3 ? true : false} fullWidth label="Username" name='username' onChange={handleChange}/>
              <TextField fullWidth type='email' label="Email" name='email' onChange={handleChange}/>
              <TextField fullWidth type='password' label="Password" name='password' onChange={handleChange}/>
              <TextField fullWidth type='confirm_pass' label="Confirm Password" name='confirm_password' onChange={handleChange}/>
                </form>

              </div>
              <div className="card-footer">
                <center>
              <Button style={{width: "130px"}} variant="contained" type='submit' form='form'>Save</Button>
                </center>
                <p className='text-center mt-2'>
                  {
                    count === 3 && `Mal'um bir muddat kutib turing! ${time}`
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index