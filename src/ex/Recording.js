import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { Audio } from 'expo-av';


const Recording = () => {  
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const recordingSettings = {
    android: {
      extension: ".m4a",
      outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
      audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
    },
    ios: {
      extension: ".m4a",
      outputFormat: Audio.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
      audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
      sampleRate: 44100,
      numberOfChannels: 2,
      bitRate: 128000,
      linearPCMBitDepth: 16,
      linearPCMIsBigEndian: false,
      linearPCMIsFloat: false,
    },
  };

const startRecording = async () => {
    // stop playback
    if (sound !== null) {
      await sound.unloadAsync();
      sound.setOnPlaybackStatusUpdate(null);
      setSound(null);
    }

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    const _recording = new Audio.Recording();
    try {
      await _recording.prepareToRecordAsync(recordingSettings);
      setRecording(_recording);
      await _recording.startAsync();
      console.log("recording");
      setIsRecording(true);
    } catch (error) {
      console.log("error while recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
    const info = await FileSystem.getInfoAsync(recording.getURI());
    console.log(`FILE INFO: ${JSON.stringify(info)}`);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      playsInSilentLockedModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });
    const { sound: _sound, status } = await recording.createNewLoadedSoundAsync(
      {
        isLooping: true,
        isMuted: false,
        volume: 1.0,
        rate: 1.0,
        shouldCorrectPitch: true,
      }
    );
    setSound(_sound);
    setIsRecording(false);
  };

    return (
        <View style={{flex: 1, borderWidth: 0, borderColor: 'Black', padding: 10, margin: 10, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Recording Screen</Text>
            <View style={{ marginTop: 50 }}>
              <Text></Text>
                <Button title="Start Recording" onPress={() => startRecording()} />
                <Button title="Stop Recording" onPress={() => stopRecording()} />
            </View>
            <View style={{ marginTop: 50 }}>
              <Text></Text>
                <Button title="Play Recording" onPress />
                <Button title="Pause Recording" onPress />
                <Button title="Stop Playing" onPress />
            </View>
        </View>
    )
  }


export default Recording;