import Navigation from "./Navigation";
import MainSection from "./MainSection";
import SideBar from "./SideBar";

function AmazonPage() {
  return (
    <div>
      <Navigation />
      <div style={{ display: "flex" }}>
        <SideBar />
        <MainSection />
      </div>
    </div>
  );
}

export default AmazonPage;