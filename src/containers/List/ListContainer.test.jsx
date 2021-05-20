import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import ListContainer from './ListContainer';
import mockData from  '../../../fixtures/mock-data.json';
import { MemoryRouter } from 'react-router';

const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json(mockData));
    })
);

describe('ListContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('renders a loading element', async () => {
        render(<MemoryRouter><ListContainer/></MemoryRouter>);
        const loading = await screen.getByText('LOADING...');
         return waitFor(()=> {
          expect(loading).toMatchSnapshot();  
        });
    });

    it('renders a list of characters from Hey Arnold', async ()=> {
        render(<MemoryRouter><ListContainer/></MemoryRouter>);
        const ul = await screen.findByRole('list', { name: 'characters'});
        return waitFor(()=> {
          expect(ul).toMatchSnapshot();  
        });
        
    });
});
