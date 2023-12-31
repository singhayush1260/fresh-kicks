import classes from "./SomethingWentWrong.module.scss";
import { useState } from "react";
import { BiError, BiChevronLeft } from "react-icons/bi";
import { MdOutlineBugReport } from "react-icons/md";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineCopy } from "react-icons/ai";
import toast, { Toaster } from 'react-hot-toast';
import CopyToClipboard from "react-copy-to-clipboard";
import Loader from "../../components/loaders/Loader";

const SomethingWentWrong = ({ errorMessage }) => {

  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const notify = (message) => {
    toast.success(message);
  }

  return (
    <div className={classes.page_wrapper}>
       <Toaster position="top-right" reverseOrder={false} gutter={8} containerClassName="" containerStyle={{}}
        toastOptions={{ className: '', duration: 3000,
        style: { background: '#363636',color: '#fff',},
        success: {duration: 3000, theme: { primary: 'green',secondary: 'black'}}}} />
      <Loader />
      <div className={classes.container}>
        <BiError />
        <h3>Something went wrong at our end.</h3>
        <p>We are sorry. We are having some trouble completing</p>
        <p>your request.</p>
        {!showErrorMessage && ( <small className={classes.show_more} onClick={() => setShowErrorMessage(!showErrorMessage)}>
            Show More 
            <AiFillCaretDown />
          </small>
        )}
        {showErrorMessage && (<div className={classes.error_message}>
            <div>{errorMessage}</div>
            <CopyToClipboard text={errorMessage}>
              <AiOutlineCopy className={classes.copy} title="Copy to clipboard." onClick={()=>notify('Copied to clipboard.')}/>
            </CopyToClipboard>
            <small onClick={() => setShowErrorMessage(!showErrorMessage)}>
              Hide <AiFillCaretUp />
            </small>
          </div>
        )}
        <div className={classes.links_div}>
          <a href="/"> <BiChevronLeft /> <span>Home</span></a>
          <a href="https://github.com/singhayush1260/fresh-kicks" target="_blank">
            <MdOutlineBugReport /> <span>Report</span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default SomethingWentWrong;
