import React, { Component } from 'react'

class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id}>
                        {owner.name}
                        <br></br> 
                        {owner.phoneNumber}
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnerList