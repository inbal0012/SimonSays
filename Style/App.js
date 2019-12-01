import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const width = 250;
//const {width, height} = require('Dimensions').get('window');
const CELL_SIZE = Math.floor(width * 0.4); // 20% of the screen width
const CELL_PADDING = Math.floor(CELL_SIZE * 0.02); // 5% of the cell size
const BORDER_RADIUS = 20;
const BORDER_SPECIAL_RADIUS = 50;
const MARGIN = 10;
const TILE_SIZE = 250;


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0B96',
  },
  tile: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeft: {
    width: 150,
    height: 150, 
    backgroundColor: '#006400' ,
    borderTopEndRadius: BORDER_SPECIAL_RADIUS,
    borderRadius: BORDER_RADIUS,
    marginStart: MARGIN,
    marginBottom: MARGIN,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  topRight: {
    width: 150,
    height: 150, 
    backgroundColor: '#8b0000',
    borderTopStartRadius: BORDER_SPECIAL_RADIUS,
    borderRadius: BORDER_RADIUS,
    marginEnd: MARGIN,
    marginBottom: MARGIN,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  topRightPressed: {
    width: 150,
    height: 150, 
    backgroundColor: '#ff6347',
    borderTopStartRadius: BORDER_SPECIAL_RADIUS,
    borderRadius: BORDER_RADIUS,
    marginEnd: MARGIN,
    marginBottom: MARGIN,
    justifyContent: 'center',
    alignItems: 'center'

  },
  bottomLeft: {
    width: 150,
    height: 150, 
    backgroundColor: '#daa520',
    borderBottomEndRadius: BORDER_SPECIAL_RADIUS,
    borderRadius: BORDER_RADIUS,
    marginStart: MARGIN,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  bottomRight: {
    width: 150,
    height: 150, 
    backgroundColor: '#00008b',
    borderBottomStartRadius: BORDER_SPECIAL_RADIUS,
    borderRadius: BORDER_RADIUS,
    marginEnd: MARGIN,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  row: {
      alignItems: 'center', 
      flexDirection: 'row',
      marginTop: 10,
  },
  button: {
    marginBottom: 20,
},

});
export default styles;
