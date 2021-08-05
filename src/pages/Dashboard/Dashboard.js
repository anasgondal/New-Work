
import React, { Component } from 'react';

import { connect } from 'react-redux';






import { PieChart } from 'react-minimal-pie-chart';

import { Chart } from "react-google-charts";







const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 5, "#ACACAC"], // RGB value
    ["Silver", 6, "#ACACAC"], // English color name
    ["Gold", 15, "#FAC85B"],
    ["Silver", 7, "#ACACAC"], // English color name
    ["Silver", 6, "#ACACAC"], // English color name
    ["Silver", 5, "#ACACAC"], // English color name


    // ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
];

class Dashboard extends Component {
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
            <div>
                <p>hello</p>
            </div>
        )
    }

}

Dashboard.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
  

})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
