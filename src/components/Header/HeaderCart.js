import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HeaderCart extends Component {

    format_curency = ((money) => {
        money = money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        return money + "₫";
    });

    removeVietnameseTones(str) {
        return str.toLowerCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .split(' ').join('-');
    }

    showTotalItem = (cart) => {
        var total = 0;
        // if (cart.length > 0) {
        //     for (var i = 0; i < cart.length; i++) {
        //         total += cart[i].quantity;
        //     }
        // }
        return total;
    }

    showTotalAmount = (cart) => {
        var total = 0;
        // if (cart.length > 0) {
        //     for (var i = 0; i < cart.length; i++) {
        //         total += cart[i].quantity * cart[i].product.price;
        //     }
        // }
        return this.format_curency(total);
    }

    showCartItem = (cart) => {
        //if (cart.length > 0) {
            //return cart.map((item, index) => {
                //var name = this.removeVietnameseTones(item.product.name);
                return (
                    <li className="header__aside--cart-item">
                        <Link className="header__aside--cart-img">
                            {/* <img src={item.product.img[0]} alt="" /> */}
                        </Link>
                        <div className="header__aside--cart-info">
                            <Link className="header__aside--cart-title">
                                {/* {item.product.name} */}
                            </Link>
                            <p className="header__aside--cart-size">
                                {/* {item.product.size} */}
                            </p>
                            <p className="header__aside--cart-view">
                                <span className="header__aside--cart-number">
                                {/* {item.quantity} */}
                                </span>
                                <span className="header__aside--cart-price">
                                    {/* {this.format_curency(item.product.price)} */}
                                </span>
                            </p>
                        </div>
                        <div className="header__aside--cart-action">
                            {/* <span onClick={() => this.props.deleteItemCart(item.product)}>
                                <i className="fa fa-times"></i>
                            </span> */}
                        </div>
                    </li>
                )
            //})
        // } else {
        //     return (
        //         <div className="empty__cart">
        //             <img style={{ width: '100px' }} src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
        //             <p>Hiện chưa có sản phẩm</p>
        //         </div>
        //     )
        // }
    }

    render() {
        var { cart } = this.props;
        return (
            <div className="header__aside--cart">
                <Link to="/cart" className="header__aside--cart-icon">
                    <img src="http://theme.hstatic.net/1000239816/1000467243/14/cart-icon.png?v=182" alt="" />
                    <span className="header__aside--cart-quantity">
                        {this.showTotalItem(cart)}
                    </span>
                </Link>
                <div className="header__aside--cart-content">
                    <ul className="header__aside--cart-list">
                        {this.showCartItem(cart)}
                    </ul>
                    <span className="line"></span>
                    <div className="header__aside--cart-total">
                        <div className="header__aside--cart-total-text">
                            <p className="header__aside--cart-total-left">
                                Tổng tiền:
                            </p>
                            <p className="header__aside--cart-total-right">
                                {this.showTotalAmount(cart)}
                            </p>
                        </div>
                        <div className="header__aside--cart-total-bottom">
                            <Link to="/cart" className="header__aside--cart-total-link addtocart">
                                Xem giỏ hàng
                            </Link>
                            {/* add token in checkout */}
                            <Link to="/checkout" className="header__aside--cart-total-link checkout">
                                Thanh toán
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default HeaderCart;
