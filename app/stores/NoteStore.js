import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';
import findIndex from '../libs/find_index';
import uuid from 'node-uuid';

class NoteStore {

    constructor() {

        this.bindActions(NoteActions); /*  create, update, delete */
        this.notes = [  {id: uuid.v4(), task: 'Learn Webpack'},
                        {id: uuid.v4(), task: 'Learn React'},
                        {id: uuid.v4(), task: 'Do laundry'}
                     ]; 

    }

    create(note) {

        console.log('NodeStore:create(note)');

        const notes = this.notes;


        this.setState({                 /* Set state triggers render view */
            notes: notes.concat(note)   /* Concatenate note to notes state */
        });
  
    }

    update(note) {

        console.log('NodeStore:update(note)');

        const notes = this.notes;
        const targetId = findIndex(notes, 'id', note.id); /* find index id on notes list */

        notes[targetId].task = note.task;  /* update note task with index targetId */

                                    /* Set state triggers render view */
        this.setState({notes});     /* Modify notes and pass to notes listerners on the view */
  
    }

    delete(id) {

        console.log('NodeStore:delete(id)');

        const notes = this.notes;
        const targetId = findIndex(notes, 'id', id);

        this.setState({             /* Set state triggers render view */
          notes: notes.slice(0, targetId).concat(notes.slice(targetId + 1))
        });

    }

}

export default alt.createStore(NoteStore, 'NoteStore');
