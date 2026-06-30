import React from 'react'
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../Pages/data/blogData';
import Title from './Title';

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full px-4 sm:px-8 lg:px-10 py-16 bg-gray-50">

      <div className="mb-10">
        <Title text1={'News & Articles'} text2={'Latest From Our Blog'}/>
       
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => navigate(`/blog/${post.id}`)}
            className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <img
              src={post.image}
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              alt=""
            />

            <div className="py-4 px-1 ">
              <p className="text-xs text-gray-400 mb-2">{post.date}</p>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default BlogSection
