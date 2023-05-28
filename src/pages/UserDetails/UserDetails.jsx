import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDetails.css";
import BackSvg from "../../assets/back.svg";
import UserDetailsCard from "../../components/UserDetailsCard/UserDetailsCard";
import { readUser } from "../../api/service";


const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    read();
  }, [id])
  

  const read = async () => {
    const user = await readUser(id);
    setUser(user);
  };

  return (
    <div id="user-details">
      <header className="user-details-header">
        <Link className="link" to="/">
          <img src={BackSvg} alt="" />
        </Link>
        <h1>User Details</h1>
      </header>
      <UserDetailsCard user={user}/>
    </div>
  );
};

export default UserDetails;
