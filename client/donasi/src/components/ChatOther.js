import React from 'react';
import { Box, Text } from 'native-base';

const ChatOther = ({ message }) => (
  <Box alignItems="flex-start" class="chat-me" marginY="2">
    <Box
      bgColor="#F7CAC9"
      width="75%"
      paddingX="4"
      paddingY="2"
      borderRightRadius="10"
      borderBottomLeftRadius="10"
    >
      <Text color="#2E2D2D" fontSize="13">
        {message}
      </Text>
    </Box>
  </Box>
);

export default ChatOther;
