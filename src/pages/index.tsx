import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { Card } from '../components/Card'
import { ICont, contents } from '../constants/cont'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { style } from 'styled-system'
import { FaGithubAlt } from 'react-icons/fa'

const IndexPage = () => {
  return (
    <Flex direction="column" my={20}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Task Tier
        </h1>
      </main>
      <Flex flexWrap="wrap" alignItems="center">
        {contents.map((cont: ICont) => (
          <Box width={['100%', '100%', 1 / 3, 1 / 3]} px={5} py={3}>
            <Card {...cont}>
              <a href={cont.url} target="_blank">
                <Heading size="md">{cont.name}</Heading>
              </a>
            </Card>
          </Box>
        ))}
      </Flex>
      <div className={styles.footer}>
        <Text color="gray.500">
          Provied by Hydrolyzed (2021)
        </Text>
        
      </div>
    </Flex>
  )
}

export default IndexPage
