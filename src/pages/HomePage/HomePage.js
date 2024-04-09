import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Banner from '../../components/Banner/Banner';
//import LoadMore from '../../components/Button/LoadMore';
import HomeProducts from '../../components/Products/HomeProducts';
import Slide from '../../components/Slide/Slide';
import Title from '../../components/Title/Title';
import { requestTypeProducts } from '../../redux/actions/TypeProducts';

function HomePage(props) {
    const state = useSelector((state) => state.TypeProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestTypeProducts());
    }, [dispatch])

    return (
        <Fragment>
            <Slide />
            <section className="products__main">
                <div className="container">
                    <Title
                        title='Sản phẩm'
                        img="https://theme.hstatic.net/1000239816/1000467243/14/icon_featured.png?v=186"
                    />
                    {/* <HomeProducts textFilter="All" /> */}
                    {/* <LoadMore /> */}
                    <Banner />
                    {
                        state.length !== 0 ? state.map((value, index) => {
                            return (
                                <Title
                                    key = {index}
                                    title={value.name}
                                    img="https://theme.hstatic.net/1000239816/1000467243/14/icon_sale.png?v=186"
                                />
                            )
                        }) : ""
                    }

                    <HomeProducts textFilter="Giày" />
                    {/* <LoadMore /> */}
                </div>
            </section>
        </Fragment>
    );
}

export default HomePage;
