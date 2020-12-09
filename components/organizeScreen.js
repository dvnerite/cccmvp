import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



const organizeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Organize Screen</Text>
        </View>
    )
}

export default organizeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });