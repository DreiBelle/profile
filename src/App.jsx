import styles from "./style.js";
import { Navbar, Hero, About, Skills, Sample, Education, Footer} from "./components";

const App = () => (
  <div id="home" className="w-full select-none">
    <div className={`${styles.gradientBg} ${styles.flexCenterRsp}`}>
      <Navbar />
      <Hero />
    </div>

    <div className={`bg-primary`}>
      <div id="skills">
        <Skills />
        <Sample />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="phone" className="pb-[30px]">
        <Footer/>
      </div>
    </div>
  </div>
);

export default App;
