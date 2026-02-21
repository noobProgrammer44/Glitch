import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Volume2,
  Shield,
  Battery,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "Soundscapes",
      subtitle: "Redefined",
      tagline: "The best thing you've never heard",
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1920&q=80",
      badge: "Now Available",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Pure",
      subtitle: "Immersion",
      tagline: "Experience audio like never before",
      image:
        "https://images.unsplash.com/photo-1649859394657-95c372ae0b6e?w=1920&q=80",
      badge: "Premium Edition",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Intelligent",
      subtitle: "Noise Control",
      tagline: "Adaptive technology that listens",
      image:
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1920&q=80",
      badge: "Next Gen ANC",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
  ];

  const features = [
    {
      icon: Volume2,
      title: "Adaptive Audio",
      description:
        "Intelligent sound that adapts to your environment in real-time",
    },
    {
      icon: Shield,
      title: "Active Noise Cancellation",
      description: "Industry-leading ANC blocks out unwanted noise",
    },
    {
      icon: Battery,
      title: "All-Day Battery",
      description: "Up to 30 hours of listening time with charging case",
    },
    {
      icon: Sparkles,
      title: "Spatial Audio",
      description: "Immersive 3D sound experience for movies and music",
    },
  ];

  const occasions = [
    {
      title: "Work & Focus",
      description: "Crystal-clear calls and distraction-free productivity",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      title: "Fitness & Movement",
      description: "Sweat and water-resistant for any workout",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    },
    {
      title: "Travel & Commute",
      description: "Portable design with premium noise cancellation",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
  ];

  const bestSellers = [
    {
      name: "Glitch Pro",
      price: "$249",
      image:
        "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
      badge: "Bestseller",
    },
    {
      name: "Glitch Air",
      price: "$179",
      image:
        "https://images.unsplash.com/photo-1590658165737-15a047b7a1a5?w=600&q=80",
      badge: "New",
    },
    {
      name: "Glitch Max",
      price: "$299",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      badge: "Premium",
    },
    {
      name: "Glitch Sport",
      price: "$149",
      image:
        "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&q=80",
      badge: "Active",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Audio Engineer",
      content:
        "The sound quality is absolutely phenomenal. These are hands down the best earbuds I've ever used.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Producer",
      content:
        "Glitch has redefined what premium audio means. The clarity and depth are unmatched.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Fitness Enthusiast",
      content:
        "Perfect for workouts. They stay secure, sound amazing, and the battery life is incredible.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Carousel Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b ${slide.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center px-6 max-w-5xl mx-auto">
                <Badge className="mb-6 bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 text-sm px-4 py-1">
                  {slide.badge}
                </Badge>
                <h1 className="text-7xl md:text-9xl font-bold tracking-tight mb-4 text-white">
                  {slide.title}
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="text-xl md:text-3xl text-white/90 mb-12 font-light tracking-wide">
                  {slide.tagline}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100 shadow-2xl px-8 py-6 text-base font-medium rounded-full"
                  >
                    Shop Now
                  </Button>
                  <Button
                    size="lg"
                    className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 backdrop-blur-md px-8 py-6 text-base font-medium rounded-full transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center group z-10"
        >
          <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 flex items-center justify-center group z-10"
        >
          <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div> */}
      </section>

      {/* Features Section - Apple Light Style */}
      <section className="relative py-40 px-6 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          {/* Minimal Section Header */}
          <div className="text-center mb-32">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">
              Pure{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Technology designed to elevate every moment
            </p>
          </div>

          {/* Feature Cards - Clean Alternating Layout */}
          <div className="space-y-40">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-20 group`}
              >
                {/* Icon Side - Minimalist Circle */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    {/* Subtle gradient glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60 scale-150" />

                    {/* Main icon container */}
                    <div className="relative w-64 h-64 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:shadow-2xl group-hover:scale-105 transition-all duration-700 border border-gray-200/50">
                      <feature.icon
                        className="w-28 h-28 text-gray-900"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Minimal accent dots */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-80" />
                    <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-70" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-xl">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <button className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 mt-4">
                    <span className="text-lg font-medium">Learn more</span>
                    <svg
                      className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for All Occasions */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
              Designed for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                all occasions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              From the office to the gym, from travel to relaxation—experience
              premium sound everywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {occasion.title}
                  </h3>
                  <p className="text-gray-600">{occasion.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Best Sellers
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Discover the most loved products by our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden bg-gray-100 relative">
                  <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    {product.badge}
                  </Badge>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    {product.price}
                  </p>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full py-6">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900">
              What people are{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                saying
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-lg bg-gray-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed text-gray-700">
                  {testimonial.content}
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
