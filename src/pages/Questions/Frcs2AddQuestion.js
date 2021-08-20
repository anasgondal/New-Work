
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png' 
// import more from '../../assets/images/Users/more.png'
import checkbox2 from '../../assets/images/Users/checkbox2.png'
import arrow from '../../assets/images/Users/arrow.png'
import { Link, withRouter } from 'react-router-dom';
import uparrow from '../../assets/images/Users/uparrow.png'
import tick from '../../assets/images/Users/tick.png'








class Frcs1AddQuestion extends Component {
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
           <div className="frcs2-section mt-4 ">
             <div className="container  p-0">
             <div  className="row">
                 <div className="col-md-12">
                     <div className="heading-sec">
                         <p className="poppins_medium head-txt">Core Details</p>
                     </div>
                 </div>
                 <hr className="horizontal-line"></hr>
                 </div>

                 <div className="row p-0">
<div className="col-md-6 anas ">
        <p className="poppins_regular test-type">Test Type <label className="staric">*</label></p>
         <input type="text" className="input-box1" placeholder="FRCS 2"></input>
         </div>
    <div className="col-md-6 anas">
        <p className="poppins_regular test-type">Domain <label className="staric">*</label></p>
         <select  className="input-box2">
             <option>OV-ORAL Viva </option>
             <option>SD-1-Professional Behavior & Leader....</option>
             <option>SD-1-Professional Behavior & Leader....</option>
             <option>SD-1-Professional Behavior & Leader....</option>
         </select>
         </div>
             </div>

             <div className="row p-0">
<div className="col-md-6 anas ">
        {/* <p className="poppins_regular test-type">Test Type <label className="staric">*</label></p>
         <input type="text" className="input-box1" placeholder="FRCS 1"></input> */}
         </div>
    <div className="col-md-6 mt-4 anas">
        <p className="poppins_regular test-type">Viva Type  <label className="staric">*</label></p>
        
        <Link to="/frcs2/oraltype"><button className="oral-btn">ORAL</button>
        </Link>
        <Link to="/frcs2/clinicaltype"><button className="clinical-btn">CLINICAL</button></Link>
        
         
         </div>
             </div>



             </div>
           </div>
        )
    }

}

Frcs1AddQuestion.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
  

})
export default connect(mapStateToProps, mapDispatchToProps)(Frcs1AddQuestion);
