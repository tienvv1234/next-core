import { Box } from '@mui/system';
import * as React from 'react';

export interface IHeaderMobileProps {
}

export function HeaderMobile (props: IHeaderMobileProps) {
  return (
    <Box display={{xs: 'block', lg: 'none'}}>
      Header Mobile
    </Box>
  );
}
