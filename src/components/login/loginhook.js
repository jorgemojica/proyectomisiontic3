import Login from "./login";

const Hook = ({ isLoggedIn, login}) => {
  return (
          <Login
            isLoggedIn={isLoggedIn}
            setLogin={login}
          />
  );
};

export default Hook;