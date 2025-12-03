import React from "react";
import { useNavigate } from "react-router-dom";
import "./AvailableCourse.css";

const allCourses = [
  { id: 1, title: "Chat GPT for Marketing", category: "Marketing", instructor: "Brad Traversy", description: "Master Chat GPT marketing in Hindi.", duration: "10 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-1.jpg" },
  { id: 2, title: "YouTube Ads Course", category: "Advertising", instructor: "InsideCodeMedia", description: "Learn YouTube Ads effectively.", duration: "8 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-2.jpg" },
  { id: 3, title: "Write Ad Copy & Scripts", category: "Content Writing", instructor: "JuanD MeGion", description: "Copywriting & video scripts.", duration: "12 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-3.jpg" },
  { id: 4, title: "Masterclass: Beat Competition", category: "Marketing", instructor: "Anthony Alicea", description: "Outsmart your competitors.", duration: "15 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-4.jpg" },
  { id: 5, title: "Google Analytics", category: "Analytics", instructor: "Joseph Todaro", description: "Understand Google Analytics.", duration: "7 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-5.jpg" },
  { id: 6, title: "Email Marketing", category: "Marketing", instructor: "Janice Carroll", description: "Learn email campaigns.", duration: "9 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-6.jpg" },
  { id: 7, title: "Lead Gen without Website", category: "Sales", instructor: "Sara Perkins", description: "Generate leads easily.", duration: "11 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-7.jpg" },
  { id: 8, title: "Affiliate Marketing", category: "Marketing", instructor: "Wayne Patel", description: "Earn via affiliate programs.", duration: "14 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-8.jpg" },
  { id: 9, title: "Omnipresence Ads Course", category: "Advertising", instructor: "Joshua Burton", description: "Be everywhere online.", duration: "6 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-9.jpg" },
  { id: 10, title: "Facebook Ads Analytics", category: "Advertising", instructor: "Brad Traversy", description: "Analyze FB ads data.", duration: "13 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-10.jpg" },
  { id: 11, title: "Shopify Course", category: "E-commerce", instructor: "InsideCodeMedia", description: "Build Shopify stores.", duration: "10 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-11.jpg" },
  { id: 12, title: "Marketing Fundamentals", category: "Marketing", instructor: "JuanD MeGion", description: "Basics of marketing.", duration: "16 Hours", recommendedPrice: 499, status: "Available", thumbnail: "/images/course-12.jpg" },
];

export default function AvailableCourses() {
  const navigate = useNavigate();

 const handleRowClick = (id) => {
  navigate(`/courses/preview/${id}`);
};


  return (
    <div className="ac-container">
      <h2 className="page-title">Available Courses</h2>
      <p className="page-subtitle">Total Courses: {allCourses.length}</p>

      <table className="courses-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Category</th>
            <th>Instructor</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Price (₹)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allCourses.map((course, idx) => (
            <tr
              key={course.id}
              onClick={() => handleRowClick(course.id)}
              style={{ cursor: "pointer" }}
            >
              <td>{idx + 1}</td>
              <td>{course.title}</td>
              <td>{course.category}</td>
              <td>{course.instructor}</td>
              <td>{course.description}</td>
              <td>{course.duration}</td>
              <td>{course.recommendedPrice}</td>
              <td>
                <span className={`status ${course.status.toLowerCase()}`}>
                  {course.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
