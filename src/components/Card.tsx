import React from 'react'
import { Box, PseudoBox } from '@chakra-ui/core'
import Image from 'next/image'

const boxConfig = {
  boxShadow: 'md',
  rounded: 'md',
  _hover: { boxShadow: 'xl' },
  transition: '0.2s',
}

const padding = {
  p: 6,
}

export const Card = (props) => {
  return (
    <React.Fragment>
      {props.img ? (
        <PseudoBox {...boxConfig}>
          <Box {...padding}>{props.children}</Box>
        </PseudoBox>
      ) : (
        <PseudoBox {...padding} {...boxConfig}>
          {props.children}
        </PseudoBox>
      )}
    </React.Fragment>
  )
}
