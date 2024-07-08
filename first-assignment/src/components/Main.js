import React from 'react';

import Product from './Product';

import Category from './Category';

export default function Main() {
  return (
    <div>
      <div className="container">
        <h4>Main Component</h4>
        <div className="row">
          <div className="col-3">
            <Category />
          </div>
          <div className="col-9">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
