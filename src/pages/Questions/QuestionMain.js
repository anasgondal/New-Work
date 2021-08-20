
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png' 
// import more from '../../assets/images/Users/more.png'


import { Link, withRouter } from 'react-router-dom';
import bucket from '../../assets/images/Users/bucket.png'







class QuestionMain extends Component {
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
            <div className="question-main-sec ">
            <div className="container-fluid mt-4">
                <div className="row">

{/* FRCS-1 */}
                    <div className="col-md-6">
                        <Link to="/frcs1/questions" className="link-hover">
                        <div className="FRCS-1 hover-color">
                            <div className="row">
                                <div className="col-md-2">
                                  <img className="bucket-image" src={bucket}/>  
                                </div>
                                <div className="col-md-10">
                                    <p className="poppins_semibold frcs-txt">FRCS 1</p>
                                </div>
                            </div>

<div className="row">
    <div className="col-md-6">
        <p className="poppins_regular view-btn">View all</p>
    </div>
    <div className="col-md-6">
        <div className="row">
            <div className="col-md-4">
                <p className="tot-ques poppins_regular">Total Questions</p>
            </div>
            <div className="col-md-4">
                <p className="poppins_semibold number">750</p>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
</div>

                        </div>
                        </Link>
                    </div>



{/* FRCS-2 */}
<div className="col-md-6">
                        <div className="FRCS-1 hover-color">

                    <Link to="/frcs2/questions" className="link-hover"> <div className="row">
                                <div className="col-md-2">
                                  <img className="bucket-image" src={bucket}/>  
                                </div>
                                <div className="col-md-10">
                                    <p className="poppins_semibold frcs-txt">FRCS 2</p>
                                </div>
                            </div>

<div className="row">
    <div className="col-md-6">
        <p className="poppins_regular view-btn">View all</p>
    </div>
    <div className="col-md-6">
        <div className="row">
            <div className="col-md-4">
                <p className="tot-ques poppins_regular">Total Questions</p>
            </div>
            <div className="col-md-4">
                <p className="poppins_semibold number">750</p>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
</div>

        </Link>        
                                           </div>
                    </div>


                    

                </div>
            </div>
        
         </div>
          )
    }

}

QuestionMain.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
  

})
export default connect(mapStateToProps, mapDispatchToProps)(QuestionMain);
