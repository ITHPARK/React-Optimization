import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import ListPage from "./pages/ListPage/index";
// import ViewPage from "./pages/ViewPage/index";
//동적 import
const ListPage = lazy(() => import("./pages/ListPage/index"));
const ViewPage = lazy(() => import("./pages/ViewPage/index"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<div>로딩 중...</div>}>
                <Routes>
                    <Route path="/" element={<ListPage />} />
                    <Route path="/view/:id" element={<ViewPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
