import Navigation from "./Navigation";
import MainSection from "./Mainsection";
import SideBar from "./Sidebar";

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