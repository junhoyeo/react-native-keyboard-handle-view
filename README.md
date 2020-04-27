# react-native-keyboard-handle-view
[![repo status](https://img.shields.io/badge/repo%20status-Concept-010101?style=for-the-badge)](https://www.repostatus.org/)

## 📦 Installation

```bash
npm install react-native-keyboard-handle-view
# Or using yarn
yarn add react-native-keyboard-handle-view
```

## 🥑 Usage

```tsx
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import KeyboardHandleView from 'react-native-keyboard-handle-view';

const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  return (
    <KeyboardHandleView>
     <TextInput
       value={text}
       onChangeText={setText}
     />
    </KeyboardHandleView>
  );
};
```

## 🍻 Components Included

### KeyboardHandleView

```tsx
import KeyboardHandleView from 'react-native-keyboard-handle-view';
```

### KeyboardDismissView

```tsx
import { KeyboardDismissView } from 'react-native-keyboard-handle-view';
```

### KeyboardAwareScrollView
Exported from the dependency [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view)

```tsx
import { KeyboardAwareScrollView } from 'react-native-keyboard-handle-view';
```
