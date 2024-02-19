import React from 'react';
import { Box } from '@mui/material';
import { AccentButton } from '@chainlit/react-components';

// Assuming SquarePenIcon is used for the icon, it can be replaced or removed as needed.
import SquarePenIcon from 'assets/squarePen';

export default function FeedbackButton() {
  const handleOpenFeedbackForm = () => {
    // This will open the feedback form in a new tab.
    window.open('https://forms.office.com/e/8D0yYTdfg7', '_blank');
  };

  return (
    <Box>
      <AccentButton
        id="feedback-button"
        variant="outlined"
        onClick={handleOpenFeedbackForm}
        startIcon={<SquarePenIcon />} // You can replace this icon with a feedback-related icon.
      >
        Feedback
      </AccentButton>
    </Box>
  );
}
