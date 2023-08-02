import classes from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <div className={classes.page_wrapper}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default PageNotFound;
