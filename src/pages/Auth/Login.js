
import React, { Component } from 'react';
import PropTypes from 'prop-types';





import { connect } from 'react-redux';

import Noty from 'noty';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
            errors: {},
            serverError: {},
        };
      
    }
    componentDidMount() {

        
        }

      
    componentWillReceiveProps(nextProps) {

    }

    renderServerError() {
        if (this.state.serverError != null && this.state.serverError.length > 0) {
            return (

                <div className="form-group alert alert-danger" role="alert" >
                    <strong className="pr-2">Oh snap!  {"  "}</strong>
                    {this.state.serverError[0].msg}

                </div>
            )
        }
    }

   

    render() {
        const { errors } = this.state
        return (
         <div className="login-page">
             <div className="login-section">
                 <div className="row">

                     <div className="col-md-4"></div>

                     <div className="col-md-4">
                         <div className="login-card">
                         <p className="poppins_regular text1">Email Address  <label className="staric">*</label></p>
                                <input  className="Signup-input" placeholder="Enter here"  ></input>

                                <p className="poppins_regular text2">Password  <label className="staric">*</label></p>
                                <input  className="Signup-input" placeholder="Enter here"  ></input>

                                <p className="poppins_regular  forget-pass">Forget your password?</p>

                                <button className="poppins_medium log-btn">Login</button>
                            
                         </div>
                     </div>

                     <div className="col-md-4"></div>
                 </div>

                 <div className="row">
                     <div className="col-md-12">
                     <p className="poppins_light visit-txt">visit your website www.grabthefrcs.com</p>
                     </div>
                 </div>
                 <div className="row">
                     <div className="col-md-12">
                     <p className="poppins_light powered-txt">© Grab Your FRCS 2021, Powered by AhmedGraf</p>
                     </div>
                 </div>
             </div>
         </div>
        )
    }

}

Login.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth,

});

const mapDispatchToProps = ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
