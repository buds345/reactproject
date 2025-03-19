const Message = ({ message, userId }) => {
  const isUserMessage = message.userId === userId;

  return (
    <div style={{ textAlign: isUserMessage ? "right" : "left", margin: "10px" }}>
      <p style={{ background: isUserMessage ? "#007bff" : "#f1f1f1", padding: "10px", borderRadius: "10px", color: isUserMessage ? "#fff" : "#000" }}>
        {message.text}
      </p>
      {message.imageUrl && <img src={message.imageUrl} alt="Media" style={{ maxWidth: "200px", borderRadius: "8px" }} />}
    </div>
  );
};

export default Message;

