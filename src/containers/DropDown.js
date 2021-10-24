import { useState } from 'react';
import PropTypes from 'prop-types';

const DropDown = ({ column, clickHandler }) => {
  const options = column !== 'Birthday'
    ? ['A - Z', 'Z - A']
    : ['Older - Younger', 'Younger - Older'];
  const [display, setdisplay] = useState('d-none');

  const handleChange = () => {
    if (display === 'd-none') {
      setdisplay('d-flex');
    } else {
      setdisplay('d-none');
    }
  };

  return (
    <div className="relative">
      <button
        className="sortBtn"
        type="button"
        onClick={() => handleChange()}
        data-testid={`showOp${column}`}
      >
        Sort by:
        {' '}
      </button>
      <div className={`options ${display}`}>
        <button
          className="opBtn"
          type="button"
          onClick={() => clickHandler({ sortColumn: 'None' })}
          data-testid={`cleanSort${column}`}
        >
          None
        </button>
        <button
          className="opBtn"
          type="button"
          onClick={() => clickHandler({ sortColumn: column, order: 'minToMax' })}
          data-testid={`minToMax${column}`}
        >
          {options[0]}
        </button>
        <button
          className="opBtn"
          type="button"
          onClick={() => clickHandler({ sortColumn: column, order: 'maxToMin' })}
          data-testid={`maxToMin${column}`}
        >
          {options[1]}
        </button>
      </div>
    </div>
  );
};

DropDown.propTypes = {
  column: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default DropDown;
