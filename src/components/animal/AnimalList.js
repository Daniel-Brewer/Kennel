import React, { Component } from 'react'
class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
                {
                    this.props.animals.map(animal => {
                        this.props.owners.map(owner => {
                            if (animal.ownerId === owner.id) {
                                console.log("animal", animal)
                                console.log("owner", owner)
                    return (
                                    <div>
                                        <div key={animal.id}>
                                            {animal.name}
                                        </div>
                                        <h6>owned by</h6>
                                        <div key={owner.id}>
                                            {owner.name}
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    )
                }
            </section>
        )
    }
}

export default AnimalList