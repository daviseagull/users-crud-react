import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDetails.css";
import BackSvg from "../../assets/back.svg";
import UserDetailsCard from "../../components/UserDetailsCard/UserDetailsCard";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://mack-webmobile.vercel.app/api/users/${id}`);
      const user = await response.json();
      setUser(user);
    }
    fetchData()
  }, [id])
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
