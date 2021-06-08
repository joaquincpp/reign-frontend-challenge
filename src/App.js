import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import classes from './styles.module.css'

function App() {
  return (
    <div className={classes.app}>
      <section>
        <Header />
      </section>
      <section className={classes.tabsSection}>
        <Tabs />
      </section>
    </div>
  );
}

export default App;
