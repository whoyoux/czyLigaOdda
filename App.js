import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';

export default function App() {
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    const Random = () => {
        if (Math.random() >= 0.5) {
            AlertFunc('ODDA!', 'LEPIEJ GRAC!');
        } else {
            const laneDiff = getRandomInt(1, 5);

            let laneDiffName;

            switch (laneDiff) {
                case 1:
                    laneDiffName = 'TOP';
                    break;
                case 2:
                    laneDiffName = 'JG';
                    break;
                case 3:
                    laneDiffName = 'MID';
                    break;
                case 4:
                    laneDiffName = 'ADC';
                    break;
                case 5:
                    laneDiffName = 'SUPP';
                    break;
                default:
                    laneDiffName = 'JG';
                    break;
            }

            AlertFunc('NIE ODDA!', `${laneDiffName} DIFF!`);
        }
    };

    const AlertFunc = (title, message) => {
        Alert.alert(title, message);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Czy liga dzisiaj odda?</Text>
            <Pressable style={styles.bigButton} onPress={Random}>
                <Text style={styles.buttonText}>SPRAWDZMY</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 26
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    bigButton: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black'
    }
});
