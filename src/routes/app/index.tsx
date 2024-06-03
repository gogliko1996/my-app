import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../../page/Home/Home";
import { Newroom } from "../../page/NewRoom/Newroom";
import { IntegrationPage } from "../../page/IntegrationPage/IntegrationPage";
import { screen } from "../constants";
import { IntegrationPagedetails } from "../../page/IntegrationPage/components/IntegrationPagedetails";
import { BlogPage } from "../../page/BlogPage/BlogPage";
import { ArticleDetail } from "../../page/ArticleDetail/ArticleDetail";

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
      </Routes>
    </BrowserRouter>
  );
});
