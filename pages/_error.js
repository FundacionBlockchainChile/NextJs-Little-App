import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>Opps, something went wrong.</h1>
    <p>
      Try{' '}
      <Link href="/">
        <a>going back</a>
      </Link>
    </p>
    <style jsx>{`
      div {
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
      }
      h1 {
        color: red;
      }
    `}</style>
  </div>
);

export default errorPage;
