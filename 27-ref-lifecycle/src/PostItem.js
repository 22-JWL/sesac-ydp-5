import React from 'react';
//부모
export default function PostItem({ post }) {
  return (
    <div>
      <div style={{ background: 'aliceblue', textAlign: 'center' }}>
        No. {post.id} - {post.title}
      </div>
      <div>{post.body}</div>
      <br></br>
    </div>
  );
}
