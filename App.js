/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  FlatList,
  View,
} from 'react-native';
import colors from './theme/colors';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,saveTodo, deleteActiveTodo } from "./actions/TodoActionCreators";
import TodoRowItem from "./components/TodoRowItem";
import moment from 'moment';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  let dispatch = useDispatch();
  const todos = useSelector(state => state.todosReducer.todos);
  //console.log("----------------", todos);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  

  function setDoneStatus() {

   // console.log("set Event")
    dispatch(addTodo())
  }

  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ backgroundColor: colors.blueGrey60, justifyContent: 'space-between', flexDirection: 'row', padding: 10 }}>

         <Button
          onPress={setDoneStatus}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <FlatList
      style={{marginBottom:50}}
        data={todos}
        keyExtractor={todo => todo.id}
        enableEmptySections={true}
        renderItem={({ item, index }) => (
          <TodoRowItem
            todo={{ ...item }}
          //  onSave = {onSave}
           // setDoneStatus = {setDoneStatus}
            index={index}
            //time={moment().startOf('hour').fromNow()}
          />
        )}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
