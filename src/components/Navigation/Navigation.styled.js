import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  colod: #222222;

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
