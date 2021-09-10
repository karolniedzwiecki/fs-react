import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';

class App extends React.Component {
  state = {
  list: this.props.list || [],
  }

  addList(title){
    this.setState(state => (
      {
        list: [
          ...state.list,
          {
            key: state.list.length ? state.list[state.list.length-1].key+1 : 0,
            title,
          }
        ]
      }
    ));
  }
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        {this.state.list.map(({key, ...listProps}) => (
        <List key={key} {...listProps} />
        ))}
        <div className={styles.list}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)}/>
        </div>
      </main>
    )
  }
}

export default App;
