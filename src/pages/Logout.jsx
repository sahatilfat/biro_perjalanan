import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  useEffect(() => {
    window.localStorage.removeItem("biro_perjalanan");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("name");
    history.push("/login");
  }, [history]);
  return <div></div>;
}

export default Logout;
