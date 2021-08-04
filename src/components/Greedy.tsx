import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IGreedy, greedy } from '../constants/greedy'
import { Card } from './Card'
import { Title } from './Title'
import styles from '../../styles/Home.module.css'

export const Greedy = () => {
  return (
    <React.Fragment>
      <Title title="Greedy" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 22 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {greedy.map((greedy: IGreedy) => (
            <Box width={['100%', '100%', 1 / 3, 1 / 3]} px={5} py={3}>
              <Card {...greedy}>
                <a href={greedy.url} target="_blank">
                <Heading size="md">{greedy.name}</Heading>
                </a>
                <Text color="gray.500">{greedy.algo}</Text>
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
