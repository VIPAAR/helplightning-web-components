import PropTypes from 'prop-types';
import React from 'react';
import './AgGridWrapper.scss';

function AgGridHeader(props) {
  return (
    <div className="AgGridWrapper">
      <div className="row table-control-row">
        {props.children}
      </div>
    </div>
  );
}

AgGridHeader.propTypes = {
  children: PropTypes.any,
};
