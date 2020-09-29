import React from 'react'
import '../../App.css'
import project1 from './assets/project1screencap.png'
import project2 from './assets/tractivity.png'
import employeemanager from './assets/employeemanager.png'
import {
  Jumbotron,
  UncontrolledCarousel,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  NavLink
} from 'reactstrap'

const items = [
  {
    src: employeemanager,
    // altText: 'Employee Manager',
    // caption: 'Employee Manager',
    header: 'Employee Manager',
    key: '1'
  },
  {
    src: project1,
    // altText: 'NutraPrep',
    // caption: 'NutraPrep',
    header: 'NutraPrep',
    key: '2'
  },
  {
    src: project2,
    // altText: 'TrActivity',
    // caption: 'TrActivity',
    header: 'TrActivity',
    key: '3'
  }
]

const Home = () => {
  return (
<div>
      <UncontrolledCarousel items={items} 
      style={{width: "auto"}}/>
      <Jumbotron className="jumbo">
        <h1 className="display-3">Hello, welcome to my portfolio!</h1>
        <p className="lead">Hi!  My name is Marcella Luz Ash and I am currently a student learning the ins and outs of coding.  I enjoy playing video games, photography and building computers. </p>
      </Jumbotron>
      <Card body outline color="info" style={{ margin: '31px' }}>
        <CardBody>
          <CardTitle>More about me:</CardTitle>
          <NavLink href="https://docs.google.com/document/d/1rn7qg2yfZUs8ERLB7ORX4wMz4A31d1EFQZjjIDMlyzw/edit?usp=sharing" target="_blank">My Resume</NavLink>
          <NavLink href="https://www.linkedin.com/in/marcella-luz-ash-36b9201a2/" target="_blank">My LinkedIn</NavLink>
        </CardBody>
      </Card>
      

</div>
  )
}

export default Home
