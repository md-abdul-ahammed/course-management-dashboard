import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MerchantDetails from './pages/MerchantDetailsPages/MerchantDetails'
import Dashboard from './pages/MerchantDashboardPages/Dashboard'
import Trash from './pages/MerchantDashboardPages/Trash'
import MyProfile from './pages/MerchantDashboardPages/MyProfile/MyProfile'
import MerchantLanding from './pages/MerchantLanding/MerchantLanding'
import HomeLanding from './pages/Landing/HomeLanding'
import AlreadyLoggedIn from './pages/Auth/AlreadyLoggedIn'
import Courses from './pages/MerchantDashboardPages/Courses'
import Error404 from './pages/Error404'
import ContactInformation from './pages/MerchantDetailsPages/ContactInformation'
import AboutUs from './pages/AboutUs'
import Career from './pages/Career'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import StudentLogin from './pages/StudentAuth/StudentLogin'
import SelectAgeGrp from './pages/StudentAuth/SelectAgeGrp'
import StudentDetails from './pages/StudentAuth/StudentDetails'
import Blogs from './pages/Blogs'
import BlogsPost from './pages/BlogEntry'
import Events from './pages/Events'
import MerchantLogin from './pages/merchantOnboarding/merchantLogin'
import RegisterInstitute from './pages/merchantOnboarding/registerInstitute'
import ForgotPassword from './pages/merchantOnboarding/forgotPassword'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './ScrollToTop'
import CommingSoon from './pages/CommingSoon'
import Finished from './pages/MerchantDetailsPages/Finished'
import MainCourse from './pages/courses-institutes-page/index'
import SignUp from './pages/courses-institutes-page/user/sign-up'
import SignIn from './pages/courses-institutes-page/user/sign-in'
import HelpCenter from './pages/help-center'
import FaqPage from './pages/faqs'
import SearchPage from './pages/SearchPages'
import CoursePage from './pages/CoursePage'
import ContentGallery from './pages/ContentGallery'
import InstitutePage from './pages/InstitutePage'

import Notification from './pages/MerchantDashboardPages/Notification'
import Accountancy from './pages/MerchantDashboardPages/Accountancy'
import AddCourse from './pages/MerchantDashboardPages/AddCourse'
import Setting from './pages/MerchantDashboardPages/Setting'
import PaymentPage from './pages/Payment'
import { useDispatch } from 'react-redux'

import AdminInstitutes from './pages/AdminDashboard/AdminInstitutes/AdminInstitutes'
import AdminRequests from './pages/AdminDashboard/AdminRequests/AdminRequests'
import AdminBlogs from './pages/AdminDashboard/AdminBlogs/AdminBlogs'
import AdminDashboard from './pages/AdminDashboard/Dashboard/Dashboard'
import AdminEvents from './pages/AdminDashboard/AdminEvents/AdminEvents'
import AdminOverview from './pages/AdminDashboard/AdminOverview/AdminOverview'
import AdminStudents from './pages/AdminDashboard/Students/Students'
import AdminCoupons from './pages/AdminDashboard/AdminCoupons/AdminCoupons'
import AdminCareers from './pages/AdminDashboard/AdminCareers/AdminCareers'
import AdminInstituteRequests from './components/InstituteRequests/InstituteRequests'
import AdminChangesRequest from './components/ChangesRequest/ChangesRequest'
import AdminCourseRequests from './components/CourseRequests/CourseRequests'
import AdminRejectedList from './components/RejectedList/RejectedList'
import AdminActiveBlogs from './components/ActiveBlogs/ActiveBlogs'
import AdminAddBlog from './components/AddBlog/AddBlog'
import AdminEditBlog from './components/EditBlog/EditBlog'
import AdminActiveEvents from './components/ActiveEvents/ActiveEvents'
import AdminAddEvent from './components/AddEvent/AddEvent'
import AdminEditEvent from './components/EditEvent/EditEvent'
import AdminEditInstitute from './components/EditInstitute/EditInstitute'
import AdminEditCourse from './components/AdminEditCourse/AdminEditCourse'
import AdminAllStudents from './components/AllStudents/AllStudents'
import AdminStudentOverview from './components/StudentOverview/StudentOverview'
import AdminStudentDetails from './components/StudentDetails/StudentDetails'
import AdminWishlist from './components/Wishlist/Wishlist'
import AdminRecentlyViewed from './components/RecentlyViewed/RecentlyViewed'
import AdminPurchased from './components/Purchased/Purchased'
import AdminOngoing from './components/Ongoing/Ongoing'
import AdminActiveCareers from './components/ActiveCareers/ActiveCareers'
import AdminAddCareer from './components/AddCareer/AddCareer'
import AdminEditCareers from './components/EditCareers/EditCareers'

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AdminInstituteDetails from "./components/AdminInstituteDetails/AdminInstituteDetails";
import AdminInstituteOverview from "./components/AdminInstituteOverview/AdminInstituteOverview";
import AdminInstituteCourse from "./components/AdminInstituteCourse/AdminInstituteCourse";
import Settings from "./components/Settings/Settings";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "react-hot-toast";
import Test from "./util/Test";
import Profile from "./pages/Profile/Profile";
import ProfileHome from "./pages/Profile/ProfileHome";
import Wishlist from "./pages/Profile/Wishlist";
import RecentlyViewed from "./pages/Profile/RecentlyViewed";
import Reviews from "./pages/Profile/Reviews";
import OnGoingCourse from "./pages/Profile/OnGoingCourse";
import PurchaseCourse from "./pages/Profile/PurchaseCourse";
import InviteAndEarns from "./pages/Profile/InviteAndEarns";
import ManageCards from "./pages/Profile/ManageCards";
import DashboardHome from "./pages/MerchantDashboardPages/DashboardHome";
import EditCategories from "./components/Settings/EditCategories";
import EditFilters from "./components/Settings/EditFilters";
import SettingsOptions from "./components/Settings/SettingsOptions";
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const handleScroll = () => {
    console.log('f')
  }
  const handleNotMove = () => {
    console.log('e')
  }

  return (
    <div
      onScroll={handleScroll()}
      onMouseMove={handleNotMove()}
      className=' m-0 p-0 relative'
      style={{ overflowX: 'hidden' }}
    >
      <Toaster position='top-center' reverseOrder={false} />
      <ScrollToTop>
        <Routes>
          <Route path={'/merchant/details'} element={<MerchantDetails />} />
          <Route path={'/merchant/details/success'} element={<Finished />} />

          <Route path={'/merchant/dashboard'} element={<Dashboard />}>
            <Route path={'/merchant/dashboard'} element={<DashboardHome />} />
            <Route path='profile' element={<MyProfile />} />
            <Route
              path='contact-information'
              element={<ContactInformation />}
            />
            <Route path='courses' element={<Courses />} />
            <Route path='notifications' element={<Notification />} />
            <Route path='accountancy' element={<Accountancy />} />
            <Route path='settings' element={<Setting />} />
            <Route path='*' element={<Trash />} />
          </Route>

          <Route
            path='/merchant/dashboard/addCourses'
            element={<AddCourse />}
          />
          <Route path='/payment/:courseId' element={<PaymentPage />} />
          <Route path={'/about-us'} element={<AboutUs />} />
          <Route path={'/career'} element={<Career />} />
          <Route path={'/terms'} element={<TermsAndConditions />} />
          <Route path={'/privacy'} element={<PrivacyPolicy />} />
          <Route path={'/blogs'} element={<Blogs />} />
          <Route path={'/blogs/blogsdetails'} element={<BlogsPost />} />
          <Route path={'/events'} element={<Events />} />
          <Route path={'/contactus'} element={<ContactUs />} />
          <Route path={'/commingsoon'} element={<CommingSoon />} />

          <Route path={'courses_institutes'} element={<MainCourse />} />
          <Route path={'/signup'} element={<SignUp />} />
          <Route path={'/signin'} element={<SignIn />} />
          <Route path={'helpcenter'} element={<HelpCenter />} />
          <Route path={'faq'} element={<FaqPage />} />
          {/* <Route path={'/student-sign-in'} element={<StudentLogin />} /> */}
          <Route path={'/courses_institutes'} element={<MainCourse />} />
          <Route path='/search/*' element={<SearchPage />}>
            <Route path=':category' element={<SearchPage />}>
              <Route path=':query' element={<SearchPage />} />
            </Route>
          </Route>

          <Route path={'/course/:courseId'} element={<CoursePage />} />
          <Route path={'/institute/:instituteId'} element={<InstitutePage />} />
          <Route path='/course:courseId' element={<CoursePage />} />

          <Route path='/content-gallery' element={<ContentGallery />}>
            <Route path='institute/:instituteId' element={<ContentGallery />} />
            <Route path='course/:courseId' element={<ContentGallery />} />
          </Route>

          {/* <Route path={'/studentlogin'} element={<StudentLogin />} /> */}

          <Route path={'/studentlogin/selectage'} element={<SelectAgeGrp />} />
          <Route
            path={'/studentlogin/studentdetails'}
            element={<StudentDetails />}
          />

          <Route path={'/merchant'} element={<MerchantLanding />} />
          <Route path={'/logged-in'} element={<AlreadyLoggedIn />} />
          <Route path={'/merchant/login'} element={<MerchantLogin />} />
          <Route path={'/merchant/signup'} element={<RegisterInstitute />} />
          <Route path={'/login'} element={<SignIn />} />
          <Route path={'/signup'} element={<SignUp />} />

          <Route path={'/forgot'} element={<ForgotPassword />} />
          <Route path={'/'} element={<HomeLanding />} />
          <Route path={'/merchant'} element={<MerchantLanding />} />
          <Route path={'/logged-in'} element={<AlreadyLoggedIn />} />
          <Route path={'/merchant/login'} element={<MerchantLogin />} />
          <Route path={'/merchant/signup'} element={<RegisterInstitute />} />
          {/* <Route path={'/login'} element={<StudentLogin />} /> */}
          <Route path={'/forgot'} element={<ForgotPassword />} />
          <Route path={'/'} element={<HomeLanding />} />

          <Route path={'/profile'} element={<Profile />}>
            <Route path={'/profile'} element={<ProfileHome />} />
            <Route path={'/profile/profileHome'} element={<ProfileHome />} />
            <Route path={'/profile/wishlist'} element={<Wishlist />} />
            <Route
              path={'/profile/recentlyViewed'}
              element={<RecentlyViewed />}
            />
            <Route path={'/profile/reviews'} element={<Reviews />} />
            <Route
              path={'/profile/ongoingCourse'}
              element={<OnGoingCourse />}
            />
            <Route
              path={'/profile/purchaseCourse'}
              element={<PurchaseCourse />}
            />
            <Route
              path={'/profile/invite&earns'}
              element={<InviteAndEarns />}
            />
            <Route path={'/profile/manageCards'} element={<ManageCards />} />
            <Route path={'/profile/login'} element={<SignIn />} />
          </Route>

          <Route
            path='/adminDashboard/requests'
            element={
              <Navigate to='/adminDashboard/requests/instituteRequests' />
            }
          />
          <Route
            path='/adminDashboard'
            element={<Navigate to='/adminDashboard/overview' />}
          />
          <Route
            path='/adminDashboard/blogs'
            element={<Navigate to='/adminDashboard/blogs/activeBlogs' />}
          />

          <Route
            path='/adminDashboard/events'
            element={<Navigate to='/adminDashboard/events/activeEvents' />}
          />
          <Route
            path='/adminDashboard/students'
            element={<Navigate to='/adminDashboard/students/allStudents' />}
          />
          <Route
            path='/adminDashboard/careers'
            element={<Navigate to='/adminDashboard/careers/activeCareers' />}
          />

          <Route
            path='/adminDashboard/requests'
            element={
              <Navigate to='/adminDashboard/requests/instituteRequests' />
            }
          />
          <Route
            path='/adminDashboard/blogs'
            element={<Navigate to='/adminDashboard/blogs/activeBlogs' />}
          />

          <Route
            path='/adminDashboard/events'
            element={<Navigate to='/adminDashboard/events/activeEvents' />}
          />
          <Route
            path='/adminDashboard/students'
            element={<Navigate to='/adminDashboard/students/allStudents' />}
          />
          <Route
            path='/adminDashboard/careers'
            element={<Navigate to='/adminDashboard/careers/activeCareers' />}
          />

          <Route path='student-details-form' element={<SelectAgeGrp />} />
          <Route path={'student-details'} element={<StudentDetails />} />

          <Route path={'/merchant'} element={<MerchantLanding />} />
          <Route path={'/logged-in'} element={<AlreadyLoggedIn />} />
          <Route path={'/merchant/login'} element={<MerchantLogin />} />
          <Route path={'/merchant/signup'} element={<RegisterInstitute />} />
          <Route path={'/forgot'} element={<ForgotPassword />} />
          <Route path={'/'} element={<HomeLanding />} />

          <Route
            path='/studentDetails/:studentId/*'
            element={<AdminStudentDetails />}
          >
            <Route path='' element={<AdminStudentOverview />} />
            <Route path='overview' element={<AdminStudentOverview />} />
            <Route path='wishlist' element={<AdminWishlist />} />
            <Route path='recentlyViewed' element={<AdminRecentlyViewed />} />
            <Route path='purchased' element={<AdminPurchased />} />
            <Route path='ongoing' element={<AdminOngoing />} />
          </Route>
          <Route
            path='/editInstitute/:instituteId'
            element={<AdminEditInstitute />}
          />
          <Route
            path='adminInstituteDetails/:instituteId/*'
            element={<AdminInstituteDetails />}
          >
            <Route path='' element={<AdminInstituteOverview />} />
            <Route path='overview' element={<AdminInstituteOverview />} />
            <Route path='instituteCourse' element={<AdminInstituteCourse />} />
          </Route>
          <Route
            path='/adminEditCourse/:adminCourseId/:fromLocation'
            element={<AdminEditCourse />}
          />
          <Route path='/adminDashboard/*' element={<AdminDashboard />}>
            <Route path='overview' element={<AdminOverview />} />
            <Route path='requests/*' element={<AdminRequests />}>
              <Route
                path='instituteRequests'
                element={<AdminInstituteRequests />}
              />
              <Route path='changesRequest' element={<AdminChangesRequest />} />
              <Route path='courseRequests' element={<AdminCourseRequests />} />
              <Route path='rejectedList' element={<AdminRejectedList />} />
            </Route>
            <Route path='institutes' element={<AdminInstitutes />} />
            <Route path='students/*' element={<AdminStudents />}>
              <Route path='allStudents' element={<AdminAllStudents />} />
            </Route>
            <Route path='coupons' element={<AdminCoupons />} />

            <Route path='blogs/*' element={<AdminBlogs />}>
              <Route path='activeBlogs' element={<AdminActiveBlogs />} />
              <Route path='addBlog' element={<AdminAddBlog />} />
              <Route path='editBlog/:blogId' element={<AdminEditBlog />} />
            </Route>

            <Route path='events/*' element={<AdminEvents />}>
              <Route path='activeEvents' element={<AdminActiveEvents />} />
              <Route path='addEvent' element={<AdminAddEvent />} />
              <Route path='editEvent/:eventId' element={<AdminEditEvent />} />
            </Route>
            <Route path='careers/*' element={<AdminCareers />}>
              <Route path='activeCareers' element={<AdminActiveCareers />} />
              <Route path='addCareer' element={<AdminAddCareer />} />
              <Route path='editCareers' element={<AdminEditCareers />} />
            </Route>
            <Route path="settings/*" element={<Settings />}>
              <Route path="" element={<SettingsOptions />} />
              <Route path="editCategories" element={<EditCategories />} />
              <Route path="editFilters" element={<EditFilters />} />
            </Route>
          </Route>
          {process.env.NODE_ENV === 'development' && (
            <Route path='/test' element={<Test />} />
          )}

          <Route path={'*'} element={<Error404 />} />
        </Routes>
      </ScrollToTop>
    </div>
  )
}

export default App
