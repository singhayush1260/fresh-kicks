import classes from "./Register.module.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className={classes.form_container}>
      <h1>CREATE YOUR ACCOUNT</h1>
      <div className={classes.form}>
        <div className={classes.form_controller}>
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className={classes.form_controller}>
          <label>Email Address</label>
          <input type="text" placeholder="Enter email" />
        </div>
        <div className={classes.form_controller}>
          <label>Phone Number</label>
          <input type="text" placeholder="Enter phone number" />
        </div>
        <div className={classes.form_controller}>
          <label>Password</label>
          <input type="password" placeholder="Enter passoword" />
        </div>
        <button className={classes.login_btn}>CREATE</button>
        <p>
          Already hava an account?
          <b>
            <Link to="/login"> Login</Link>
          </b>
        </p>
      </div>
    </div>
  );
};
export default Register;
