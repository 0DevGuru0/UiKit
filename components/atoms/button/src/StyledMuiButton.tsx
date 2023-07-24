/* eslint-disable sonarjs/cognitive-complexity */
import styled, { css } from 'styled-components';
import MuiButton from '@mui/material/Button';

interface RootProps {
  $customSize: string;
  $focused?: boolean;
}

const paddingSize = {
  sm: '8px 12px',
  md: '8px 24px',
  lg: '14px 24px',
  xl: '16px 24px',
};

const radiusSize = {
  sm: '8px',
  md: '8px',
  lg: '8px',
  xl: '12px',
};

export const StyledMuiButton = styled(MuiButton)<RootProps>`
  ${({ $customSize, $focused, theme }) => {
    return css`
    font-family: inherit !important;
    &.MuiButton-root {
      padding: ${paddingSize[$customSize]};
      border-radius: ${radiusSize[$customSize]} !important;
      height: fit-content;
      width: fit-content;
      text-transform: none;
      color: ${theme.palette.grey[900]};
      ${theme.breakpoints.down('sm')} {
        border-radius: 65px;
      }
    }

    &.MuiButton-contained {
      background-color: ${theme.palette.grey[400]};
      border: 1px solid
        ${$focused ? theme.palette.grey[500] : theme.palette.grey[400]};
      & > p {
        color: ${theme.palette.grey[800]};
        &:last-child > p {
          background-color: ${theme.palette.grey[500]};
        }
      }
      &:hover {
        box-shadow: 0 2px 9px 0 ${theme.palette.grey[400]} !important;
        background-color: ${theme.palette.grey[400]};
        border: 1px solid ${theme.palette.grey[400]};
      }
      &:active {
        box-shadow: none;
        border: 1px solid ${theme.palette.grey[200]}
        background-color:
          ${theme.palette.grey[200] ?? 'inherit'};
        & > p {
          color: ${theme.palette.grey[400]};
        }
      }
      &:focus {
        box-shadow: none;
      }
      &:disabled {
        background-color: ${theme.palette.grey[500]};
        border: 1px solid ${theme.palette.grey[500]};
        opacity: 0.5;
        & > p {
          color: ${theme.palette.grey[100]};
          opacity: 0.5;
        }
      }
    }
    &.MuiButton-outlined {
      opacity: 1 !important;
      & > p {
        opacity: 1 !important;
      }
      background-color: ${theme.palette.grey[100]};
      border: 1px solid ${$focused ? theme.palette.grey[500] : theme.palette.grey[100]};
      & > padding-top {
        color: ${theme.palette.grey[800]};
        &:last-child > p {
          background-color: ${theme.palette.grey[400]}
        }
      };
      &:hover {
        box-shadow: none;
        background-color: ${theme.palette.grey[200]};
        border: 1px solid ${theme.palette.grey[200]};
      }
      &:active: {
        box-shadow: none;
        border: 1px solid ${theme.palette.grey[200]};
        background-color: ${theme.palette.grey[200] ?? 'inherit'};
        & > p {
          color: ${theme.palette.grey[600] ?? 'inherit'};
        }
      }
      &:focus {
        box-shadow: none;
        & > p {
          color: ${theme.palette.grey[200] ?? 'inherit'};
        };
      };
      &:disabled {
        background-color: ${theme.palette.grey[100]};
        border: 1px solid ${theme.palette.grey[100]};
        opacity: 0.5 !important;
        & > p {
          color: ${theme.palette.grey[800]};
          opacity: 0.5  !important;
        }
      }
    }

    &.MuiButton-containedPrimary {
      background-color: ${theme.palette.primary.main};
      border: 1px solid ${theme.palette.primary.main} !important;
      box-shadow: ${
        $focused
          ? `0 2px 12px 0 ${theme.palette.grey[600]}, 0 0 0 3px ${theme.palette.primary.light}`
          : 'none'
      };
      & > p {
        color: ${theme.palette.grey[100]};
        &:last-child > p {
          background-color: ${theme.palette.primary.dark};
        }
      }
      &:hover {
        background-color: ${theme.palette.primary[400]};
        border: 1px solid ${theme.palette.primary[400]} !important;
        box-shadow: 0 2px 9px 0 ${theme.palette.grey[600]};
        &:active {
          border: 1px solid ${theme.palette.primary[600]} !important;
        }
      }
      &:active {
        background-color:
          ${theme.palette.primary[600] ?? 'inherit'};
        border: 1px solid ${theme.palette.primary[600]} !important;
        & > p {
          color: ${theme.palette.grey[100]};
        }
      }
      &:disabled {
        background-color: ${theme.palette.primary[500]};
        opacity: 0.5 !important;
        & > p {
          color: ${theme.palette.grey[100]};
          opacity: 0.5;
        }
      }
    }

    &.MuiButton-outlinedPrimary {
      background-color: ${theme.palette.primary[900]};
      border: 1px solid ${
        !$focused ? theme.palette.primary.light : theme.palette.primary.main
      } !important;
      & > p {
        color: ${theme.palette.primary.main} !important;
        &:last-child > p {
          background-color: ${theme.palette.primary.dark};
        }
      }
      &:hover {
        border: 1px solid ${theme.palette.primary.main} !important;
        background-color: ${theme.palette.primary.main};
        box-shadow: none;
        & > p {
          color: ${theme.palette.grey[100]} !important;
        }
      }
      &:active {
        border: 1px solid ${theme.palette.primary.dark} !important;
        background-color: ${theme.palette.primary.dark ?? 'inherit'};
        & > p {
          color: ${theme.palette.grey[100]};
        }
      }
      &:focus {
        box-shadow: none;
      },
      &:disabled {
        background-color: ${theme.palette.primary.light};
        border: 1px solid ${theme.palette.primary.light};
        opacity: 0.5;
        & > p {
          color: ${theme.palette.primary.main};
          opacity: 0.5;
        }
      }
    }

    &.MuiButton-containedSecondary {
      background-color: ${theme.palette.secondary.light};
      border:1px solid ${
        !$focused ? theme.palette.secondary.light : theme.palette.secondary.main
      } !important;
      box-shadow: none;
      & > p {
        color: ${theme.palette.secondary.main};
        &:last-child > p {
          background-color: ${theme.palette.secondary.dark};
        }
      }
      &:hover {
        background-color: ${theme.palette.secondary.main} !important;
        border: 1px solid ${theme.palette.secondary.main} !important;
        box-shadow: none;
        & > p{
          color: ${theme.palette.grey[100] ?? 'inherit'};
        }
        &:active {
          border: 1px solid ${theme.palette.secondary.main} !important;
        }
      }
      &:active {
        background-color: ${theme.palette.secondary.dark};
        border: 1px solid ${theme.palette.secondary.dark} !important;
        & > p {
          color: ${theme.palette.grey[100] ?? 'inherit'};
        }
      }
      &:focus {
        background-color: ${theme.palette.secondary.light};
        & > p {
          color: ${theme.palette.secondary.main};
        }
      }
      &:disabled {
        background-color: ${theme.palette.secondary.light};
        opacity: 0.5;
        & > p {
          color: ${theme.palette.secondary.main};
          opacity: 0.5;
        }
      }
    }

    &.MuiButton-outlinedSecondary {
      background-color: ${theme.palette.secondary.main} !important;
      border: 1px solid ${theme.palette.secondary.main} !important;
      box-shadow:
        ${
          $focused &&
          `0 2px 12px 0 ${theme.palette.grey[600]}, 0 0 0 3px  ${theme.palette.secondary.light}`
        };
      & > p {
        color: ${theme.palette.grey[100]} !important;
        &:last-child > p {
          background-color: ${theme.palette.secondary[800]};
        }
      }
      &:hover {
        border: 1px solid ${theme.palette.secondary[900]} !important;
        background-color: ${theme.palette.secondary[900]} !important;
        box-shadow:${`0 2px 12px 0 ${theme.palette.grey[600]}`};
        &:active {
          border: 1px solid ${theme.palette.secondary[900]} !important;
        }
      }
      &:focus {
        border: 1px solid ${theme.palette.secondary.main};
        background-color: ${theme.palette.secondary.main};
        & > p {
          color: ${theme.palette.grey[100]} !important;
        }
        box-shadow:${`0 2px 12px 0 ${theme.palette.grey[600]}`};
      }
      &:active {
        background-color:
          ${`${theme.palette.secondary.dark} !important` ?? 'inherit'};
        box-shadow: 'none';
        border: 1px solid ${theme.palette.secondary.dark} !important;
        & > p {
          color: ${theme.palette.grey[100]} !important;
        }
      }
      &:disabled {
        background-color: ${theme.palette.secondary.main};
        border: 1px solid ${theme.palette.secondary.main};
        opacity: 0.5;
        & > p {
          color: ${theme.palette.grey[100]};
          opacity: 0.5;
        }
      }
    }

    &.MuiButton-containedError {
      background-color: ${theme.palette.error.light};
      border:1px solid ${
        !$focused ? theme.palette.error.light : theme.palette.error.main
      } !important;
      box-shadow: none;
      & > p {
        color: ${theme.palette.error.main};
        &:last-child > p {
          background-color: ${theme.palette.error.dark};
        }
      }
      &:hover {
        background-color: ${theme.palette.error.main} !important;
        border: 1px solid ${theme.palette.error.main} !important;
        box-shadow: none;
        & > p{
          color: ${theme.palette.grey[100] ?? 'inherit'};
        }
        &:active {
          border: 1px solid ${theme.palette.error.main} !important;
        }
      }
      &:active {
        background-color: ${theme.palette.error.dark};
        border: 1px solid ${theme.palette.error.dark} !important;
        & > p {
          color: ${theme.palette.grey[100] ?? 'inherit'};
        }
      }
      &:focus {
        background-color: ${theme.palette.error.light};
        & > p {
          color: ${theme.palette.error.main};
        }
      }
      &:disabled {
        background-color: ${theme.palette.error.light};
        opacity: 0.5;
        & > p {
          color: ${theme.palette.error.main};
          opacity: 0.5;
        }
      }
    }

    &.MuiButton-outlinedError {
      background-color: ${theme.palette.error.main} !important;
      border: 1px solid ${theme.palette.error.main} !important;
      box-shadow:
        ${
          $focused &&
          `0 2px 12px 0 ${theme.palette.grey[600]}, 0 0 0 3px  ${theme.palette.error.light}`
        };
      & > p {
        color: ${theme.palette.grey[100]} !important;
        &:last-child > p {
          background-color: ${theme.palette.error[800]};
        }
      }
      &:hover {
        border: 1px solid ${theme.palette.error[900]} !important;
        background-color: ${theme.palette.error[900]} !important;
        box-shadow:${`0 2px 12px 0 ${theme.palette.grey[600]}`};
        &:active {
          border: 1px solid ${theme.palette.error[900]} !important;
        }
      }
      &:focus {
        border: 1px solid ${theme.palette.error.main};
        background-color: ${theme.palette.error.main};
        & > p {
          color: ${theme.palette.grey[100]} !important;
        }
        box-shadow:${`0 2px 12px 0 ${theme.palette.grey[600]}`};
      }
      &:active {
        background-color:
          ${`${theme.palette.error.dark} !important` ?? 'inherit'};
        box-shadow: 'none';
        border: 1px solid ${theme.palette.error.dark} !important;
        & > p {
          color: ${theme.palette.grey[100]} !important;
        }
      }
      &:disabled {
        background-color: ${theme.palette.error.main};
        border: 1px solid ${theme.palette.error.main};
        opacity: 0.5;
        & > p {
          color: ${theme.palette.grey[100]};
          opacity: 0.5;
        }
      }
    }
  `;
  }}
`;
