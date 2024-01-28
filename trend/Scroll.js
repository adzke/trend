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

    const Seperator = () => {
        return (
            <View style={{margin: '10em'}}>

            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
        scrollView: {
            marginHorizontal: 20,
        },
        text: {
            fontSize: 42,
        },
    });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <MyComponent/>
              <Seperator/>
              <MyComponent/>
            </ScrollView>
        </SafeAreaView>
    );
};
