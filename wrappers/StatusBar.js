import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';


const StatusTop = () => {
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#f00"
        hidden={false} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  }
});

export default StatusTop;