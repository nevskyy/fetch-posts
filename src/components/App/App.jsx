import React, { useState, useEffect } from 'react';
import { getPosts } from '../../getPosts';
import {Posts} from '../Posts';
import  {Error} from '../Error';
import './App.scss';

// getPosts().then(data => console.log(data))
// console.log(getPosts());

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(true);

  // console.log(getPosts().then(setPosts));

  useEffect(() => {
    if (!error) {
      setTimeout(() => {
        getPosts()
          // .then(setPosts)
          .then(data => setPosts(data))
          .catch(() => setError(true));
      }, 3000)
    }
  }, [error])

  return (
    <div className='App'>
      {error ? (
        <Error callBack={setError} />
      ) : !posts.length ? (
        <h2>Loading...</h2>
      ) : (
        <Posts posts={posts} />
      )}
    </div>
  );
}
