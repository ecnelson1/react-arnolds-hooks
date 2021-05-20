import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import DetailsContainer from './DetailContainer';
import mockData from  '../../../fixtures/mock-data.json';

const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json(mockData));
    })
);

describe('DetailsContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    
    it('renders a loading element', async () => {
        render(<DetailsContainer match={{params: {id:'5da237699734fdcb7bef8f52'}}}/>);
        screen.getByText('LOADING...');
        const loading = await screen.getByText('LOADING...');
         return waitFor(()=> {
          expect(loading).toMatchSnapshot();  
        });
    });

    it('renders a character from Hey Arnold by matching id', async ()=> {
        render(<DetailsContainer match={{params: {id:'5da237699734fdcb7bef8f52'}}}/>);
        const figure = await screen.findByRole('figure', { name: 'character'});
         return waitFor(()=> {
          expect(figure).toMatchSnapshot();
        });
        
    });
});
