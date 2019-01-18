import React, { Component } from "react"
import AnimalList from "./animal/AnimalList"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import OwnerList from "./owner/OwnerList"
import "./Kennel.css"


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    animalsFromAPI = [
        { id: 1, ownerId: 5, name: "Cinnamon", breed: "Boxer" },
        { id: 1, ownerId: 6, name: "Cinnamon", breed: "Boxer" },
        { id: 2, ownerId: 4, name: "Lily", breed: "Labrador" },
        { id: 3, ownerId: 3, name: "Snowball", breed: "Cat" },
        { id: 4, ownerId: 2, name: "Finn", breed: "Labrador" },
        { id: 5, ownerId: 1, name: "Izzy", breed: "Pomeranian" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]
    ownershipsFromAPI = [
        { id: 1, ownerId: 5 , animalId: 1},
        { id: 2, ownerId: 6 , animalId: 1},
        { id: 3, ownerId: 4 , animalId: 3},
        { id: 4, ownerId: 3 , animalId: 5},
        { id: 5, ownerId: 2, animalId: 2},
        { id: 6, ownerId: 1 , animalId: 4}
    ]
    
    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        ownerships: this.ownershipsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} owners ={this.state.owners} />
                <OwnerList owners={this.state.owners} />
            </article>
        )
    }
}

export default Kennel