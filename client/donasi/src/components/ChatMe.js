import React from 'react';
import { Box, Text } from 'native-base';

const ChatMe = ({ message }) => {
  return (
    <Box alignItems="flex-end" class="chat-me" marginY="2">
      <Box
        style={{ backgroundColor: 'rgba(100, 126, 252, 0.35)' }}
        width="75%"
        paddingX="4"
        paddingY="2"
        borderLeftRadius="10"
        borderBottomRightRadius="10"
      >
        <Text color="#2E2D2D" fontSize="13">
          {message}
        </Text>
      </Box>
    </Box>
  );
};

export default ChatMe;
