import React, { useEffect } from "react";
import ProjectContainer from "../portfolio/projects-container";
import { useState } from "react";
import axios from "axios";

export default function () {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    updateState();
    console.log(projects);
  }, []);

  const updateState = () => {
    axios.defaults.baseURL = "http://justinMurphy.pythonanywhere.com";
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios.get("/projects").then((res) => {
      setProjects(res.data);
      console.log(projects, res.data);
    });
  };

  return (
    <div>
      <ProjectContainer projectData={projects} />
    </div>
  );
}
