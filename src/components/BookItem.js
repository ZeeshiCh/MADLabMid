import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const BookItem = ({ book, inverted }) => {
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setLoading(false);
  };

  const cardStyles = [styles.card, inverted && styles.invertedCard];
  const itemStyles = [styles.bookItem, inverted && styles.invertedBookItem];
  const textContainerStyles = [
    styles.textContainer,
    inverted ? styles.invertedTextContainer : styles.normalTextContainer,
  ];

  return (
    <View style={cardStyles}>
      <View style={itemStyles}>
        {loading && <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />}
        <Image
          source={{ uri: 'https://dev.iqrakitab.net/' + book.coverPhotoUri }}
          style={styles.image}
          onLoad={onLoad}
        />
        <View style={textContainerStyles}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#F8F4E9',
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  invertedCard: {
    flexDirection: 'row-reverse',
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  invertedBookItem: {
    flexDirection: 'row-reverse',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end', 
  },
  normalTextContainer: {
    alignItems: 'flex-start', 
  },
  invertedTextContainer: {
    alignItems: 'flex-end', 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
  },
});

export default BookItem;
