import { Scrollbar } from '@avidkit/scrollbar';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  & > div:first-child {
    width: 25%;
    background-color: #f4f4f4;
    height: 100%;
  }
  & > div:last-child {
    width: 75%;
    height: 100%;
  }
`;

const PartWrapper = styled.div`
  padding: 24px;
  height: 100%;
  & > div {
    height: 100%;
  }
`;

export interface ThinFatLayoutProps {
  thinElement: any;
  fatElement: any;
  className?: string;
}

export const ThinFatLayout = ({
  thinElement,
  fatElement,
  className,
}: ThinFatLayoutProps) => {
  const ThinElement = thinElement;
  const FatElement = fatElement;

  return (
    <Wrapper className={className}>
      <Scrollbar className="AK_ThinElement">
        <PartWrapper>
          <ThinElement />
        </PartWrapper>
      </Scrollbar>
      <Scrollbar className="AK_FatElement">
        <PartWrapper>
          <FatElement />
        </PartWrapper>
      </Scrollbar>
    </Wrapper>
  );
};
