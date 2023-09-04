import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogPost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog post:', error);
      });
  }, [postId]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogPost;