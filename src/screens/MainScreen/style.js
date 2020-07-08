// @flow
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  card: {
    flex: 1,
    width: (Dimensions.get('window').width - 32) / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 4,
    marginStart: 8,
    marginEnd: 8,
    padding: 4,
    borderRadius: 8,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardImage: {
    height: 100,
    width: 100,
    backgroundColor: '#FFFFFF',
    resizeMode: 'stretch',
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
