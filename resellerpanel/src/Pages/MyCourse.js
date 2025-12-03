import React from "react";
import "./Mycourse.css";

export default function MyCourses() {
  // Temporary free-access course list (same as Courses page)
  const courses = [
    {
      id: 1,
      title: "Chat GPT for Marketing",
      thumbnail: "https://vwxb2bonlinecourse.in/wp-content/uploads/2025/09/Chatgtp-For-Marketing-768x768.png",
      description: "Learn AI-powered marketing strategies.",
    },
    {
      id: 2,
      title: "YouTube Ads Course",
      thumbnail: "https://vwxb2bonlinecourse.in/wp-content/uploads/2025/01/Designer-2025-01-23T144824.093-768x768.jpeg",
      description: "Master YouTube ads like a pro.",
    },
    {
      id: 3,
      title: "Ad Copy & Video Script Writing",
      thumbnail: "https://vwxb2bonlinecourse.in/wp-content/uploads/2025/09/How-To-Write-Add-Copy-and-Video-Scripts-768x768.png",
      description: "Write killer ads that convert.",
    }
  ];

  return (
    <div className="my-courses">
      <h2>My Courses (Free Access)</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.title} />

            <h3>{course.title}</h3>
            <p>{course.description}</p>

            <button>Start Course</button>

            <span className="badge">Free Access</span>
          </div>
        ))}
      </div>
    </div>
  );
}
