import React from 'react';
import './Posts.scss';

export const Posts = ({posts}) => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li className="post" key={post.id}>
          <h2 className="post__title">{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};