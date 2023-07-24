import styled from 'styled-components';

import { SectionEnd } from './FilterHeader/SectionEnd';
import { SectionMiddle } from './FilterHeader/SectionMiddle';
import { SectionStart } from './FilterHeader/SectionStart';

export const FilterHeader = () => {
  return (
    <Container>
      <SectionStart />
      <SectionMiddle />
      <SectionEnd />
    </Container>
  );
};

const Container = styled.div`
  height: 48px;
  display: flex;
  margin-bottom: 24px;
`;
