import React from 'react';
import { Link } from 'react-router-dom';

export default function PhotoItem({ photo }) {
  console.log(photo);
  return (
    <div>
      <Link to={`${photo.id}`}>
        <ul>
          <li> 제목 : {photo.title}</li>

          <img
            src={photo.url}
            style={{ width: '200px', height: '200px' }}
            alt={photo.alt}
          ></img>
        </ul>
      </Link>
    </div>
  );
}
