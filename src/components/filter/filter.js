/* eslint-disable react/jsx-key */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

import Checkboxes from '../checkbox/checbox';

import classes from './filter.module.scss';

function Filter() {
  const checked = useSelector((state) => state.filter.checked);
  const [checkedList, setCheckedList] = useState({ ...checked });
  console.log(checkedList);
  useEffect(() => {
    setCheckedList(checked);
  }, [checked]);

  const filtersData = {
    all: 'Все',
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  };

  const filterListCheckbox = Object.entries(filtersData).map((item) => (
    <Checkboxes value={item[1]} amount={item[0]} checked={checkedList[item[0]]} key={item[0]} />
  ));

  return (
    <aside className={classes.filterInner}>
      <div className={classes['filter-list']}>
        <h5 className={classes['filter-list__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
        <div className={classes['checkbox-inner']}>{filterListCheckbox}</div>
      </div>
    </aside>
  );
}
// function mapStateToProps(state) {
//   return { checked: state.filter.checked };
// }

export default connect(null, null)(Filter);
