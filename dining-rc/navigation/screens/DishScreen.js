import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import GetRating from '../../api/DisplayRating';
import GetAllRating from '../../api/AllRating';
import AddFood from '../../api/AddFood';
import DatePickerComponent from '../../components/DatePickerComponent';

const DishScreen  = ({route, navigation}) => {
  //check if your page is refreshed
  // useEffect(() => {
  //   const focusHandler = navigation.addListener('focus', () => {
  //     Alert.alert("Page Refreshed");
  //   })
  //   return focusHandler;
  // }, [navigation]);

  const food = route.params;
  return(
    <View style= {styles.container}>
    {/*
      {food? <GetRating foodID = {food.foodID} foodName = {food.foodName} foodImage= {food.foodImage} navigation = {navigation} /> : <GetAllRating />}
      */}
      {food? <GetRating foodID = {food.foodID} foodName = {food.foodName} foodImage= {food.foodImage} navigation = {navigation} /> : <DatePickerComponent />}
    </View> 
  );}



export default DishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});