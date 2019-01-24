import React, { Component } from "react"
import EmployeeIcon from "./EmployeeIcon.png"
import "./Employee.css"
import AnimalCard from "../animal/AnimalCard"


export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card card--employee">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={EmployeeIcon} className="icon--employee" />
                                {employee.name}
                            <a href="#"
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</a>
                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                            <div className="animals--caretaker">
                            {
                                this.props.animals
                                // returns an array of all items where this condition is true
                                    .filter(anml => anml.employeeId === employee.id)
                                    // this map loops over the new array made from the above .filter of the animals that match the employye ID and re-renders are reusable component (to make the cards)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>

                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}