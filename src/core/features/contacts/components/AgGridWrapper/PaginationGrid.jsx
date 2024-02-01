/* eslint-disable react/no-unused-state */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { GetColumn, FrameworkComponents } from './Columns';
import { isTouchScreenDevice } from './device';

class PaginationGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridApi: null,
      rowBuffer: 0,
      rowModelType: 'infinite',
      cacheOverflowSize: 2,
      infiniteInitialRowCount: 1,
      maxBlocksInCache: 100,
      cacheBlockSize: 20,
      blockLoadDebounceMillis: 500,
      error: false,
      errorMessage: '',
      shiftRowsIndex: null,
    };
  }

  getRows = (params) => { // eslint-disable-line consistent-return
    if (!this.props.cache) {
      return [];
    }
    this.props.cache.fetchData(params.startRow, params.endRow)
      .then((entries) => {
        params.successCallback(entries, this.props.cache.total);
        return entries;
      }).catch((err) => {
        console.log('getRows error');
        console.log(err);
        this.setState({
          error: true,
          errorMessage: 'Could not retrieve data, try refreshing page',
        });
        params.failCallback();
      });
  };

  onGridReady = (params) => {
    this.setState({ gridApi: params.api });
    params.api.setDatasource({ getRows: this.getRows });
    this.props.onGridReady(params);
  };

  onGridSizeChanged = (params) => {
    const { autoHideColumns } = this.props;
    const gridWidth = document.getElementById('grid-wrapper').offsetWidth;
    const columnsToShow = [];
    const columnsToHide = [];
    let totalColsWidth = 0;
    const allColumns = params.columnApi.getAllColumns();
    for (let i = 0; i < allColumns.length; i++) { // eslint-disable-line no-plusplus
      const column = allColumns[i];
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth && autoHideColumns) {
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    try {
      params.api.sizeColumnsToFit();
    } catch (e) {
      // ignore
    }
  };

  getRowStyle = ({ node }) => {
    const { shiftRowsIndex } = this.state;
    if (shiftRowsIndex !== null && node.rowIndex > shiftRowsIndex) {
      return (
        { transform: `translateY(${(node.rowIndex + 1) * 48}px) !important` }
      );
    } if (shiftRowsIndex !== null && node.rowIndex === shiftRowsIndex) {
      return { borderBottom: '1px solid #e2e2e2 !important' };
    }
    return {};
  };

  render() {
    const {
      getRowClass, context, columns, showHeaders, t, customColumns,
    } = this.props;
    const {
      components,
      rowBuffer,
      rowModelType,
      cacheOverflowSize,
      infiniteInitialRowCount,
      maxBlocksInCache,
      cacheBlockSize,
      blockLoadDebounceMillis,
    } = this.state;
    const noSort = (col) => ({ ...col, sortable: false });
    const columnDefs = columns.map((e) => noSort(GetColumn(e, t, customColumns)));

    const frameworkComponents = {};
    Object.keys(FrameworkComponents).forEach((key) => {
      const Comp = FrameworkComponents[key];
      frameworkComponents[key] = (props) => <Comp {...props} t={t} />; // eslint-disable-line
    });
    const extras = {};
    if (!showHeaders) {
      extras.headerHeight = '0px';
    }
    if (this.state.error) {
      return (
        <div className="alert alert-danger" role="alert">
          <p>{t(this.state.errorMessage)}</p>
        </div>
      );
    }
    return (
      <AgGridReact
        id={this.props.id || 'hlGrid'}
        columnDefs={columnDefs}
        defaultColDefs={{ resizable: true }}
        colResizeDefault="shift"
        getRowClass={getRowClass}
        context={context}
        frameworkComponents={frameworkComponents}
        onGridReady={this.onGridReady}
        onGridSizeChanged={this.onGridSizeChanged}
        suppressRowHoverHighlight
        suppressScrollOnNewData
        components={components}
        rowBuffer={rowBuffer}
        rowModelType={rowModelType}
        cacheOverflowSize={cacheOverflowSize}
        infiniteInitialRowCount={infiniteInitialRowCount}
        maxBlocksInCache={maxBlocksInCache}
        cacheBlockSize={cacheBlockSize}
        getRowNodeId={(data) => data.id}
        deltaRowDataMode
        blockLoadDebounceMillis={blockLoadDebounceMillis}
        {...extras} // eslint-disable-line react/jsx-props-no-spreading
        getRowStyle={this.getRowStyle}
        rowSelection="single"
        suppressRowClickSelection={!isTouchScreenDevice()}
      />
    );
  }
}

PaginationGrid.propTypes = {
  cache: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  id: PropTypes.string,
  getRowClass: PropTypes.func.isRequired,
  context: PropTypes.object.isRequired,
  onGridReady: PropTypes.func.isRequired,
  autoHideColumns: PropTypes.bool,
  showHeaders: PropTypes.bool,
  t: PropTypes.func.isRequired,
  customColumns: PropTypes.object,
};

PaginationGrid.defaultProps = {
  showHeaders: true,
  autoHideColumns: true,
  id: null,
  customColumns: {},
};

export default PaginationGrid;
