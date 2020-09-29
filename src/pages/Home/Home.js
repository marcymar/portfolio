import React from 'react'
import '../../App.css'
import project1 from './assets/project1screencap.png'
import project2 from './assets/tractivity.png'
import employeemanager from './assets/employeemanager.png'
import {
  Jumbotron,
  UncontrolledCarousel
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
      <UncontrolledCarousel items={items} />
      <Jumbotron className="jumbo">
        <h1 className="display-3">Hello, welcome to my portfolio!</h1>
        <p className="lead">Hi!  My name is Marcella Luz Ash and I am currently a student learning the ins and outs of coding.  I enjoy playing video games, photography and building computers. </p>
      </Jumbotron>
      

</div>
  )
}

export default Home
