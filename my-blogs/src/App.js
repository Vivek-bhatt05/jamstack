import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogList from './components/Bloglist';
import BlogPost from './components/BlogPost';


function App() {
  return (
      <div>
       <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/post/:postId" element={<BlogPost />} />
       </Routes>
      </div>
  );
}

export default App;