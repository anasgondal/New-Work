import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../store/reducers/Layout';
 
import { Navbar,Nav ,NavDropdown } from 'react-bootstrap';
import { logoutUser, } from '../../store/actions/authActions';
import search from '../../assets/images/Users/search.svg'
import bell from '../../assets/images/Users/bell.svg'
import user2 from '../../assets/images/Users/user2.svg'

class Header extends Component {
  constructor(props) {
    super(props);
 

    this.state = {
 
      isLoading: false

    };
  
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
   
  }
  componentDidMount() {

 
    
  }
 
  
 
  render() {
    const { toggleMobileNavVisibility, logoutUser } = this.props
    return (
      <div className="header-section mt-3">
        <div className="container p-0">
          <div className="row ">
            {/* <div className="col-md-1">
              <div className="list"></div>
            </div> */}
            <div className="col-md-12">
              <div className="header" >

               <div className="row">
                 <div className="col-md-4"><p className="poppins_medium dashboard">Dashboard </p>
                 <p className="vl"> </p></div>
                 <div className="col-md-4">
                   <input className="input-sec" type="search" placeholder="Enter Your Text"></input>
                 </div>
                 <div className="col-md-4 text-right">
                 <div className="icons">
               <img  className="headerIcon"  src={search}/>
               <img  className="headerIcon"   src={bell}/>
                  <img  className="headerIcon"  src={user2}/>
                  </div>
                 </div>
               </div>

                
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
 
});

const mapDispatchToProp = ({
  toggleMobileNavVisibility,
  logoutUser,
 
});

export default connect(mapStateToProps, mapDispatchToProp)(Header);