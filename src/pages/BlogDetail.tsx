import { useParams, Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl font-bold text-gray-700">Blog Not Found</h2>
        <Link to="/blogs" className="text-indigo-600 mt-4 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <img src={blog.image} alt={blog.title} className="rounded-xl mb-6 w-full h-80 object-cover" />
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-8">{blog.date}</p>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
        <Link to="/blogs" className="text-indigo-600 mt-6 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
