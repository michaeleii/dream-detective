import { useState } from "react";
import { Message } from "../App";

const BASE_URL = "https://dream-detective.onrender.com";

function ChatInput({
  onSendMessage,
}: {
  onSendMessage: (message: Message) => void;
}) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    onSendMessage({ id: Date.now(), sender: "user", message });
    setMessage("");
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/dream`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dream: message }),
      });
      const data = await res.json();
      console.log(data);
      onSendMessage({
        id: Date.now(),
        sender: "ai",
        message: data.content,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="sticky bottom-0 z-10 bg-slate-900 pb-10">
      <form
        className="max-w-7xl mx-auto text-white py-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <textarea
          className="w-full bg-slate-900 border border-gray-500 rounded-lg px-4 py-2"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 disabled:text-gray-900 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Send"}
          </button>
        </div>
      </form>
    </footer>
  );
}
export default ChatInput;
