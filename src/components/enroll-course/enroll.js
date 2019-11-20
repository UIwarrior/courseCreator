/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import './enroll.css';
import { useHistory } from "react-router-dom";

import axiosInstance from '../../api';

import { Modal, Button } from 'react-bootstrap';
import GoogleAuth from '../googleAuth';


const Enroll = () => {
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [createdCourseArr, setcreatedCourseArr] = useState([]);
    const [courseObj , setCourseObj ] = useState({});
    const [loggedInFlag ,setLoggedInFlag] = useState(false);

    const enrollCourse =(obj) => {
        setCourseObj(obj);
        handleShow();
    };

    const getEnrolledCourses = (currentData = []) =>{

      let newCurrentData;
      if(currentData.length > 0){
       newCurrentData = [...currentData];
      }
      else{
        newCurrentData = [...createdCourseArr];
      }
      const { email } =  JSON.parse(localStorage.getItem('loggedUser'));

      axiosInstance.post('/enroll/fetchenrollcourses', {
        email
      }).then(response => {
        console.log('enrolled courses', response.data);
        newCurrentData.forEach(course => {
          response.data.response.forEach( enrolled => {
            if(course.courseId.toLowerCase() === enrolled.courseId.toLowerCase()) {
              course.enrolled = true;
            }
          });
        });
        console.log(newCurrentData);
        setcreatedCourseArr(newCurrentData);
      });
    };

    useEffect(() => {
      axiosInstance.get('/course/', {
          params: {
              view: 'public'
          }
      }).then(response => {
          setcreatedCourseArr(response.data.response);
          console.log(createdCourseArr);
          setTimeout(function(){
            getEnrolledCourses(response.data.response);
          },1000);
         
      });
   }, []);

   const openCourse = (param) => {
     history.push(`/view-course?id=${param.courseId}`);
                                      
   };

    const purchaseCourse = () => {
      const { name, email } =  JSON.parse(localStorage.getItem('loggedUser'));
      axiosInstance.post('/enroll/enrollcourse', {
          courseId: courseObj.courseId,
          email,
          name,
          courseName: courseObj.courseName,
          coursePrice: courseObj.coursePrice,
          courseDuration: courseObj.courseDuration  
      }).then(response => {
        console.log(response);
        handleClose(true);
        getEnrolledCourses();
      });
    };


    return (
        <main role="main">
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enroll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {!localStorage.getItem('loggedUser') &&  <h3>Please login to enroll!</h3> }
            {localStorage.getItem('loggedUser') &&  <h3>Are you sure you want to enroll to this course?</h3> }
          </div>
          </Modal.Body>
        <Modal.Footer>
          {!localStorage.getItem('loggedUser') && <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>}
          {localStorage.getItem('loggedUser') && <Button variant="success" onClick={purchaseCourse}>
            Enroll
          </Button>}
          {!localStorage.getItem('loggedUser') && <GoogleAuth/>}
        </Modal.Footer>
      </Modal>    


        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Our Current Courses</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
            </p>
          </div>
        </section>
      
        <div className="album py-5 bg-light">
          <div className="container">
      
            <div className="row">
             {createdCourseArr.map( val => (
            <div className="col-md-4" key={val.courseName}>
            <div className="card mb-4 shadow-sm">
              <div className="card-body">
                <h4>{val.courseName}</h4>   
                <p className="card-text">{val.courseDesc}</p>
                <p className="card-text">{val.price}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                   {val.enrolled && <Button type="button" variant="success">Enrolled</Button> }
                   {val.enrolled && <Button type="button" variant="info" style={{marginLeft: '5px'}} onClick={() => openCourse(val)}>Start Course</Button> }
                  {!val.enrolled && <Button type="button" variant="light" className="btn btn-sm btn-outline-secondary" onClick={() => enrollCourse(val)}>Enroll</Button> }
                  </div>
                  <small className="text-muted">{val.courseDuration}</small>
                </div>
              </div>
            </div>
          </div>
             ))}
  

            </div>
          </div>
        </div>
      
      </main>
    );
};

export default Enroll;