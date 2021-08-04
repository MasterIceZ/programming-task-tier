import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IBfs, bfs } from '../constants/bfs'
import { Card } from './Card'
import { Title } from './Title'
import { EAFNOSUPPORT } from 'constants'

export const BFS = () => {
  return (
    <React.Fragment>
      <Title title="Breadth First Search" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 22 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {bfs.map((bfs: IBfs) => (
            <Box width={['100%', '100%', 1 / 3, 1 / 3]} px={5} py={3}>
              <Card {...bfs}>
                <a href={bfs.url} target="_blank">
                <Heading size="md">{bfs.name}</Heading>
                </a>
                <Text color="gray.500">{bfs.algo}</Text>
              </Card>
            </Box>
          ))}
        </Flex>
      </Flex>
    </React.Fragment>
  )
}
