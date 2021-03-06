/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CarouselImg3 from '../../assets/black-and-white-blog-business-coffee-261579.jpg';
import CarouselImg2 from '../../assets/business-college-composition-desk-419635.jpg';
import CarouselImg1 from '../../assets/book-chapter-six-5834.jpg';
import './Home.css';

const Home = () => {
    return (
        <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CarouselImg1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Create Your Own Course</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CarouselImg2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Expand Your Knowledge</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={CarouselImg3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Check out our awesome courses</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="container marketing">
<div className="row">
  <div className="col-lg-4">
    <h2>Learn</h2>
    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
    <p><Link className="btn btn-secondary" to="/enroll">View Details</Link></p>
  </div>
  <div className="col-lg-4">
    <h2>Create</h2>
    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
    <p><Link className="btn btn-secondary" to="/admin">View Details</Link></p>
  </div>
  <div className="col-lg-4">
    <h2>Share</h2>
    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
  </div>
</div>
<hr className="featurette-divider" />
<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
  </div>
  <div className="col-md-5" />
</div>
</div>
</>
);
};

export default Home;