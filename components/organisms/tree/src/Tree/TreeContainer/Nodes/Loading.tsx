import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const TreeNodeLoading = styled((props) => (
  <Skeleton variant="rectangular" width="90%" height={53} {...props} />
))`
  margin-top: 4px;
  margin-bottom: 4px;
`;

const treeNodeLoadingCount = 5;

export const Loading = () => {
  return (
    <Stack>
      {Array(treeNodeLoadingCount)
        .fill('')
        .map((_, idx) => (
          <TreeNodeLoading key={idx} />
        ))}
    </Stack>
  );
};
