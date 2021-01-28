import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';

test('should render Not Found Page correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NotFoundPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

