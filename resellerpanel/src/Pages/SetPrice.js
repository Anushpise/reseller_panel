
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCoursePrice } from "../Store/ResellerPriceSlice";

import toast from "react-hot-toast";

import "../assets/css/SetPrice.css";
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

export default function SetPrice() {
  const { id } = useParams();                   
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const courseId = parseInt(id); 
  const pricesFromRedux = useSelector((state) => state.resellerPrice.prices);

  const previouslySetPrice = pricesFromRedux[courseId]; 

  const course = allCourses.find((c) => c.id === courseId);

  const [price, setPrice] = useState(
    previouslySetPrice !== undefined 
      ? previouslySetPrice 
      : course?.recommendedPrice || 499
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (!course) {
      toast.error("Course not found!");
      navigate("/courses");
    }
  }, [course, navigate]);

  const handleSave = () => {
    if (!course) return;

    if (price < course.recommendedPrice) {
      setError(`Minimum ₹${course.recommendedPrice} chahiye bhai!`);
      return;
    }
    dispatch(setCoursePrice({ courseId: courseId, price: Number(price) }));

    toast.success(`Price set ho gaya → ₹${price} !`, {
      icon: "Success",
      duration: 4000,
    });

    setTimeout(() => navigate("/courses"), 1500);
  };

  if (!course) return null;

  return (
    <div className="sp-container">
      <h2>Set My Selling Price</h2>

      <div className="sp-box">
        <img src={course.thumbnail} alt={course.title} className="sp-thumb" />

        <div className="sp-info">
          <h3>{course.title}</h3>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Category:</strong> {course.category}</p>

          <p className="text-sm text-gray-600 mt-2">
            Minimum Allowed Price: <strong>₹{course.recommendedPrice}</strong>
          </p>

          {previouslySetPrice !== undefined && (
            <p className="text-green-600 font-bold text-lg mb-3">
              Current Selling Price: ₹{previouslySetPrice}
            </p>
          )}

          <div className="sp-input">
            <label className="block text-lg font-medium mb-2">
              Enter Your Price (₹):
            </label>
            <input
              type="number"
              value={price}
              min={course.recommendedPrice}
              onChange={(e) => {
                const val = e.target.value;
                setPrice(val === "" ? "" : Number(val));
                setError("");
              }}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-xl"
              placeholder={`Min ₹${course.recommendedPrice}`}
            />
            {error && <p className="sp-error mt-2">{error}</p>}
          </div>

          <div className="sp-buttons mt-8">
            <button className="sp-save sp-save-btn" onClick={handleSave}>
              Save Price
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
}