import { Card } from "@/components/ui/card";
import { Award, Users, Globe, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every detail, from design to sound quality",
    },
    {
      icon: Users,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge audio technology",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Committed to environmental responsibility in our manufacturing",
    },
    {
      icon: Sparkles,
      title: "Craftsmanship",
      description: "Premium materials and meticulous attention to detail",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <section className="text-center mb-32">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Redefining
              <br />
              <span className="text-gradient">Premium Audio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since our inception, Glitch has been on a mission to deliver unparalleled audio
              experiences through innovation, design, and precision engineering.
            </p>
          </section>

          {/* Story Section */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-float">
                <img
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Founded by audio enthusiasts and tech innovators, Glitch emerged from a simple
                  question: Why should you compromise between design and sound quality?
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We set out to create premium audio products that don't just sound extraordinary—they
                  look and feel extraordinary too. Every product is a testament to our commitment to
                  excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, Glitch is trusted by audio professionals, music lovers, and anyone who
                  refuses to settle for ordinary sound.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-8 border-0 shadow-md hover:shadow-float transition-smooth text-center"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Engineering Excellence */}
          <section className="bg-muted rounded-3xl p-8 md:p-16 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Engineering Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our state-of-the-art research facility brings together acoustics engineers,
                  industrial designers, and audio experts from around the world.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Each product undergoes rigorous testing and refinement, ensuring it meets our
                  exacting standards for sound quality, comfort, and durability.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just manufacture earphones—we craft audio experiences that transform
                  how you hear the world.
                </p>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-float">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                  alt="Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To redefine what premium audio means by creating products that seamlessly blend
              cutting-edge technology with timeless design, delivering experiences that sound
              as beautiful as they look.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
