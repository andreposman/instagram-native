import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class Likes extends Component {

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') 
            : require('../../resources/img/s2.png')
    }
    
    exibeLikes(likers) {  
        if(likers.length < 1)
          return
    
        return <Text style={styles.curtidas}>
          {likers.length} curtidas
        </Text>
    }

    render() {
        const { foto, likeCallback } = this.props 

        return (
            <View>
                <TouchableOpacity onPress={likeCallback}>
                    <Image style={styles.botaoDeLike}
                    source={this.carregaIcone(foto.likeada)} />
                </TouchableOpacity>
                
                {this.exibeLikes(foto.likers)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    botaoDeLike: {
        height: 40,
        width: 40
    },
    curtidas: {
        fontWeight: 'bold',
        marginBottom: 10
    },
})

