import React from "react";
import { Link } from "react-router-dom";

type BlogCardProps = {
  id: number;
  title: string;
  shortDesc: string;
  image: string;
  date: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ id, title, shortDesc, image, date }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-5">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{shortDesc}</p>
        <Link
          to={`/blogs/${id}`}
          className="text-indigo-600 font-medium hover:underline"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
