import { useContext } from 'react';
import classes from './Dashboard.module.scss';
import {AiOutlineDoubleLeft} from 'react-icons/ai';
import { AuthContext } from '../../context/authContext';
import { DashboardContext } from '../../context/dashboardContext';
import DummyUser from '../../assets/images/user-dummy.png';

const Dashboard = ({name, email}) => {

  const{authData, dispatch}=useContext(AuthContext);
  const{handleShowDashboard}=useContext(DashboardContext);
  

  return (
    <>
      { (
        <div className={classes.component_container}>
          <div className={classes.top}>
              <div>
                <img src={DummyUser} alt="user" />
              </div>
              <small>ayush singh</small>
              <small>{email}</small>
          </div>
          <AiOutlineDoubleLeft onClick={()=>handleShowDashboard()}/>
          <div className={classes.bottom}>
          <button onClick={()=>dispatch({type:'LOGOUT'})}>Logout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

// const [showComponent, setShowComponent] = useState(true);
//   const componentRef = useRef(null);
//   const handleClickOutside = (event) => {
//     if (componentRef.current && !componentRef.current.contains(event.target)) {
//       setShowComponent(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);