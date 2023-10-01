import React from 'react'
import './Style.css'
function Herosection() {
    return (
        <>

            <div className="card" >

                <div className="row" >
                    <div className="col-sm-6 mb-3 mb-sm-0" style={{ marginTop: 150 }}>

                        <div className="card-body" >
                            <h5 className="card-title">THE EASIEST WAY TO SHARE YOUR DEATAILS</h5>
                            <h1 className="card-title big">Connect Instantly <br />
                                <span className='side'> With a Digital </span></h1>
                            <h3 className="card-title side2">
                                Business card
                            </h3>
                            <p className="card-text parg">
                                A Connect allows you to instantly share
                                <br />
                                <span className=' parg1'>
                                    who you are, with anyone, where ever you go.
                                </span>
                            </p>

                            <div className="d-grid gap-4 d-md-block  btnGrop">
                                <button type="button" className="btn btn-danger" style={{ fontSize: 14, fontWeight: 500 }}>
                                    Create your card
                                </button>
                                <button type="button" className="btn btn-outline-secondary  mx-3" style={{ fontSize: 14, fontWeight: 500 }}>
                                    For Terms
                                </button>

                            </div>

                        </div>
                    </div>

                </div>


            </div>


        </>
    )
}

export default Herosection