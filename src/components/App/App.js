import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
//import {pageContents, listData, settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Search from '../Search/SearchContainer.js';

class App extends React.Component {
  state = {
    lists: this.props.lists || [],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  // addList(title) {
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
  //           title,
  //         },
  //       ],
  //     }
  //   ));
  // }
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search />
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
        {/*
        <List {...listData} />
        */}
      </main>
    );
  }
}
export default App;
