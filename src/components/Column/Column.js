import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <div className={styles.title}>
          <h3 className={styles.titleText}>{title}</h3>
          <span className={styles.icon}>
            <Icon name={icon}></Icon></span>
        </div>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}

        {/*
        {this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}
          */}
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
