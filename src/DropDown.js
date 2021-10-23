import PropTypes from 'prop-types';

const DropDown = ({ column, clickHandler }) => {
  const options = column !== 'Birthday' ? ['A - Z', 'Z - A'] : ['Older - Younger', 'Younger - Older'];

  return (
    <div>
      Sort by:
      <div>
        <button type="button" onClick={() => clickHandler({ sortColumn: 'None' })}>None</button>
        <button type="button" onClick={() => clickHandler({ sortColumn: column, order: 'minToMax' })}>{options[0]}</button>
        <button type="button" onClick={() => clickHandler({ sortColumn: column, order: 'maxToMin' })}>{options[1]}</button>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  column: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default DropDown;
