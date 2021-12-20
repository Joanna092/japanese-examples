// demo.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './demo.scss';

const Demo = () => (
  <Layout>
    <h1>Demo page</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.body.appendChild(document.createElement('div')),
  )
})