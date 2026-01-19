
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlayCircle, Lock, Unlock, CheckCircle, Clock, Users, Star, ArrowRight, IndianRupee } from "lucide-react";
import toast from "react-hot-toast";

const courseDatabase = {
  1: {
    id: 1,
    title: "Chat GPT for Marketing",
    instructor: "Brad Traversy",
    thumbnail: "https://via.placeholder.com/800x450?text=Chat+GPT+for+Marketing",
    demoVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
    fullPrice: 1499, 
    originalPrice: 4999,
    duration: "10 Hours",
    lessons: 48,
    students: 3421,
    rating: 4.8,
    description: "Master ChatGPT for marketing in Hindi. Create viral content, ads, emails & funnels automatically.",
    whatYouLearn: [
      "Write high-converting Facebook & Google Ads with AI",
      "Create complete sales funnels using ChatGPT",
      "Generate 100+ social media posts in 5 minutes",
      "Automate email sequences & WhatsApp marketing"
    ],
    resellerBrand: {
      name: "Digital Gurukul Pro",
      logo: "https://via.placeholder.com/150?text=LOGO",
      supportEmail: "support@digitalgurukulpro.com"
    }
  }

};

export default function DemoAccess() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseDatabase[courseId];

  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Course Not Found</h1>
          <p>Contact your mentor for the correct link</p>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    setLoading(true);
    // Simulate payment
    setTimeout(() => {
      setUnlocked(true);
      setLoading(false);
      toast.success("Payment Successful! Course Unlocked Forever!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
   
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={course.resellerBrand.logo} alt="Brand" className="h-12 rounded-lg" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{course.resellerBrand.name}</h2>
              <p className="text-sm text-gray-600">Premium Digital Courses</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Need help?</p>
            <p className="font-semibold">{course.resellerBrand.supportEmail}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
      
          <div className="lg:col-span-2 space-y-8">
       
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="500"
                src={course.demoVideo}
                title="Course Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              ></iframe>
            </div>

            {!unlocked ? (
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 text-white shadow-2xl">
                <div className="text-center">
                  <p className="text-2xl mb-4">Unlock Full Course Access</p>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="text-4xl line-through opacity-70">₹{course.originalPrice}</span>
                    <span className="text-7xl font-extrabold">₹{course.fullPrice}</span>
                  </div>
                  <p className="text-xl mb-8">One-time payment • Lifetime Access • Certificate</p>

                  <button
                    onClick={handleBuyNow}
                    disabled={loading}
                    className="bg-white text-purple-600 font-bold text-2xl px-16 py-6 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition flex items-center gap-4 mx-auto"
                  >
                    {loading ? "Processing..." : (
                      <>
                        <IndianRupee className="w-8 h-8" />
                        Buy Now & Get Instant Access
                        <ArrowRight className="w-8 h-8" />
                      </>
                    )}
                  </button>

                  <div className="mt-8 flex items-center justify-center gap-8 text-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" /> Lifetime Access
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" /> Certificate Included
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" /> 7-Day Money Back
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-10 text-white text-center shadow-2xl">
                <CheckCircle className="w-24 h-24 mx-auto mb-6" />
                <h2 className="text-5xl font-bold mb-4">Course Unlocked!</h2>
                <p className="text-2xl mb-8">Welcome to the course! Start learning now</p>
                <button className="bg-white text-green-600 font-bold text-2xl px-16 py-6 rounded-2xl hover:shadow-2xl transform hover:scale-105 transition">
                  Start Learning Now
                </button>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">by <span className="font-bold text-purple-600">{course.instructor}</span></p>

              <div className="flex items-center gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 text-yellow-500 fill-current" />
                  <span className="text-2xl font-bold">{course.rating}</span>
                  <span className="text-gray-500">(1,234 reviews)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <span className="text-2xl font-bold">{course.students.toLocaleString()} students</span>
                </div>
              </div>

              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-gray-500" />
                  <span>{course.duration} of content</span>
                </div>
                <div className="flex items-center gap-4">
                  <PlayCircle className="w-6 h-6 text-gray-500" />
                  <span>{course.lessons} video lessons</span>
                </div>
                <div className="flex items-center gap-4">
                  <Unlock className="w-6 h-6 text-green-600" />
                  <span>Lifetime access</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t">
                <h3 className="text-2xl font-bold mb-6">What You'll Learn</h3>
                <ul className="space-y-4">
                  {course.whatYouLearn.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}