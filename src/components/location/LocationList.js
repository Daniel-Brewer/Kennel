import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                <section>Nashville North
                <p>1234 Main St Nashville,TN 37210</p>
                </section>
                <section>Nashville South
                <p>5678 Music Way Nashville,TN 37206</p>
                </section>
            </article>
        );
    }
}