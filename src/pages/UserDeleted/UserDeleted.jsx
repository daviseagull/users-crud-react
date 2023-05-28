import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./UserDeleted.css";
import BackSvg from "../../assets/back.svg";
import { deleteUser } from "../../api/service";

const UserDeleted = () => {
  const { id } = useParams();

  useEffect(() => {
    deleteU();
  }, [id]);

  const deleteU = async () => {
    await deleteUser(id);
  };

  return (
    <div id="user-deleted">
      <h1>User Deleted</h1>
      <Link className="link" to="/">
        <img src={BackSvg} alt="" />
        <h1>Return to home</h1>
      </Link>
    </div>
  );
};

export default UserDeleted;
