/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

function App(): JSX.Element {


  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'black',
            margin: 25,
            width: 100, 
            height: 100, 
            borderRadius: 100
          }}>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
