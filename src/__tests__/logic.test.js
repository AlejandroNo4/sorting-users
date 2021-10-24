import sortedData from '../logic/sortedData';
import data from '../data.json';

let dataTest;

describe('sortedData function', () => {
  beforeEach(() => {
    dataTest = [...data];
  });
  it('sorts an array of objects from minimum to max on the key Name', () => {
    expect(dataTest[0]).toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });

    sortedData(dataTest, 'Name', 'minToMax');

    expect(dataTest[0]).toEqual({
      name: 'Adara Washington',
      address: 'Ap #385-8479 Auctor Avenue',
      city: 'McCallum',
      region: 'NL',
      country: 'Canada',
      birthday: '1974-10-10',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from max to minimum on the key Name', () => {
    sortedData(dataTest, 'Name', 'maxToMin');

    expect(dataTest[0]).toEqual({
      name: 'Yuri Gill',
      address: 'P.O. Box 885, 949 Nibh. Avenue',
      city: 'Scarborough',
      region: 'Ontario',
      country: 'Canada',
      birthday: '1967-05-23',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from max to minimum on the key Address', () => {
    sortedData(dataTest, 'Address', 'minToMax');

    expect(dataTest[0]).toEqual({
      name: 'Kadeem Bird',
      address: '151-5683 Odio, Rd.',
      city: 'Watson Lake',
      region: 'Yukon',
      country: 'Canada',
      birthday: '1946-03-28',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from minimum to max on the key Address', () => {
    sortedData(dataTest, 'Address', 'maxToMin');

    expect(dataTest[0]).toEqual({
      name: 'Latifah Jacobs',
      address: 'P.O. Box 997, 7127 Urna. St.',
      city: 'Canmore',
      region: 'Alberta',
      country: 'Canada',
      birthday: '1957-09-09',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from max to minimum on the key City', () => {
    sortedData(dataTest, 'City', 'minToMax');

    expect(dataTest[0]).toEqual({
      name: 'Keely Alvarado',
      address: 'P.O. Box 102, 4400 Mi. Rd.',
      city: 'Argyle',
      region: 'NS',
      country: 'Canada',
      birthday: '1948-12-23',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from minimum to max on the key City', () => {
    sortedData(dataTest, 'City', 'maxToMin');

    expect(dataTest[0]).toEqual({
      name: 'Sonya Hahn',
      address: '9302 Quis, St.',
      city: 'Yorkton',
      region: 'Saskatchewan',
      country: 'Canada',
      birthday: '1975-07-27',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from max to minimum on the key Region', () => {
    sortedData(dataTest, 'Region', 'minToMax');

    expect(dataTest[0]).toEqual({
      name: 'Kane Stark',
      address: '1956 Sed Avenue',
      city: 'Banff',
      region: 'AB',
      country: 'Canada',
      birthday: '1959-12-21',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from minimum to max on the key Region', () => {
    sortedData(dataTest, 'Region', 'maxToMin');

    expect(dataTest[0]).toEqual({
      name: 'Price Duffy',
      address: 'P.O. Box 408, 2437 Urna. Av.',
      city: 'Whitehorse',
      region: 'Yukon',
      country: 'Canada',
      birthday: '1989-03-25',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from max to minimum on the key Country', () => {
    sortedData(dataTest, 'Country', 'minToMax');

    expect(dataTest[0]).toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from minimum to max on the key Country', () => {
    sortedData(dataTest, 'Country', 'maxToMin');

    expect(dataTest[0]).toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from max to minimum on the key Birthday', () => {
    sortedData(dataTest, 'Birthday', 'minToMax');

    expect(dataTest[0]).toEqual({
      name: 'Duncan Rogers',
      address: 'P.O. Box 498, 7286 Urna Street',
      city: 'Tumbler Ridge',
      region: 'BC',
      country: 'Canada',
      birthday: '1945-02-12',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
  });

  it('sorts an array of objects from minimum to max on the key Birthday', () => {
    sortedData(dataTest, 'Birthday', 'maxToMin');

    expect(dataTest[1]).toEqual({
      name: 'Halee Justice',
      address: '8878 Sagittis Street',
      city: 'Tsiigehtchic',
      region: 'Northwest Territories',
      country: 'Canada',
      birthday: '1998-03-04',
    });
    expect(dataTest[0]).toEqual({
      name: 'Emily Donovan',
      address: 'Ap #677-3529 Morbi Rd.',
      city: 'Whitby',
      region: 'ON',
      country: 'Canada',
      birthday: '1998-08-26',
    });
    expect(dataTest[0]).not.toEqual({
      name: 'Duncan Rogers',
      address: 'P.O. Box 498, 7286 Urna Street',
      city: 'Tumbler Ridge',
      region: 'BC',
      country: 'Canada',
      birthday: '1945-02-12',
    });
  });

  it('works with multiple calls with different columns and comparisons', () => {
    sortedData(dataTest, 'Name', 'maxToMin');

    expect(dataTest[1]).toEqual({
      name: 'Whitney Gilliam',
      address: '170-3969 Nulla Rd.',
      city: 'Baie-Comeau',
      region: 'QC',
      country: 'Canada',
      birthday: '1985-08-18',
    });

    sortedData(dataTest, 'Region', 'maxToMin');

    expect(dataTest[1]).toEqual({
      name: 'Logan Bradley',
      address: 'P.O. Box 400, 5114 Dolor. Rd.',
      city: 'Whitehorse',
      region: 'Yukon',
      country: 'Canada',
      birthday: '1971-08-08',
    });

    sortedData(dataTest, 'City', 'minToMax');

    expect(dataTest[1]).toEqual({
      name: 'Morgan Weiss',
      address: 'P.O. Box 612, 273 Laoreet Street',
      city: 'Arviat',
      region: 'Nunavut',
      country: 'Canada',
      birthday: '1984-09-28',
    });
    expect(dataTest[1]).not.toEqual({
      name: 'Logan Bradley',
      address: 'P.O. Box 400, 5114 Dolor. Rd.',
      city: 'Whitehorse',
      region: 'Yukon',
      country: 'Canada',
      birthday: '1971-08-08',
    });
  });
});
