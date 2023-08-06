import { useState, useEffect } from "react";
import classes from "./Loader.module.scss";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className={classes.loader_wrapper}>
          <div className={classes.loader}></div>
        </div>
      )}
    </>
  );
};

export default Loader;
