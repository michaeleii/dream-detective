import { Message } from "../App";
import ChatBubble from "./ChatBubble";

function ChatInterface({ messages }: { messages: Message[] }) {
  return (
    <main className="flex-1 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-y-auto">
        <div className="flex-1">
          <div className="flex flex-col space-y-3">
            {messages.map((msg) => (
              <ChatBubble
                key={msg.id}
                message={msg.message}
                sender={msg.sender}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default ChatInterface;
