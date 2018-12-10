import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'Кадастрова карта України',
    chunks: ['home'],
    component: (
      <Layout>
        <Home data={{}} />
      </Layout>
    ),
  };
}

export default action;
