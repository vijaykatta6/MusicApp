import React, { useContext } from 'react';
import { Text, Image, View, TouchableOpacity  } from "react-native"

import styles from "./styles";
import {Song} from "../../types";
import { AppContext } from '../../AppContext'



export type SongListItemProps = {
     song: Song
}

const SongListItem = (props: SongListItemProps ) => {
  
    const { setSongId } = useContext(AppContext);

    const onPlay = () => {
        setSongId(props.song.id);
        
    }
     
    return (
       <TouchableOpacity onPress={onPlay}> 
      <View style={styles.container}>
          <Image source={{uri: props.song.imageUri}} style={styles.image}/>
         <View style={styles.rightContainer}>
          <Text style={styles.title}>{props.song.title}</Text>
          <Text style={styles.artist}>{props.song.artist}</Text>
          </View>
     </View>
     </TouchableOpacity>
    )
}

export default SongListItem;
