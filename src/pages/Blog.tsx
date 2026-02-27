// src/pages/Blog.jsx
import React, { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import Modal from "../components/Modal";

function Blog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const openModal = (post) => {
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.metaDescription}</p>
            <button
              onClick={() => openModal(post)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && currentPost && (
        <Modal
          title={currentPost.title}
          content={currentPost.content}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Blog;
