import React, { useState, useEffect } from "react";

import userService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getPublicContent().then(
      (respons) => {
        setContent(respons.data);
      },
      (error) => {
        const _content =
          (error.respons && error.respons.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default Home;
