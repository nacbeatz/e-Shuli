// /home/ubuntu/e_learning_platform/frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage'; // General dashboard
import LecturerDashboardPage from './pages/LecturerDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
//import PaymentPage from './pages/PaymentPage';
import AuthCallbackPage from './pages/AuthCallbackPage'; // For Google OAuth callback
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { AuthProvider } from './contexts/AuthContext';

import './App.css'; // You can create this for basic App-level styles

function App() {
  return (
    <AuthProvider> // Wrap with AuthProvider if using AuthContext
      <Router>
       <Header /> 
        <div className="main-content">
          <Switch>
             <Route path="/" exact component={HomePage} /> 
             <Route path="/courses" exact component={CoursesPage} /> 
             <Route path="/course/:id" component={CourseDetailPage} /> 
             <Route path="/login" component={LoginPage} /> 
             <Route path="/signup" component={SignupPage} />
             <Route path="/dashboard" component={DashboardPage} />
             <Route path="/lecturer-dashboard" component={LecturerDashboardPage} /> 
             <Route path="/admin-dashboard" component={AdminDashboardPage} />
              {/*  <Route path="/payment" component={PaymentPage} /> */}
             <Route path="/authcallback" component={AuthCallbackPage} />
             {/*         Placeholder Route */}
            <Route path="/" exact render={() => <div><h1>Welcome to the E-Learning Platform Frontend!</h1><p>Scaffolding in progress...</p></div>} />
          </Switch>
        </div>
         <Footer />
      </Router>
    // </AuthProvider>
  );
}

export default App;

