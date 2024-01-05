import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// ページのコンポーネント
// import Home from './Home';
import Article from '../Article';
import Profile from '../Profile';
import Practice from '../Practice';
import Head from './head/Head';


function Menu() {
  return (
    <div>
      <div class="head">
        <Head />
      </div>

      <Router>
        <div>
          <Practice />
        </div>

        <div>
          <nav>
            <ul>
              <li><Link to="/">ホーム</Link></li>
              <li><Link to="/article">記事</Link></li>
              <li><Link to="/profile">プロフィール</Link></li>
            </ul>
          </nav>

          {/* 各ページへのルート設定 */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/article" element={<Article />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Menu;
