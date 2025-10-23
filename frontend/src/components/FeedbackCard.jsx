function FeedbackCard({ message, from }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition">
      <p className="text-lg">{message}</p>
      <p className="text-sm text-gray-400 mt-2">— {from || "Anonymous"}</p>
    </div>
  );
}

export default FeedbackCard;
