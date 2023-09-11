import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import './css/index.css';
import user from './json/user.json';
import stats from './json/data.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      imgUrl={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="Checking" stats={stats} />
  </React.StrictMode>
);
