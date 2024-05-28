import "./App.css";
import Navbar from "./components/Navbar/Navbar";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "/project",
//         element: <ProjectPage />,
//       },
//       {
//         path: "/about",
//         element: <AboutPage />,
//       },
//       {
//         path: "/contact",
//         element: <ContactPage />,
//       },
//     ],
//   },
// ]);

const App = () => {
  return <Navbar />;
};

export default App;
