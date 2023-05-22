import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDeleted.css";
import BackSvg from "../../assets/back.svg";

const UserDeleted = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://mack-webmobile.vercel.app/api/users/${id}`, { method: 'DELETE' });
      await response.json();
    }
    fetchData()
  }, [id])

  return (
    <div id="user-deleted">
      <h1>User Deleted</h1>
      <Link className="link" to="/">
        <img src={BackSvg} alt="" />
        <p>Return to home</p>
      </Link>
    </div>
  );
};

export default UserDeleted;
