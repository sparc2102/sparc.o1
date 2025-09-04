import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { Dashboard } from './pages/Dashboard';
import { EventsPage } from './pages/EventsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CommunityPage } from './pages/CommunityPage';
import { CareersPage } from './pages/CareersPage';
import { AboutPage } from './pages/AboutPage';
import { MembershipPage } from './pages/MembershipPage';
import { ProfilePage } from './pages/ProfilePage';
import { AdminPage } from './pages/AdminPage';
import { ContactPage } from './pages/ContactPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { ResourceDetailPage } from './pages/ResourceDetailPage';
import { ForumTopicDetailPage } from './pages/ForumTopicDetailPage';
import { BillingPage } from './pages/BillingPage';
import { CertificationsPage } from './pages/CertificationsPage';
import SupportPage from './pages/SupportPage';
import HelpCenterPage from './pages/HelpCenterPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AdminPortalPage from './pages/AdminPortalPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/events/:id" element={<EventDetailPage />} />
              <Route path="/resources/:id" element={<ResourceDetailPage />} />
              <Route path="/community/:topicId" element={<ForumTopicDetailPage />} />
              <Route path="/billing" element={<BillingPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/help" element={<HelpCenterPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/admin-portal" element={<AdminPortalPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;