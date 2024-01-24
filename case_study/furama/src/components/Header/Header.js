
import './css/open-iconic-bootstrap.min.css';
import './css/animate.css';
// import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/ionicons.min.css';
import './css/flaticon.css';
import './css/icomoon.css';
import './css/style.css';
import './css/bootstrap-datepicker.css';
import './css/jquery.timepicker.css';

import React  from "react";

function Header() {
    const backgroundImageUrl = 'https://furamavietnam.com/wp-content/uploads/2019/07/Vietnam_Danang_Furama_Resort_Exterior_Ocean-Pool-6.jpg';

    const sliderItemStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
    };
    const backgroundImageUrl1 = 'https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior-Furama-girl-with-pink-hat.jpg';

    const sliderItemStyle1 = {
        backgroundImage: `url(${backgroundImageUrl1})`,
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand">Furama</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a className="nav-link">Trang chủ</a></li>
                            <li className="nav-item"><a className="nav-link">Phòng</a></li>
                            <li className="nav-item"><a className="nav-link">Khách hàng</a></li>
                            <li className="nav-item"><a className="nav-link">Giới thiệu</a></li>
                            <li className="nav-item"><a className="nav-link">Blog</a></li>
                            <li className="nav-item"><a className="nav-link">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="home-slider owl-carousel">
                <div className="slider-item" style={sliderItemStyle}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate text-center">
                                <div className="text mb-5 pb-3">
                                    <h1 className="mb-3">Chào mừng đến Furama</h1>
                                    <h2>Hotels &amp; Resorts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="slider-item"  style={sliderItemStyle1}>*/}
                {/*    <div className="overlay"></div>*/}
                {/*    <div className="container">*/}
                {/*        <div className="row no-gutters slider-text align-items-center justify-content-center">*/}
                {/*            <div className="col-md-12 ftco-animate text-center">*/}
                {/*                <div className="text mb-5 pb-3">*/}
                {/*                    <h1 className="mb-3">Tận hưởng trải nghiệm sang trọng</h1>*/}
                {/*                    <h2>Tham gia với chúng tôi</h2>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
            <section className="ftco-booking">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <form action="#" className="booking-form">
                                <div className="row">
                                    <div className="col-md-3 d-flex">
                                        <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                            <div className="wrap">
                                                <label htmlFor="#">Ngày Check-in</label>
                                                <input type="text" className="form-control checkin_date" placeholder="Ngày check-in"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex">
                                        <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                            <div className="wrap">
                                                <label htmlFor="#">Ngày Check-out</label>
                                                <input type="text" className="form-control checkout_date" placeholder="Ngày check-out"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md d-flex">
                                        <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                            <div className="wrap">
                                                <label htmlFor="#">Phòng</label>
                                                <div className="form-field">
                                                    <div className="select-wrap">
                                                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                        <select name="" id="" className="form-control">
                                                            <option value="">Chọn phòng</option>
                                                            <option value="">Villa</option>
                                                            <option value="">House</option>
                                                            <option value="">Room</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md d-flex">
                                        <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                            <div className="wrap">
                                                <label>Số người</label>
                                                <div className="form-field">
                                                    <div className="select-wrap">
                                                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                        <select name="" id="" className="form-control">
                                                            <option value="">1 người</option>
                                                            <option value="">2 người</option>
                                                            <option value="">3 người</option>
                                                            <option value="">4 người</option>
                                                            <option value="">5 người</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md d-flex">
                                        <div className="form-group d-flex align-self-stretch">
                                            <input type="submit" value="Check Availability" className="btn btn-primary py-3 px-4 align-self-stretch"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section className="ftco-section ftc-no-pb ftc-no-pt">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url("https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg")' }}>*/}
            {/*                <a href="https://www.youtube.com/watch?v=Z6_JZ8Ao6-c" className="icon popup-vimeo d-flex justify-content-center align-items-center">*/}
            {/*                    <span className="icon-play"></span>*/}
            {/*                </a>*/}
            {/*            </div>*/}
            {/*            <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">*/}
            {/*                <div className="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">*/}
            {/*                    <div className="ml-md-0">*/}
            {/*                        <span className="subheading">Chào mừng đến Furama resort</span>*/}
            {/*                        <h3 className="mb-4">Chào mừng đến resort chúng tôi</h3>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="pb-md-5">*/}
            {/*                    <p>Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20 phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang cùng với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều được trang trí trang nhã,*/}
            {/*                        theo phong cách thiết kế truyền thống của Việt Nam và kiến trúc thuộc địa của Pháp, biến Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện ảnh và các nhà lãnh đạo kinh doanh quốc tế.</p>*/}
            {/*                    <ul className="ftco-social d-flex">*/}
            {/*                        <li className="ftco-animate"><a href="https://www.youtube.com/user/furamaresortvietnam/featured" target="_blank"><span className="icon-youtube"></span></a></li>*/}
            {/*                        <li className="ftco-animate"><a href="https://www.facebook.com/furamaresort/" target="_blank"><span className="icon-facebook"></span></a></li>*/}
            {/*                        <li className="ftco-animate"><a href="https://www.instagram.com/furama_resort_and_villas/" target="_blank"><span className="icon-instagram"></span></a></li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <h2 className="mb-4">Các loại phòng</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a  className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-1.jpg)'}}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a >Room</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                        <p className="pt-1"><a  className="btn-custom">Xem chi tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a  className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-2.jpg)'}}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a >House</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                        <p className="pt-1"><a  className="btn-custom">Xem chi tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a  className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-3.jpg)'}}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a >Villa</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                        <p className="pt-1"><a  className="btn-custom">Xem chi tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a  className="img d-flex justify-content-center align-items-center"style={{backgroundImage: 'url(images/room-4.jpg)'}}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a >Room</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                        <p className="pt-1"><a  className="btn-custom">Xem chi tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a  className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-5.jpg)'}}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a >House</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                        <p className="pt-1"><a  className="btn-custom">Xem chi tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-6.jpg)'}}>
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a >Villa</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                        <p className="pt-1"><a  className="btn-custom">Xem chi tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;