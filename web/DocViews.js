import React from 'react';
import { Text, View } from 'react-native';

export function Title({ children }) {
  return <Text style={{ fontSize: 42 }}>{children}</Text>;
}

export function Body({ children }) {
  return <Text style={{ fontSize: 14 }}>{children}</Text>;
}

export function Page({ children }) {
  return <View style={{ flex: 1, padding: 40 }}>{children}</View>;
}
