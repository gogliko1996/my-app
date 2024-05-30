import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { routeTable } from "../constants";
import { Home } from "../../page/Home/Home";
import { Newroom } from "../../page/NewRoom/Newroom";

export const AppRouter = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routeTable.home} element={<Home />} />
        <Route path={routeTable.newroom} element={<Newroom />} />
      </Routes>
    </BrowserRouter>
  );
});
