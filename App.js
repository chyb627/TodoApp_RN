import React from 'react';
import {StyleSheet} from 'react-native';

import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function App ()  {

  const today = new Date();
  console.log("today :: ", today)

  return (
      <SafeAreaProvider>
        <SafeAreaView edges={['bottom']} style={styles.block}>
          <DateHead date={today} />
          <Empty />
          <AddTodo />
        </SafeAreaView>
      </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
