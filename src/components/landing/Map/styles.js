import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
`;

export const MapWrapper = styled.div`
  padding: 4rem 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
