import React, {useState} from 'react';
import { View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return(
    <View>
      <Button
        onPress={() => {
          setColors([...colors, randomRGB()]);
        }}
        title="Add a Color"
      />
      
      <FlatList 
        keyExtractor={(item) => item}
        data={colors}        
        renderItem={({ item }) => {
          return (
            <View style={{ height:100, width:100, backgroundColor:item}} />          
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random()*255);
  const green = Math.floor(Math.random()*25);
  const blue = Math.floor(Math.random()*255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;