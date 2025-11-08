
const ChatMessae = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmADCanENXbPEIU8BSSP8tofT9ydhrTCBaw&s"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessae;
