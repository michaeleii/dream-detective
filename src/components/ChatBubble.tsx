function ChatBubble({ message, sender }: { message: string; sender?: string }) {
  const isAI = sender === "ai";

  return isAI ? (
    <div className="flex items-end justify-start">
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
        <div>
          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 text-2xl">
            {message}
          </span>
        </div>
      </div>
      <img
        src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Tigger"
        alt="avatar"
        className="w-10 h-10 rounded-full order-1"
      />
    </div>
  ) : (
    <div className="flex items-start justify-end">
      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
        <div>
          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white text-2xl">
            {message}
          </span>
        </div>
      </div>
    </div>
  );
}
export default ChatBubble;
