import React from 'react';

import classes from './tabs.module.scss';

export default function Tabs() {
  return (
    <div className={classes['inner-tabs']}>
      <button className={classes.tab}>САМЫЙ ДЕШЕВЫЙ </button>
      <button className={classes.tab}>САМЫЙ БЫСТРЫЙ </button>
      <button className={classes.tab}>ОПТИМАЛЬНЫЙ </button>
    </div>
  );
}
