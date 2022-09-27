import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-weight: 400;

  &.active {
    color: red;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: skyblue;
  }

  :not(:last-child) {
    margin-bottom: 5px;
  }
`;
