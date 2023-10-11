import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductScreen() {
  const params = useParams();
  const { _id } = params;
  // console.log(params);
  return (
    <div>
      <h1>{_id}</h1>
    </div>
  );
}
