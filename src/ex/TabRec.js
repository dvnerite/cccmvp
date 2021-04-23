import React from 'react';
import { Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';

// const [ startCamera, setStartCamera ] = React.useState(false)


const TabRec = () => {


    return (
        <View style={{alignItems: 'center', marginTop: 200}}>

            {/* <Text>Record Tab</Text> */}

            <Button style ={{ width: 250, borderRadius: 50 }}
                    title="Record"
                    mode="contained"
                    color="#194776"            
            >Record</Button>
        </View>
    )
}


export default TabRec;