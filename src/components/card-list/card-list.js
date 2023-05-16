import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Spin } from 'antd';

import Tabs from '../tabs/tabs';
import { getTickets } from '../toolkit/asyncReduser';
import Service from '../service/service';
import { setSearchId } from '../toolkit/asyncReduser';
import Button from '../more-btn/more-btn';
import ErrorMessage from '../error-message/error-mesage';
import Ticket from '../ticket/ticket';

import classes from './card-list.module.scss';
const service = new Service();
const createNewTicket = (item) => (
  <Ticket price={item.price} carrier={item.carrier} routeInfo={item.segments} key={uuidv4()} />
);

export default function CardList() {
  const filters = useSelector((state) => state.filter.checked);
  const { tickets, searchId, isLoading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [ticketsNumber, setTicketsNumber] = useState(5);
  const [processedData, setProcessedData] = useState(tickets);
  useEffect(() => {
    service.fetchId().then((id) => {
      dispatch(setSearchId(id));
    });
  }, []);
  useEffect(() => {
    if (searchId && isLoading) {
      dispatch(getTickets(searchId));
    }
    setProcessedData(tickets);
  }, [searchId, isLoading, tickets.length, filters, error, dispatch]);

  const ticketList = processedData.length
    ? processedData.slice(0, ticketsNumber).map((item) => createNewTicket(item))
    : [];

  let data = ticketList.length ? (
    <>
      {ticketList}
      <Button onClick={() => setTicketsNumber(ticketsNumber + 5)} />
    </>
  ) : (
    <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
  );

  const spinner = isLoading && (
    <div className={classes.spinner}>
      <Spin />
    </div>
  );

  let errorMessage;
  if (error) {
    data = null;
    errorMessage = <ErrorMessage />;
  }

  return (
    <div className={classes['cards']}>
      <Tabs />
      {spinner}
      {errorMessage}
      <ul className={classes['card-list']}>{data}</ul>
    </div>
  );
}
