import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
//state === {counter:0
//action === {type: 'inc_counter' || 'dec_counter', payload: 1 || -1}
switch(action.type){
  case 'inc_counter':
    return {...state, counter: state.counter + action.payload};
  case 'dec_counter':
    return {...state, counter: state.counter + action.payload};
  default:
    return state;
}
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter:0});
  const {counter} = state;
  return(
      <View>
            <Button title="Increase" onPress={() => {
                dispatch({type:'inc_counter', payload:1})
              }}
            />
            <Button title="Decrease" onPress={() => {
                dispatch({type:'dec_counter', payload:-1})
              }}
            />
            <Text>Current Count: {counter}</Text>
      </View>
  );  
};

const styles = StyleSheet.create({});

export default CounterScreen;