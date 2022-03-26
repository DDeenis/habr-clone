import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const redirect = useNavigate();

  useEffect(() => redirect("/feed"), []);

  return <div></div>;
};

export default Home;
