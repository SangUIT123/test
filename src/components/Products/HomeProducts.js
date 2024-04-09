import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ModalRoot from '../Modal/ModalRoot';
import Heading from './Heading';
import ClipLoader from "react-spinners/ClipLoader";
const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
}
const styleDiv = {
    width: "100%"
}


class HomeProducts extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            sortBy: '',
            sortValue: 0
        }
    }
    render() {
        return (
            <>
                <div className="col-lg-3 col-md-3 col-sm-6 col-no-padding">
                    <div className="products__item">
                        <div className="products__item--img">
                            <Link target={this.props.target}>
                                {/* <img src={item.img[0]} alt={item.img[0]} /> */}
                            </Link>
                            <div className="products__item--actions">
                                <div className="products__item--actions-cart">
                                    <button
                                        type="button"
                                        className="products__item--actions-link"
                                        
                                    >
                                        <i className="fa fa-shopping-bag"></i>
                                    </button>
                                </div>
                                <div className="products__item--actions-detail">
                                    <Link className="products__item--actions-link">
                                        <i className="far fa-clone"></i>
                                    </Link>
                                </div>
                                <div className="products__item--actions-quick">
                                    <button
                                        className="products__item--actions-link"
                                        
                                    >
                                        <i className="fa fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="products__item--info">
                            <h3 className="products__item--info-name">
                                <Link className="products__item--info-link">
                                    
                                </Link>
                            </h3>
                            <p className="products__item--info-price">
                                
                            </p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HomeProducts;
