import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Landing from '../components/Landing';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';

test('should render App correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<App />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

jest.mock('../components/Landing');
jest.mock('../components/Dashboard');
jest.mock('../components/NotFoundPage');

describe('Tests for App Router', () => {
    test('Should render Landing on default route', () => {
        Landing.mockImplementation(() => <div>LandingPageMock</div>);

        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByText("LandingPageMock")).toBeInTheDocument();
    });

    // test('Should render Dashboard on dashboard route', () => {
    //     Dashboard.mockImplementation(() => <div>DashboardPageMock</div>);

    //     render(
    //         <MemoryRouter initialEntries={['/dashboard']}>
    //             <App />
    //         </MemoryRouter>
    //     );

    //     expect(screen.getByText("DashboardPageMock")).toBeInTheDocument();
    // });

    // test('Should render Not Found Page for a non-existent route', () => {
    //     NotFoundPage.mockImplementation(() => <div>NotFoundPageMock</div>);

    //     render(
    //         <MemoryRouter initialEntries={['/blah']}>
    //             <App />
    //         </MemoryRouter>
    //     );

    //     expect(screen.getByText("NotFoundPageMock")).toBeInTheDocument();
    // });
});