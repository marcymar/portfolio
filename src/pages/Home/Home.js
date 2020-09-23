import React from 'react'
import {
  Jumbotron,
  UncontrolledCarousel
} from 'reactstrap'

const items = [
  {
    src: 'employeemanager.png',
    altText: 'Employee Manager',
    caption: 'Employee Manager',
    key: '1'
  },
  {
    src: 'project1screencap.png',
    altText: 'NutraPrep',
    caption: 'NutraPrep',
    key: '2'
  },
  {
    src: 'tractivity.png',
    altText: 'TrActivity',
    caption: 'TrActiviy',
    key: '3'
  }
]

const Home = () => {
  return (
<div>
      <UncontrolledCarousel items={items} />
      <Jumbotron>
        <h1 className="display-3">Hello, welcome to my portfolio!</h1>
        <p className="lead">Hi!  My name is Marcella Luz Ash and I am currently a student learning the ins and outs of coding.  I enjoy playing video games, photography and building computers. </p>
      </Jumbotron>
      

</div>
  )
}

export default Home
