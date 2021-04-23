import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import RNDrawOnScreen from 'react-native-draw-on-screen';

import Clouds from './Clouds'


export default class TabWrite extends React.Component {
    
    constructor(props) {
        super(props);
         this.state = {
           cloudArray: [],
           cloudText: '',
        }
      }

   render() {    

   let clouds = this.state.cloudArray.map((val, key) => {
      return <Clouds key={key} keyval={key} val={val}
             deleteMethod= { ()=> this.deleteCloud(key) } />          
   });

    return (
            <ScrollView>
            {/* // style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} */}
                
                <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: 50}}>
                    <Text style={{marginTop: 15}}>
                        What Are You Thinking?
                    </Text>
                    <TextInput
                        style={{ marginTop: 17, height: 250, width: 325, borderColor: 'gray', borderWidth: 1, borderRadius: 3, fontSize: 15, padding:20, paddingTop:20, paddingBottom: 20}}
                        multiline
                        clearButtonMode="always"
                        onChangeText={(cloudText) => this.setState({cloudText})}
                        value={this.state.cloudText}
                    ></TextInput>
                    <Button title="save"
                            onPress={ this.addCloud.bind(this)}>
                    </Button>
                    <ScrollView >
                    {clouds}
                    </ScrollView>
                </View>
                
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
                        height: 300,
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
               
            
                <View style={{alignItems: 'center', marginTop: 200, marginBottom: 50}}>
                    <Text>Record Screen</Text>
                    <Button style ={{ width: 250, borderRadius: 50 }}
                            title="Record"
                            mode="contained"
                            color="#194776">Record</Button>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 200, marginBottom: 130}}>
                    <Text>Picture Screen</Text>
                        <Button style ={{ width: 250, borderRadius: 50 }}
                                title="Take Picture" 
                                mode="contained"
                                color="#194776">Take Picture</Button>
                    </View>
              
            </ScrollView>
    )
}
addCloud() {

    if (this.state.cloudText) {

        var d = new Date();
        this.state.cloudArray.push({
            'date': (d.getMonth() + 1) +
            '/' + d.getDate() +
            '/' + d.getFullYear(),
            'cloudText': this.state.cloudText

        });
        this.setState({ cloudArray: this.state.cloudArray })
        this.setState({ cloudText: ''})
    }
    // alert('test');
  }

  deleteCloud(key) {
      this.state.cloudArray.splice(key, 1);
      this.setState({ cloudArray: this.state.cloudArray })
  }

}


// export default TabWrite;


const styles = StyleSheet.create ({
    scrollContainer: {
        flex: 1,
        marginBottom: 100,
    }

})