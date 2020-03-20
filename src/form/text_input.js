import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColor } from '../color';
import { Text } from '../typography';
import { Column } from '../layout';
import { transparentize } from 'polished';

const StyledInput = styled.input`
  display: flex;
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${({ error }) => error ? transparentize(0.9, getColor('danger')) : 'transparent'};
  border: 1px solid ${({ error }) => error ? getColor('danger') : getColor('light')};
  border-radius: 0.5em;

  :focus {
    border: 1px solid ${({ error }) => error ? getColor('danger') : getColor('secondary')};
  }
`

const InputContainer = styled(Column)`
  align-items: stretch;
`

const TextInput = React.forwardRef(({ error, ...props }, ref) => (
  <InputContainer>
    <StyledInput ref={ref} {...props} />
    {error && (<Text color="danger">{error}</Text>)}
  </InputContainer>
))

TextInput.defaultProps = {
  error: '',
}

TextInput.propTypes = {
  /**
   * Value of the input
   */
  value: PropTypes.string,

  /**
   * Error message of the input
   */
  error: PropTypes.string,
}

export default TextInput;