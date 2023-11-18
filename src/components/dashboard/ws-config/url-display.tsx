'use client';
import { ContentCopy as ContentCopyIcon } from '@mui/icons-material';
import { Chip, Tooltip } from '@mui/material';

interface UrlDisplayProps {
  url: string;
}

export default function UrlDisplay(props: UrlDisplayProps) {
  /**
   * handles click for clipboard copy
   */
  const handleClick = () => navigator.clipboard.writeText(props.url);

  return (
    <>
      <Tooltip title='Click to copy to clipboard'>
        <Chip sx={{ color: 'white', backgroundColor: '#343438' }}
          label={props.url}
          icon={<ContentCopyIcon />}
          onClick={() => handleClick()}
        />
      </Tooltip>
    </>
  );
}
