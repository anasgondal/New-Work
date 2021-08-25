
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {LoginUser} from '../../store/actions/authActions';





import { connect } from 'react-redux';

import Noty from 'noty';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
            errors: {},
            serverError: {},
            EmailAddress:'',
            Password:'',
        };
      
    }
    componentDidMount() {

        
        }
// Making Method/ Function
      onClickLoginUser =() =>{
          console.log('anas')
        const object={
            email:this.state.EmailAddress,
            Password:this.state.Password
        }
// Calling Method
        this.props.LoginUser(object)
        .then( (r) =>
        {
            console.log(r)
        }
        )
        console.log('anas') 

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

                                <button className="poppins_medium log-btn" onClick={()=>this.onClickLoginUser()}>Login</button>
                            
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
    LoginUser
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
