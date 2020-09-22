import React from 'react';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import { Wrapper, MapWrapper } from './styles';

export const Map = () => (
  <Wrapper>
    <Header />
    <MapWrapper as={Container} style={{ flexDirection: 'column' }}>
      <h2>철봉, 평행봉 위치 & 정보</h2>
    </MapWrapper>
    <MapWrapper as={Container} id="map">
      <iframe
        title="bongmap"
        src="https://www.google.com/maps/d/u/2/embed?mid=11kYLp9pIoh-RV3Rj8sIyrT_vmZmqmim-"
        width="100%"
        height="600"
        frameBorder="0"
        style={{ border: 0 }}
      ></iframe>
    </MapWrapper>
  </Wrapper>
);
