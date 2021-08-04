import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { ISweepline, sweepline } from '../constants/sweepline'
import { Card } from './Card'
import { Title } from './Title'
import styles from '../../styles/Home.module.css'

export const Sweepline = () => {
  return (
    <React.Fragment>
      <Title title="Sweepline" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 22 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {sweepline.map((swl: ISweepline) => (
            <Box width={['100%', '100%', 1 / 3, 1 / 3]} px={5} py={3}>
              <Card {...swl}>
                <a href={swl.url} target="_blank">
                <Heading size="md">{swl.name}</Heading>
                </a>
                <Text color="gray.500">{swl.algo}</Text>
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
