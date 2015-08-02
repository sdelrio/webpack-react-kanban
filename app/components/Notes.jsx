import React from 'react';
import Note from './Note';

export default class Notes extends React.Component {

    constructor(props) {
        super(props);

        this.renderNote = this.renderNote.bind(this);
    }

    render() {

        const notes = this.props.items;

        return <ul className='notes'>{notes.map(this.renderNote)}</ul>;
  
    }
    
    /* For each item notes will render a list item with component Note inside */

    renderNote(note) {
        return (

          <li className='note' key={`note${note.id}`}>
            <Note
              value={note.task}
              onEdit={this.props.onEdit.bind(null, note.id)} />
          </li>
    
        );
    }
}
