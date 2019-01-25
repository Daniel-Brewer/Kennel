import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalManager from "../modules/AnimalManager";
import LocationManager from "../modules/LocationManager";
import EmployeeManager from "../modules/EmployeeManager";
import OwnerManager from "../modules/OwnerManager";
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import AnimalForm from "./animal/AnimalForm";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerForm from "./owner/OwnerForm";
import Login from "./authentication/Login";
import SearchResults from "./search/SearchResults";

export default class ApplicationViews extends Component {
  state = {
    animals: [],
    employees: [],
    locations: [],
    owners: []
  };

  // Check if credentials are in local storage
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  addAnimal = animal =>
    AnimalManager.post(animal)
      .then(() => AnimalManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

  deleteAnimal = id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(response => response.json())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );
  };


  addEmployee = employee =>
    EmployeeManager.post(employee)
      .then(() => EmployeeManager.getAll())
      .then(employees =>
        this.setState({
          employees: employees
        })
      );

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
  addOwner = owner =>
    OwnerManager.post(owner)
      .then(() => OwnerManager.getAll())
      .then(owners =>
        this.setState({
          owners: owners
        })
      );

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
    // Example code. Make this fit into how you have written yours.
    AnimalManager.getAll().then(allAnimals => {
      this.setState({
        animals: allAnimals
      });
    });

    LocationManager.getAll().then(allLocations => {
      this.setState({
        locations: allLocations
      });
    });

    EmployeeManager.getAll().then(allEmployees => {
      this.setState({
        employees: allEmployees
      });
    });

    OwnerManager.getAll().then(allOwners => {
      this.setState({
        owners: allOwners
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />

        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        {/* this is the list of animals */}
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
            return (
              <AnimalList
                {...props}
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          } else {
            return <Redirect to="/login" />;
        }
          }}
        />
        {/* this is the detail for individual animal */}
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            return (
              <AnimalDetail
                {...props}
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          }}
        />
        {/* this is the animal add form */}
        <Route
          path="/animals/new"
          render={props => {
              return (
                  <AnimalForm
                  {...props}
                  addAnimal={this.addAnimal}
                  employees={this.state.employees}
                  />
                  );
                }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
              if (this.isAuthenticated()) {
                  return (
                      <EmployeeList {...props}
                      deleteEmployee={this.deleteEmployee}
                      animals={this.state.animals}
                      employees={this.state.employees}
                      deleteAnimal={this.deleteAnimal}
                      />
                      );
                    } else {
                        return <Redirect to="/login" />;
                    }
                }}
        />
                {/* this is the detail for individual employee */}
                <Route
                  path="/employees/:employeeId(\d+)"
                  render={props => {
                    return (
                      <EmployeeDetail
                        {...props}
                        deleteEmployee={this.deleteEmployee}
                        employees={this.state.employees}
                      />
                    );
                  }}
                />
                {/* this is the employee add form */}
                <Route
                  path="/employees/new"
                  render={props => {
                    return (
                      <EmployeeForm
                        {...props}
                        addEmployee={this.addEmployee}
                        employees={this.state.employees}
                      />
                    );
                  }}
                />
                                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <OwnerList {...props} owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                }
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
                                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                                    addOwner={this.addOwner}
                                    phoneNumber={this.state.phoneNumber} />
                }} />
        <Route
          path="/search"
          render={props => {
            return (
              <SearchResults {...this.props}
              />
            );
          }}
        />
      </React.Fragment>
    );
  }
}