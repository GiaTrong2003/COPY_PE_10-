import LayoutDefault from "../layout/LayoutDefault";
import Day3 from "../pages/Day3";
import Day4 from "../pages/Day4";
import Day5 from "../pages/Day5";
import Day6 from "../pages/Day6";
import Day7 from "../pages/Day7";
import Day8 from "../pages/Day8";

const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/day3/:bai",
        element: <Day3 />
      },
      {
        path: "/day4/:bai",
        element: <Day4 />
      },
      {
        path: "/day5/:bai",
        element: <Day5 />
      },
      {
        path: "/day6/:bai",
        element: <Day6 />
      },
      {
        path: "/day7/:bai",
        element: <Day7 />
      },
      {
        path: "/day8/:bai",
        element: <Day8 />
      },
    ],
  },
];

export default routes;
