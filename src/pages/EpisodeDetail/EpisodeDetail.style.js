import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17082A',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#210F37',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 25,
    paddingBottom: 13,
  },
  title: {
    paddingTop: 45,
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '600',
  },
  text: {
    color: '#E5E5E5',
    fontSize: 18,
    fontWeight: '400',
  },
  charactersContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 13,
  },
  characterCard: {
    minWidth: 100,
    height: 42,
    backgroundColor: '#36274B',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginBottom: 12,
    paddingHorizontal: 22,
  },
  characterTitle: {
    color: '#ECBBDA',
    fontSize: 15,
    fontWeight: '600',
  },
});
