import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const posts = [
    {
      title: "The Science Behind Adaptive Audio",
      excerpt: "Discover how our adaptive audio technology automatically adjusts to your environment for the perfect listening experience.",
      image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=800&q=80",
      category: "Technology",
      date: "Nov 15, 2024",
      readTime: "5 min read",
    },
    {
      title: "Designing for the Future of Sound",
      excerpt: "A behind-the-scenes look at our design process and how we create products that are both beautiful and functional.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      category: "Design",
      date: "Nov 10, 2024",
      readTime: "7 min read",
    },
    {
      title: "Active Noise Cancellation Explained",
      excerpt: "Understanding the technology that blocks out the world and lets you focus on what matters most.",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80",
      category: "Technology",
      date: "Nov 5, 2024",
      readTime: "6 min read",
    },
    {
      title: "Spatial Audio: A New Dimension",
      excerpt: "How personalized spatial audio creates an immersive 3D sound experience tailored to your unique hearing profile.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
      category: "Features",
      date: "Oct 28, 2024",
      readTime: "8 min read",
    },
    {
      title: "Sustainability in Audio Manufacturing",
      excerpt: "Our commitment to environmental responsibility and how we're building a more sustainable future.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      category: "Sustainability",
      date: "Oct 20, 2024",
      readTime: "5 min read",
    },
    {
      title: "The Perfect Fit: Comfort Meets Technology",
      excerpt: "How we engineered our earbuds to provide all-day comfort without compromising on premium sound quality.",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      category: "Design",
      date: "Oct 15, 2024",
      readTime: "4 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Blog</h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Insights, stories, and updates from the world of premium audio
            </p>
          </div>

          {/* Featured Post */}
          <Card className="mb-20 overflow-hidden border-0 shadow-float hover:shadow-glow transition-smooth cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover hover:scale-110 transition-smooth"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-accent/10 text-accent border-accent/20">
                  Featured
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{posts[0].date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{posts[0].readTime}</span>
                </div>
                <div className="flex items-center text-accent font-medium group">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-smooth" />
                </div>
              </div>
            </div>
          </Card>

          {/* All Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-md hover:shadow-float transition-smooth cursor-pointer"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-accent/10 text-accent border-accent/20">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-smooth">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
