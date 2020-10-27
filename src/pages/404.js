import React from 'react';
import { Layout, SEO } from 'components/common';
import styled from 'styled-components';

const Center = styled.div`
  height: calc(100vh - 25rem);
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <Center>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Center>
  </Layout>
);
