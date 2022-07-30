import styled from 'styled-components';
export const Btn = styled.button`
  padding: ${props => props.theme.space[2]}px ${props => props.theme.space[3]}px;
  margin: ${props => props.theme.space[2]}px;

  border: 1px solid transparent;
  border-radius: ${props => props.theme.radii.normal};
  :hover,
  :focus {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;
