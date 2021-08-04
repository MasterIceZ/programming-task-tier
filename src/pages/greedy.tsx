import { Flex } from '@chakra-ui/core'
import { Greedy } from '../components/Greedy'

const greedy = () => {
    return (
        <Flex direction="column" my={20}>
            <Greedy/>
        </Flex>
    )
}

export default greedy
