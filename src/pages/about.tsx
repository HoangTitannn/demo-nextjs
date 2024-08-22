import { Button, buttonVariants } from '@/components/ui/button'
import React from 'react'

export interface AboutProps {
  name: string
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <div className="">
      <h1>About</h1>
      <Button>Shadcn Button</Button>
      <p>{props.name}</p>
    </div>
  )
}

export default About
