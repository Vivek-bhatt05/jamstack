// BlogList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from JSONPlaceholder API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
