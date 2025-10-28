// Header Page
import { memo } from "react";
import React from 'react'

const Header = (props) => {
  const {title} = props;
    console.log('header props', props)
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default memo(Header);
