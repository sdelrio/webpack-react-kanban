import React from 'react';
import uuid from 'node-uuid';

import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.storeChanged   = this.storeChanged.bind(this);
        this.state          = NoteStore.getState();
    }

    componentWillMount() { 

    /* Gets triggered once before any rendering. One way to use it would be 
     * to load data asynchronously there and force rendering through setState */
/*
        NoteActions.create({id: uuid.v4(), task: 'Learn webpack'});
        NoteActions.create({id: uuid.v4(), task: 'Learn React'});
        NoteActions.create({id: uuid.v4(), task: 'Do laundry'});

        this.state = NoteStore.getState();
*/
    }

    componentDidMount() { 

    /* gets triggered after initial rendering. You have access to DOM here. 
     * You could use this hook to wrap a jQuery plugin within a component for instance. */

        NoteStore.listen(this.storeChanged);
  
    }

    componentWillUnmount() {

    /* gets triggered once before any rendering. One way to use it would be to 
     * load data asynchronously there and force rendering through setState */

        NoteStore.unlisten(this.storeChanged);
  
    }

    storeChanged(state) {
        this.setState(state);
  
    }

    render() {

        /* Nodes into state model */

        const notes = this.state.notes;

        /* Call componet Notes for render */

        return (

              <div>
                <button onClick={this.addItem}>+</button>
                <Notes items={notes} onEdit={this.itemEdited} />
              </div>

               );
    }

    addItem() {
        console.log('add new task item');

        NoteActions.create({id: uuid.v4(), task: 'New task'});
    }

    itemEdited(id, task) {

        if(task) {      /* If task not empty update content */

          console.log('edit item ' + id + ' task:' + task);
          NoteActions.update({id, task});

        } else {        /* If task empty delete note */

          console.log('delete item ' + id);
          NoteActions.delete(id);
        }

    }
}
