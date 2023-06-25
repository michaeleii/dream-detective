import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatInterface from "./components/ChatInterface";
import Title from "./components/Title";

export interface Message {
  id: number;
  sender: "user" | "ai";
  message: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      message: "Hello, I'm DreamBot. What did you dream about?",
    },
  ]);

  const handleSendMessage = (message: Message) => {
    setMessages([...messages, message]);
  };
  return (
    <div className="bg-slate-900 h-screen relative py-10 px-2 flex flex-col">
      <Title />
      <ChatInterface messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
export default App;
