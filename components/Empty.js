import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Empty() {

    const source = {uri: 'https://via.placeholder.com/150'}

    return(
        <View style={styles.block} >
            <Image 
                // source={require('../assets/images/circle.png')}
                // source={source}
                source={require('../assets/images/young_and_happy.png')}
                style={styles.image}
                resizeMode="contain"
             />
            <Text style={styles.description}>할일이 없습니다</Text>        
        </View>
    )
}

const styles = StyleSheet.create({
  block: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  description: {
      fontSize: 24,
      color: '#9e9e9e'
  },
  image: {
    // width: 300,
    // height: 200,
    // backgroundColor: 'gray',
    width: 240,
    height: 179,
    marginBottom: 16,
  }
});

export default Empty;