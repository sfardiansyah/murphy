import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSpaces } from "pubnub-redux";

import Navbar from "components/navigation/Navbar";

const Chat: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <h1>Chat</h1>
    </>
  );
};

export default Chat;
