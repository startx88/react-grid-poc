import React, { Suspense } from 'react';
import Spinner from '../UI/Spinner/Spinner'
import Layout from '../layout'
import Router from '../Router';

function App() {
  return (
    <Suspense fallback={<Spinner fixed color="1699cc" svgWidthHeight="100" />}>
      <Layout>
        <Router />
      </Layout>
    </Suspense>
  );
}

export default App;
