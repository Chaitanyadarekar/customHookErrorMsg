import { useState } from "react";

export default function useErrorMessage() {
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const [openMsg, setOpenMsg] = useState(false);

  const msgHandler = (msg, type) => {
    setMsg(msg);
    setMsgType(type);
    setOpenMsg(true);
  };
  return [msg, msgType, openMsg, setOpenMsg, msgHandler];
}
