import React, {useState, useEffect} from 'react';
import { 
    ScrollView, 
    StyleSheet, 
    Text, 
    View, 
    ActivityIndicator 
} from 'react-native';
import AlbumDetail from './AlbumDetail.js'

const AlbumList = props => {
    const [albums, setData] = useState()

    useEffect(() => {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(data => () => {
            return data
        })
        .then(data1 => setData(data1))
    },[])

    return (
        <ScrollView>
            {
                !albums ? 
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color="red" /> 
                </View> : 
                albums.map( album => (
                    <AlbumDetail album={album} key={album.title} />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AlbumList;