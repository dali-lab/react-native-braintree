import React, { useState, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import Braintree from 'react-native-braintree';

const token = 'sandbox_d5ytzvpc_vb9254p26ccr5hk6';

Braintree.config({ clientToken: token });

export default function App() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsShown(true);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Braintree isShown={isShown} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
