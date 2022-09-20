import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
        rounded 
        source={require('../assets/images/logo.png')}
      />
      <ListItem.Content>
        <ListItem.Title style={{fontWeight: "800"}}>
            Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
            Converças entre membros somente o que condiz ao clube.
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})