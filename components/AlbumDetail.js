import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Card from '../Card/Card';
import CardSection from '../Card/CardSection';

const AlbumDetail = props => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image style={styles.thumbnail} source={{ uri:props.album.thumbnail_image }}/>             
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                style={styles.imageStyle}
                source={{ uri:props.album.image }} />
            </CardSection>
        </Card>
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        width: 50,
        height: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    headerText: {

    }
})

export default AlbumDetail