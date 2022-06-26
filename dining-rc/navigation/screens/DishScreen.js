import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import GetRating from '../../api/DisplayRating';
import GetAllRating from '../../api/AllRating';
const DishScreen  = ({route, navigation}) => {
  //check if your page is refreshed
  // useEffect(() => {
  //   const focusHandler = navigation.addListener('focus', () => {
  //     Alert.alert("Page Refreshed");
  //   })
  //   return focusHandler;
  // }, [navigation]);

  const foodId = route.params;
  return(
    <View style= {styles.container}>
      {foodId? <GetRating foodID = {foodId.foodId}/> : <GetAllRating />}
    </View> 
  ); 
}



export default DishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});