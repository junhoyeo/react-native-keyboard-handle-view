import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import KeyboardDismissView from './KeyboardDismissView';

const KeyboardHandleView: React.FC = ({ children }) => {
  return (
    <KeyboardAwareScrollView>
      <KeyboardDismissView>
        {children}
      </KeyboardDismissView>
    </KeyboardAwareScrollView>
  );
};

export default KeyboardHandleView;
