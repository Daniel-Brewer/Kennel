import React, { Component } from 'react'
import "./Employee.css"
import EmployeeIcon from "./EmployeeIcon.png"
export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                 <img src={EmployeeIcon} className="icon--employee" /> 
                                {employee.name}
                                <a href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}