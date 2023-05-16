import { Component } from 'react';
export default class Service extends Component {
  _url = 'https://aviasales-test-api.kata.academy';

  async fetchId() {
    const res = await fetch(`${this._url}/search`);
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }
    const data = await res.json();
    return data.searchId;
  }
  async getTickets(searchId) {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (!res.ok) {
      throw new Error('Fetch error');
    }
    return res.json();
  }
}
