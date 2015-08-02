import React from 'react';
import uuid from 'node-uuid';
import Note from './Note';

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

        /* What render will do? for each item in array notes will call renderNote */

        return (
            <div>
                <ul>
                    {notes.map(this.renderNote)}
                </ul>
            </div>
               );
    }

    /* Draw a LI item with key=uuid and call Note component for task name */

    renderNote(note) {
        return (
            <li key={`note${note.id}`}>
               <Note value={note.task}/> 
            </li>
               )
    }
}
