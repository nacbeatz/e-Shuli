// /home/ubuntu/e_learning_platform/frontend/src/pages/CourseDetailPage.js
import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom'; // To get course ID from URL
// import courseService from '../services/courseService'; // To be created

const CourseDetailPage = (props) => {
  // const { id } = useParams(); // Get course ID from URL if using react-router-dom v5+
  const id = props.match ? props.match.params.id : "1"; // Placeholder for older react-router or direct prop
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const fetchCourseDetails = async () => {
    //   try {
    //     const data = await courseService.getCourseById(id);
    //     setCourse(data);
    //   } catch (error) {
    //     console.error(`Error fetching course details for ${id}:`, error);
    //   }
    //   setLoading(false);
    // };
    // fetchCourseDetails();
    // Placeholder data
    if (id === "1") {
      setCourse({
        id: '1',
        title: 'AI Fundamentals',
        description: 'This course covers the fundamental concepts of Artificial Intelligence, including machine learning, neural networks, and natural language processing. Ideal for beginners.',
        lecturer: 'Dr. AI Expert',
        modules: [
          { 
            moduleId: 'm1', title: 'Module 1: Introduction to AI',
            lessons: [
              { lessonId: 'l1a', title: 'What is AI?', contentType: 'video', videoUrl: 'https://www.youtube.com/watch?v=BCFFnJwHvME' },
              { lessonId: 'l1b', title: 'History of AI', contentType: 'video', videoUrl: 'https://www.youtube.com/watch?v=87nBF09437I' },
              { lessonId: 'l1c', title: 'Module 1 Quiz', contentType: 'quiz' }
            ]
          },
          { 
            moduleId: 'm2', title: 'Module 2: Machine Learning Basics',
            lessons: [
              { lessonId: 'l2a', title: 'Supervised Learning', contentType: 'video', videoUrl: 'https://www.youtube.com/watch?v=KGNN2r-o2vk' },
              { lessonId: 'l2b', title: 'Unsupervised Learning', contentType: 'assignment' },
              { lessonId: 'l2c', title: 'Downloadable Cheatsheet', contentType: 'resource', resources: [{ name: 'ML Cheatsheet', url: '#'}] }
            ]
          }
        ]
      });
    } else {
      setCourse(null);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading course details...</div>;
  }

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p><i>Lecturer: {course.lecturer}</i></p>
      <p>{course.description}</p>
      
      <h2>Course Content</h2>
      {course.modules && course.modules.length > 0 ? (
        course.modules.map(module => (
          <div key={module.moduleId} style={{ border: '1px solid #eee', margin: '10px 0', padding: '10px' }}>
            <h3>{module.title}</h3>
            {module.lessons && module.lessons.length > 0 ? (
              <ul>
                {module.lessons.map(lesson => (
                  <li key={lesson.lessonId}>
                    {lesson.title} ({lesson.contentType})
                    {lesson.contentType === 'video' && lesson.videoUrl && 
                      <p><a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a></p>}
                    {lesson.contentType === 'resource' && lesson.resources && lesson.resources.length > 0 &&
                      lesson.resources.map(res => <p key={res.name}><a href={res.url}>Download: {res.name}</a></p>)
                    }
                  </li>
                ))}
              </ul>
            ) : <p>No lessons in this module.</p>}
          </div>
        ))
      ) : (
        <p>No modules available for this course yet.</p>
      )}
      {/* Add enrollment button, reviews, etc. based on mockups */}
    </div>
  );
};

export default CourseDetailPage;

