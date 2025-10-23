import { useState } from "react";
import { useParams } from "react-router-dom";
import { submitFeedback } from "../api/feedbackApi";

function PublicProfile() {
  const { username } = useParams();
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFeedback(username, message);
      setSuccess("Feedback sent successfully!");
      setMessage("");
    } catch (error) {
      setSuccess("Failed to send feedback");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Send Feedback to @{username}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Write your feedback..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none h-32 resize-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold"
          >
            Submit Feedback
          </button>
          {success && <p className="text-green-400 text-center mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default PublicProfile;
