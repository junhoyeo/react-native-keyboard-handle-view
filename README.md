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
