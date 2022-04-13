import React, { Component, Fragment, useState } from 'react';
import { View, Button, TextInput, TouchableOpacity, Image, Text, StyleSheet, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
//import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/TodoRowItemStyles';
import { addTodo, saveTodo, deleteActiveTodo } from "../actions/TodoActionCreators";

import colors from '../theme/colors';


const TodoRowItem = (props) => {
  const { todo, index } = props;
  console.log(todo.getName())
  const [name, setName] = useState(todo.getName());
  const [email, setEmail] = useState(todo.getEmail());
  const [passowrd, setPassword] = useState(todo.getPassword());

  const [hidePassword, setHidePAssword] = useState(true);

  console.log(todo.isCompleted())

  const isCompleted = todo.isCompleted();

  let dispatch = useDispatch();
  let  [,setState]=useState();

  const [error,setError]=useState(new Map());

  const validate = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(text);
   
  };

  function onSave() {
    console.log("Save called::::")
    if (name == '') {
      error.set(0,"Please enter name");
      setError(error);
    }

    if (!validate(email)) {
      error.set(1,"Please enter email");
      setError(error);
    }

   if (passowrd == '') {
    error.set(2,"Please enter password");
    setError(error);
  }
 
    console.log(error.size);
    if (error.size > 0) {
      setState({});
      return;
    }

    todo.setCompleted(true);
    todo.setName(name);
    todo.setEmail(email);
    todo.setPassword(passowrd)

    dispatch(saveTodo(todo, index))
  }

  function onDelete() {
    dispatch(deleteActiveTodo(index))
  }

  function setPasswordVisibility() {
    setHidePAssword(!hidePassword);

  }

  function updateName(name)
  {
    console.log(error);
    error.delete(0);
    setError(error);
    setName(name)
  }

  function updateEmail(email)
  {
    console.log(error);
    error.delete(1);
    setError(error);
    setEmail(email)
  }


  function updatePassword(password)
  {
    error.delete(2);
    setError(error);
    setPassword(password)
  }


  return (
   
    <Fragment>
      <View style={styles.content} key={todo.id}>
        <Text style={styles.text}>Empoyee Form {index}</Text>
        <TextInput placeholderTextColor="#9a73ef" editable={!todo.isCompleted()} style={styles.input} placeholder="Name" value={name} onChangeText={(newValue) =>updateName(newValue) } />
        {error.has(0) && <Text style={styles.error}>{error.get(1)}</Text>}
        <TextInput placeholderTextColor="#9a73ef" editable={!todo.isCompleted()} style={styles.input} placeholder="Email" value={email} onChangeText={newValue => updateEmail(newValue)} />
        {error.has(1) && <Text style={styles.error}>{error.get(1)}</Text>}
        <View style={styles.textBoxContainer}>
          <TextInput underlineColorAndroid="transparent" secureTextEntry={hidePassword} placeholderTextColor="#9a73ef" editable={!todo.isCompleted()} style={styles.input} placeholder="Password" value={passowrd} onChangeText={(newValue) => updatePassword(newValue)} />
          <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={setPasswordVisibility}>
            <Image source={(hidePassword) ? require('../images/hide.png') : require('../images/view.png')} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
        {error.has(2) && <Text style={styles.error}>{error.get(2)}</Text>}
      </View>
      <View style={{ backgroundColor: colors.blueGrey60, justifyContent: 'space-between', flexDirection: 'row', padding: 10, }}>
        {!isCompleted && <Button
          onPress={onSave}
          title="Submit"
          color="#841584"
        />}
        <Button
          onPress={onDelete}
          title="Delete"
          color="#841584"
        />
      </View>
    </Fragment>
  );
};


export default TodoRowItem
