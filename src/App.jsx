import styles from './style.js'
import {Navbar, Hero} from './components'

const App = () => (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.navContainer} ${styles.flexCenter} ${styles.gradientBg}`}>
        <Navbar />
        <Hero />
      </div>

      <div className='bg-hunter h-screen'>
        another one
      </div>
    </div>
)

export default App  