import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Audio } from 'expo-av';
// import { render } from 'react-dom';

const daydreams = {
  one: require('../asset/InfiniteDD.mp3'),
  // two: require('./assets/note2.wav'),
  // three: require('./assets/note3.wav'),
  // four: require('./assets/note4.wav'),
  // five: require('./assets/note5.wav'),
  // six: require('./assets/note6.wav'),
  // seven: require('./assets/note7.wav')
}


// const aud = () => {

export default function aud() {

  handlePlaySound = async track => {
    const soundObject = new Audio.Sound()
  
    try {
      let source = daydreams[track]
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
    handleStopSound = async () => {

      await soundObject.stopAsync() 

    }
  }

  

  return (

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePlaySound('one')}
          >
            <Text style={styles.buttonText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleStopSound()}
          >
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
          <Text>Aud Screen</Text>
        </View>
      </View>

    )
  }



  // export default aud;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
	},
	buttonContainer: {
		height: 40,
		margin: 5
	},
	button: {
    width: 100, 
    height: 30, 
    backgroundColor: "black", 
    alignItems: 'center', 
    justifyContent: "center",
    marginTop: 20
    
	},
	buttonText: {
		color: '#fff',
		fontSize: 18
	}
})






























// import React, { Component } from 'react';
// import {  View, Text } from 'react-native';
// import { Background, Button, Card, Divider,  Header, Logo, Title } from 'react-native-paper';
// import { Container, Content, Footer,  Left, Body, Right, Tab, Tabs } from 'native-base';
// // import AudioRecorderPlayer from 'react-native-audio-recorder-player';

// import AudioRecorderPlayer, {
//        AVEncoderAudioQualityIOSType,
//        AVEncodingOption,
//        AudioEncoderAndroidType,
//        AudioSet,
//        AudioSourceAndroidType,
//   } from 'react-native-audio-recorder-player';


//     class aud extends Component {

//     constructor(props) {
//           super(props);
      
//           this.state = {

//             isLoggingIn: false,
//             recordSecs: 0,
//             recordTime: '00:00:00',
//             currentPositionSec: 0,
//             currentDurationSec: 0,
//             playTime: '00:00:00',
//             duration: '00:00:00',
    
//           };

      
//           this.audioRecorderPlayer = new AudioRecorderPlayer();
//           // this.audioRecorderPlayer.setSubscriptionDuration(0.09); // optional. Default is 0.1
      
//           onStartRecord = async () => {
                
//                 const path = 'hello.m4a';
//                 const audioSet = {
//                   AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
//                   AudioSourceAndroid: AudioSourceAndroidType.MIC,
//                   AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
//                   AVNumberOfChannelsKeyIOS: 2,
//                   AVFormatIDKeyIOS: AVEncodingOption.aac,
//                 };
//                 console.log('audioSet', audioSet);
//                 const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
//                 this.audioRecorderPlayer.addRecordBackListener((e) => {
//                   this.setState({
//                     recordSecs: e.current_position,
//                     recordTime: this.audioRecorderPlayer.mmssss(
//                       Math.floor(e.current_position),
//                     ),
//                   });
//                 });
//                 console.log(`uri: ${uri}`);
//               };
//               onStopRecord = async () => {
                
//                     const result = await this.audioRecorderPlayer.stopRecorder();
                
//                     this.audioRecorderPlayer.removeRecordBackListener();
                
//                     this.setState({
                
//                       recordSecs: 0,
                
//                     });
                
//                     console.log(result);
                
//                   };
//         }
//   render(){
//       return (
//         <View style={{ flex: 1, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
//           <Text>Audio Player Screen</Text>
//           <Card style={{ marginTop: 10, height: 125, width: 225}}> 
//             <Title>{this.state.recordTime}</Title>
//             <Button icon="record"
//                     onPress={() => onStartRecord()}

//             >
//               <Text>Record</Text>
//             </Button>
//             <Button icon="stop"

//             >
//               <Text>Stop Record</Text>
//             </Button>
//           </Card>
//           <Card style={{ marginTop: 10, height: 150, width: 225}}> 
//             <Title>{this.state.playTime} / {this.state.duration}</Title>
//             <Button icon="play">
//               <Text>Play</Text>
//             </Button>
//             <Button icon="pause">
//               <Text>Pause</Text>
//             </Button>
//             <Button icon="stop">
//               <Text>Stop Play</Text>
//             </Button>
//           </Card>
//         </View>
    
    
//     // {/* <Card style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}>
//     //   <Background>
//     //     <Logo />
//     //     <Header>InstaPlayer</Header>
//     //       <Title>
//     //         {/* {this.state.recordTime} */}
//     //       {/* </Title>
//     //       <Button 
//     //         mode="contained" 
//     //         icon="record" 
//     //       onPress={() => this.onStartRecord()}
//     //       >RECORD</Button>
//     //       <Button
//     //         icon="stop"
//     //         mode="outlined"
//     //         onPress={() => this.onStopRecord()}
//     //         >STOP</Button>
//     //       <Divider />
//     //       <Title>
//     //         {this.state.playTime} / {this.state.duration}
//     //         </Title>
//     //       <Button 
//     //         mode="contained"
//     //         icon="play" 
//     //       onPress={() => this.onStartPlay()}
//     //       >
//     //         PLAY
//     //       </Button>
//     //       <Button
//     //         icon="pause"
//     //         mode="contained"
//     //         onPress={() => this.onPausePlay()}
//     //         >PAUSE
//     //       </Button>
//     //       <Button
//     //         icon="stop"
//     //         mode="outlined"
//     //         onPress={() => this.onStopPlay()}
//     //         >STOP
//     //       </Button>
//     //   </Background>
//     // </Card> */} 
    
//         )
//     }
//   }


// export default aud;


//   // return (
//         //     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
//         //         <Text>Audio Player Screen</Text>
//         //     </View>
//         // )




// // const aud = () => {
    
//   // const audioRecorderPlayer = new AudioRecorderPlayer();

//   // onStartRecord = async () => {
//   //   const result = await this.audioRecorderPlayer.startRecorder();
//   //   this.audioRecorderPlayer.addRecordBackListener((e) => {
//   //     this.setState({
//   //       recordSecs: e.current_position,
//   //       recordTime: this.audioRecorderPlayer.mmssss(
//   //         Math.floor(e.current_position),
//   //       ),
//   //     });
//   //     return;
//   //   });
//   //   console.log(result);
//   // };
  
//   // onStopRecord = async () => {
//   //   const result = await this.audioRecorderPlayer.stopRecorder();
//   //   this.audioRecorderPlayer.removeRecordBackListener();
//   //   this.setState({
//   //     recordSecs: 0,
//   //   });
//   //   console.log(result);
//   // };
  
//   // onStartPlay = async () => {
//   //   console.log('onStartPlay');
//   //   const msg = await this.audioRecorderPlayer.startPlayer();
//   //   console.log(msg);
//   //   this.audioRecorderPlayer.addPlayBackListener((e) => {
//   //     this.setState({
//   //       currentPositionSec: e.current_position,
//   //       currentDurationSec: e.duration,
//   //       playTime: this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
//   //       duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
//   //     });
//   //     return;
//   //   });
//   // };
  
//   // onPausePlay = async () => {
//   //   await this.audioRecorderPlayer.pausePlayer();
//   // };
  
//   // onStopPlay = async () => {
//   //   console.log('onStopPlay');
//   //   this.audioRecorderPlayer.stopPlayer();
//   //   this.audioRecorderPlayer.removePlayBackListener();
//   // };