import { useState } from 'react';
import data from './data.json';
import sortedData from './logic';
import DropDown from './DropDown';

const Table = () => {
  const initialState = data;
  const [dataToRender, setDataToRender] = useState(initialState);

  const clickHandler = ({ sortColumn, order }) => {
    if (sortColumn === 'None') {
      setDataToRender(initialState);
    } else {
      setDataToRender(sortedData([...dataToRender], sortColumn, order));
    }
  };

  const thTitles = ['Name', 'Address', 'City', 'Region', 'Country', 'Birthday'];

  const headers = thTitles.map((title) => (
    <tr key={thTitles.indexOf(title)}>
      <th className="yellow">
        {title}
        <DropDown column={title} clickHandler={clickHandler} />
      </th>
    </tr>
  ));

  const rows = dataToRender.map((user) => (
    <tr key={dataToRender.indexOf(user)}>
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
      <tbody data-testid="tBody">{rows}</tbody>
    </table>
  );
};

export default Table;
