import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import NotFoundPage from '../components/NotFoundPage';

test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NotFoundPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

