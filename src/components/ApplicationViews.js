import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations: [],
        owners: []
    };

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(response => response.json())
            .then(animals => this.setState({
                animals: animals
            })
            )
    }
    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(response => response.json())
            .then(employees => this.setState({
                employees: employees
            })
            )
    }
    
    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(response => response.json())
            .then(owners => this.setState({
                owners: owners
            })
            )
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/animals")
                .then(r => r.json()))
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/owners")
                .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }



    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList deleteLocation={this.deleteLocation} locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}