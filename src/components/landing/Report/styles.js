import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const ReportWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ReportColumn = styled.div`
  flex: 1;
  padding: 0 1rem;

  border: 2px solid #6c757d;
  border-radius: 10px;
  padding: 2rem;
`;

export const Fieldset = styled.fieldset`
  border: none;
  margin-bottom: 0;
`;
