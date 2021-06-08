import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { Dropdown } from './components/Dropdown';
import { News } from './components/News';
import classes from './styles.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={classes.body}>
        <section className={classes.tabsSection}>
          <Tabs />
        </section>
        <section className={classes.dropdownSection}>
          <Dropdown />
        </section>
        <section className={classes.newsSection}>
          <News />
        </section>
      </div>
    </>
  );
}

export default App;
