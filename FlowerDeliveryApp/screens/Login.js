import React from 'react';
import {
    Button,
    StyleSheet,
    TouchableOpacity,
    View,
    TextInput,
    Text,
    Dimensions,
    Image,
    ScrollView
} from 'react-native';

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

export default class Login extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={styles.login}>Log in</Text>
                    <TextInput style= {styles.textinput}
                        placeholder="   Username" />
                    <TextInput style= {styles.textinput2}
                        placeholder="   Password"
                        secureTextEntry={true} />
                    <TouchableOpacity style={styles.buttonHover} onPress={() => { this.props.navigaiton.navigate('Home') }}>
                        <Button onPress={() => { this.props.navigation.navigate('Home') }} title="LOG  IN" color="white" />
                    </TouchableOpacity>

                </ScrollView>
                <Image style={{ marginTop: 55, height: 200 }} source={require("../images/pink_rosesflower_footer.jpg")} ></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        textAlign: 'center',
        fontSize: 50,
        marginTop: 50,
        color: 'black',
        fontWeight: "bold"
    },
    textinput: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        width: width - 60,
        marginLeft: 30,
        marginTop: height / 4,
        borderRadius: 30,
        fontSize: 20
    },
    textinput2: {
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        width: width - 60,
        marginLeft: 30,
        marginTop: 30,
        borderRadius: 30,
        fontSize: 20
    },
    button: {
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#2596be',
        shadowColor: '#2596be',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset: { width: 1, height: 13 },
        width: width - 60
    },
    buttonHover: {
        marginTop: 10,
        borderRadius: 25,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        shadowColor: '#2596be',
        shadowOpacity: 1.5,
        elevation: 8,
        shadowRadius: 20,
        shadowOffset: { width: 1, height: 13 },
        backgroundColor: '#2596be',
        color: '#2596be',
        width: width - 60,
        marginLeft: 30,
        marginTop: 60,
        marginBottom: 50
    }
});