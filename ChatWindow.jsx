import { useEffect } from "react";
import { sendMessage, fetchMessages } from "../services/chatService";
import { useChat } from "../context/ChatContext";
import { useAuth } from "../context/AuthContext";

const ChatWindow = () => {
  const { messages, setMessages } = useChat();
  const { user } = useAuth();
  const [text, setText] = useState("");

  useEffect(() => {
    const unsubscribe = fetchMessages(setMessages);
    return () => unsubscribe();
  }, []);

  const handleSendMessage = async () => {
    if (text.trim() === "") return;
    await sendMessage(user.uid, text);
    setText("");
  };

  return (
    <div>
      <div>
        {messages.map((msg) => (
          <p key={msg.id}>{msg.text}</p>
        ))}
      </div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatWindow;
