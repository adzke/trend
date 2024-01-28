import React from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
} from 'react-native';
import { MyComponent } from './Card';

export const App = () => {

    
    const Feed =  () => {
        const elements = [];
        const url = fetch("https://picsum.photos/700").then(response => {
            response.then(i => {
                console.log(i)
            })
        })

    fetch('https://picsum.photos/700')
    .then(response => response.json())
    .then(commits => console.log(commits));

        for (let i = 0; i < 100; i++) {
            elements.push(MyComponent)  
        }
        return (
            <View>
                {elements.map(Element => {
                    return (
                        <View style={{marginTop: 10, marginBottom: 10}}>    
                              <Element url={url} />              
                        </View>
                    )
                })}
            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            backgroundColor: 'black'
        },
        scrollView: {
            marginHorizontal: 10,
        },
        text: {
            fontSize: 42,
        },
    });
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView style={styles.scrollView}>
                <Feed />
            </ScrollView>
        </SafeAreaView>
    );
};
