// /home/ubuntu/e_learning_platform/frontend/src/services/courseService.js
import apiClient from "./api";

const courseService = {
  // getAllPublishedCourses: async () => {
  //   try {
  //     const response = await apiClient.get("/courses");
  //     return response.data;
  //   } catch (error) {
  //     throw error.response?.data || error.message || "Failed to fetch courses";
  //   }
  // },

  // getCourseById: async (courseId) => {
  //   try {
  //     const response = await apiClient.get(`/courses/${courseId}`);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response?.data || error.message || "Failed to fetch course details";
  //   }
  // },

  // createCourse: async (courseData) => { // For lecturers/admins
  //   try {
  //     const response = await apiClient.post("/courses", courseData);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response?.data || error.message || "Failed to create course";
  //   }
  // },
  
  // updateCourse: async (courseId, courseData) => { // For lecturers/admins
  //   try {
  //     const response = await apiClient.put(`/courses/${courseId}`, courseData);
  //     return response.data;
  //   } catch (error) {
  //     throw error.response?.data || error.message || "Failed to update course";
  //   }
  // },

  // Placeholder functions
  getAllPublishedCourses: async () => {
    console.log("courseService.getAllPublishedCourses called (placeholder)");
    return Promise.resolve([
      { id: "1", title: "AI Fundamentals (from service)", description: "Learn AI.", lecturerId: "lecturer1" },
      { id: "2", title: "Web Dev (from service)", description: "Learn Web.", lecturerId: "lecturer2" },
    ]);
  },
  getCourseById: async (courseId) => {
    console.log(`courseService.getCourseById called for ${courseId} (placeholder)`);
    return Promise.resolve(
        { id: courseId, title: `Course ${courseId} Title (from service)`, description: `Details for course ${courseId}.`, lecturerId: "lecturer1", modules: [] }
    );
  },
};

export default courseService;

