import React, { Component } from 'react'
// import ProjectCard from './ProjectCard';
// import projectsData from './projectsData'; // Assuming you have a file with project data
// import cars from './cars'
import Car from './program'
import { initialCars } from './Cars'
import { additionalCars } from './Cars'

class ProjectGallery extends Component {
  constructor() {
    super()
    this.state = {
      cars: initialCars,
    }
    this.loadAdditionalCars = this.loadAdditionalCars.bind(this)
    this.addCarToGallery = this.addCarToGallery.bind(this)
  }

  loadAdditionalCars() {
    var currentCars = { ...this.state.cars }
    var newCars = Object.assign(currentCars, additionalCars)
    this.setState({ cars: newCars })
  }

  addCarToGallery(car) {
    var ts = Date.now()
    var newCar = {}
    newCar['car' + ts] = car
    var currentCars = { ...this.state.cars }
    var newCars = Object.assign(currentCars, newCar)
    this.setState({ cars: newCars })
  }

  render() {
    return (
      <div className="project-gallery">
        <div className="cars">
          {Object.keys(this.state.cars).map((key) => (
            <Car key={key} meta={this.state.cars[key]} />
          ))}
        </div>
        <div className="add-cars">
          <div className="flat-button" onClick={this.loadAdditionalCars}>
            Load more...
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectGallery
