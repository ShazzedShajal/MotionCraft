import React from "react"
import { Link, Outlet } from "react-router-dom"

 const Homepage = ()=>{
    return <>
  <>
  <div className="css-loader" id="home">
    <div className="loader-inner line-scale d-flex align-items-center justify-content-center">
      {" "}
    </div>
  </div>
  {/* Loader End */}
  {/* Header Start */}
  <header className="position-absolute w-100">
    <div className="container">
      <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
        <div className="contact">
          <a href="" className="tel">
            <i className="fa fa-phone" aria-hidden="true" />
            +880-1935225373
          </a>
          <a href="">
            <i className="fa fa-envelope" aria-hidden="true" />
            shazzedshajal@gmail.com
          </a>
        </div>
      </div>
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="">
          <b>Motion Craft</b>
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tools">
                Tools
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
  {/* Header End */}
  {/* Hero Start */}
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-12 offset-md-1 col-md-11">
          <div className="swiper-container hero-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide-content d-flex align-items-center">
                <div className="single-slide">
                  <h1 data-aos="fade-right" data-aos-delay={400}>
                    {" "}
                    Edit Videos Easily <br /> Right in the browser
                  </h1>
                  <p data-aos="fade-right" data-aos-delay={600}>
                    {" "}
                    Our video editor comes with all of the features required to
                    create great videos – <br />
                    no experience needed.
                  </p>
                  <a
                    data-aos="fade-right"
                    data-aos-delay={900}
                    href="#see"
                    className="btn btn-primary"
                  >
                    See More
                  </a>
                  <a
                    data-aos="fade-right"
                    data-aos-delay={900}
                    href="#tools"
                    className="btn btn-primary"
                  >
                    Start Now
                  </a>
                </div>
              </div>
              <div className="swiper-slide slide-content d-flex align-items-center">
                <div className="single-slide">
                  <h1 data-aos="fade-right" data-aos-delay={200}>
                    {" "}
                    Free Online Video Editor <br /> for Easy Video Editing
                  </h1>
                  <p data-aos="fade-right" data-aos-delay={600}>
                    {" "}
                    Our video editor comes with all of the features required to
                    create great videos – <br />
                    no experience needed.
                  </p>
                  <a
                    data-aos="fade-right"
                    data-aos-delay={900}
                    href="#see"
                    className="btn btn-primary"
                  >
                    See More
                  </a>
                  <a
                    data-aos="fade-right"
                    data-aos-delay={900}
                    href="#tools"
                    className="btn btn-primary"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Control */}
      <span className="arr-left">
        <i className="fa fa-angle-left" />
      </span>
      <span className="arr-right">
        <i className="fa fa-angle-right" />
      </span>
    </div>
    <div className="texture" />
    <div className="diag-bg" />
  </section>
  {/* Hero End */}
  {/* Call To Action Start */}
  <section className="cta" data-aos="fade-up" data-aos-delay={0}>
    <div className="container">
      <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
        <div className="content" data-aos="fade-right" data-aos-delay={200}>
          <h2>FOR VIDEO COMPRESSING</h2>
          <p>
            Compress video file to get the same video quality but less file size
          </p>
        </div>
        <div
          className="subscribe-btn"
          data-aos="fade-left"
          data-aos-delay={400}
          data-aos-offset={0}
        >
          
          <Link  className="btn btn-primary" to="/compress">Start</Link>
        </div>
      </div>
    </div>
  </section>
  {/* Call To Action End */}
  {/* Services Start */}
  <section className="services" id="about">
    <div className="container">
      <div className="title text-center">
        {/* <h6>Our Speakers</h6> */}
        <h1 className="title-blue">WHAT WE OFFER</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={400}
            >
              <img
                className="mr-4"
                src="assets/images/service1.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Trim and cut</h5>
                Trim videos to remove unwanted parts and spotlight the most
                important footage.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={600}
            >
              <img
                className="mr-4"
                src="assets/images/service2.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Video to GIF</h5>
                Users can upload mp4 videos and rich media files to turn them
                into high quality animated GIFs
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration={800}
            >
              <img
                className="mr-4"
                src="assets/images/service3.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Add text, titles, and graphics</h5>
                Use any font, size and color, and position your text anywhere in
                the video. With our brand kit features, you can also add your
                own logo or watermark.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={400}
            >
              <img
                className="mr-4"
                src="assets/images/service4.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Add audio and images</h5>
                Add still images to your edit or adjust audio levels to your
                heart’s content – add multiple audio tracks, separate audio from
                video or replace audio completely.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={600}
            >
              <img
                className="mr-4"
                src="assets/images/service1.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Video Compression</h5>
                Compress video file to get the same video quality but less file
                size. Video compressor will make your video smaller, easy and
                free.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration={800}
            >
              <img
                className="mr-4"
                src="assets/images/service5.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Split and combine</h5>
                Cut longer videos into smaller snippets, delete unwanted parts
                and only keep what you like. You can also combine multiple clips
                into one video.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="services" id="see">
    <div className="container">
      <div className="title text-center">
        <h1 className="title-blue">Why Choose Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={400}
            >
              <img
                className="mr-4"
                src="assets/images/service1.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>We are Free</h5>
                It’s free in both meanings: no money is involved, and the
                platform is always free to process your video.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={600}
            >
              <img
                className="mr-4"
                src="assets/images/service2.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Simple Design</h5>
                The system designers pay a lot of effort into making the online
                video processing studio as simple as possible. Video editing UX
                is smooth, efficient, and fast.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration={800}
            >
              <img
                className="mr-4"
                src="assets/images/service3.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>No Account Required</h5>
                It’s not required to create an account before editing the
                videos. We don’t need user data to process videos if it doesn’t
                violate the law.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={400}
            >
              <img
                className="mr-4"
                src="assets/images/service4.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Fast Conversion</h5>
                The conversion on our servers is lightning-fast. The workload on
                servers is well-balanced and while you make edits, our servers
                already pre-process your timeline.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={400}
              data-aos-duration={600}
            >
              <img
                className="mr-4"
                src="assets/images/service1.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Not Required to Download</h5>
                The user doesn’t require to download our software to perform
                editing tasks which will significantly save memory space.
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div
              className="media"
              data-aos="fade-up"
              data-aos-delay={600}
              data-aos-duration={800}
            >
              <img
                className="mr-4"
                src="assets/images/service5.png"
                alt="Web Development"
              />
              <div className="media-body">
                <h5>Targeted for Specific Audience</h5>
                Users with limited requirements can use this app to save time
                and resources.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pricing-table" id="tools">
    <div className="container">
      <div className="title text-center">
        <h6 className="title-primary">Lets Get Started</h6>
        <h1 className="title-blue">Video Editing Tools</h1>
      </div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <div
            className="single-pricing text-center"
            data-aos="fade-up"
            data-aos-delay={0}
            data-aos-duration={600}
          >
            <span>Free</span>
            <h2>
              Video <br />
              to GIFs
            </h2>
            <br />
            <p>
              Upload mp4 video <br />
              to turn them into <br />
              high quality animated GIFs
              <br />
            </p>
            <br />
            <a href="#" className="btn btn-primary">
              Start Now
            </a>
            <svg viewBox="0 0 170 193">
              <path
                fillRule="evenodd"
                fill="rgb(238, 21, 21)"
                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
              />
            </svg>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-pricing text-center"
            data-aos="fade-up"
            data-aos-delay={300}
            data-aos-duration={600}
          >
            <span>Free</span>
            <h2>
              Video <br /> Compression{" "}
            </h2>
            <br />
            <br />
            <p>
              Compress video file <br />
              to get the same video quality <br />
              but less file size
            </p>
            <br />
            <br />
            <Link  className="btn btn-primary" to="/compress">Start</Link>
            
            <svg viewBox="0 0 170 193">
              <path
                fillRule="evenodd"
                fill="rgb(238, 21, 21)"
                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
              />
            </svg>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-pricing text-center"
            data-aos="fade-up"
            data-aos-delay={600}
            data-aos-duration={600}
          >
            <span>Free</span>
            <h2>
              Video <br /> Trim and Cut
            </h2>
            <br />
            <br />
            <p>
              Trim videos to remove <br />
              unwanted parts
            </p>
            <br />
            <a href="#" className="btn btn-primary">
              Start Now
            </a>
            <svg viewBox="0 0 170 193">
              <path
                fillRule="evenodd"
                fill="rgb(238, 21, 21)"
                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="pricing-table">
    <div className="container">
      <div className="title text-center">
        <h6 className="title-primary">Some more Tools</h6>
        <h1 className="title-blue">Video Editing Tools</h1>
      </div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <div
            className="single-pricing text-center"
            data-aos="fade-up"
            data-aos-delay={0}
            data-aos-duration={600}
          >
            <span>Free</span>
            <h2>
              ADD <br /> AUDIO TO IMAGE
            </h2>
            <br />
            <p>
              Upload a High quality Picture <br />
              and Mp3 Music <br />
              Then it will Make a still Video for you.
              <br />
            </p>
            <br />
            <br />

            <Link  className="btn btn-primary" to="/image">Start</Link>
            
            <svg viewBox="0 0 170 193">
              <path
                fillRule="evenodd"
                fill="rgb(238, 21, 21)"
                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
              />
            </svg>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-pricing text-center"
            data-aos="fade-up"
            data-aos-delay={300}
            data-aos-duration={600}
          >
            <span>Free</span>
            <h2>
              Video <br /> Combination{" "}
            </h2>
            <br />
            <br />
            <p>
              Compress video file <br />
              to get the same video quality <br />
              but less file size
            </p>
            <br />
            <br />
            <a href="#" className="btn btn-primary">
              Start Now
            </a>
            <svg viewBox="0 0 170 193">
              <path
                fillRule="evenodd"
                fill="rgb(238, 21, 21)"
                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
              />
            </svg>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="single-pricing text-center"
            data-aos="fade-up"
            data-aos-delay={600}
            data-aos-duration={600}
          >
            <span>Free</span>
            <h2>
              ADD <br /> AUDIO TO Video
            </h2>
            <br />
            
            <p>
              If You want to add Music <br />
              to Your Video, you can upload <br />
              a Mp4 and Mp3 file. Immediately <br/>
              the Desired Video will create for you.
              
            </p>
            <br />
            <Link  className="btn btn-primary" to="/video">Start</Link>

            <svg viewBox="0 0 170 193">
              <path
                fillRule="evenodd"
                fill="rgb(238, 21, 21)"
                d="M39.000,31.999 C39.000,31.999 -21.000,86.500 9.000,121.999 C39.000,157.500 91.000,128.500 104.000,160.999 C117.000,193.500 141.000,201.000 150.000,183.000 C159.000,165.000 172.000,99.000 167.000,87.000 C162.000,75.000 170.000,63.000 152.000,45.000 C134.000,27.000 128.000,15.999 116.000,11.000 C104.000,6.000 89.000,-0.001 89.000,-0.001 L39.000,31.999 Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Pricing End */}
  {/* Testimonial and Clients Start */}
  <section className="testimonial-and-clients" id="contact">
    <div className="container">
      <div className="testimonials">
        <div className="swiper-container test-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide text-center">
              <div className="row">
                <div className="offset-lg-1 col-lg-10">
                  <div
                    className="test-img"
                    data-aos="fade-up"
                    data-aos-delay={0}
                    data-aos-offset={0}
                  >
                    <img src="assets/images/shajal2.jpg" alt="Testimonial 1" />
                  </div>
                  <h5
                    data-aos="fade-up"
                    data-aos-delay={200}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    S.M. Shazzed Hossain Shajal
                  </h5>
                  <span
                    data-aos="fade-up"
                    data-aos-delay={400}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    {" "}
                    Software Developer
                  </span>
                  <p
                    data-aos="fade-up"
                    data-aos-delay={600}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    Third-year student at Mymensing Engineering College,
                    majoring in Computer Science and Engineering. <br />
                    MEC's CSE 3rd batch
                    <br />
                    <b>
                      Has dedicated all of his enthusiasm and effort to the
                      development of this software.{" "}
                    </b>
                    <br /> <br />
                    <a
                      href="mailto:shazzedshajal@gmail.com"
                      style={{ color: "white" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span style={{ marginLeft: 5 }}>
                        shazzedshajal@gmail.com
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide text-center">
              <div className="row">
                <div className="offset-lg-1 col-lg-10">
                  <div
                    className="test-img"
                    data-aos="fade-up"
                    data-aos-delay={0}
                    data-aos-offset={0}
                  >
                    <img src="assets/images/promi.jpg" alt="Testimonial 1" />
                  </div>
                  <h5
                    data-aos="fade-up"
                    data-aos-delay={200}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    Tasnim Ferdous
                  </h5>
                  <span
                    data-aos="fade-up"
                    data-aos-delay={400}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    Website Designer
                  </span>
                  <p
                    data-aos="fade-up"
                    data-aos-delay={600}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    Third-year student at Mymensing Engineering College,
                    majoring in Computer Science and Engineering. <br />
                    MEC's CSE 3rd batch
                    <br /> <br />
                    <a
                      href="mailto:tfpromy99@gmail.com"
                      style={{ color: "white" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span style={{ marginLeft: 5 }}>tfpromy99@gmail.com</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide text-center">
              <div className="row">
                <div className="offset-lg-1 col-lg-10">
                  <div
                    className="test-img"
                    data-aos="fade-up"
                    data-aos-delay={0}
                    data-aos-offset={0}
                  >
                    <img src="assets/images/tripty.jpg" alt="Testimonial 1" />
                  </div>
                  <h5
                    data-aos="fade-up"
                    data-aos-delay={200}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    Mirza Zarin Fatema Tripty
                  </h5>
                  <span
                    data-aos="fade-up"
                    data-aos-delay={400}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    UI/UX Designer
                  </span>
                  <p
                    data-aos="fade-up"
                    data-aos-delay={600}
                    data-aos-duration={600}
                    data-aos-offset={0}
                  >
                    Third-year student at Mymensing Engineering College,
                    majoring in Computer Science and Engineering. <br />
                    MEC's CSE 3rd batch
                    <br /> <br />
                    <a
                      href="mailto:zarinfatematripty@gmail.com"
                      style={{ color: "white" }}
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      <span style={{ marginLeft: 5 }}>
                        zarinfatematripty@gmail.com
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="test-pagination" />
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial and Clients End */}
  {/* Call To Action 2 Start */}
  <section className="cta cta2" data-aos="fade-up" data-aos-delay={0}>
    <div className="container">
      <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
        <div className="content" data-aos="fade-right" data-aos-delay={200}>
          <h2>For Video Trimming and Cutting</h2>
          <p>
          here you can trim your Video to remove unwanted parts
          </p>
        </div>
        <div
          className="subscribe-btn"
          data-aos="fade-left"
          data-aos-delay={400}
          data-aos-offset={0}
        >
          <a href="#" className="btn btn-primary">
            Start Now
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* Call To Action 2 End */}
  {/* Footer Start */}
  <footer>
    <div className="center">
      <a className="navbar-brand" href="index.html">
        {" "}
        <img
          height="200px"
          width="350px"
          src="assets/images/motion_logo2.png"
          alt="Motion Craft"
        />
      </a>
    </div>
    {/* Foot Note End */}
  </footer>
</>

    </>
}
export default Homepage