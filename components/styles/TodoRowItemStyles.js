import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';

const ROW_HEIGHT = 70;

const styles = StyleSheet.create({
  input:
  {
    width: '100%',
    margin: 5,
    borderColor: colors.chiGong,
    borderWidth: 1,
    alignItems: 'stretch',
    color: colors.black,
  },
  error:{
    color: colors.chiGong,
  },
  buttonImage: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  touachableButton: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 2
  },
  textBoxContainer: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  row: {
    backgroundColor: '#313842',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  timeline: {
    height: ROW_HEIGHT,
    width: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineVerticalLink: {
    height: ROW_HEIGHT,
    width: 1,
    backgroundColor: '#526373',
    justifyContent: 'center'
  },
  icon: {
    color: '#e7d629',
    backgroundColor: 'transparent',
    position: 'absolute',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.black,
    marginVertical: 20
  },
  time: {
    fontSize: 10,
    fontWeight: '400',
    color: '#828B7B',
  }
});

export default styles;
