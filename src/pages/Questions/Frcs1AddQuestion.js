
import React, { Component } from 'react';

import { connect } from 'react-redux';
// import pdf from '../../assets/images/Users/pdf.png'
import xls from '../../assets/images/Users/xls.png'
import checkbox from '../../assets/images/Users/checkbox.png'
// import more from '../../assets/images/Users/more.png'
import checkbox2 from '../../assets/images/Users/checkbox2.png'
import arrow from '../../assets/images/Users/arrow.png'
import { Link, withRouter } from 'react-router-dom';
import uparrow from '../../assets/images/Users/uparrow.png'
import tick from '../../assets/images/Users/tick.png'
import { getSpecialDomain, getBloomTexonomy, getSpecialSubDomain, getBasicScienceDomain } from '../../store/actions/questionAction'







class Frcs1AddQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalearning: "",
            totalBooks: "",
            totalorders: "",
            bookList: [],
            newBookList: [],
            specialDomain: [],
            bloomTexonomyList: [],
            specialSubDomainList: [],
            basicScienceDomainList: [],
            Speciality_Domain_ID: '',
            Bloom_Taxonomy_ID: '',
            Speciality_Sub_Domain_ID: '',
            Basic_Science_Domain_ID: '',

        };

    }

    componentDidUpdate(prevProps, prevState, snapshot) {


    }



    componentDidMount() {

        this.props.getSpecialDomain().then((res) => {
            console.log(res)
            this.setState({
                specialDomain: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
        this.props.getBloomTexonomy().then((res) => {
            console.log(res)
            this.setState({
                bloomTexonomyList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })

        this.props.getBasicScienceDomain().then((res) => {
            console.log(res)
            this.setState({
                basicScienceDomainList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })



    }

    getSpecialSubDomain = (id) => {
        this.props.getSpecialSubDomain(id).then((res) => {
            console.log(res)
            this.setState({
                specialSubDomainList: res.content,
            })

        }).catch((err) => {
            console.log(err)

        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.name === 'Speciality_Domain_ID') {
            this.getSpecialSubDomain(e.target.value)
        }
    }





    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            return (
                <div className="loader-large"></div>
            )
        }

        return (
            <div className="addquestion-section mt-4 ">
                <div className="container  p-0">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <p className="poppins_medium head-txt">Core Details</p>
                            </div>
                        </div>
                        <hr className="horizontal-line"></hr>
                    </div>

                    <div className="row p-0">
                        <div className="col-md-6 anas ">
                            <p className="poppins_regular test-type">Test Type <label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="FRCS 1" disabled={true}></input>
                        </div>
                        <div className="col-md-6 anas">
                            <p className="poppins_regular test-type">Specialty Domain <label className="staric">*</label></p>
                            {/* <select className="input-box2">
                                <option>SD-1-Professional Behavior & Leader....</option>
                                <option>SD-1-Professional Behavior & Leader....</option>
                                <option>SD-1-Professional Behavior & Leader....</option>
                            </select> */}


                            <select className="input-box2" name="Speciality_Domain_ID" onChange={this.onChange} value={this.state.Speciality_Domain_ID}  >
                                <option value={-1} disable selected={!this.state.Speciality_Domain_ID}  >--Please Select--</option>

                                {this.state.specialDomain.map((item, index) =>
                                    <option value={item.Speciality_Domain_ID} selected={item.Speciality_Domain_ID && this.state.Speciality_Domain_ID == item.Speciality_Domain_ID}>{item.Name}</option>

                                )}
                            </select>
                        </div>
                    </div>


                    <div className="row p-0">
                        <div className="col-md-6 anas mt-3 ">
                            <p className="poppins_regular test-type">Bloom's Taxonomy Domain <label className="staric">*</label></p>

                            <select className="input-box2" name="Bloom_Taxonomy_ID" onChange={this.onChange} value={this.state.Bloom_Taxonomy_ID}  >
                                <option value={-1} disable selected={!this.state.Bloom_Taxonomy_ID}  >--Please Select--</option>

                                {this.state.bloomTexonomyList.map((item, index) =>
                                    <option value={item.Bloom_Taxonomy_ID} selected={item.Bloom_Taxonomy_ID && this.state.Bloom_Taxonomy_ID == item.Bloom_Taxonomy_ID}>{item.Name}</option>

                                )}
                            </select>
                        </div>
                        <div className="col-md-6 anas mt-3 ">
                            <p className="poppins_regular test-type">Specialty Sub Domain <label className="staric">*</label></p>
                            {/* <select className="input-box2">
                                <option>MOD-1-Acting with integrity</option>
                                <option>MOD-1-Acting with integrity</option>
                                <option>MOD-1-Acting with integrity</option>
                            </select> */}
                            <select className="input-box2" name="Speciality_Sub_Domain_ID" onChange={this.onChange} value={this.state.Speciality_Sub_Domain_ID}  >
                                <option value={-1} disable selected={!this.state.Speciality_Sub_Domain_ID}  >--Please Select--</option>

                                {this.state.specialSubDomainList.map((item, index) =>
                                    <option value={item.Speciality_Sub_Domain_ID} selected={item.Speciality_Sub_Domain_ID && this.state.Speciality_Sub_Domain_ID == item.Speciality_Sub_Domain_ID}>{item.Name}</option>

                                )}
                            </select>
                        </div>
                    </div>



                    <div className="row p-0">
                        <div className="col-md-6 anas mt-3">
                            <p className="poppins_regular test-type">Basic Sciences Domain <label className="staric">*</label></p>
                            {/* <select className="input-box2">
                                <option>BSD-1-Anatomy</option>
                                <option>BSD-1-Anatomy</option>
                                <option>BSD-1-Anatomy</option>
                            </select> */}

                            <select className="input-box2" name="Basic_Science_Domain_ID" onChange={this.onChange} value={this.state.Basic_Science_Domain_ID}  >
                                <option value={-1} disable selected={!this.state.Basic_Science_Domain_ID}  >--Please Select--</option>

                                {this.state.basicScienceDomainList.map((item, index) =>
                                    <option value={item.Basic_Science_Domain_ID} selected={item.Basic_Science_Domain_ID && this.state.Basic_Science_Domain_ID == item.Basic_Science_Domain_ID}>{item.Name}</option>

                                )}
                            </select>
                        </div>
                        <div className="col-md-6 anas mt-3">
                        </div>
                    </div>


                    <div className="row mt-4">
                        <div className="col-md-12 ">
                            <div className="heading-sec">
                                <p className="poppins_medium head-txt">Question Details</p>
                            </div>
                        </div>
                        <hr className="horizontal-line"></hr>
                    </div>


                    <div className="row p-0 mt-3">
                        <div className="col-md-6 anas mt-2 ">
                            <p className="poppins_regular test-type">Question <label className="staric">*</label></p>
                            <textarea type="text" className="question-box" placeholder="FRCS 1"></textarea>
                        </div>
                        <div className="col-md-6 anas mt-2 ">
                            <p className="poppins_regular test-type">A-Option <label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Please Enter A Option"></input>
                            <p className="poppins_regular test-type mt-4">B- Option <label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Please Enter B Option"></input>
                        </div>
                    </div>




                    <div className="row mt-3  ">
                        <div className="col-md-6 anas mt-4 ">
                            <p className="poppins_regular test-type">Basic Sciences Domain <label className="staric">*</label></p>
                            <select className="input-box2">
                                <option>BSD-1-Anatomy</option>
                                <option>BSD-1-Anatomy</option>
                                <option>BSD-1-Anatomy</option>
                            </select>
                        </div>
                        <div className="col-md-6 anas mt-2 ">
                            <p className="poppins_regular test-type mt-4">C-Option <label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Please Enter C Option"></input>
                        </div>
                    </div>



                    <div className="row p-0 mt-3">
                        <div className="col-md-6 anas mt-2 ">
                            <p className="poppins_regular test-type">Answer Explanation <label className="staric">*</label></p>
                            <textarea type="text" className="question-box" placeholder="FRCS 1"></textarea>
                        </div>
                        <div className="col-md-6 anas mt-2 ">
                            <p className="poppins_regular test-type">D-Option <label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Please Enter D Option"></input>
                            <p className="poppins_regular test-type mt-4">E- Option <label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Please Enter E Option"></input>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-12">
                            <p className="poppins_regular test-type">Lead In <label className="staric">*</label></p>
                            <input type="text" className="lead-box" placeholder="Please Input lead"></input>


                        </div>
                    </div>


                    <div className="row mt-4">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <p className="poppins_medium head-txt">Add Vital Signs & Laboratory?</p>
                            </div>
                        </div>
                        <hr className="horizontal-line"></hr>
                    </div>


                    <div className="row m-0">
                        <div className="col-md-3">
                            <div className="vital-sign">
                                <img src={checkbox2} />&nbsp;&nbsp;&nbsp;<label className="poppins_light">Vital Signs</label><br />
                                <img src={checkbox2} />&nbsp;&nbsp;&nbsp;<label className="poppins_light">Laboratory Reports</label>
                            </div>
                        </div>

                        <div className="col-md-9 ">
                            <div className="laboratory-section">
                                <label className="poppins_regular laab-txt">Changed Value</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="poppins_regular laab-txt">Normal Values</label>

                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="poppins_regular lab-text">Temperature</label>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <img className="arrow" src={arrow} />
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area2"></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="poppins_regular lab-text">Hear Rate</label>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <img className="arrow" src={arrow} />
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area2"></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="poppins_regular lab-text">Pulse</label>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <img className="arrow" src={arrow} />
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area2"></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="poppins_regular lab-text">Blood Pressure</label>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <img className="arrow" src={arrow} />
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area2"></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="poppins_regular lab-text">Respiratory Rate</label>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area1"></div>
                                    </div>

                                    <div className="col-md-2">
                                        <img className="arrow" src={arrow} />
                                    </div>

                                    <div className="col-md-3">
                                        <div className="text-area2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row mt-3">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <p className="poppins_medium head-txt">Additional Information</p>
                            </div>
                        </div>
                        <hr className="horizontal-line"></hr>
                    </div>



                    <div className="row mt-3 p-0">
                        <div className="col-md-6 anas ">
                            <p className="poppins_regular test-type">Reference Link <label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Please Input lead"></input>
                        </div>
                        <div className="col-md-6 anas">
                            <p className="poppins_regular test-type">Add Image Resource<label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Paste URL"></input>
                        </div>
                    </div>


                    <div className="row mt-4 p-0">
                        <div className="col-md-6 anas ">
                            <div className="row gapping">
                                <div className="col-md-6"><button className="uparrow-btn">
                                    <img src={uparrow} /> &nbsp;&nbsp;&nbsp;
                                    <label className="poppins_extralight upload">Upload Image</label>
                                </button></div>
                                <div className="col-md-6 "><img src={tick} /> &nbsp;&nbsp;&nbsp;
                                    <label className="poppins_extralight demo">demo_image.jpg</label> </div>
                            </div>
                        </div>
                        <div className="col-md-6 anas">
                            <p className="poppins_regular test-type">Video Link<label className="staric">*</label></p>
                            <input type="text" className="input-box1" placeholder="Paste URL"></input>
                        </div>
                    </div>



                    <div className="row mt-5">
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3 ">
                            <div className="demo-image">
                            </div>
                        </div>
                    </div>


                    <div className="col-md-12 ">
                        <div className="save-add">
                            <button className="poppins_light save">Save & Add</button>
                        </div>
                    </div>


                    <div className="col-md-12 mt-4 ">
                        <div className="reset">
                            <p className="poppins_light reset-field">Reset the feild</p>
                        </div>
                    </div>


                    <div className="col-md-12 mt-4 ">
                        <div className="delete">
                            <p className="poppins_light delete-question">Delete Question</p>
                        </div>
                    </div>


                </div>
            </div>
        )
    }

}

Frcs1AddQuestion.propTypes = {

};


const mapStateToProps = state => ({
    auth: state.auth


});

const mapDispatchToProps = ({
    getBloomTexonomy,
    getSpecialDomain,
    getSpecialSubDomain,
    getBasicScienceDomain,
})
export default connect(mapStateToProps, mapDispatchToProps)(Frcs1AddQuestion);
