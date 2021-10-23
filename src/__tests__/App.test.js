import {
  render, screen, cleanup, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App DOM testing', () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(cleanup);

  it('renders the app component correctly', async () => {
    const appComponent = await screen.findByTestId('app');
    expect(appComponent).toBeVisible();
  });

  it('matches snapshot', async () => {
    const appComponent = await screen.findByTestId('app');
    expect(appComponent).toMatchSnapshot();
  });

  it('Changes the first element when clicking on minToMaxName due sorting the table', async () => {
    const showOpName = await screen.findByTestId('minToMaxName');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Emily Donovan');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Adara Washington');
    expect(tBody.firstChild).not.toHaveTextContent('Emily Donovan');
  });

  it('Changes the first element when clicking on maxToMinName due sorting the table', async () => {
    const showOpName = await screen.findByTestId('maxToMinName');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Emily Donovan');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Yuri Gill');
    expect(tBody.firstChild).not.toHaveTextContent('Emily Donovan');
  });

  it('Changes the first element when clicking on minToMaxAddress due sorting the table', async () => {
    const showOpName = await screen.findByTestId('minToMaxAddress');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Ap #677-3529 Morbi Rd.');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('51-5683 Odio, Rd.');
    expect(tBody.firstChild).not.toHaveTextContent('Ap #677-3529 Morbi Rd.');
  });

  it('Changes the first element when clicking on maxToMinAddress due sorting the table', async () => {
    const showOpName = await screen.findByTestId('maxToMinAddress');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Ap #677-3529 Morbi Rd.');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('P.O. Box 997, 7127 Urna. St.');
    expect(tBody.firstChild).not.toHaveTextContent('Ap #677-3529 Morbi Rd.');
  });

  it('Changes the first element when clicking on minToMaxCity due sorting the table', async () => {
    const showOpName = await screen.findByTestId('minToMaxCity');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Whitby');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Argyle');
    expect(tBody.firstChild).not.toHaveTextContent('Whitby');
  });

  it('Changes the first element when clicking on maxToMinCity due sorting the table', async () => {
    const showOpName = await screen.findByTestId('maxToMinCity');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Whitby');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Yorkton');
    expect(tBody.firstChild).not.toHaveTextContent('Whitby');
  });

  it('Changes the first element when clicking on minToMaxRegion due sorting the table', async () => {
    const showOpName = await screen.findByTestId('minToMaxRegion');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('ON');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('AB');
    expect(tBody.firstChild).not.toHaveTextContent('ON');
  });

  it('Changes the first element when clicking on maxToMinRegion due sorting the table', async () => {
    const showOpName = await screen.findByTestId('maxToMinRegion');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('ON');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Yukon');
    expect(tBody.firstChild).not.toHaveTextContent('ON');
  });

  it('As there is only one country listed, the values do not change when clicking on minToMaxCountry', async () => {
    const showOpName = await screen.findByTestId('minToMaxCountry');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Canada');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Canada');
  });

  it('As there is only one country listed, the values do not change when clicking on maxToMinCountry', async () => {
    const showOpName = await screen.findByTestId('maxToMinCountry');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('Canada');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Canada');
  });

  it('Changes the first element when clicking on minToMaxBirthday due sorting the table', async () => {
    const showOpName = await screen.findByTestId('minToMaxBirthday');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('1998-08-26');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('1945-02-12');
    expect(tBody.firstChild).not.toHaveTextContent('1998-08-26');
  });

  it('As Emily ins the youngest, the top row in this case does not change', async () => {
    const showOpName = await screen.findByTestId('maxToMinBirthday');
    const tBody = await screen.findByTestId('tBody');
    expect(tBody.firstChild).toHaveTextContent('1998-08-26');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('1998-08-26');
    expect(tBody.firstChild).not.toHaveTextContent('1945-02-12');
  });

  it('cleans the sorted data, it shows the initial state', async () => {
    const showOpName = await screen.findByTestId('minToMaxName');
    const tBody = await screen.findByTestId('tBody');
    const cleanSort = await screen.findByTestId('cleanSortName');
    expect(tBody.firstChild).toHaveTextContent('Emily Donovan');
    fireEvent.click(showOpName);
    expect(tBody.firstChild).toHaveTextContent('Adara Washington');
    expect(tBody.firstChild).not.toHaveTextContent('Emily Donovan');
    fireEvent.click(cleanSort);
    expect(tBody.firstChild).toHaveTextContent('Emily Donovan');
    expect(tBody.firstChild).not.toHaveTextContent('Adara Washington');
  });
});
