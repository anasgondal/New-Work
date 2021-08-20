
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








class Frcs2Clinical extends Component {
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
           <div className="addquestion-section  mt-4 ">
             <div className="container   p-0">
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
             <option>CV    -   Clinical Viva </option>
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
    <div className="col-md-6 anas">
    <p className="poppins_regular test-type">Clinical Viva Type <label className="staric">*</label></p>
         <select  className="input-box2">
             <option>GSC-SC-1    -   General Surgery (Long) </option>
             <option>SD-1-Professional Behavior & Leader....</option>
             <option>SD-1-Professional Behavior & Leader....</option>
             <option>SD-1-Professional Behavior & Leader....</option>
         </select>
         
         </div>
             </div>


             <div  className="row">
                 <div className="col-md-12">
                     <div className="heading-sec">
                         <p className="poppins_medium head-txt">Question Details</p>
                     </div>
                 </div>
                 <hr className="horizontal-line"></hr>
                 </div>


                 {/* <div className="row p-0 mt-3">
<div className="col-md-12 anas mt-2 ">
        <p className="poppins_regular test-type">Scenario  <label className="staric">*</label></p>
        <textarea type="text" className="question-box-full" placeholder="Please Enter Scenario"></textarea>
         </div>
             </div> */}


             <div className="row mt-4 p-0">
    <div className="col-md-6 anas">
        <p className="poppins_regular test-type">Add Image Resource <label className="staric">*</label></p>
        <input type="text" className="input-box1" placeholder="Paste URL"></input>
         </div>

         <div className="col-md-6 anas1 ">
        <div className="row gapping">
            <div className="col-md-6"><button className="uparrow-btn">
            <img src={uparrow}/> &nbsp;&nbsp;&nbsp;
            <label className="poppins_extralight upload">Upload Image</label>
        </button></div>
            <div className="col-md-6 "><img src={tick}/> &nbsp;&nbsp;&nbsp;
            <label className="poppins_extralight demo">demo_image.jpg</label> </div>
        </div>
         </div>
             </div>


             <div className="row p-0 mt-3">
<div className="col-md-12 anas mt-2 ">
        <p className="poppins_regular test-type">Follow up Question <label className="staric">*</label></p>
        <textarea type="text" className="question-box-full" placeholder="Please Enter Question"></textarea>
         </div>
             </div>


             <div className="row p-0 mt-3">
<div className="col-md-12 anas mt-2 ">
        <p className="poppins_regular test-type">Answer  <label className="staric">*</label></p>
        <textarea type="text" className="question-box-full" placeholder="Please Enter Answer"></textarea>
         </div>
             </div>


             <div className="row p-0 mt-3">
<div className="col-md-12 anas mt-2 ">
        <p className="poppins_regular test-type">Suggest Reading / Video Link  <label className="staric">*</label></p>
        <textarea type="text" className="question-box-full" placeholder="Suggest Reading / Video Link "></textarea>
         </div>
             </div>


             {/* <div className="col-md-12 ">
    <div className="save-add">
        <button className="poppins_light save add-more">Add More Quetions</button>
    </div>
</div> */}

             <div className="col-md-12 ">
    <div className="save-add">
        <button className="poppins_light save">Save & Add</button>
    </div>
</div>


<div className="col-md-12 mt-4 ">
    <div className="reset">
        <p className="poppins_light reset-field">Reset the feild</p>
    </div>
</div>


<div className="col-md-12 mt-4 ">
    <div className="delete">
        <p className="poppins_light delete-question">Delete Question</p>
    </div>
</div>
             </div>
           </div>
        )
    }

}

Frcs2Clinical.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
  

})
export default connect(mapStateToProps, mapDispatchToProps)(Frcs2Clinical);
