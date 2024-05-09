import styles from "./style.js";
import { Navbar, Hero, About, Skills, Sample } from "./components";

const App = () => (
  <div id="home" className="w-full">
    <div className={`${styles.gradientBg} ${styles.flexCenterRsp}`}>
      <Navbar />
      <Hero />
    </div>

    <div className={`bg-primary`}>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
        <Sample />
      </div>
      <div id="education" className="h-screen">
        education
      </div>
      <div id="phone" className="h-screen">
        phone
      </div>
    </div>
  </div>
);

export default App;
