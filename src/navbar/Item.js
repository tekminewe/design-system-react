import React from 'react';
import styled from 'styled-components';
import { getColor } from '../theme/color';

const StyledNavItem = styled.a`
  height: 80px;
  color: ${getColor('dark')}
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 16px;

  :hover {
    border-bottom: 1px solid black;
  }
`

const NavItem = ({ children, ...props }, ref) => {
  return (
    <StyledNavItem ref={ref} {...props}>
      {children}
    </StyledNavItem>
  )
}

export default React.forwardRef(NavItem);
