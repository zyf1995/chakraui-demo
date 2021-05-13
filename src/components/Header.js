import React from 'react'
import { Box, Stack, Text} from '@chakra-ui/react'

function Header() {
  return (
    <Box h="60px" bg="gray.200">
      <Box w="80%" m="auto" overflow="hidden">
        <Stack
          spacing={8}
          direction="horizontal"
          ml={8}
          h="60px"
          float="left"
          align="center"
        >
          <Text color="red.700" fontWeight="semibold" fontSize="lg">简书登录</Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default Header
