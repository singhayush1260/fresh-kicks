import { Link, useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";
import { useFormik } from "formik";
import { loginSchema } from "./login_schema";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

  const{authData, dispatch}=useContext(AuthContext);
  const navigate=useNavigate();
  
  const notify = (message) => {
    toast.error(message);
  }

  const{values, errors, touched, handleChange, handleBlur, handleSubmit}=useFormik({
      initialValues:{},
      validationSchema:loginSchema,
      onSubmit: async (values)=>{
        const{Email, Password}=values;
        try{
          const { data } = await axios.post('http://localhost:3000/api/auth/login',{Email,Password})
          console.log(data);
          localStorage.setItem("USER", JSON.stringify(data));
          dispatch({type:'LOGIN', payload:data})
          navigate('/')
        }catch(error){
          //alert('Invalid Credentials')
          notify('Invalid Credentials.')
         console.log(error)
        }
        
      }
  })



  return (
    <>
    <Toaster position="top-center" reverseOrder={false} gutter={8} containerClassName="" containerStyle={{}}
     toastOptions={{
    className: '',
    duration: 3000,
    style: {borderRadius: '10px',background: '#333',color: '#fff'},
    success: {duration: 3000, theme: { primary: 'green',secondary: 'black'}}}} />

    <div className={classes.form_container}>
      <h1>LOGIN</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.form_controller}>
          <label>Email Address</label>
          <input type="text" name="Email" 
          className={`${errors.Email && touched.Email && classes.input_error}`}
          placeholder="Enter email" 
          value={values.Email}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          {errors.Email && touched.Email ? (
              <small style={{color:'red'}}><p>{errors.Email}</p></small>) : null}
        </div>
        <div className={classes.form_controller}>
          <label>Password</label>
          <input type="password" name="Password"
          className={`${errors.Password && touched.Password && classes.input_error}`} 
          placeholder="Enter passoword" 
          value={values.Password}
          onChange={handleChange}
          onBlur={handleBlur}
          />
          {errors.Password && touched.Password ? (
              <small style={{color:'red'}}><p>{errors.Password}</p></small>) : null}
        </div>
        <button className={classes.login_btn} type="submit">LOGIN</button>
        <p>
          Don't hava an account?
          <b>
            <Link to="/register"> Create One</Link>
          </b>
        </p>
      </form>
    </div>
    </>
  );
};
export default Login;
