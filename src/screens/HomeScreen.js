import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Pagination from "./../components/homeComponents/pagination";
import Footer from "./../components/Footer";
import Header from "./../components/Header";
import React from "react";
import ShopSection from "./../components/homeComponents/ShopSection";
import Silder from "./../components/silder";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <Silder/>
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <Pagination/>
      <CalltoActionSection />

      <Footer />
    </div>
  );
};

export default HomeScreen;
