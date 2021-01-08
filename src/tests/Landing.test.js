import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Landing from '../components/Landing';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Landing />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

