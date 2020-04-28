import { lazy } from "react";

const delivery = "/delivery",
  catalog = "/catalog",
  feedbacks = "/feedbacks",
  contacts = "/contacts",
  admin = "/admin",
  home = "/";

const Delivery = lazy(() => import("../pages/Delivery")),
  Catalog = lazy(() => import("../pages/Catalog")),
  Feedbacks = lazy(() => import("../pages/Feedbacks")),
  Contacts = lazy(() => import("../pages/Contacts")),
  Admin = lazy(() => import("../pages/Admin")),
  Home = lazy(() => import("../pages/Home"));

export const ROUTES = [
  {
    path: home,
    component: Home,
  },
  {
    path: delivery,
    component: Delivery,
  },
  {
    path: catalog,
    component: Catalog,
  },
  {
    path: feedbacks,
    component: Feedbacks,
  },
  {
    path: contacts,
    component: Contacts,
  },
  {
    path: admin,
    component: Admin,
  },
]