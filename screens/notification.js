import { Statusbar} from 'expo-status-bar';
import react from ' react';
import { StyleSheet, Button, View} from 'react-native';
import { StatusBar } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function notification() {

    const triggerNotificationHandler= () => {
   Notifications.scheduleNotificationAsync({
     content : {
          title: 'My first Notifications',
          body: 'Locally Sending Notification',
     }, 
    trigger: {
        seconds: 10,
    },
   });
    };

    return (
        <View style={StyleSheet.container}>
            <Button title="Trigger Notification" onPress={triggerNotificationHandler}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});