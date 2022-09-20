import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native-web';
import CustomListItem from '../components/CustomListItem';

const ChatScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})