import alt from '../libs/alt';

// export default alt.generateActions('create', 'update', 'delete');

class NoteActions { /* Verbose form for: create, update, delete */
    
    create({id, task}) {
        this.dispatch({id, task});
    }

    update({id, task}) {
        this.dispatch({id, task});
    }

    delete(id) {
        this.dispatch(id);
    }
}

export default alt.createActions(NoteActions);
