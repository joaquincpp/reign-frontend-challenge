import React from 'react';
import Provider from './components/Provider';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Dropdown from './components/Dropdown';
import News from './components/News';
import Pagination from './components/Pagination';
import classes from './styles.module.css';

const App = () => (
  <Provider>
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
      <section className={classes.paginationSection}>
        <Pagination />
      </section>
    </div>
  </Provider>
);

export default App;
