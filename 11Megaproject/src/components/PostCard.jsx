import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const url = await appwriteService.getFilePreview(featuredImage);
        setPreviewUrl(url);
      } catch (error) {
        console.error("Error fetching preview:", error);
        // Handle error gracefully (e.g., display a placeholder image)
        setPreviewUrl('/path/to/placeholder.jpg'); 
      }
    };

    if (featuredImage) {
      fetchPreview();
    }
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 '>
        <div className='w-full justify-center mb-4'>
          <img 
            src={previewUrl} 
            alt={title} 
            className='rounded-xl' 
          />
        </div>
        <h2 className='text-xl font-bold font-serif'>
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;