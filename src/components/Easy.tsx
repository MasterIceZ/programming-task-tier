import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IEasy, easy } from '../constants/easy'
import { Card } from './Card'
import { Title } from './Title'
import styles from '../../styles/Home.module.css'

export const Easy = () => { 
  return (
    <React.Fragment>
      <Title title="Easy Problems" />
      <Flex
        direction="column"
        mt={6}
        width={[23 / 24, 23 / 24, 22 / 24, 22 / 24]}
        mx="auto"
      >
        <Flex flexWrap="wrap" alignItems="center">
          {easy.map((easy: IEasy) => (
            <Box width={['100%', '100%', 1 / 3, 1 / 3]} px={5} py={3}>
              <Card {...easy}>
                <a href={easy.url} target="_blank">
                <Heading size="md">{easy.name}</Heading>
                </a>
                <Text color="gray.500">{easy.algo}</Text>
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
