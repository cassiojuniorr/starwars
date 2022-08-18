import React from 'react';
import App from '../App';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import testData from '../../cypress/mocks/testData';


describe('Test component Table' , () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
  });

  afterEach(() => jest.resetAllMocks());

  it('Rendering the inputs filters', async () => {
    render(<App />);

    expect(screen.getByText(/...loading/i)).toBeDefined();
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const filtName = screen.getAllByTestId('name-filter');
    const filtColumn = screen.getAllByTestId('column-filter');
    const filtComparison = screen.getAllByTestId('comparison-filter');
    const filtValue = screen.getAllByTestId('value-filter');
    const btnFilter = screen.getAllByTestId('button-filter');
    const btnRemoveAll = screen.getAllByTestId('button-remove-filters');
    
    expect(filtName).toBeDefined();
    expect(filtColumn).toBeDefined();
    expect(filtComparison).toBeDefined();
    expect(filtValue).toBeDefined();
    expect(btnFilter).toBeDefined();
    expect(btnRemoveAll).toBeDefined();

  });

  it('Using the filter by name', async () => {
    render(<App />);
    const filtName = screen.getAllByTestId('name-filter');
    
    expect(screen.getByText(/...loading/i)).toBeDefined();

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    userEvent.type(filtName, /alderaan/i);

    expect(screen.getAllByRole("row", { name: /alderaan/i})).toBeDefined();
  });

  it('Using the filters', async () => {
    render(<App />);
    
    expect(screen.getByText(/...loading/i)).toBeDefined();
    await waitFor(() => expect(fetch).toHaveBeenCalled());

    const filtColumn = screen.getByTestId('column-filter');
    const filtComparison = screen.getByTestId('comparison-filter');
    const filtValue = screen.getByTestId('value-filter');
    const btnFilter = screen.getByTestId('button-filter');
    const btnRemoveAll = screen.getByTestId('button-remove-filters');
    
    userEvent.selectOptions(filtColumn, ['population']);
    userEvent.selectOptions(filtComparison, ['menor que']);
    userEvent.type(filtValue, 20000);
    userEvent.click(btnFilter);

    expect(screen.findByText(/Yavin IV/i)).toBeDefined();
    expect(screen.getAllByRole("button", { name: /x/i})).toBeDefined();
    expect(screen.getAllByTestId("filter")).toBeDefined();
    

    userEvent.click(btnRemoveAll);

  });

})
