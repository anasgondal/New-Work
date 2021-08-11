import React from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../store/reducers/Layout';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
 

/**
 * Pagess
 */

import Dashboard from '../Dashboard/Dashboard'
import Menu from '../Dashboard/Menu'
import Student from '../Student/Student'
import Categorization from '../Categorization/Categorization'
import Questions from '../Questions/Question'













import PrivateRoute from '../../utils/PrivateRoute';
 
const Main = ({
  mobileNavVisibility,
  hideMobileMenu,
  history
}) => {
  history.listen(() => {
    if (mobileNavVisibility === true) {
      hideMobileMenu();
    }
  });
  return (
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
        
        <SideBar />

        <div className="main-panel">
          <Header />
        
          <PrivateRoute   exact path="/" component={Dashboard} /> 
          <PrivateRoute   exact path="/menu" component={Menu} /> 
          <PrivateRoute   exact path="/student" component={Student} /> 
          <PrivateRoute   exact path="/categorization" component={Categorization} /> 
          <PrivateRoute   exact path="/questions" component={Questions} /> 

        
          
          
          <Footer />
        </div>
      </div>
    </div>
  )
};

const mapStateToProp = state => ({
  mobileNavVisibility: state.Layout.mobileNavVisibility,
     
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false))
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));