import uuid from 'react-native-uuid';
import moment from 'moment';


class Todo {


   id = '';
   name = '';
   email='';
   password='';
   completed = false;

  constructor(name,email,passowrd) {
    this.id = uuid.v4();
    this.name =name;
    this.email = email;
    this.password = passowrd;
    // this.time = moment().startOf('hour').fromNow();
    // this.type = 'active';
    this.completed = false;
  }

  getId = () => {
    return this.id;
  }

  getName = () => {
    return this.name;
  }

  setName = (text) => this.name = text;


  isCompleted = () => {
    return this.completed;
  }

  setCompleted = (isCompled) => this.completed = isCompled;



  getEmail = () => {
    return this.email;
  }

  setEmail = (text) => this.email = text;


  getPassword = () => {
    return this.password;
  }

  setPassword = (text) => this.password = text;
  // getType = () => {

  //   return this.type;
  // }

  // setType = (type) => this.type = type;

  // isCompleted = () => {
  //   return this.completed;
  // }

  // setCompleted = (completed) => this.completed = completed;
}

export default Todo;
