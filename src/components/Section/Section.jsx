import { Box } from 'components/Box/Box';
export const Section = ({ title, children }) => (
  <Box as="section">
    <h1>{title}</h1>
    {children}
  </Box>
);
