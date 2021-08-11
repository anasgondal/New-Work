
import React, { Component } from 'react';

import { connect } from 'react-redux';
import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png' 
// import more from '../../assets/images/Users/more.png'










class Categorization extends Component {
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
           
           <div className="categorization mt-4">
               <div className="container  p-0">
               <div className="row btn-row ">
                   <div className="col-md-3">
                   <button className="poppins_medium up-btn" >Test Type</button>
                   </div>
                   <div className="col-md-3">
                   <button className="poppins_medium up-btn" >Basic Sciences Domain</button>
                   </div>
                   <div className="col-md-3">
                   <button className="poppins_medium up-btn" >Bloom's Taxonomy Domain</button>
                   </div>
                   <div className="col-md-3">
                   <button className="poppins_medium up-btn" >Specialty Domain</button>
                   </div>
               </div>



              <div className="table-roww">
              <div className="row mt-5 main-row  ">
    <div className="col-md-2 ">
        <p className="poppins_regular ID">ID</p>
    </div>
    <div className="col-md-3 ">
        <p className="poppins_regular typ-name">Test Type Name</p>
    </div>
    <div className="col-md-4 ">
        <p className="poppins_regular description">Description</p>
    </div>
    <div className="col-md-3 ">
        <p className="poppins_regular action">Actions</p>
    </div>
</div>
</div>
<div className="row mt-5 main-row  ">

    <div className="col-md-3  ">
      <img className=" row-txt1" src={checkbox}/><label className="poppins_regular row-txt1">Test-00000001</label>
    </div>
    <div className="col-md-3 ">
        <p className="poppins_regular row-txt2">FRCS-1</p>
    </div>
    <div className="col-md-3 ">
        <p className="poppins_regular row-txt3">FRCS one program design to test stu...</p>
    </div>
    <div className="col-md-3 ">
        <select className="poppins_regular row-txt4">
            <option>Download</option>
            <option>Edit /View</option>
            <option> Print</option>
            <option>Delete</option>
        </select>
    </div>
</div>


<div className="row  first-btn-sec">
          <div className="col-md-3 text-right rights ">
              
          </div>
          <div className="col-md-5 number ">
          <button className="poppins_bold first-btn">←</button>
              <button className="poppins_bold numb-btn">1</button>
              <button className="poppins_bold numb-btn">2</button>
              <button className="poppins_bold numb-btn">3</button>
              <button className="poppins_bold numb-btn">4</button>
              <button className="poppins_bold numb-btn">5</button>
              <button className="poppins_bold first-btn">→</button>
          </div>
          <div className="col-md-4  ">
              <button className="add-btn">+</button>
          </div>
          </div>  
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
