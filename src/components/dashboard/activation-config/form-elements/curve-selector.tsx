'use client';
import { Box, FormControl, MenuItem, Select, Tooltip } from '@mui/material';

/**
 * currently redundant as there is only one available\
 * curve profile,
 * hence why there isn't any interactivity yet
 */
export function CurveSelector() {
  return (
    <Box>
      <Tooltip title={'NOTE: this feature is unimplemented, only Constant is available'}>
        <FormControl>
          <Select value={'CONSTANT'}>
            <MenuItem value={'CONSTANT'}>Constant</MenuItem>
          </Select>
        </FormControl>
      </Tooltip>
    </Box >
  );
}
