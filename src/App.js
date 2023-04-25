import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/Preloader/Preloader";
import style from "./App.module.scss";

const Homepage = lazy(async () => {
  return Promise.all([
    import("./pages/Homepage/Homepage"),

    new Promise((resolve) => setTimeout(resolve, 2000)),
    document.fonts.ready,
  ]).then(([moduleExports]) => moduleExports);
});

function App() {
  return (
    <>
      <div className={style.appWrapper}>
        <div className={style.app}>
          <Suspense fallback={<Preloader />}>
            <header className={style.header} id="header">
              <Header />
            </header>
            <div className={style.mainContentWrapper} id="homepage">
              <div className={style.mainContent}>
                <Routes preserverScrollPosition={true}>
                  <Route index path="/" element={<Homepage />} />
                </Routes>
              </div>
            </div>
            <footer className={style.footer} id="footer">
              <Footer />
            </footer>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
