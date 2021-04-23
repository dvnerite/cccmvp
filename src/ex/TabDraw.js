import React, { useState } from 'react';
import { Button, Controls, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import RNDrawOnScreen from 'react-native-draw-on-screen';


function TabDraw() {

    // const [ color, setColor ] = useState(black);
    return (
        // <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        //     <Text>Drawing Tab</Text>
        <SafeAreaView style={{ flex: 1 }}>
        {/* <Controls
          // handleColorChange={this.changeColor}
          // handleBrushSizeChange={this.changeBrushSize}
          // selectedColor={this.state.color}
          // selectedStrokeWidth={this.state.strokeWidth}
          // handleUndo={this.undo}
          // handleClear={this.clear}
        /> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>

          <Button title="Undo" onPress={() => this.RNDraw.undo()}>Undo</Button>
          <Button title="Clear" onPress={() => this.RNDraw.clear()}>Clear</Button>
        </View>
        <View
          style={{
            flex: 1,
            flexGrow: 1,
            border: 'solid',
            borderWidth: 2,
            borderColor: '#ccc',
            width: 315,
            marginLeft: 30,
            marginTop: 5,
            marginBottom: 20,
         
          }}
        >
          <RNDrawOnScreen
            penColor={'#000'}
            strokeWidth={5}
            ref={(r) => (this.RNDraw = r)}
          />
        </View>
      </SafeAreaView>
        // </View>
    )
}


export default TabDraw;