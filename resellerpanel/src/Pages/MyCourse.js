
import React from "react";
import "../assets/css/Mycourse.css";
import { FaPlayCircle, FaLock, FaCheckCircle, FaClock, FaUserGraduate } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "ChatGPT for Marketing Mastery",
    thumbnail: "https://vwxb2bonlinecourse.in/wp-content/uploads/2025/09/Chatgtp-For-Marketing-768x768.png",
    duration: "6 hours",
    lessons: 42,
    progress: 78,
    description: "Master AI-powered marketing automation with ChatGPT.",
  },
  {
    id: 2,
    title: "YouTube Ads Pro 2025",
    thumbnail: "https://vwxb2bonlinecourse.in/wp-content/uploads/2025/01/Designer-2025-01-23T144824.093-768x768.jpeg",
    duration: "8 hours",
    lessons: 56,
    progress: 45,
    description: "Scale your business with high-ROI YouTube campaigns.",
  },
  {
    id: 3,
    title: "Ad Copy & Video Script Writing",
    thumbnail: "https://vwxb2bonlinecourse.in/wp-content/uploads/2025/09/How-To-Write-Add-Copy-and-Video-Scripts-768x768.png",
    duration: "5 hours",
    lessons: 38,
    progress: 100,
    description: "Write ads that convert cold traffic into buyers.",
  },
  {
    id: 4,
    title: "Facebook Ads Analytics Pro",
    thumbnail: "https://vwxb2bonlinecourse.in/wp-content/uploads/2025/09/Facebook-Ads-Analytics-Pro-768x768.png",
    duration: "7 hours",
    lessons: 51,
    progress: 0,
    description: "Track, analyze & optimize FB ads like a pro agency.",
  },
];

export default function MyCourses() {
  return (
    <div className="my-courses-page">
    
      <div className="header-section">
        <div className="header-content">
          <h1>My Learning Portal</h1>
          <p className="subtitle">
            Free Full Access to All Courses — For Your Training & Demo Purposes Only
          </p>
          <div className="access-badge">
            <FaUserGraduate className="icon" />
            <span>Reseller Free Access Active</span>
          </div>
        </div>
      </div>

   
      <div className="courses-container">
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="thumbnail-wrapper">
                <img src={course.thumbnail} alt={course.title} />
                <div className="play-overlay">
                  <FaPlayCircle className="play-icon" />
                </div>
                {course.progress === 100 && (
                  <div className="completed-badge">
                    <FaCheckCircle />
                    Completed
                  </div>
                )}
              </div>

              <div className="course-info">
                <h3>{course.title}</h3>

                <p className="description">{course.description}</p>

                <div className="meta">
                  <span>
                    <FaClock /> {course.duration}
                  </span>
                  <span>{course.lessons} Lessons</span>
                </div>

              
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="progress-text">{course.progress}% Complete</p>

                <button className="start-btn">
                  {course.progress > 0 ? "Continue Learning" : "Start Course"}
                </button>

                <div className="free-badge">
                  <FaLock className="lock-icon" />
                  Free Reseller Access
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="note-section">
        <p>
          These courses are provided for your personal training and client demo purposes only.<br />
          Sharing access with non-resellers violates platform policy.
        </p>
      </div>
    </div>
  );
}