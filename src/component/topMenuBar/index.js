import "./index.css";

function TopMenuBar() {
  return (
    <div id="top-menu">
      <a href="#home-area" className="top-menuitem">
        Home
      </a>
      <a href="#about-area" className="top-menuitem">
        About
      </a>
      <a href="#history-area" className="top-menuitem">
        History
      </a>
      <a href="#contact-area" className="top-menuitem">
        Contact
      </a>
    </div>
  );
}
export default TopMenuBar;
