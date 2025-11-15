import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Audio Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      content: "The sound quality is absolutely phenomenal. These are hands down the best earbuds I've ever used. The adaptive audio feature is a game-changer for my daily commute.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Producer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      content: "Glitch has redefined what premium audio means. The clarity and depth are unmatched. I use them for both casual listening and professional work.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      content: "Perfect for workouts. They stay secure, sound amazing, and the battery life is incredible. The noise cancellation helps me stay focused during intense sessions.",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      content: "As someone who wears earbuds all day for work, comfort is crucial. These are so comfortable I forget I'm wearing them, and the sound quality keeps me productive.",
      rating: 5,
    },
    {
      name: "Jessica Martinez",
      role: "Travel Blogger",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      content: "I've taken these on flights around the world. The noise cancellation makes flying so much more pleasant, and they're compact enough to carry everywhere.",
      rating: 5,
    },
    {
      name: "Alex Thompson",
      role: "Podcast Host",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
      content: "The call quality is outstanding. My listeners notice the difference in audio clarity. These have become an essential part of my podcasting setup.",
      rating: 5,
    },
    {
      name: "Rachel Foster",
      role: "Graphic Designer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
      content: "Not only do they sound incredible, but the design is absolutely beautiful. They're a perfect blend of form and function—exactly what I look for in tech.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      content: "Best investment I've made for studying. The noise cancellation helps me focus in the library, and the spatial audio makes my study breaks with music amazing.",
      rating: 5,
    },
    {
      name: "Olivia Brown",
      role: "Yoga Instructor",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      content: "I use these for teaching online classes and personal meditation. The sound quality is pristine, and they're so comfortable for extended wear.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              What people are
              <br />
              <span className="text-gradient">saying</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of satisfied customers experiencing premium audio
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="p-8 text-center border-0 shadow-md">
              <div className="text-5xl font-bold text-accent mb-2">50K+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </Card>
            <Card className="p-8 text-center border-0 shadow-md">
              <div className="flex items-center justify-center mb-2">
                <span className="text-5xl font-bold text-accent mr-2">4.9</span>
                <Star className="w-8 h-8 fill-accent text-accent" />
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </Card>
            <Card className="p-8 text-center border-0 shadow-md">
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Would Recommend</p>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-md hover:shadow-float transition-smooth"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonials;
