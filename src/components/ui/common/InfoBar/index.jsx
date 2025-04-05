import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const InfoBar = () => {
  return (
    <div className="w-full bg-gray-100 py-2 hidden md:block">
      <div className="container flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4 text-rose-500" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4 text-rose-500" />
            <span>info@medicarehospital.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="#" className="hover:text-rose-500">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link to="#" className="hover:text-rose-500">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link to="#" className="hover:text-rose-500">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link to="#" className="hover:text-rose-500">
            <Linkedin className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
