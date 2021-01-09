import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

import { API, graphqlOperation } from "aws-amplify";

import AlbumCategories from "../components/AlbumCategories/index";
import albumCategoriess from  '../data/albumCategoriess';
import { listAlbumCategoriess } from "../graphql/queries"



export default function HomeScreen() {
  
  const [categories,setCategories] = useState([]);

  useEffect(() => {
 
   const fetchAlbumCategories = async () => {
     try {
        const data = await API.graphql(graphqlOperation(listAlbumCategoriess));
        setCategories(data.data.listAlbumCategoriess.items);
               
     } catch (e) {
       console.log(e);
     }
   }
   
    fetchAlbumCategories();
  }, [])

  return (
    <View style={styles.container}>
    
        <FlatList
           data={categories}
           renderItem={({ item }) => 
           <AlbumCategories  
              title={item.title}
              albums={item.albums.items}
           />
           }
           keyExtractor= {(item) => item.id}
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
