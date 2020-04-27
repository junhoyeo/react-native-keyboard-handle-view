import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardDismissView: React.FC = ({ children }) => {
  const onPressEmptySpace = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback
      onPress={onPressEmptySpace}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDismissView;
