declare module 'react-native-skeleton-placeholder' {
     import { Component } from 'react';
     import { ViewStyle } from 'react-native';

     interface SkeletonPlaceholderProps {
       // Define any props you need to support
       style?: ViewStyle;
       // ... other props
     }

     export default class SkeletonPlaceholder extends Component<SkeletonPlaceholderProps> {}
   }
