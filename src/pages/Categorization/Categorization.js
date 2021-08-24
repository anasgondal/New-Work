
import React, { Component } from 'react';

import { connect } from 'react-redux';
import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png'
import eye from '../../assets/images/Users/eye.png'

import { Link, withRouter } from 'react-router-dom';

var cx = require('classnames');








class Categorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1


        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {


    }

    onClickBottomBar = (val) => {
        this.setState({
            activeTab: val
        })
    }







    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (

            <div className="categorization mt-4">
                <div className="container  p-0">
                    <div className="row btn-row m-0">

                        <div className="col-md-2 p-0">
                                <button className={cx({ "poppins_medium up-btn-left": true, "poppins_medium up-btn-Active-left": this.state.activeTab === 1 })} onClick={() => this.onClickBottomBar(1)} >Test Type</button>
                        </div>
                        <div className="col-md-2 p-0">
                            
                            <button className={cx({ "poppins_medium up-btn": true, "poppins_medium up-btn-Active": this.state.activeTab === 2 })} onClick={() => this.onClickBottomBar(2)} >Basic Sciences Domain</button>
                        </div>
                        <div className="col-md-2 p-0">
                            <button className={cx({ "poppins_medium up-btn": true, "poppins_medium up-btn-Active": this.state.activeTab === 3 })} onClick={() => this.onClickBottomBar(3)} >Bloom's Taxonomy Domain</button>
                        </div>
                        <div className="col-md-2 p-0">
                            <button className={cx({ "poppins_medium up-btn": true, "poppins_medium up-btn-Active": this.state.activeTab === 4 })} onClick={() => this.onClickBottomBar(4)} >Specialty Domain</button>
                        </div>
                        <div className="col-md-2 p-0">
                            <button className={cx({ "poppins_medium up-btn": true, "poppins_medium up-btn-Active": this.state.activeTab === 5 })} onClick={() => this.onClickBottomBar(5)} >Oral Vivas</button>
                        </div>
                        <div className="col-md-2 p-0">
                            <button className={cx({ "poppins_medium up-btn": true, "poppins_medium up-btn-Active": this.state.activeTab === 6 })} onClick={() => this.onClickBottomBar(6)} >Clinical Vivas</button>
                        </div>
                    </div>

                    {this.state.activeTab === 1 ? (

<div className="test-type-container">
             
<div className="test-type">
    
<table className="table table-hover thead-primary mt-5 ">
<thead className="table-head">
<tr>                                             
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium"> ID</th>
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium">Test Type Name</th>
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium">Description</th>
<th scope="col table_header poppins_medium"></th>
<th scope="col table_header poppins_medium">Actions </th>
</tr>
</thead>
<tbody>
<tr className="table-row">
<td className="poppins_regular text-right"><img src={checkbox}/></td>
<td className="poppins_regular table-text">Test-00000001</td>
<td className="poppins_regular table-text"></td>
<td className="poppins_regular table-text">FRCS-1</td>
<td className="poppins_regular table-text"></td>
<td className="poppins_regular table-text">FRCS one program design to test stu...</td>
<td className="poppins_regular table-text"></td>
<td ><select className="poppins_regular select-option">
<option className="poppins_regular select-option">Download</option>
<option className="poppins_regular select-option">Edit / View</option>
<option className="poppins_regular select-option">Print</option>
<option className="poppins_regular select-option">Delete</option></select></td>
</tr>                                              
                                            

      

</tbody>

</table>

     </div>


                    <div className="row  first-btn-sec">
                        <div className="col-md-3 text-right rights ">

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
                        <button className="add-btn">+</button>
                            {/* <Link to="/module/page">
                            <button className="add-btn">+</button>
                            </Link> */}
                        </div>
                    </div>
               
               </div>
                          ) : this.state.activeTab === 2 ? (
                              <div className="basic-science-section">
                                  <div className="basic-science">
    
    <table className="table table-hover thead-primary mt-5 ">
    <thead className="table-head">
    <tr>                                             
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium"> ID</th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium">Basic Sciences Name</th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium">Description</th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium">Actions </th>
    </tr>
    </thead>
    <tbody>
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-1</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Anatomy </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>                                              

     <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-2</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Data Interpretation & Statistics </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>                                                     
    
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-3</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Embryology</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          

    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-4</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Endocrine & Metabolic Disorders </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          

    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-5</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Guidelines </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          

    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-6Imaging </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Anatomy </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          

    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-7</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Immunology </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          

    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BSD-8</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Biology</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          
          
    
    </tbody>
    
    </table>
    
         </div>
    
    
                        <div className="row  first-btn-sec">
                            <div className="col-md-3 text-right rights ">
    
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
                            <button className="add-btn">+</button>
                            {/* <Link to="/module/page">
                            <button className="add-btn">+</button>
                            </Link> */}
                            </div>
                        </div>
                                  </div>
                          ) : this.state.activeTab === 3 ? (
                            <div className="blooms-domain-section">
                                    <div className="blooms-domain">
    
    <table className="table table-hover thead-primary mt-5 ">
    <thead className="table-head">
    <tr>                                             
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium"> ID</th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium">Basic Sciences Name</th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium">Description</th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium">Actions </th>
    </tr>
    </thead>
    <tbody>
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BTD-1</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Knowledge & Comprehension</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>                                              

     <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BTD-2</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Application & Analysis </td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>                                                     
    
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">BTD-3</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">Synthesis & Evaluation</td>
    <td className="poppins_regular table-text"></td>
    <td className="poppins_regular table-text">FRCS one program design to test stu…</td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          

    
       
          
    
    </tbody>
    
    </table>
    
         </div>
    
    
                        <div className="row  first-btn-sec">
                            <div className="col-md-3 text-right rights ">
    
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
                            <button className="add-btn">+</button>
                            {/* <Link to="/module/page">
                            <button className="add-btn">+</button>
                            </Link> */}
                            </div>
                        </div>
                            </div>
                ) : this.state.activeTab === 4 ? (
                    <div className="specialty-domain-section">
                                      <div className="specialty-domain">
    
    <table className="table table-hover thead-primary mt-5 ">
    <thead className="table-head">
    <tr>                                             
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium"> ID</th>
    <th scope="col table_header poppins_medium">Test Type</th>
    <th scope="col table_header poppins_medium">Basic Sciences Name</th>
    <th scope="col table_header poppins_medium"> Description</th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium"></th>
    <th scope="col table_header poppins_medium">Actions </th>
    </tr>
    </thead>
    <tbody>
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-1</td>
    <td className="poppins_regular table-text">FRCS-1</td>
    <td className="poppins_regular table-text">Professional Behavior & Leadership</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>                                              
          
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-2</td>
    <td className="poppins_regular table-text">FRCS-2</td>
    <td className="poppins_regular table-text">General Surgery (Elective and Emergency)</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>                  
       
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-3</td>
    <td className="poppins_regular table-text">FRCS-3</td>
    <td className="poppins_regular table-text">General Surgery (Breast)</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>          
          
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-4</td>
    <td className="poppins_regular table-text">FRCS-4</td>
    <td className="poppins_regular table-text">General Surgery (Endocrine)</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>        

    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-5</td>
    <td className="poppins_regular table-text">FRCS-5</td>
    <td className="poppins_regular table-text">General Surgery (Upper GI & HPB Surgery)</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>        

     <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-6</td>
    <td className="poppins_regular table-text">FRCS-6</td>
    <td className="poppins_regular table-text">General Surgery (Transplant)</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>         

     <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-7</td>
    <td className="poppins_regular table-text">FRCS-7</td>
    <td className="poppins_regular table-text">General Surgery (Colorectal)</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>           
    <tr className="table-row">
    <td className="poppins_regular text-right"><img src={checkbox}/></td>
    <td className="poppins_regular table-text">SD-8</td>
    <td className="poppins_regular table-text">FRCS-8</td>
    <td className="poppins_regular table-text">General Surgery (Vascular)</td>
    <td className="poppins_regular table-text">FRCS one program design…</td>
    <td className="poppins_regular table-text"><img src={eye}/></td>
    <td className="poppins_regular table-text"></td>
    <td ><select className="poppins_regular select-option">
    <option className="poppins_regular select-option">Download</option>
    <option className="poppins_regular select-option">Edit / View</option>
    <option className="poppins_regular select-option">Print</option>
    <option className="poppins_regular select-option">Delete</option></select></td>
    </tr>           
    </tbody>
    
    </table>
    
         </div>
    
    
                        <div className="row  first-btn-sec">
                            <div className="col-md-3 text-right rights ">
    
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
                            <Link to="/module/page">
                            <button className="add-btn">+</button>
                            </Link>
                            </div>
                        </div>
                    </div>

                    ) :this.state.activeTab === 5 ? (

                        <div className="test-type-container">
                                     
                        <div className="test-type">
                            
                        <table className="table table-hover thead-primary mt-5 ">
                        <thead className="table-head">
                        <tr>                                             
                        <th scope="col table_header poppins_medium"></th>
                        <th scope="col table_header poppins_medium"> ID</th>
                        <th scope="col table_header poppins_medium"></th>
                        <th scope="col table_header poppins_medium">Oral Viva Type</th>
                        <th scope="col table_header poppins_medium"></th>
                        <th scope="col table_header poppins_medium">Description</th>
                        <th scope="col table_header poppins_medium"></th>
                        <th scope="col table_header poppins_medium">Actions </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="table-row">
                        <td className="poppins_regular text-right"><img src={checkbox}/></td>
                        <td className="poppins_regular table-text">OV-0011312</td>
                        <td className="poppins_regular table-text"></td>
                        <td className="poppins_regular table-text">Emergency Surgery/Trauma/Critical Care</td>
                        <td className="poppins_regular table-text"></td>
                        <td className="poppins_regular table-text">FRCS one program design to test stu...</td>
                        <td className="poppins_regular table-text"></td>
                        <td ><select className="poppins_regular select-option">
                        <option className="poppins_regular select-option">Download</option>
                        <option className="poppins_regular select-option">Edit / View</option>
                        <option className="poppins_regular select-option">Print</option>
                        <option className="poppins_regular select-option">Delete</option></select></td>
                        </tr>                                              
                                                                    
                        
                              
                        
                        </tbody>
                        
                        </table>
                        
                             </div>
                        
                        
                                            <div className="row  first-btn-sec">
                                                <div className="col-md-3 text-right rights ">
                        
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
                                                <button className="add-btn">+</button>
                                                    {/* <Link to="/module/page">
                                                    <button className="add-btn">+</button>
                                                    </Link> */}
                                                </div>
                                            </div>
                                       
                                       </div>
      ) :this.state.activeTab === 6 && (

        <div className="test-type-container">
                     
        <div className="test-type">
            
        <table className="table table-hover thead-primary mt-5 ">
        <thead className="table-head">
        <tr>                                             
        <th scope="col table_header poppins_medium"></th>
        <th scope="col table_header poppins_medium"> ID</th>
        <th scope="col table_header poppins_medium"></th>
        <th scope="col table_header poppins_medium">Clinical Viva </th>
        <th scope="col table_header poppins_medium"></th>
        <th scope="col table_header poppins_medium">Type of Question</th>
        <th scope="col table_header poppins_medium"></th>
        <th scope="col table_header poppins_medium">Actions </th>
        </tr>
        </thead>
        <tbody>
        <tr className="table-row">
        <td className="poppins_regular text-right"><img src={checkbox}/></td>
        <td className="poppins_regular table-text">CV-0011312</td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">General Surgery Clinical</td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">Long Cases</td>
        <td className="poppins_regular table-text"></td>
        <td ><select className="poppins_regular select-option">
        <option className="poppins_regular select-option">Download</option>
        <option className="poppins_regular select-option">Edit / View</option>
        <option className="poppins_regular select-option">Print</option>
        <option className="poppins_regular select-option">Delete</option></select></td>
        </tr>               

         <tr className="table-row">
        <td className="poppins_regular text-right"><img src={checkbox}/></td>
        <td className="poppins_regular table-text">CV-0011312</td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">Special Interest Clinical </td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">Long Cases</td>
        <td className="poppins_regular table-text"></td>
        <td ><select className="poppins_regular select-option">
        <option className="poppins_regular select-option">Download</option>
        <option className="poppins_regular select-option">Edit / View</option>
        <option className="poppins_regular select-option">Print</option>
        <option className="poppins_regular select-option">Delete</option></select></td>
        </tr>                  

          <tr className="table-row">
        <td className="poppins_regular text-right"><img src={checkbox}/></td>
        <td className="poppins_regular table-text">CV-0011312</td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">General Surgery Clinical</td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">Short Cases</td>
        <td className="poppins_regular table-text"></td>
        <td ><select className="poppins_regular select-option">
        <option className="poppins_regular select-option">Download</option>
        <option className="poppins_regular select-option">Edit / View</option>
        <option className="poppins_regular select-option">Print</option>
        <option className="poppins_regular select-option">Delete</option></select></td>
        </tr>         

          <tr className="table-row">
        <td className="poppins_regular text-right"><img src={checkbox}/></td>
        <td className="poppins_regular table-text">CV-0011312</td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">Special Interest Clinical</td>
        <td className="poppins_regular table-text"></td>
        <td className="poppins_regular table-text">Short Cases</td>
        <td className="poppins_regular table-text"></td>
        <td ><select className="poppins_regular select-option">
        <option className="poppins_regular select-option">Download</option>
        <option className="poppins_regular select-option">Edit / View</option>
        <option className="poppins_regular select-option">Print</option>
        <option className="poppins_regular select-option">Delete</option></select></td>
        </tr>                                              
        </tbody>
        
        </table>
        
             </div>
        
        
                            <div className="row  first-btn-sec">
                                <div className="col-md-3 text-right rights ">
        
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
                                <button className="add-btn">+</button>
                                    {/* <Link to="/module/page">
                                    <button className="add-btn">+</button>
                                    </Link> */}
                                </div>
                            </div>
                       
                       </div>
                                  ) 
                }


                </div>
            </div>
        )
    }

}

Categorization.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Categorization);
