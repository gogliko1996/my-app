import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../../page/Home/Home";
import { Newroom } from "../../page/NewRoom/Newroom";
import { IntegrationPage } from "../../page/IntegrationPage/IntegrationPage";
import { screen } from "../constants";
import { IntegrationPagedetails } from "../../page/IntegrationPage/components/IntegrationPagedetails";
import { BlogPage } from "../../page/BlogPage/BlogPage";
import { ArticleDetail } from "../../page/ArticleDetail/ArticleDetail";
import { RequestDemo } from "../../page/RequestDemo/RequestDemo";
import { Jobs } from "../../page/Jobs/Jobs";
import { JobsDetails } from "../../page/JobsDetails/JobsDetails";
import { AboutUs } from "../../page/AboutUs/AboutUs";
import { LawsLandingPages } from "../../page/LawsLandingPages/LawsLandingPages";

export const AppRouter = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={screen.home} element={<Home />} />
        <Route path={screen.newroom} element={<Newroom />} />
        <Route path={screen.integrationPage} element={<IntegrationPage />} />
        <Route path={screen.integrationPagedetails} element={<IntegrationPagedetails />} />
        <Route path={screen.blogPage} element={<BlogPage />} />
        <Route path={screen.articleDetail} element={<ArticleDetail />} />
        <Route path={screen.requestDemo} element={<RequestDemo />} />
        <Route path={screen.jobs} element={<Jobs />} />
        <Route path={screen.jobsDetails} element={<JobsDetails />} />
        <Route path={screen.aboutUs} element={<AboutUs />} />
        <Route path={screen.lawsLandingPages} element={<LawsLandingPages />} />
      </Routes>
    </BrowserRouter>
  );
});
