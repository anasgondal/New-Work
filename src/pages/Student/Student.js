
import React, { Component } from 'react';

import { connect } from 'react-redux';
import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png' 
// import more from '../../assets/images/Users/more.png'










class Student extends Component {
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
                      <div className="col-md-4 p-0">
                          <div className="main-heading">
                              <p className="poppins_medium">All Student</p>
                          </div>
                      </div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4 text-right">
                          <p className="poppins_regular download">Download All
                          &nbsp;&nbsp;&nbsp;<img src={pdf}/>&nbsp;&nbsp;&nbsp;<img src={xls}/></p>
                      </div>
                  </div>
                  {/* <hr className="horizontal"></hr> */}


<table className="table table-hover thead-primary mt-3 ">
<thead className="table-head">
<tr>                                             
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium"> ID</th>
<th scope="col table_header poppins_medium">Student Name </th>
<th scope="col table_header poppins_medium">Email Address</th>
<th scope="col table_header poppins_medium">Phone Number</th>
<th scope="col table_header poppins_medium">Country </th>
<th scope="col table_header poppins_medium">Actions </th>
</tr>
</thead>
<tbody>
<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">1325440</td>
<td className="poppins_regular table-txt">Francesca Metts</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">5652840</td>
<td className="poppins_regular table-txt">Malcolm Quaday</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>         


<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">8619026</td>
<td className="poppins_regular table-txt">Lindsey Rivard</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>         


<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">2365454</td>
<td className="poppins_regular table-txt">Elizabeth Hurton</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>         

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">1733110</td>
<td className="poppins_regular table-txt">Albert Pollock</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>        

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">7847133</td>
<td className="poppins_regular table-txt">Francesca Metts</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">7001005</td>
<td className="poppins_regular table-txt">Malcolm Quaday</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>        

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">754876</td>
<td className="poppins_regular table-txt">David Beckam</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>        


<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">823975</td>
<td className="poppins_regular table-txt">Robert Lafore</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>


<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">678345</td>
<td className="poppins_regular table-txt">Shane Watson</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>

<tr className="table-row">
<td className="poppins_regular table-txt"><img src={checkbox}/></td>
<td className="poppins_regular table-txt">847645</td>
<td className="poppins_regular table-txt">Ricky Ponting</td>
<td className="poppins_regular table-txt">98manas1217@gmail.com</td>
<td className="poppins_regular table-txt">+92 332 5671622</td>
<td className="poppins_regular table-txt">Pakistan</td>
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
          <button className="poppins_bold pre-btn">???</button>
              <button className="poppins_bold num-btn">1</button>
              <button className="poppins_bold num-btn">2</button>
              <button className="poppins_bold num-btn">3</button>
              <button className="poppins_bold num-btn">4</button>
              <button className="poppins_bold num-btn">5</button>
              <button className="poppins_bold pre-btn">???</button>
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

Student.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
  

})
export default connect(mapStateToProps, mapDispatchToProps)(Student);
