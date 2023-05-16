import React from 'react';
import { Checkbox } from 'antd';
import { connect, useDispatch } from 'react-redux';

// import actionFilter from '../actions/actionFilter';
import { actionFilter } from '../toolkit/filterReduser';

import classes from './checkbox.module.scss';

const Checkboxes = ({ value, amount, checked }) => {
  const dispatch = useDispatch();
  const updates = (rates) => dispatch(actionFilter(rates));
  return (
    <div className={classes['checkbox']}>
      <Checkbox id={amount} type="checkbox" checked={checked} onChange={() => updates(amount)}>
        <label>{value}</label>
      </Checkbox>
    </div>
  );
};

export default connect(null, null)(Checkboxes);
