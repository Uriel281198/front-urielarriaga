import React, { useEffect, useState } from "react";
import { api } from "../services/api";

const Portafolio = () => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    api
      .get("classes/Portafolio")
      .then((res) => {
        setProject(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {projects.map((item, index) => {
        return <p>{item.title}</p>;
      })}
    </div>
  );
};

export default Portafolio;
