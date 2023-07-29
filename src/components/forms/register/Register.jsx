import classes from "./Register.module.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "./register_schema";
const Register = () => {

  const{values, errors, touched, handleChange, handleBlur, handleSubmit}=useFormik({
     initialValues:{},
     validationSchema:registerSchema,
     onSubmit:(values)=>{
      console.log(values)
     }
  })
  return (
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
  );
};
export default Register;
