import { DancingDotsLoadingProps } from './DancingDotsLoading';
import { colorizeSvg } from '@avidkit/styles';
import styled from 'styled-components';

export const DotsPlayer = (props: { size?: DancingDotsLoadingProps['size'] }) => {
  let height = 0;
  let width = 0;

  switch (props.size) {
    case 'xsmall':
      height = 24;
      width = 24;
      break;
    case 'small':
      height = 48;
      width = 48;
      break;
    case 'medium':
      height = 60;
      width = 60;
      break;
    case 'large':
    default:
      height = 84;
      width = 84;
      break;
  }

  return <StyledAnimatedDots $width={width} $height={height} />;
};

const StyledAnimatedDots = styled(DotsPlayer)<{ $width?: number; $height?: number }>`
  ${({ theme }) => colorizeSvg(theme.palette.grey['500'])};
  ${({ $width }) => ($width ? `width: ${$width}px;` : '')}
  ${({ $height }) => ($height ? `height: ${$height}px;` : '')}
`;
