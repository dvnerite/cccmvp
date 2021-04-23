import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { RECORDING_OPTION_IOS_OUTPUT_FORMAT_ENHANCEDAC3 } from 'expo-av/build/Audio';

export default function Rec() {
  const [recording, setRecording] = React.useState(null);
  const [playing, setPlaying] = React.useState(null);
  const [sound, setSound] = React.useState(null);
  const [uri, setUri] = React.useState(null)

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      await recording.startAsync(); 
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI(); 
    // setUri(uri);
    const { sound: _sound, status } = await recording.createNewLoadedSoundAsync()
    setSound(_sound);
    // await recording.createNewLoadedSoundAsync(uri)
    console.log('Recording stopped and stored at', uri);
  }


  async function playRecording() {
      console.log('Playing recording..');
      // await uri.createNewLoadedSoundAsync()
      
      // const uri = recording.getURI(sound);
      const soundObject = new Audio.Sound();
      try { 
        await soundObject.loadAsync({uri});
        await soundObject.playAsync();
      } catch (error) {
        console.log('error:', error);
      }
        //  await record.loadAsync()
        // const sound = uri
        // await recording.playAsync()
  }

  // async function pauseRecording() {
  //     console.log('Pause playing recording..');

  // }

  // async function stopPlayingRecording() {
  //     console.log('Stop playing recording..')

  // }

  return (
    <View style={styles.container}>
      <View>
        <Button 
          title={recording ? 'Stop Recording' : 'Start Recording'}
            onPress={recording ? stopRecording : startRecording}
          />
          <Button 
            title={playing ? 'Stop Recording' : 'Play Recording'}
            onPress={() => playRecording()}
        />
      </View>
    {/* <Button title="Record" onPress />
    <Button title="Stop Recording" onPress />*/}
{/* 
      <View style={{ marginTop: 50}}>
        <Button title="Play Recording" onPress />
        <Button title="Pause Recording" onPress />
        <Button title="Stop Playing" onPress />
      </View> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
