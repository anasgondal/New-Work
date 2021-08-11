
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png' 
// import more from '../../assets/images/Users/more.png'










class Questions extends Component {
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
              <div className="container innerr-box">
                  <div className="row">
                      <div className="col-md-4 p-0">
                          <div className="mainn-heading">
                              <p className="poppins_medium">All Questions</p>
                          </div>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4 text-right">
                          <p className="poppins_regular download">Upload Question
                          &nbsp;&nbsp;&nbsp;<img src={xls}/></p>
                      </div>
                  </div>
                  {/* <hr className="horizontal"></hr> */}


<table className="table table-hover thead-primary mt-3 ">
<thead className="table-head">
<tr>                                             
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium">Questions</th>
<th scope="col table_header poppins_medium">A - Option</th>
<th scope="col table_header poppins_medium">B - Option</th>
<th scope="col table_header poppins_medium">C - Option</th>
<th scope="col table_header poppins_medium">D - Option</th>
<th scope="col table_header poppins_medium">Correct Answer</th>
<th scope="col table_header poppins_medium">Actions</th>
</tr>
</thead>
<tbody>
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">A</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">B</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">C</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">D</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">A</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">B</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">C</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">D</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">A</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">B</td>
<td ><select className="poppins_regular seleect-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">What is the name..</td>
<td className="poppins_regular table-txt">Anas</td>
<td className="poppins_regular table-txt">Haseeb</td>
<td className="poppins_regular table-txt">Osama</td>
<td className="poppins_regular table-txt">Saad</td>
<td className="poppins_regular table-txt">C</td>
<td ><select className="poppins_regular seleect-option">
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

Questions.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
  

})
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
