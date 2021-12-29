import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';

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
          {/* KeyboardAvoidingView로 ios에서 키보드가 화면을 가리지 않게 하기*/}
          <KeyboardAvoidingView
          // behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          behavior={Platform.select({ios:'padding', android:undefined})}
          style={styles.avoid}>
            <DateHead date={today} />
            <Empty />
            <AddTodo />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex:1,
  },
});

export default App;
