import React, { useState, useEffect } from "react";

import userService from "../services/user.service";

const BoardModerator = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getModeratorBoard().then(
      (respons) => {
        setContent(respons.data);
      },
      (error) => {
        const _content =
          (error.respons && error.respons.data && error.respons.data.message) ||
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

export default BoardModerator;