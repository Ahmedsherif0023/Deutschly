import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("VocabPage", "routes/VocabPage.tsx"),
route("SentenceFormPage", "routes/SentenceFormPage.tsx"),
route("AlphabetPage", "routes/AlphabetPage.tsx"),
route("OurMission", "routes/OurMission.tsx"),
route("Team", "routes/Team.tsx"),
route("ContactUs", "routes/ContactUs.tsx"),
route("FAQ", "routes/FAQ.tsx"),
] satisfies RouteConfig;
export const loader = () => null;