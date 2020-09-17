import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
  </Layout>
);
