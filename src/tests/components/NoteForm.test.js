import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';

import NoteForm from '../../components/NoteForm';
import notes from '../fixtures/notes';

test('should render NoteForm correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NoteForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should render NoteForm with some data', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NoteForm book={notes[1]} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

// test('should render error for invalid form submission', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<NoteForm />);

// });