import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-weight: 600;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: skyblue;
  }

  :not(:last-child) {
    margin-right: 20px;
  }
`;
