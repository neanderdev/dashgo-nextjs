import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Neander de Souza</Text>
        <Text color="gray.300" fontSize="small">
          mcspipoca47@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Neander de Souza"
        src="https://github.com/neanderdev.png"
      />
    </Flex>
  );
}
