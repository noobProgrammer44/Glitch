import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Volume2, Shield, Battery, Sparkles, Headphones, Music, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Volume2,
      title: "Adaptive Audio",
      description: "Intelligent sound that adapts to your environment in real-time",
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
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    },
    {
      title: "Fitness & Movement",
      description: "Sweat and water-resistant for any workout",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    },
    {
      title: "Travel & Commute",
      description: "Portable design with premium noise cancellation",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
  ];

  const bestSellers = [
    {
      name: "Glitch Pro",
      price: "$249",
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
      badge: "Bestseller",
    },
    {
      name: "Glitch Air",
      price: "$179",
      image: "https://images.unsplash.com/photo-1590658165737-15a047b7a1a5?w=600&q=80",
      badge: "New",
    },
    {
      name: "Glitch Max",
      price: "$299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      badge: "Premium",
    },
    {
      name: "Glitch Sport",
      price: "$149",
      image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&q=80",
      badge: "Active",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Audio Engineer",
      content: "The sound quality is absolutely phenomenal. These are hands down the best earbuds I've ever used.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Music Producer",
      content: "Glitch has redefined what premium audio means. The clarity and depth are unmatched.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Fitness Enthusiast",
      content: "Perfect for workouts. They stay secure, sound amazing, and the battery life is incredible.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
              Now Available
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Soundscapes
              <br />
              <span className="text-gradient">Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
              The best thing you've never heard
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-glow">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Product Image */}
          <div className="mt-20 animate-float">
            <img
              src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1200&q=80"
              alt="Glitch Earbuds"
              className="mx-auto w-full max-w-4xl drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 border-0 shadow-md hover:shadow-float transition-smooth bg-gradient-to-br from-background to-muted/50"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for All Occasions */}
      <section className="py-32 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Designed for all occasions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From the office to the gym, from travel to relaxation—experience premium sound everywhere
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-background shadow-md hover:shadow-float transition-smooth"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={occasion.image}
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3">{occasion.title}</h3>
                  <p className="text-muted-foreground">{occasion.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Best Sellers</h2>
            <p className="text-xl text-muted-foreground">
              Discover the most loved products by our community
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-float transition-smooth cursor-pointer"
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-white">
                    {product.badge}
                  </Badge>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-accent">{product.price}</p>
                  <Button className="w-full mt-4 bg-foreground hover:bg-foreground/90 text-background">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">What people are saying</h2>
            <p className="text-xl text-muted-foreground">Hear from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 shadow-md bg-background">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
