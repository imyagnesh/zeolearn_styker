import React from 'react';

import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {DrawerItems} from 'react-navigation-drawer';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent;