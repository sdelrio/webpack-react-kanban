import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes';

export default class App extends React.Component {
    render() {

        /* Inmutable array of notes */

        const notes = [
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
        ];

        /* Call componet Notes for render */

        return (

              <div>
                <Notes items={notes} />
              </div>

               );
    }

}
