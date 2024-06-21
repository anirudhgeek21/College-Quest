import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const MyComponent = () => {
  return (
    <StyledView className="flex-1 justify-center items-center">
      <MotiView
        delay={900}
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        whileHover={{scale:1.1}}
        whileTap={{scale:1}}
        transition={{ type: 'spring', duration: 500 }}
        className="p-4 bg-blue-900 rounded-lg"
      >
        <StyledText className="text-white text-lg">
          Hello, Hoties !!
        </StyledText>
      </MotiView>
    </StyledView>
  );
};

export default MyComponent;
