// /home/ubuntu/e_learning_platform/frontend/src/pages/CoursesPage.js
import React, { useState, useEffect } from 'react';
// import courseService from '../services/courseService'; // To be created

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchCourses = async () => {
    //   try {
    //     const data = await courseService.getAllPublishedCourses();
    //     setCourses(data);
    //   } catch (error) {
    //     console.error("Error fetching courses:", error);
    //   }
    //   setLoading(false);
    // };
    // fetchCourses();
    setCourses([
      { id: '1', title: 'AI Fundamentals', description: 'Learn the basics of AI.', lecturer: 'Dr. AI Expert' },
      { id: '2', title: 'HTML & CSS Mastery', description: 'Build beautiful websites.', lecturer: 'Prof. Web Design' },
      { id: '3', title: 'JavaScript for Beginners', description: 'Interactive web development.', lecturer: 'Mr. JS Guru' },
    ]); // Placeholder data
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div>
      <h1>Explore Our Courses</h1>
      {/* Add filters and search bar here based on mockups */}
      <div className="course-grid">
        {courses.length > 0 ? (
          courses.map(course => (
            <div key={course.id} className="course-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p><i>Lecturer: {course.lecturer}</i></p>
              {/* <Link to={`/course/${course.id}`}>View Details</Link> */}
              <a href={`/course/${course.id}`}>View Details (Placeholder Link)</a>
            </div>
          ))
        ) : (
          <p>No courses available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;

