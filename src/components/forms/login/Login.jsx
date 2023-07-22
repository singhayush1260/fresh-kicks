import { Link } from "react-router-dom";
import classes from "./Login.module.scss";

const Login = () => {
  return (
    <div className={classes.form_container}>
      <h1>LOGIN</h1>
      <div className={classes.form}>
        <div className={classes.form_controller}>
          <label>Email Address</label>
          <input type="text" placeholder="Enter email" />
        </div>
        <div className={classes.form_controller}>
          <label>Password</label>
          <input type="password" placeholder="Enter passoword" />
        </div>
        <button className={classes.login_btn}>LOGIN</button>
        <p>
          Don't hava an account?
          <b>
            <Link to="/register"> Create One</Link>
          </b>
        </p>
      </div>
    </div>
  );
};
export default Login;
