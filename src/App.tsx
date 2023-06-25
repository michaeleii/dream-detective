import { useEffect, useRef, useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatInterface from "./components/ChatInterface";
import Title from "./components/Title";

export interface Message {
  id: number;
  sender: "user" | "ai";
  message: string;
}

function App() {
  const endOfMessageEl = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      message: "Hello, I'm DreamBot. What did you dream about?",
    },
  ]);
  const scrollToBottom = () => {
    endOfMessageEl.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message: Message) => {
    setMessages((messages) => [...messages, message]);
  };
  return (
    <div className="bg-slate-900 min-h-screen h-full relative pt-10 px-2 flex flex-col justify-between">
      <Title />
      <ChatInterface messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
      <div ref={endOfMessageEl} />
    </div>
  );
}
export default App;
