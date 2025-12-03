import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CoursePreview.css";

const allCourses = [
  { id: 1, title: "Chat GPT for Marketing", category: "Marketing", instructor: "Brad Traversy", description: "Master Chat GPT marketing in Hindi.", duration: "10 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Chat+GPT+for+Marketing" },
  { id: 2, title: "YouTube Ads Course", category: "Advertising", instructor: "InsideCodeMedia", description: "Learn YouTube Ads effectively.", duration: "8 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=YouTube+Ads+Course" },
  { id: 3, title: "Write Ad Copy & Scripts", category: "Content Writing", instructor: "JuanD MeGion", description: "Copywriting & video scripts.", duration: "12 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Write+Ad+Copy+%26+Scripts" },
  { id: 4, title: "Masterclass: Beat Competition", category: "Marketing", instructor: "Anthony Alicea", description: "Outsmart your competitors.", duration: "15 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Masterclass+Beat+Competition" },
  { id: 5, title: "Google Analytics", category: "Analytics", instructor: "Joseph Todaro", description: "Understand Google Analytics.", duration: "7 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Google+Analytics" },
  { id: 6, title: "Email Marketing", category: "Marketing", instructor: "Janice Carroll", description: "Learn email campaigns.", duration: "9 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Email+Marketing" },
  { id: 7, title: "Lead Gen without Website", category: "Sales", instructor: "Sara Perkins", description: "Generate leads easily.", duration: "11 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Lead+Gen+without+Website" },
  { id: 8, title: "Affiliate Marketing", category: "Marketing", instructor: "Wayne Patel", description: "Earn via affiliate programs.", duration: "14 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Affiliate+Marketing" },
  { id: 9, title: "Omnipresence Ads Course", category: "Advertising", instructor: "Joshua Burton", description: "Be everywhere online.", duration: "6 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Omnipresence+Ads+Course" },
  { id: 10, title: "Facebook Ads Analytics", category: "Advertising", instructor: "Brad Traversy", description: "Analyze FB ads data.", duration: "13 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Facebook+Ads+Analytics" },
  { id: 11, title: "Shopify Course", category: "E-commerce", instructor: "InsideCodeMedia", description: "Build Shopify stores.", duration: "10 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Shopify+Course" },
  { id: 12, title: "Marketing Fundamentals", category: "Marketing", instructor: "JuanD MeGion", description: "Basics of marketing.", duration: "16 Hours", recommendedPrice: 499, status: "Available", thumbnail: "https://via.placeholder.com/400x200?text=Marketing+Fundamentals" },
];

export default function CoursePreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = allCourses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="cp-container">
        <h2>Course Not Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="cp-container">
      <h2>Course Preview</h2>

      <div className="cp-box">
        <img src={course.thumbnail} className="cp-thumb" alt={course.title} />

        <div className="cp-info">
          <h3>{course.title}</h3>
          <p className="cp-desc">{course.description}</p>

          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Category:</strong> {course.category}</p>
          <p><strong>Duration:</strong> {course.duration}</p>

          <p className="cp-rec">
            Recommended Price: <strong>₹{course.recommendedPrice}</strong>
          </p>

          <button
            className="cp-btn"
            onClick={() => navigate(`/courses/price/${course.id}`)}
          >
            💰 Set My Selling Price
          </button>
        </div>
      </div>
    </div>
  );
}
