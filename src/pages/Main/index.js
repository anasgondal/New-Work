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
import Questions from '../Questions/Frcs1Question'

import Frcs1AddQuestions from '../Questions/Frcs1AddQuestion'
import Frcs2AddQuestions from '../Questions/Frcs2AddQuestion'
import Module from '../Categorization/Module';
import Frcs1Question from '../Questions/Frcs1Question';
import Frcs2Question from '../Questions/Frcs2Question';
import Frcs2Clinical from '../Questions/Frcs2Clinical'












import PrivateRoute from '../../utils/PrivateRoute';
import QuestionMain from '../Questions/QuestionMain';
import Frcs2Oral from '../Questions/Frcs2Oral';
 
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
          <PrivateRoute   exact path="/frcs1/addquestion" component={Frcs1AddQuestions} /> 
          <PrivateRoute   exact path="/frcs2/addquestion" component={Frcs2AddQuestions} /> 
          <PrivateRoute   exact path="/module/page" component={Module} /> 
          <PrivateRoute   exact path="/frcs1/questions" component={Frcs1Question} /> 
          <PrivateRoute   exact path="/frcs2/questions" component={Frcs2Question} /> 
          <PrivateRoute   exact path="/questionmain" component={QuestionMain} /> 
          <PrivateRoute   exact path="/frcs2/oraltype" component={Frcs2Oral} /> 
          <PrivateRoute   exact path="/frcs2/clinicaltype" component={Frcs2Clinical} /> 


        
          
          
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