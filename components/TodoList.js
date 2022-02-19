import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import TodoItem from './TodoItem';

function TodoList ({todos, onToggle, onRemove}) {
    return (
        <FlatList
            ItemSeparatorComponent={()=><View style={styles.separator} />}
            style={StyleSheet.list}
            data={todos}
            renderItem={({item}) => (
                <TodoItem id={item.id} text={item.text} done={item.done} onToggle={onToggle} onRemove={onRemove} />
            )}                                          // renderItem을 통해 배열 안의 각 원소들 데이터를 가리키는 뷰를 보여준다.
            keyExtractor={item => item.id.toString()}   // 각 항목의 고유 값을 추출해주는 함수. 고유값은 문자열 타입이어야한다.
        />
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,
    },
});

export default TodoList;