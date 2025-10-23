import { useEffect, useState } from "react";
import { getUserFeedback } from "../api/feedbackApi";
import { useAuth } from "../context/AuthContext";
import FeedbackCard from "../components/FeedbackCard";

function Dashboard() {
  const { user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const data = await getUserFeedback(user.token);
        setFeedbacks(data);
      } catch (error) {
        console.error("Failed to fetch feedback:", error);
      }
    };
    fetchFeedback();
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user?.email}</h1>
      <div className="grid gap-4">
        {feedbacks.length > 0 ? (
          feedbacks.map((fb) => (
            <FeedbackCard key={fb._id} message={fb.message} from={fb.from} />
          ))
        ) : (
          <p>No feedback yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
