import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);

  const products = [
    {
      id: 1,
      name: "Glitch Pro",
      price: 249,
      image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&q=80",
      badge: "Bestseller",
      rating: 5,
      category: "Earbuds",
    },
    {
      id: 2,
      name: "Glitch Air",
      price: 179,
      image: "https://images.unsplash.com/photo-1590658165737-15a047b7a1a5?w=600&q=80",
      badge: "New",
      rating: 5,
      category: "Earbuds",
    },
    {
      id: 3,
      name: "Glitch Max",
      price: 299,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      badge: "Premium",
      rating: 5,
      category: "Headphones",
    },
    {
      id: 4,
      name: "Glitch Sport",
      price: 149,
      image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=600&q=80",
      badge: "Active",
      rating: 4,
      category: "Earbuds",
    },
    {
      id: 5,
      name: "Glitch Studio",
      price: 349,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
      badge: "Pro",
      rating: 5,
      category: "Headphones",
    },
    {
      id: 6,
      name: "Glitch Lite",
      price: 99,
      image: "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=600&q=80",
      badge: "Budget",
      rating: 4,
      category: "Earbuds",
    },
    {
      id: 7,
      name: "Glitch Elite",
      price: 399,
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&q=80",
      badge: "Flagship",
      rating: 5,
      category: "Headphones",
    },
    {
      id: 8,
      name: "Glitch Go",
      price: 129,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
      badge: "Travel",
      rating: 4,
      category: "Earbuds",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Shop</h1>
            <p className="text-xl text-muted-foreground">
              Explore our premium collection of audio products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-6">Filters</h3>

                {/* Category */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="earbuds">Earbuds</SelectItem>
                      <SelectItem value="headphones">Headphones</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Price Range</label>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500}
                    step={10}
                    className="mb-3"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Rating</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Ratings" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4+ Stars</SelectItem>
                      <SelectItem value="3">3+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90">Apply Filters</Button>
              </Card>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Sort */}
              <div className="flex justify-between items-center mb-8">
                <p className="text-muted-foreground">{products.length} Products</p>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Card
                    key={product.id}
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
                      <p className="text-xs text-muted-foreground mb-2">{product.category}</p>
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating
                                ? "fill-accent text-accent"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-2xl font-bold text-accent mb-4">${product.price}</p>
                      <Button className="w-full bg-foreground hover:bg-foreground/90 text-background">
                        Add to Cart
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
