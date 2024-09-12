import Button from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import './sass/style.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Notification from '../utils/notification';

const Index = () => {
  const [ form, setForm ] = useState({})
  const [disabled, setDisabled] = useState(false )
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(10)
  const navigate = useNavigate()
  const initalValues = {
    name: "",
    password: "",
  }
  const signInValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
  });
  const handleSubmit = async(value) => {
      if(value.name == 'Admin' && value.password == 'Admin123'){
        navigate('/admin')
      } else{
        Notification({
          title: "Password or name is incorrect",
          type: "error"
        })
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
                <Formik initialValues={initalValues} onSubmit={handleSubmit} validationSchema={signInValidationSchema}>
                  <Form id='sign-in'>
                    <Field
                    name="name"
                    as={TextField}
                    type="text"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    label="Name"
                    helperText={
                      <ErrorMessage name='name' component="p" className='text-danger fs-6'/>
                    }
                    />
                    <Field 
                    name="password"
                    as={TextField}
                    type="password"
                    fullWidth
                    variant="outlined"
                    label="Password"
                    helperText={
                    <ErrorMessage 
                      name='password'
                      component="p"
                      className='text-danger fs-6'
                    />
                    }
                    />
                  </Form>
                </Formik>

              </div>
              <div className="card-footer">
                <center>
              <Button variant='contained' color='success' type='submit' form="sign-in">Save</Button>
                </center>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index