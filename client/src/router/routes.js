import Main from "@/views/MainPage.vue";
import Detection from "@/views/DetectionPage.vue";
import Loading from "@/views/LoadingPage.vue";
import Statistic from "@/views/StatisticPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/detection",
    name: "detection",
    component: Detection,
  },
  {
    path: "/loading",
    name: "loading",
    component: Loading,
  },
  {
    path: "/statistics",
    name: "statistics",
    component: Statistic,
  },
];

export default routes;
