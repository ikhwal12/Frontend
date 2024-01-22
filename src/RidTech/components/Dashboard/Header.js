import { Link } from "react-router-dom";
import "../../styles/header-style.css";
import logohd from "../../assets/logohd.png";

/*<Link to="/Home/">Home</Link>*/
const Headers = () => {
  return (
    <div className="boxnavbar2">
      <div className="boxnavbarkiri2">
        <img src={logohd} alt="" className="logo" />
      </div>
      <div className="boxnavbarkanan2">
        <span className="isilink2">
          <li>
            <Link className="loginbuttonnav" to="/login">
              Login
            </Link>
          </li>
        </span>
      </div>
    </div>
  );
};
export default Headers;
