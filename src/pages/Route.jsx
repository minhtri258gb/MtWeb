import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page404 from './common/NoPage';
import PageHome from './home/Home';
import PageBlogs from './blogs/Blogs';
import PageContact from './contact/Contact';

export default function PageRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="blogs" element={<PageBlogs />} />
        <Route path="contact" element={<PageContact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}