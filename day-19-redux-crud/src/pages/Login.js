import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getGoogle } from "../redux/actions/login.actions";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  // console.log(history);

  const responseGoogleLogin = (response) => {
    console.log(response);
    dispatch(getGoogle(response, history));
  };
  return (
    <div>
      <h1>Halaman Login</h1>

      <GoogleLogin
        clientId="863578905324-fp7872smtq6jro9uscl2fnjvjjoobea8.apps.googleusercontent.com"
        onSuccess={responseGoogleLogin}
        onFailure={responseGoogleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
