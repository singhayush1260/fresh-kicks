import classes from "./Register.module.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "./register_schema";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Register = () => {
  
  const{authData, dispatch}=useContext(AuthContext);

  const notify = (message) => {
    toast(message);
  }
  
  const{values, errors, touched, handleChange, handleBlur, handleSubmit}=useFormik({
     initialValues:{},
     validationSchema:registerSchema,
     onSubmit: async (values)=>{
      const{Name, Email, PhoneNumber, Password}=values;
      try{
        
        const { data }= await axios.post('https://fresh-kicks-server.onrender.com/api/auth/register',{
          Name, Email, PhoneNumber, Password
        })
        // const { data }= await axios.post('http://localhost:3000/api/auth/register',{
        //   Name, Email, PhoneNumber, Password
        // })
        console.log(data)
        localStorage.setItem("USER", JSON.stringify(data));
        dispatch({type:'LOGIN', payload:data})
        console.log(authData);
      }
      catch(error){
         console.log('error', error)
         notify('Invalid Credentials.')
      }
     }
  })
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} gutter={8} containerClassName="" containerStyle={{}}
     toastOptions={{
    className: '',
    duration: 3000,
    style: { background: '#363636',color: '#fff',},
    success: {duration: 3000, theme: { primary: 'green',secondary: 'black'}}}} />
    <div className={classes.form_container}>
      <h1>CREATE YOUR ACCOUNT</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form_controller}>
          <label>Name</label>
          <input type="text" name="Name" 
          placeholder="Enter name" 
          className={`${errors.Name && touched.Name && classes.input_error}`}
          value={values.Name}
          onChange={handleChange}
          onBlur={handleBlur}
          />
           {errors.Name && touched.Name ? (
              <small style={{color:'red'}}><p>{errors.Name}</p></small>) : null}
        </div>
        <div className={classes.form_controller}>
          <label>Email Address</label>
          <input type="text" name="Email" 
          placeholder="Enter email" 
          className={`${errors.Email && touched.Email && classes.input_error}`}
          value={values.Email}
          onChange={handleChange}
          onBlur={handleBlur}
          />
           {errors.Email && touched.Email ? (
              <small style={{color:'red'}}><p>{errors.Email}</p></small>) : null}
        </div>
        <div className={classes.form_controller}>
          <label>Phone Number</label>
          <input type="text" name="PhoneNumber" 
          placeholder="Enter phone number" 
          className={`${errors.PhoneNumber && touched.PhoneNumber && classes.input_error}`}
          value={values.PhoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          />
           {errors.PhoneNumber && touched.PhoneNumber ? (
              <small style={{color:'red'}}><p>{errors.PhoneNumber}</p></small>) : null}
        </div>
        <div className={classes.form_controller}>
          <label>Password</label>
          <input type="password" name="Password" 
          placeholder="Enter password" 
          className={`${errors.Password && touched.Password && classes.input_error}`}
          value={values.Password}
          onChange={handleChange}
          onBlur={handleBlur}
          />
           {errors.Password && touched.Password ? (
              <small style={{color:'red'}}><p>{errors.Password}</p></small>) : null}
        </div>
        <button className={classes.login_btn} type="submit">CREATE</button>
        <p>
          Already hava an account?
          <b>
            <Link to="/login"> Login</Link>
          </b>
        </p>
      </form>
    </div>
    </>
  );
};
export default Register;
