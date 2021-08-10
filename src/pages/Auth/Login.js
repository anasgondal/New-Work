
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
          <>
          </>
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
