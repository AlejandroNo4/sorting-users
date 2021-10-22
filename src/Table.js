import data from './data.json';

const Table = () => {
  const row = data.map((user) => (
    <tr key={user.name}>
      <td>{user.name}</td>
      <td>{user.adress}</td>
      <td>{user.city}</td>
      <td>{user.region}</td>
      <td>{user.country}</td>
      <td>{user.birthday}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Adress</th>
          <th>City</th>
          <th>Region</th>
          <th>Country</th>
          <th>Birthday</th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>
  );
};

export default (Table);
