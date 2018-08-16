import React, { Component } from 'react';
import ReactTable from 'react-table';
import './Product.css';
import 'react-table/react-table.css';
import {addRow} from '../../Redux/Actions/addRow';
import {deleteRow} from '../../Redux/Actions/deleteRow';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

function mapStateToProps( state ){
  console.log( 'state:', state.simpleReducer.data)
  return {
    tableData: state.simpleReducer.data
  }}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({
  addRow: ( data ) => addRow( data ),
  deleteRow: () => deleteRow()
 },dispatch)}

class Product extends Component {

  constructor(props){
    super()
    this.state = {
      data: props.tableData
    }
    this.addRow = this.addRow.bind( this )
  }

  componentWillReceiveProps( newProps ){
    console.log('NewProps: ', newProps)
  }

  addRow(){
    let data = {
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }
    this.props.addRow( data )
  }

  render() {
    console.log(' data:', this.props.tableData )
    return( 
    <div className='container'>
      <ReactTable
        data={this.props.tableData}
        columns={[{
          Header: 'Name',
          accessor: 'name' // String-based value accessors!
        }, {
          Header: 'Age',
          accessor: 'age'
        }, {
          id: 'friendName', // Required because our accessor is not a string
          Header: 'Friend Name',
          accessor: d => d.friend.name // Custom value accessors!
        }, {
          Header: props => <span>Friend Age</span>, // Custom header components!
          accessor: 'friend.age'
        }]}
        defaultPageSize={5}
        minRows={3}
        className="-striped -highlight"
      />
      <button type="button" className="btn btn-success" onClick={this.addRow}>Add</button>
      <button type="button" className="btn btn-error" onClick={this.props.deleteRow}>Delete</button>
    </div> )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);
