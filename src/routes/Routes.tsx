import { createBrowserRouter } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import App from "../App";
import ArabicPage from "../pages/Arabic";
import EnglishPage from "../pages/English";
import CookingPage from "../pages/Cooking";
import ArchivesPage from "../pages/Archives";
import ChurchPage from "../pages/Church";
import HandymanPage from "../pages/Handyman";
import MVPPage from "../pages/MVP";
import TravelPage from "../pages/Travel";
import TVPage from "../pages/TV";
import VideoPage from "../pages/Video";
import ImagesPage from "../pages/Images";
import MusicPage from "../pages/Music";
import EventsCalendar from '../pages/EventsCalendar';

/**
 * The router configuration for the application.
 */
export const router = createBrowserRouter([
  {
    path: "/stgeorge-react/",
    element: <App />,
    children: [
      {
        // path: "/stgeorge-react/",
        // element: <HomePage title={"Medhat مدحت 🇪🇬"} 
        // subtitle={""}>
        //   Ethiopia, Egypt, Canada
        // </HomePage>
        path: "/stgeorge-react/",
        element: <EventsCalendar />,
      },
      {
        path: "/stgeorge-react/arabic",
        element: <ArabicPage />,
      },
      {
        path: "/stgeorge-react/english",
        element: <EnglishPage />,
      },
      {
        path: "/stgeorge-react/cooking",
        element: <CookingPage />,
      },
      {
        path: "/stgeorge-react/archives",
        element: <ArchivesPage />,
      },
      {
        path: "/stgeorge-react/church",
        element: <ChurchPage />,
      },
      {
        path: "/stgeorge-react/handyman",
        element: <HandymanPage />,
      },
      {
        path: "/stgeorge-react/mvp",
        element: <MVPPage />,
      },
      {
        path: "/stgeorge-react/travel",
        element: <TravelPage />,
      },
      {
        path: "/stgeorge-react/tv",
        element: <TVPage />,
      },
      {
        path: "/stgeorge-react/video",
        element: <VideoPage />,
      },
      {
        path: "/stgeorge-react/music",
        element: <MusicPage />,
      },
      {
        path: "/stgeorge-react/events-calendar",
        element: <EventsCalendar />,
      },
      {
        path: "/stgeorge-react/images",
        element: <ImagesPage />,
      },
    ],
  },
]);
