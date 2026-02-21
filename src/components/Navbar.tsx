import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const quickLinks = [
    { name: "AirPods Pro", category: "Popular" },
    { name: "Wireless Earbuds", category: "Popular" },
    { name: "Noise Cancelling", category: "Features" },
    { name: "Premium Sound", category: "Features" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          searchOpen
            ? "bg-white"
            : scrolled
            ? "bg-white/70 backdrop-blur-2xl shadow-sm border-b border-gray-100"
            : "bg-white/40 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className={`flex items-center group transition-opacity duration-300 ${
                searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <div className="text-xl font-semibold tracking-tight flex items-center">
                <span className="text-gray-900 transition-all duration-300 group-hover:text-gray-600">
                  Glitch
                </span>
                <span className="text-blue-500 text-2xl leading-none transition-all duration-300 group-hover:scale-110">
                  .
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div
              className={`hidden lg:flex items-center justify-center flex-1 px-12 transition-opacity duration-300 ${
                searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 rounded-full group ${
                      location.pathname === link.path
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute inset-0 bg-gray-100 rounded-full -z-10 transition-all duration-300" />
                    )}
                    <span className="absolute inset-0 bg-gray-50 rounded-full opacity-0 group-hover:opacity-100 -z-10 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Bar - Expanded State */}
            <div
              className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-300 ${
                searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for products, features, or accessories..."
                    className="w-full h-11 pl-12 pr-12 bg-gray-100 rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-900 transition-colors duration-200"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Icons */}
            <div
              className={`flex items-center space-x-2 transition-opacity duration-300 ${
                searchOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="hidden sm:flex h-9 w-9 rounded-full hover:bg-gray-100 transition-all duration-300 group"
              >
                <Search className="h-4 w-4 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex h-9 w-9 rounded-full hover:bg-gray-100 transition-all duration-300 group relative"
              >
                <Heart className="h-4 w-4 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex h-9 w-9 rounded-full hover:bg-gray-100 transition-all duration-300 group relative"
              >
                <ShoppingBag className="h-4 w-4 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
                  2
                </span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-9 w-9 rounded-full hover:bg-gray-100 transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-900" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-900" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Overlay - Apple Style */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          searchOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
          onClick={() => setSearchOpen(false)}
        />

        {/* Search Content */}
        <div
          className={`absolute top-14 left-0 right-0 bg-white transition-all duration-500 ${
            searchOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-8">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="text-left">
                      <div className="text-sm font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                        {link.name}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {link.category}
                      </div>
                    </div>
                    <Search className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Press{" "}
                <kbd className="px-2 py-1 bg-gray-100 rounded text-gray-700 font-mono">
                  ESC
                </kbd>{" "}
                to close
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-14 left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-2xl transition-all duration-500 ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="space-y-1 mb-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-gray-900 bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 30}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center justify-center space-x-4 pt-6 border-t border-gray-200">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="h-12 w-12 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <Search className="h-5 w-5 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 relative"
              >
                <Heart className="h-5 w-5 text-gray-600" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-12 w-12 rounded-full bg-gray-50 hover:bg-gray-100 transition-all duration-300 relative"
              >
                <ShoppingBag className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
