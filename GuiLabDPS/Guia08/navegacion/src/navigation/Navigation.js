import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";
import ContactStack from "./ContactStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
            <Tab.Screen name="about" component={AboutStack} options={{title: 'About'}} />
            <Tab.Screen name="contact" component={ContactStack} options={{title: 'Contact'}} />
        </Tab.Navigator>
    );
}