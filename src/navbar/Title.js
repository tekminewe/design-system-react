import React from 'react';
import styled from 'styled-components';
import NavItem from './Item';
import { getColor, Color } from '../theme/color';

const StyledNavTitle = styled(NavItem)`
  font-size: 1.5em;
  padding: 0;
  margin: 0;
  color: ${getColor(Color.dark)};

  :hover {
    border-bottom: unset;
  }
`

const NavTitle = ({ children, ...props }, ref) => {
  return (
    <StyledNavTitle ref={ref} {...props}>
      {children}
    </StyledNavTitle>
  )
}

export default React.forwardRef(NavTitle);
