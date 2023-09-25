import { FC, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addUser } from "../../../redux/slices/userSlice";

const TokenAcceptor: FC = () => {
  console.log("TokenAcceptor mounted");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userData = useParams();
  useEffect(() => {
    let { token, email, firstName, lastName, picture } = userData;
    const decodedPictureUrl = picture && decodeURIComponent(picture);
    setCookie("token", token, { path: "/" });
    dispatch(
      addUser({ email, firstName, lastName, picture: decodedPictureUrl })
    );
    navigate("/");
  }, []);
  return <></>;
};

export default TokenAcceptor;
