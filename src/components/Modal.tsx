import React from "react";

interface ModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 relative">
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div
          className="prose prose-blue"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

export default Modal;
