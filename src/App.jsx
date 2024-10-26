import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Search from "./pages/Search/Search.jsx";
import SignInPage from "./pages/Authentication_Pages/SignInPage.jsx";
import SignUpPage from "./pages/Authentication_Pages/SignUpPage.jsx";
import CollabCreation from "./pages/User_Dashboard_Pages/Collabs/CollabCreation.jsx";
import ResetPasswordPage from "./pages/Authentication_Pages/ResetPasswordPage.jsx";
import Main from "./pages/User_Dashboard_Pages/Main.jsx";
import ProposalsCard from "./components/Cards/ProposalsCard.jsx";
import { UserNavbar } from "./components/Navbar.jsx";
import SettingsPage from "./pages/User_Dashboard_Pages/SettingsPages/SettingsPage.jsx";
import ProfileSettings from "./pages/User_Dashboard_Pages/SettingsPages/ProfileSettings.jsx";
import PrivacySecurity from "./pages/User_Dashboard_Pages/SettingsPages/PrivacySecurity.jsx";
import VerificationPage from "./pages/User_Dashboard_Pages/SettingsPages/VerificationPage.jsx";
import HelpSettingsPage from "./pages/User_Dashboard_Pages/SettingsPages/Help.jsx";
import NotificationSettings from "./pages/User_Dashboard_Pages/SettingsPages/NotificationSettings.jsx";
import Profile from "./pages/User_Dashboard_Pages/ProfilePages/Profile.jsx";
import UserDashboard from "./pages/User_Dashboard_Pages/Dashboard.jsx";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Chats from "./pages/Chats/ChatsCategory/Chats.jsx";
import MessageArea from "./pages/Chats/MessageArea/MessageArea.jsx";
import MessagePanel from "./pages/Chats/MessageArea/MessagePanel.jsx";
import Opportunity from "./pages/Homepage/Opportunity.jsx";
import SubOpportunity from "./pages/Homepage/SubOpportunity.jsx";
import OpportunityApplication from "./pages/Homepage/OpportunityApplication.jsx";
import Products from "./pages/Homepage/Products.jsx";
import ProductsAndServices from "./pages/Homepage/ProductsAndServices.jsx";
import CollabSettings from "./pages/User_Dashboard_Pages/SettingsPages/CollabSettings.jsx";
import PricingPage from "./pages/General_Pages/PricingPage/PricingPage.jsx";
import RolePermission from "./pages/User_Dashboard_Pages/SettingsPages/TeamSettings/RolePermission.jsx";
import TeamMemberList from "./pages/User_Dashboard_Pages/SettingsPages/TeamSettings/TeamMemberList.jsx";
import TeamList from "./pages/User_Dashboard_Pages/SettingsPages/TeamSettings/TeamList.jsx";
import MainTeamPage from "./pages/User_Dashboard_Pages/SettingsPages/TeamSettings/MainTeamPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/resetpassword",
    element: <ResetPasswordPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/opportunities",
    element: <UserNavbar />,
    children: [
      {
        index: true,
        element: <Opportunity />,
      },
      {
        path: ":opportunityId",
        element: <SubOpportunity />,
      },
      {
        path: "apply/:opportunityId",
        element: <OpportunityApplication />,
      },
    ],
  },
  {
    path: "/products-and-services",
    element: <UserNavbar />,
    children: [
      {
        index: true,
        element: <ProductsAndServices />,
      },
    ],
  },
  {
    path: "/settings",
    element: <UserNavbar />,
    children: [
      {
        index: true,
        element: <SettingsPage />,
      },
      {
        path: "profile",
        element: <ProfileSettings />,
      },
      {
        path: "privacy",
        element: <PrivacySecurity />,
      },
      {
        path: "verification",
        element: <VerificationPage />,
      },
      {
        path: "help",
        element: <HelpSettingsPage />,
      },
      {
        path: "notifications",
        element: <NotificationSettings />,
      },
      {
        path: "collab",
        element: <CollabSettings />,
      },
      {
        path: "teams",
        element: <TeamList />,
      },
      {
        path: "teams/:teamId",
        element: <MainTeamPage />,
      },
    ],
  },
  {
    path: "/profile",
    // element: <UserNavbar />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard",
    // element: <UserNavbar />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: "/collab",
    element: <CollabCreation />,
  },
  {
    path: "/chats",
    element: <Chats />,
    children: [
      { index: true, element: <Chats /> },
      {
        path: ":chatsCategory/:chatId",
        element: <MessageArea />,
      },
      {
        path: ":chatsCategory/:groupId/:chatId",
      },
    ],
  },
  {
    element: <Chats />,
    children: [
      {
        path: "/chats",
        element: <MessageAreaPlaceholder />,
      },
      {
        path: "/chats/:chatsCategory/:chatId",
        element: <MessageArea />,
      },
      {
        path: "/chats/:chatsCategory/:teamId/:chatId",
        element: <MessageArea />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/chats/:chatsCategory/:chatId/collab-proposal",
        element: <CollaborationProposal />,
      },
    ],
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
