import React, {useEffect} from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import AlbumList from '../components/AlbumList.js';

const Album = (props) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true )
    return() => {
      BackHandler.addEventListener('hardwareBackPress', () => true )
    }
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>ALBUMS</Text>
      </View>
      <AlbumList />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10
  },
  textStyle: {
    color: '#000000'
  }
});

export default Album
