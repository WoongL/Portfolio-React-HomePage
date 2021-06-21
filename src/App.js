import "./App.css";
import TopMenuBar from "./component/topMenuBar/index";
import AboutArea from "./component/aboutArea";
import HistoryArea from "./component/historyArea";
import ContactArea from "./component/contactArea";
import HomeArea from "./component/homeArea";

function App() {
  return (
    <div>
      {/* <header id="header"><title>포폴</title></header> */}
      <TopMenuBar />
      <div id="body">
        <HomeArea />
        <AboutArea />
        <HistoryArea />
        <ContactArea />
      </div>
      <div id="footer">
        <div id="footer-area"></div>
      </div>
    </div>
  );
}

export default App;
