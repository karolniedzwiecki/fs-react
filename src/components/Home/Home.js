import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';
//import {listData, settings} from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
//import Search from '../Search/SearchContainer.js';
//import {DragDropContext} from 'react-beautiful-dnd';

class Home extends React.Component {
  state = {
    lists: this.props.lists || [],
    //lists: [listData],
  }

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    //moveCard: PropTypes.func,
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
    const {title, subtitle, lists/*, moveCard*/} = this.props;

    // const moveCardHandler = result => {
    //   // console.log(result);
    //   if(
    //     result.destination
    //     &&
    //     (
    //       result.destination.index != result.source.index
    //       ||
    //       result.destination.droppableId != result.source.droppableId
    //     )
    //   ){
    //     moveCard({
    //     //console.log({
    //       id: result.draggableId,
    //       dest: {
    //         index: result.destination.index,
    //         columnId: result.destination.droppableId,
    //       },
    //       src: {
    //         index: result.source.index,
    //         columnId: result.source.droppableId,
    //       },
    //     });
    //   }
    // };

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {/*<Search />
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </DragDropContext>
        {/*
        <List {...listData} />
        */}
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
}
export default Home;
