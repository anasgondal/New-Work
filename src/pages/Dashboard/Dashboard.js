
import React, { Component } from 'react';

import { connect } from 'react-redux';

import user from '../../assets/images/Users/user.svg'




import { PieChart } from 'react-minimal-pie-chart';

import { Chart } from "react-google-charts";







const data = [
    ["", "Density", { role: "style" }],
    ["", 12, "#90CACB"], // RGB value
    ["", 11, "#90CACB"], // English color name
    ["", 15, "#90CACB"],
    ["", 13, "#90CACB"], // English color name
    ["", 14, "#90CACB"], // English color name
    ["", 14, "#90CACB"], // English color name


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
            <div className="dashboard-sec">
                <div className="contaier">
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="white-box">
                                <div className="row ml-1">
                                    <div className="col-md-6 number-txt">
                                        <p className="poppins_semibold">200</p>
                                        <p className="poppins_regular mt-4">Total <br /> Students</p>
                                    </div>
                                    <div className="col-md-6 number-txt">
                                        <img className="poppins_semibold user" src={user} />
                                        <p className="poppins_regular view-all ">View all</p>
                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="white-box">
                                <div className="row ml-1">
                                    <div className="col-md-6 number-txt">
                                        <p className="poppins_semibold">05</p>
                                        <p className="poppins_regular mt-4">Total Quiz Present</p>
                                    </div>
                                    <div className="col-md-6 number-txt">
                                        <img className="poppins_semibold user" src={user} />
                                        <p className="poppins_regular view-all ">View all</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="white-box">
                                <div className="row ml-1">
                                    <div className="col-md-6 number-txt">
                                        <p className="poppins_semibold">15,000</p>
                                        <p className="poppins_regular mt-4">Total <br /> Questions</p>
                                    </div>
                                    <div className="col-md-6 number-txt">
                                        <img className="poppins_semibold user" src={user} />
                                        <p className="poppins_regular view-all ">View all</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-3">
                            <div className="white-box">
                                <div className="row ml-1">
                                    <div className="col-md-6 number-txt">
                                        <p className="poppins_semibold">750</p>
                                        <p className="poppins_regular mt-4">Total <br /> Earnings</p>
                                    </div>
                                    <div className="col-md-6 number-txt">
                                        <img className="poppins_semibold user" src={user} />
                                        <p className="poppins_regular view-all ">View all</p>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className="graph-div  mt-4">
                                <p className="poppins_medium ">Subscriber Insights</p>
                                <hr className="horizontal" />

                                <div className="row">
                                    <button className="all-time poppins_regular">All time</button>
                                    <p className="poppins_regular btn-font">This Year</p>
                                    <p className="poppins_regular btn-font">This week</p>
                                    <p className="poppins_regular btn-font">Today</p>
                                </div>

                                <Chart
                                    chartType="ColumnChart"
                                    width="100%"
                                    height="260px"
                                    data={data}
                                />
                            </div>
                        </div>


                        <div className="col-md-6 ">
                            <div className="graph-div mt-4">
                                <p className="poppins_medium ">New Register Students</p>
                                <hr className="horizontal" />
                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="std-image" src={user} />
                                    </div>
                                    <div className="col-md-7 ">
                                        <p className="poppins_medium name">Francesca Metts</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="poppins_regular day-ago">1 Day ago</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="std-image" src={user} />
                                    </div>
                                    <div className="col-md-7 ">
                                        <p className="poppins_medium name">Malcolm Quaday</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="poppins_regular day-ago">1 Day ago</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="std-image" src={user} />
                                    </div>
                                    <div className="col-md-7 ">
                                        <p className="poppins_medium name">Lindsey Rivard</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="poppins_regular day-ago">1 Day ago</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="std-image" src={user} />
                                    </div>
                                    <div className="col-md-7 ">
                                        <p className="poppins_medium name">Elizabeth Hurton</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="poppins_regular day-ago">1 Day ago</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="std-image" src={user} />
                                    </div>
                                    <div className="col-md-7 ">
                                        <p className="poppins_medium name">Albert Pollock</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="poppins_regular day-ago">1 Day ago</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="std-image" src={user} />
                                    </div>
                                    <div className="col-md-7 ">
                                        <p className="poppins_medium name">Taylor Swift</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="poppins_regular day-ago">1 Day ago</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2">
                                        <img className="std-image" src={user} />
                                    </div>
                                    <div className="col-md-7 ">
                                        <p className="poppins_medium name">Jhon David</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p className="poppins_regular day-ago">1 Day ago</p>
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

Dashboard.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({


})
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
