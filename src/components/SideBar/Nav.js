import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import cx from 'classnames';
import { logoutUser } from '../../store/actions/authActions';
import { connect } from 'react-redux';




import HOME from "../../assets/images/SidebarIcons/dashboard.png";
import HOME_WHITE from "../../assets/images/SidebarIcons/Color/dashboard.png";


import ManageBook from "../../assets/images/SidebarIcons/profile.png";
import ManageBookActive from "../../assets/images/SidebarIcons/Color/profile.png";


import AddNewBook from "../../assets/images/navbar_icons/addnewbook.svg";
import AddNewBookActive from "../../assets/images/navbar_icons/addnewbookActive.svg";

import EbookConversion from "../../assets/images/SidebarIcons/analytics.png";
import EbookConversionActive from "../../assets/images/SidebarIcons/Color/analytics.png";


import Tracking from "../../assets/images/navbar_icons/tracking.svg";
import trackingActive from "../../assets/images/navbar_icons/trackingActive.svg";

import Bank from "../../assets/images/navbar_icons/bank.svg";
import BankActive from "../../assets/images/navbar_icons/bankActive.svg";


import SellingHistory from "../../assets/images/navbar_icons/sellinghistory.svg";
import SellingHistoryActive from "../../assets/images/navbar_icons/sellinghistoryActive.svg";


import Report from "../../assets/images/navbar_icons/report.svg";
import ReportActive from "../../assets/images/navbar_icons/reportActive.svg";


import SendMessage from "../../assets/images/navbar_icons/sendmessage.svg";
import SendMessageActive from "../../assets/images/navbar_icons/sendmessageActive.svg";


import logout from "../../assets/images/navbar_icons/logout.svg";

class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (

      
      <>
       <ul className="nav sidebar-nav">
               <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/" >
            <i ><img src={location.pathname === '/' ? HOME_WHITE : HOME}></img> </i>
             <p className="poppins_regular">Dashboard</p>
           </Link>
         </li>
        
         <li className={location.pathname === '/student' ? 'active' : null}>
          <Link to="/student" >
            <i ><img src={location.pathname === '/student' ? ManageBookActive : ManageBook}></img> </i>
             <p className="poppins_regular">Students</p>
           </Link>
         </li>
         <li className={location.pathname === '/categorization' ? 'active' : null}>
          <Link to="/categorization" >
            <i ><img src={location.pathname === '/categorization' ? EbookConversionActive : EbookConversion}></img> </i>
             <p className="poppins_regular">Categorization</p>
           </Link>
         </li>
         <li className={location.pathname === '/questionmain' ? 'active' : null}>
          <Link to="/questionmain" >
            <i ><img src={location.pathname === '/questionmain' ? AddNewBookActive : AddNewBook}></img> </i>
             <p className="poppins_regular">Question</p>
           </Link>
         </li>

         <li className={location.pathname === '/allowbook' ? 'active' : null}>
          <Link to="/allowbook" >
            <i ><img src={location.pathname === '/allowbook' ? AddNewBookActive : AddNewBook}></img> </i>
             <p className="poppins_regular">Quiz</p>
           </Link>
         </li>
         <li className={location.pathname === '/allowbook' ? 'active' : null}>
          <Link to="/allowbook" >
            <i ><img src={location.pathname === '/allowbook' ? AddNewBookActive : AddNewBook}></img> </i>
             <p className="poppins_regular">Setting</p>
           </Link>
         </li>
         <li className={location.pathname === '/allowbook' ? 'active' : null}>
          <Link to="/allowbook" >
            <i ><img src={location.pathname === '/allowbook' ? AddNewBookActive : AddNewBook}></img> </i>
             <p className="poppins_regular">Payment History</p>
           </Link>
         </li>





       
        



       
        

        

     

        
        
           



       
        

  

   


           





     
            </ul>
             <div className=" mt-2 bottomLogoutDiv "   >

               <img  src={logout}></img>
               <label className="poppins_light logoutLabel ml-3" onClick={() => this.props.logoutUser()}> Logout </label>
               </div>
      </>

    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

Nav.propTypes = {

};

const mapStateToProps = state => ({
  

});

const mapDispatchToProps = ({
  logoutUser
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));

//export default withRouter(Nav);