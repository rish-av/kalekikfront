import React from 'react';
import { Image} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import SignUp from './.expo/screen/SignUp';
import Login from './.expo/screen/Login';
import Otp from './.expo/screen/components/Otp';
import Contacts from './.expo/screen/components/Contacts';
import About from './.expo/screen/components/About';
import Forgetpwd from './.expo/screen/components/Forgetpwd';
import H_Splash from './.expo/screen/components/Homesplash';
import Matchteam from './.expo/screen/components/Matchteam'
import Forget_Otp from './.expo/screen/components/Forget_Otp';
import Reset_pwd from './.expo/screen/components/Reset_pwd';
import Profile from './.expo/screen/components/Profile'
import SelectSports from "./.expo/screen/components/SelectSport";
import SelectEvent from "./.expo/screen/components/SelectEvent";
import MatchPredicition from './.expo/screen/components/MatchPredicition';
import Headercontant from './.expo/screen/components/Headercontant';
import HeaderProfile from './.expo/screen/components/HeaderProfile';
import Model from './.expo/screen/components/Model'
import Landingpage from "./.expo/screen/components/Landingpage";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouterName="Home">
                <Stack.Screen name="H_Splash" component={H_Splash} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Forgetpwd" component={Forgetpwd} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
                <Stack.Screen name="Contacts" component={Contacts}
                    options={{
                        title: 'Create Group',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: 'Black',
                        },
                    }} />
                <Stack.Screen name="Landingpage" component={Landingpage}
                    options={{
                        title: 'Kalekik',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#96BEFB',
                            fontFamily: 'serif',
                        },
                        
                        headerRight: () => (
                            // <Ionicons name="notifications-outline" size={40} style={{alignItems:'center'}} onPress={console.log("press")} />, 
                            <Entypo name="light-down" size={40}  onPress={console.log("press")} />
                        ),
                       
                    }} />
                <Stack.Screen name="Matchteam" component={Matchteam} options={{ headerShown: false }} />
                <Stack.Screen name="Forget_Otp" component={Forget_Otp} options={{ headerShown: false }} />
                <Stack.Screen name="Reset_pwd" component={Reset_pwd} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="SelectSports" component={SelectSports}
                    options={{
                        title: 'Kalekik',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#96BEFB',
                            fontFamily: 'serif',
                        },
                        // headerTitle: () => (
                        //     <Image style={{ width:0, height: 50 }} source={require("./.expo/screen/assets/kalekik.png")} />
                        //   ),
                    }} 
                    />
                    
                <Stack.Screen name="SelectEvent" component={SelectEvent}
                    options={{
                        title: 'Kalekik',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: '#96BEFB',
                            fontFamily: 'serif',
                        },
                    }} />
                <Stack.Screen name="MatchPredicition" component={MatchPredicition} options={{ headerShown: false }} />
                <Stack.Screen name="Headercontant" component={Headercontant} options={{ headerShown: false }} />
                <Stack.Screen name="HeaderProfile" component={HeaderProfile} options={{ headerShown: false }} />
                <Stack.Screen name="Model" component={Model} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};




export default Navigation