import React from 'react';
import { Layout, SEO } from 'components/common';
import { Map, Report } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Map />
    <Report />
  </Layout>
);
