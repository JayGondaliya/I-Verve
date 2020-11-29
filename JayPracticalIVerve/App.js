/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import BASE_NAVIGATION from './src/Components/RootContainer';
import { userDataOperations } from './src/redux/reducer/UserReducer';
import KeyboardManager from 'react-native-keyboard-manager';

const rootReducer = combineReducers({
  userOperations: userDataOperations
});

const GlobalStore = createStore(rootReducer);


class App extends React.Component {

  componentDidMount() {
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
      KeyboardManager.setEnableDebugging(false);
      KeyboardManager.setKeyboardDistanceFromTextField(10);
      KeyboardManager.setPreventShowingBottomBlankSpace(true);
      KeyboardManager.setEnableAutoToolbar(true);
      KeyboardManager.setToolbarDoneBarButtonItemText("Done");
      KeyboardManager.setToolbarManageBehaviour(0);
      KeyboardManager.setToolbarPreviousNextButtonEnable(false);
      KeyboardManager.setShouldToolbarUsesTextFieldTintColor(false);
      KeyboardManager.setToolbarTintColor('#0000FF');
      KeyboardManager.setToolbarBarTintColor('#FFFFFF');
      KeyboardManager.setShouldShowTextFieldPlaceholder(true); // deprecated, use setShouldShowToolbarPlaceholder
      KeyboardManager.setShouldShowToolbarPlaceholder(true);
      KeyboardManager.setOverrideKeyboardAppearance(false);
      KeyboardManager.setShouldResignOnTouchOutside(true);
      KeyboardManager.resignFirstResponder();
      KeyboardManager.isKeyboardShowing()
        .then((isShowing) => {
          // ...
        });
    }
  }
  render() {

    return (
      <Provider store={GlobalStore}>
        <BASE_NAVIGATION />
      </Provider>
    );

  }
};

export default App;
