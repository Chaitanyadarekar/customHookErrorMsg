import "./styles.css";
import useErrorMessage from "./useErrorMessage";

export default function App() {
  const [msg, msgType, openMsg, setOpenMsg, msgHandler] = useErrorMessage();
  return (
    <div className="App">
      <button
        onClick={() => {
          msgHandler("Message 1", "info");
        }}
      >
        Show Message 1
      </button>
      <br />
      <button
        onClick={() => {
          msgHandler("Message 2", "success");
        }}
      >
        Show Message 2
      </button>
      <br />
      <button onClick={() => setOpenMsg(false)}>Close</button>

      {openMsg && (
        <p>
          {msg} {msgType}
        </p>
      )}
    </div>
  );
}
