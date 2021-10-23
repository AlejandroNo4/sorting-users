import { useState } from 'react';
import data from './data.json';
import sortedData from './logic';
import DropDown from './DropDown';

const Table = () => {
  const initialState = data;
  const [dataToRender, setDataToRender] = useState(initialState);

  const toL = (word) => word.charAt(0).toLowerCase() + word.slice(1);

  const clickHandler = ({ sortColumn, order }) => {
    if (sortColumn === 'None') {
      setDataToRender(initialState);
    } else {
      setDataToRender(sortedData([...dataToRender], toL(sortColumn), order));
    }
  };

  const thTitles = ['Name', 'Address', 'City', 'Region', 'Country', 'Birthday'];

  const headers = thTitles.map((title) => (
    <th key={thTitles.indexOf(title)} className="yellow">
      {title}
      <DropDown
        column={title}
        clickHandler={clickHandler}
      />
    </th>
  ));

  const rows = dataToRender.map((user) => (
    <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>{user.city}</td>
      <td>{user.region}</td>
      <td>{user.country}</td>
      <td>{user.birthday}</td>
    </tr>
  ));
  return (
    <table className="table">
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
