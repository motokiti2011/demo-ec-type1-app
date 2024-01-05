import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Article from '../../Article';
import Profile from '../../Profile';


function Head() {
  return (
    <Router>

      <div>
        <nav>
          <ul>
            <li><Link to="/">プロフィール管理</Link></li>
            <li><Link to="/article">商品管理</Link></li>
            <li><Link to="/profile">購入履歴</Link></li>
            <li><Link to="/profile">メッセージ一覧</Link></li>
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
  );
}

export default Head;