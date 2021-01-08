import React from 'react';
import { Button, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import RNDrawOnScreen from 'react-native-draw-on-screen';


const TabDraw = () => {
    return (
        // <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>Drawing Tab</Text>
        <SafeAreaView style={{ flex: 1 }}>
        <Controls
          handleColorChange={this.changeColor}
          handleBrushSizeChange={this.changeBrushSize}
          selectedColor={this.state.color}
          selectedStrokeWidth={this.state.strokeWidth}
          handleUndo={this.undo}
          handleClear={this.clear}
        />
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            border: 'solid',
            borderWidth: 2,
            borderColor: '#ccc',
          }}
        >
          <RNDrawOnScreen
            penColor={this.state.color}
            strokeWidth={this.state.strokeWidth}
            ref={(r) => (this.RNDraw = r)}
          />
        </View>
      </SafeAreaView>
        // </View>
    )
}


export default TabDraw;