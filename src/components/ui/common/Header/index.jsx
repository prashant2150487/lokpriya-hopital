import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">MediCare Hospital</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/home"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/departments"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            Departments
          </Link>
          <Link
            to="/doctors"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            Doctors
          </Link>
          <Link
            to="/testimonials"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            About
          </Link>
          <Link
            to="/faq"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/news"
            className="text-sm font-medium hover:text-rose-500 transition-colors"
          >
            News
          </Link>
          <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
            Contact Us
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Header;
