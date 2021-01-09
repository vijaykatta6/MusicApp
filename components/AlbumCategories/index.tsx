import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Album  } from '../../types';
import AlbumComponent from '../Album';
import styles from './styles';

export type AlbumCategoriesProps = {
 title: string,
 albums: [Album],
}


const AlbumCategories = (props: AlbumCategoriesProps) => (
     <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
      
        <FlatList 
          data = {props.albums}
          renderItem = {({ item }) => <AlbumComponent album={item}/>}
          keyExtractor ={( item ) => item.id } 
          horizontal
    />
     </View>
)

export default AlbumCategories;