import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import { useFormik } from "formik";
import { loginSchema } from "./login_schema";

const Login = () => {
 
  const{values, errors, touched, handleChange, handleBlur, handleSubmit}=useFormik({
      initialValues:{},
      validationSchema:loginSchema,
      onSubmit:(values)=>{
        console.log(values)
      }
  })

  return (
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
  );
};
export default Login;
