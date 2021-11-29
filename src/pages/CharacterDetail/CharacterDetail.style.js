import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17082A',
    position: 'relative',
  },
  imageContainer: {
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  innerContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 15,
    paddingTop: 25,
    paddingHorizontal: 25,
    paddingBottom: 25,
    backgroundColor: '#210F37',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#E5E5E5',
    fontSize: 20,
    fontWeight: '400',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
});
