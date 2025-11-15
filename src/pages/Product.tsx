import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingBag, Heart, Share2, Shield, Truck, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const features = [
    {
      title: "Adaptive Audio",
      description: "Automatically adjusts to your environment for optimal sound",
    },
    {
      title: "Conversation Awareness",
      description: "Lowers volume when you start speaking",
    },
    {
      title: "Personalized Spatial Audio",
      description: "Immersive 3D sound tailored to your ears",
    },
    {
      title: "Active Noise Cancellation",
      description: "Industry-leading noise cancellation technology",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="aspect-square rounded-3xl overflow-hidden bg-muted shadow-float">
                  <img
                    src="https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=1200&q=80"
                    alt="Glitch Pro"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:pl-8">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">New Arrival</Badge>
              <h1 className="text-5xl font-bold mb-4">Glitch Pro</h1>
              <div className="flex items-center mb-6">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-muted-foreground">(234 reviews)</span>
              </div>

              <p className="text-4xl font-bold text-accent mb-8">$249</p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Experience audio like never before with the Glitch Pro. Featuring adaptive audio technology,
                conversation awareness, and personalized spatial audio for an immersive listening experience.
              </p>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted transition-smooth"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted transition-smooth"
                  >
                    +
                  </button>
                </div>
                <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90 shadow-glow">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              <div className="flex gap-3 mb-8">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-5 w-5" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t">
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">2-Year Warranty</p>
                </div>
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-sm font-medium">30-Day Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Your Ears Only Section */}
          <section className="py-20 mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">For your ears only.</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Personalized audio that adapts to you, creating the perfect listening experience every time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-8 border-0 shadow-md hover:shadow-float transition-smooth"
                >
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* Intelligent Noise Control */}
          <section className="py-20 bg-muted rounded-3xl px-8 md:px-16 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Intelligent noise control
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Advanced Active Noise Cancellation adapts to your environment, blocking out
                  unwanted noise while letting important sounds through.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transparency mode keeps you aware of your surroundings when you need it,
                  seamlessly blending your audio with the world around you.
                </p>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-float">
                <img
                  src="https://images.unsplash.com/photo-1590658165737-15a047b7a1a5?w=800&q=80"
                  alt="Noise Control"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Conversation Awareness */}
          <section className="py-20 bg-muted rounded-3xl px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-square rounded-2xl overflow-hidden shadow-float">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
                  alt="Conversation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Conversation awareness
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  When you start speaking, your audio automatically lowers and ambient noise
                  reduction reduces, making it easier to have natural conversations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your audio seamlessly returns when your conversation ends, without you
                  having to touch a thing.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
