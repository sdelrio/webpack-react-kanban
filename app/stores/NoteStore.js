import alt from '../libs/alt';
import NoteActions from '../actions/NoteActions';
import findIndex from '../libs/find_index';

class NoteStore {

    constructor() {

        this.bindActions(NoteActions); /*  create, update, delete */
        this.notes = [];               /*  Empty notes list */

    }

    create(note) {

        console.log('create store');

        const notes = this.notes;

        this.setState({                 /* Set state griggers render view */
            notes: notes.concat(note)   /* Concatenate note to notes state */
        });
  
    }

    update(note) {

        console.log('update store');

        const notes = this.notes;
        const targetId = findIndex(notes, 'id', note.id); /* find index id on notes list */

        notes[targetId].task = note.task;  /* update note task with index targetId */

                                    /* Set state griggers render view */
        this.setState({notes});     /* Modify notes and pass to notes listerners on the view */
  
    }

    delete(id) {

        console.log('delete store');

        const notes = this.notes;
        const targetId = findIndex(notes, 'id', id);

        this.setState({             /* Set state griggers render view */
          notes: notes.slice(0, targetId).concat(notes.slice(targetId + 1))
        });

    }

}

export default alt.createStore(NoteStore, 'NoteStore');
