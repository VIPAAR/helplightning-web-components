import PropTypes from 'prop-types';
import React from 'react';
import './AgGridWrapper.scss';

function AgGridContent(props) {
  return (
    <div className="AgGridWrapper">
      <div className="row">
        <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div id="grid-wrapper" className="grid-wrapper">
            <div className="inner ag-theme-material ag-theme-override">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AgGridContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AgGridContent;
