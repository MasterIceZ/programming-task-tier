import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IMath, math } from '../constants/math'
import { Card } from './Card'
import { Title } from './Title'
import styles from '../../styles/Home.module.css'
import { EAFNOSUPPORT } from 'constants'

export const Math = () => {
  return (
    <React.Fragment>
      <Title title="Math" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 22 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {math.map((bfs: IMath) => (
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
      <div className={styles.footer}>
        <div className={styles.back}>
          <a href="./">
            Back
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}
