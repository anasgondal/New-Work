
import React, { Component } from 'react';

import { connect } from 'react-redux';
import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png' 
// import more from '../../assets/images/Users/more.png'










class Module extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalearning: "",
            totalBooks: "",
            totalorders: "",
            bookList: [],
            newBookList: [],

        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {

    
    }


   




    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
           <div className="dashboard-sec mt-4 ">
              <div className="container inner-box">
                  <div className="row">
                      <div className="col-md-12 p-0">
                          <div className="main-heading">
                              <p className="poppins_medium">Professional Behavior & Leadership (Non-Specialty Specific) Module</p>
                          </div>
                      </div>
                      
                      
                  </div>
                  {/* <hr className="horizontal"></hr> */}


<table className="table table-hover thead-primary mt-3 ">
<thead className="table-head">
<tr>                                             
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium"> ID</th>
<th scope="col table_header poppins_medium">Special Domain </th>
<th scope="col table_header poppins_medium">Basic Sciences Name</th>
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium">Description</th>
<th scope="col table_header poppins_medium">Actions </th>
</tr>
</thead>
<tbody>
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-1</td>
<td className="poppins_regular table-txt">SD-1</td>
<td className="poppins_regular table-txt">Acting with integrity</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-2</td>
<td className="poppins_regular table-txt">SD-2</td>
<td className="poppins_regular table-txt">Assessment of teaching</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-3</td>
<td className="poppins_regular table-txt">SD-3</td>
<td className="poppins_regular table-txt">Audit</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>     

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-4</td>
<td className="poppins_regular table-txt">SD-4</td>
<td className="poppins_regular table-txt">Breaking bad news</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>     

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-5</td>
<td className="poppins_regular table-txt">SD-5</td>
<td className="poppins_regular table-txt">Clinical reasoning</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>     

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-6</td>
<td className="poppins_regular table-txt">SD-6</td>
<td className="poppins_regular table-txt">Communicate with patients</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>     

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-7</td>
<td className="poppins_regular table-txt">SD-7</td>
<td className="poppins_regular table-txt">Communication with colleagues</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">M0D-8</td>
<td className="poppins_regular table-txt">SD-8</td>
<td className="poppins_regular table-txt">Communication with friends</td>
<td className="poppins_regular table-txt"></td>
<td className="poppins_regular table-txt">FRCS one program design…</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>     

</tbody>

</table>


<div className="row mt-4">
          <div className="col-md-3 text-right right ">
            
          </div>
          <div className="col-md-5 numbers ">
          <button className="poppins_bold pre-btn">←</button>
              <button className="poppins_bold num-btn">1</button>
              <button className="poppins_bold num-btn">2</button>
              <button className="poppins_bold num-btn">3</button>
              <button className="poppins_bold num-btn">4</button>
              <button className="poppins_bold num-btn">5</button>
              <button className="poppins_bold pre-btn">→</button>
          </div>
          <div className="col-md-4  ">
          <button className="add-bttn">+</button>
          </div>
          </div>  

              </div>
          
           </div>
        )
    }

}

Module.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
  

})
export default connect(mapStateToProps, mapDispatchToProps)(Module);
