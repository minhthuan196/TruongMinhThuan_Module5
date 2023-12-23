function HeaderHome() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet"/>
            <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css"/>
            <link rel="stylesheet" href="css/animate.css"/>
            <link rel="stylesheet" href="css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="css/owl.theme.default.min.css"/>
            <link rel="stylesheet" href="css/magnific-popup.css"/>
            <link rel="stylesheet" href="css/aos.css"/>
            <link rel="stylesheet" href="css/ionicons.min.css"/>
            <link rel="stylesheet" href="css/bootstrap-datepicker.css"/>
            <link rel="stylesheet" href="css/jquery.timepicker.css"/>
            <link rel="stylesheet" href="css/flaticon.css"/>
            <link rel="stylesheet" href="css/icomoon.css"/>
            <link rel="stylesheet" href="css/style.css"/>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Furama</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="index.html" className="nav-link">Trang chủ</a></li>
                            <li className="nav-item"><a href="rooms.html" className="nav-link">Phòng</a></li>
                            <li className="nav-item"><a href="customer.html" className="nav-link">Khách hàng</a></li>
                            <li className="nav-item"><a href="about.html" className="nav-link">Giới thiệu</a></li>
                            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="contact.html" className="nav-link">Liên hệ</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="home-slider owl-carousel">
                <div className="slider-item"
                     style="background-image:url(https://furamavietnam.com/wp-content/uploads/2019/07/Vietnam_Danang_Furama_Resort_Exterior_Ocean-Pool-6.jpg);">
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

                <div className="slider-item"
                     style="background-image:url(https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior-Furama-girl-with-pink-hat.jpg);">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate text-center">
                                <div className="text mb-5 pb-3">
                                    <h1 className="mb-3">Tận hưởng trải nghiệm sang trọng</h1>
                                    <h2>Tham gia với chúng tôi</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                                <input type="text" className="form-control checkin_date"
                                                       placeholder="Ngày check-in"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex">
                                        <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                            <div className="wrap">
                                                <label htmlFor="#">Ngày Check-out</label>
                                                <input type="text" className="form-control checkout_date"
                                                       placeholder="Ngày check-out"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md d-flex">
                                        <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                                            <div className="wrap">
                                                <label htmlFor="#">Phòng</label>
                                                <div className="form-field">
                                                    <div className="select-wrap">
                                                        <div className="icon"><span
                                                            className="ion-ios-arrow-down"></span></div>
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
                                                <label for="#">Số người</label>
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
                                            <input type="submit" value="Check Availability"
                                                   className="btn btn-primary py-3 px-4 align-self-stretch"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftc-no-pb ftc-no-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center"
                             style="background-image: url(https://furamavietnam.com/wp-content/uploads/2018/07/Vietnam_Danang_Furama_Resort_Exterior_Beach.jpg);">
                            <a href="https://www.youtube.com/watch?v=Z6_JZ8Ao6-c"
                               className="icon popup-vimeo d-flex justify-content-center align-items-center">
                                <span className="icon-play"></span>
                            </a>
                        </div>
                        <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
                            <div className="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">
                                <div className="ml-md-0">
                                    <span className="subheading">Chào mừng đến Furama resort</span>
                                    <h3 className="mb-4">Chào mừng đến resort chúng tôi</h3>
                                </div>
                            </div>
                            <div className="pb-md-5">
                                <p>Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là cửa ngõ đến
                                    với 3 di sản văn hoá thế giới: Hội An (20 phút), Mỹ Sơn (90 phút) và Huế (2 tiếng.
                                    196 phòng hạng sang cùng với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi
                                    riêng đều được trang trí trang nhã,
                                    theo phong cách thiết kế truyền thống của Việt Nam và kiến trúc thuộc địa của Pháp,
                                    biến Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự được đón tiếp
                                    nhiều người nổi tiếng, giới hoàng gia, chính khách, ngôi sao điện ảnh và các nhà
                                    lãnh đạo kinh doanh quốc tế.</p>
                                <ul className="ftco-social d-flex">
                                    <li className="ftco-animate"><a
                                        href="https://www.youtube.com/user/furamaresortvietnam/featured"
                                        target="_blank"><span className="icon-youtube"></span></a></li>
                                    <li className="ftco-animate"><a href="https://www.facebook.com/furamaresort/"
                                                                target="_blank"><span className="icon-facebook"></span></a>
                                    </li>
                                    <li className="ftco-animate"><a
                                        href="https://www.instagram.com/furama_resort_and_villas/" target="_blank"><span
                                        className="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-reception-bell"></span>
                                    </div>
                                </div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Phục vụ 24/7</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-serving-dish"></span>
                                    </div>
                                </div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Nhà hàng</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-sel Searchf-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-car"></span>
                                    </div>
                                </div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Dịch vụ di chuyển</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                            <div className="media block-6 services py-4 d-block text-center">
                                <div className="d-flex justify-content-center">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-spa"></span>
                                    </div>
                                </div>
                                <div className="media-body p-2 mt-2">
                                    <h3 className="heading mb-3">Spa</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                <a href="rooms.html" className="img d-flex justify-content-center align-items-center"
                                   style="background-image: url(images/room-1.jpg);">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a href="rooms.html">Room</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span
                                        className="per">1 đêm</span></p>
                                    <hr/>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Xem chi
                                        tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a href="rooms.html" className="img d-flex justify-content-center align-items-center"
                                   style="background-image: url(images/room-2.jpg);">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a href="rooms.html">House</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span
                                        className="per">1 đêm</span></p>
                                    <hr/>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Xem chi
                                        tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a href="rooms.html" className="img d-flex justify-content-center align-items-center"
                                   style="background-image: url(images/room-3.jpg);">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a href="rooms.html">Villa</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span
                                        className="per">1 đêm</span></p>
                                    <hr/>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Xem chi
                                        tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a href="rooms.html" className="img d-flex justify-content-center align-items-center"
                                   style="background-image: url(images/room-4.jpg);">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a href="rooms.html">Room</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span
                                        className="per">1 đêm</span></p>
                                    <hr/>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Xem chi
                                        tiết<span className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a href="rooms.html" class="img d-flex justify-content-center align-items-center"
                                   style="background-image: url(images/room-5.jpg);">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a href="rooms.html">House</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Xem chi tiết<span
                                        className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                            <div className="room">
                                <a href="rooms.html" className="img d-flex justify-content-center align-items-center"
                                   style="background-image: url(images/room-6.jpg);">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <span className="icon-search2"></span>
                                    </div>
                                </a>
                                <div className="text p-3 text-center">
                                    <h3 className="mb-3"><a href="rooms.html">Villa</a></h3>
                                    <p><span className="price mr-2">100.000 vnđ</span> <span className="per">1 đêm</span></p>
                                    <hr/>
                                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Xem chi tiết<span
                                        className="icon-long-arrow-right"></span></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ftco-counter img" id="section-counter"
                     style="background-image: url(images/bg_1.jpg);">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="50000">0</strong>
                                            <span>Khách hàng</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="3000">0</strong>
                                            <span>Phòng</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="1000">0</strong>
                                            <span>Nhân viên</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="100">0</strong>
                                            <span>Địa điểm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section testimony-section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 ftco-animate">
                            <div className="row ftco-animate">
                                <div className="col-md-12">
                                    <div className="carousel-testimony owl-carousel ftco-owl">
                                        <div className="item">
                                            <div className="testimony-wrap py-4 pb-5">
                                                <div className="user-img mb-4"
                                                     style="background-image: url(https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2023/10/15/base64-1697371188123490553865.png)">
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
                                                </div>
                                                <div className="text text-center">
                                                    <p className="mb-4">Khu nghỉ dưỡng Furama Đà Nẵng là một khu nghỉ
                                                        dưỡng 5 sao sang trọng, có uy tín và được xem là một trong những
                                                        biểu tượng của ngành du lịch Việt Nam.</p>
                                                    <p className="name">Minh Thuận</p>
                                                    <span className="position">Khách hàng</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-wrap py-4 pb-5">
                                                <div className="user-img mb-4"
                                                     style="background-image: url(https://static-images.vnncdn.net/files/publish/2023/10/25/g-dragon-1149.jpg)">
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
                                                </div>
                                                <div className="text text-center">
                                                    <p className="mb-4">Đây là một trong những khu nghĩ dưỡng tuyệt vời
                                                        nhất tôi từng đến</p>
                                                    <p className="name">Linh Giang</p>
                                                    <span className="position">Khách hàng</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="testimony-wrap py-4 pb-5">
                                                <div className="user-img mb-4"
                                                     style="background-image: url(https://i.pinimg.com/736x/66/f2/aa/66f2aae51737a298112d0d1a4bae6356.jpg)">
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
                                                </div>
                                                <div className="text text-center">
                                                    <p className="mb-4">Tôi đã có một trải nghiệm tuyệt vời cùng gia
                                                        đình ở đây.</p>
                                                    <p className="name">Hiếu</p>
                                                    <span className="position">Khách hàng</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="instagram">
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-center pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h2><span>Instagram</span></h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-1.jpg" className="insta-img image-popup"
                               style="background-image: url(images/insta-1.jpg);">
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-2.jpg" className="insta-img image-popup"
                               style="background-image: url(images/insta-2.jpg);">
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-3.jpg" className="insta-img image-popup"
                               style="background-image: url(images/insta-3.jpg);">
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-4.jpg" className="insta-img image-popup"
                               style="background-image: url(images/insta-4.jpg);">
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-5.jpg" className="insta-img image-popup"
                               style="background-image: url(images/insta-5.jpg);">
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Furama Resort</h2>
                                <p>Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong những điểm đến hấp dẫn
                                    nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn là bốn Di sản Văn hóa Thế giới
                                    được UNESCO công nhận.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><a
                                        href="https://www.youtube.com/user/furamaresortvietnam/featured"><span
                                        className="icon-youtube"></span></a></li>
                                    <li className="ftco-animate"><a href="https://www.facebook.com/furamaresort/"><span
                                        className="icon-facebook"></span></a></li>
                                    <li className="ftco-animate"><a
                                        href="https://www.instagram.com/furama_resort_and_villas/"><span
                                        className="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Hữu ích</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Blog</a></li>
                                    <li><a href="#" className="py-2 d-block">Phòng</a></li>
                                    <li><a href="#" className="py-2 d-block">Tiện nghi</a></li>
                                    <li><a href="#" className="py-2 d-block">Thẻ quà tặng</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Chính sách</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Tuyển dụng</a></li>
                                    <li><a href="#" className="py-2 d-block">Giới thiệu</a></li>
                                    <li><a href="#" className="py-2 d-block">Liên hệ chúng tôi</a></li>
                                    <li><a href="#" className="py-2 d-block">Dịch vụ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Liên hệ với chúng tôi</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker"></span><span className="text">103 - 105 Vo Nguyen Giap Street, Khue My Ward, Ngu Hanh Son District, Danang City, Vietnam</span>
                                        </li>
                                        <li><a href="#"><span className="icon icon-phone"></span><span className="text">84-236-3847 666</span></a>
                                        </li>
                                        <li><a href="#"><span className="icon icon-envelope"></span><span
                                            className="text">reservation@furamavietnam.com</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">

                            <p>
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                All rights reserved | This template is made with <i className="icon-heart color-danger"
                                                                                    aria-hidden="true"></i> by <a
                                href="https://colorlib.com" target="_blank">Minh Thuan</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="ftco-loader" className="show fullscreen">
                <svg className="circular" width="48px" height="48px">
                    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
                    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
                            stroke="#F96D00"/>
                </svg>
            </div>
            <script src="js/jquery.min.js"></script>
            <script src="js/jquery-migrate-3.0.1.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.easing.1.3.js"></script>
            <script src="js/jquery.waypoints.min.js"></script>
            <script src="js/jquery.stellar.min.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/jquery.magnific-popup.min.js"></script>
            <script src="js/aos.js"></script>
            <script src="js/jquery.animateNumber.min.js"></script>
            <script src="js/bootstrap-datepicker.js"></script>
            <script src="js/scrollax.min.js"></script>
            <script
                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
            <script src="js/google-map.js"></script>
            <script src="js/main.js"></script>
        </>
    )
}

export default HeaderHome;