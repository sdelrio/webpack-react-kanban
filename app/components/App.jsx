import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            notes: [
                   {
                      id: uuid.v4(),
                      task: 'Learn webpack'
                   },
                   {
                      id: uuid.v4(),
                      task: 'Learn React'
                   },
                   {
                      id: uuid.v4(),
                      task: 'Do laundry'
                   }
            ]
        };

        this.addItem = this.addItem.bind(this);
    }

    render() {

        /* Nodes into state model */

        const notes = this.state.notes;

        /* Call componet Notes for render */

        return (

              <div>
                <button onClick={this.addItem}>+</button>
                <Notes items={notes} />
              </div>

               );
    }

    addItem() {
        console.log('add item');

        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    }
}
