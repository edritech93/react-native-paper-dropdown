import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import {
  Appbar,
  Provider,
  Surface,
  ThemeProvider,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

export default function App() {
  const [nightMode, setNightmode] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState<string>('');
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [colors, setColors] = useState<string>('');
  const [dataTest1, setDataTest1] = useState<any[]>([]);
  const [dataTest2, setDataTest2] = useState<any[]>([]);

  useEffect(() => {
    const temp1: any[] = [];
    for (let i = 0; i < 100; i++) {
      temp1.push({ label: `Label1 ${i}`, value: `Value1${i}` });
    }
    setDataTest1(temp1);

    const temp2: any[] = [];
    for (let i = 0; i < 10; i++) {
      temp2.push({ label: `Label2 ${i}`, value: `Value2${i}` });
    }
    setDataTest2(temp2);
  }, []);

  return (
    <Provider theme={nightMode ? MD3DarkTheme : MD3LightTheme}>
      <ThemeProvider theme={nightMode ? MD3DarkTheme : MD3LightTheme}>
        <StatusBar
          backgroundColor={
            nightMode
              ? MD3DarkTheme.colors.surface
              : MD3LightTheme.colors.primary
          }
          barStyle={'light-content'}
        />
        <Appbar.Header>
          <Appbar.Content title="React Native Paper Dropdown" />
          <Appbar.Action
            icon={nightMode ? 'brightness-7' : 'brightness-3'}
            onPress={() => setNightmode(!nightMode)}
          />
        </Appbar.Header>
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <DropDown
              label={'Test 1'}
              mode={'outlined'}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={gender}
              setValue={setGender}
              list={dataTest1}
            />
            <View style={styles.spacerStyle} />
            <DropDown
              label={'Test 2'}
              mode={'outlined'}
              visible={showMultiSelectDropDown}
              showDropDown={() => setShowMultiSelectDropDown(true)}
              onDismiss={() => setShowMultiSelectDropDown(false)}
              value={colors}
              setValue={setColors}
              list={dataTest2}
              multiSelect
            />
          </SafeAreaView>
        </Surface>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
});
