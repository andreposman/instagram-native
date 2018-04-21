import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const screen = Dimensions.get('screen')

export default class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foto: this.props.foto
        }

        this.like = this.like.bind(this)
    }


    carregaIcone() {
        return this.state.foto.likeada ? require('../../resources/img/s2-checked.png')
            : require('../../resources/img/s2.png')
    }

    like = () => {
        let novaLista = []
        if (!this.state.foto.likeada)
            novaLista = [
                ...this.state.foto.likers,
                { login: 'meuUsuario' }
            ]
        else
            novaLista = this.state.foto.likers.filter(liker => liker.login != 'meuUsuario')




        const fotoAtualizada = {
            //... spread operator
            ...this.state.foto,
            likeada: !this.state.foto.likeada,
            likers: novaLista
        }
        this.setState({ foto: fotoAtualizada })
    }

    exibirLikes(likers) {
        if (likers.length < 1)
            return;
        else
            return <Text style={styles.curtidas}>{likers.length} curtidas</Text>

    }

    render() {
        const { foto } = this.state;
        return (
            <View>
                <View style={styles.header}>
                    <Image style={styles.fotoPerfil}
                        source={{ uri: foto.urlPerfil }} />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{uri: foto.urlFoto}} style={styles.fotoPrincipal}/>

                <View style={styles.rodape}>
                    <TouchableOpacity onPress={this.like}>
                        <Image source={this.carregaIcone(foto.likeada)}
                            style={styles.botaoLike} />
                    </ TouchableOpacity>
                    {this.exibirLikes(foto.likers)}
                </View>

            </View >

        );
    }
}
const styles = StyleSheet.create({

    header: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    fotoPerfil: {
        marginRight: 10,
        width: 40,
        height: 40,
        borderRadius: 50
    },
    fotoPrincipal: {
        width: screen.width,
        height: screen.width
    },
    rodape: {
        margin: 10
    },
    botaoLike: {
        width: 40,
        height: 40
    },
    curtidas: {
        fontWeight: 'bold'
    },
});
