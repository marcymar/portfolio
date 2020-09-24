import React from 'react'
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  CardSubtitle
} from 'reactstrap'

const Portfolio = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Creating a Site Utilizing APIs</CardTitle>
          <CardSubtitle>NutraPrep</CardSubtitle>
        </CardBody>
        <img width="100%" src="project1screencap.png" alt="NutraPrep" />
        <CardBody>
          <CardText>For the first project of my coding course we were tasked with creating a web application of our choosing utilizing  web APIs and applying all we had learned so far in the course.  Myself and a team of four others were able to put together an app where you can find and check nutrional values of foods.  It was a challending but rewarding project.</CardText>
        </CardBody>
        <CardLink href="https://nicholasd-uci.github.io/manhattanProject/">App Link</CardLink>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Node Express App</CardTitle>
          <CardSubtitle>Eat-Da-Burger</CardSubtitle>
        </CardBody>
        <img width="100%" src="eatdaburger(2).png" alt="Eat-Da-Burger" />
        <CardBody>
          <CardText>This app utilizes MySQL, Express, Handlebars and an ORM.  With it you can log the names of burgers and them mark them as eaten.</CardText>
        </CardBody>
        <CardLink href="https://frozen-headland-30044.herokuapp.com/">App Link</CardLink>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Project 2</CardTitle>
          <CardSubtitle>TrActivity</CardSubtitle>
        </CardBody>
        <img width="100%" src="tractivity.png" alt="TrAcktivity" />
        <CardBody>
          <CardText>The app my team and I made for our second project.  It is an app designed to help people budget for a certain activity they want to do.</CardText>
          </CardBody>
        <CardLink href="https://cryptic-savannah-70126.herokuapp.com/index.html">App Link</CardLink>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Generator</CardTitle>
          <CardSubtitle>ReadMe Generator</CardSubtitle>
        </CardBody>
        <img width="100%" src="readmegenerator.png" alt="ReadMe Generator" />
        <CardBody>
          <CardText>This app generates a README file according to the input by the user.  It creates a clean and professional looking README page.</CardText>
          <CardLink href="https://github.com/marcymar/READMEgenerator">App Link</CardLink>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Generator</CardTitle>
          <CardSubtitle>Team Builder App</CardSubtitle>
        </CardBody>
        <img width="100%" src="teambuild.png" alt="Team Builder" />
        <CardBody>
          <CardText>With this app managers can make a quick HTML page showcasing the different employees and roles within their company.  All they need to do is enter some basic info for each employee and it generates it all on cards on an HTML page for them.</CardText>
          <CardLink href="https://github.com/marcymar/teambuilder">App Link</CardLink>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Employee Manager App</CardTitle>
          <CardSubtitle>Employee Manager</CardSubtitle>
        </CardBody>
        <img width="100%" src="employeemanager.png" alt="Employee Manager" />
        <CardBody>
          <CardText>Through this app managers can input employee information according to their roles, departments and managers.  This displays the data in neat tables for easy viewing.  They can also add employees, roles or departments, (delete ability is also available).
          </CardText>
          <CardLink href="https://github.com/marcymar/employeeTracker">App Link</CardLink>
        </CardBody>
      </Card>
    </div>
  )
}

export default Portfolio