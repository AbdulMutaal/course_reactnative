import Home from './HomeComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const HomeNav = createStackNavigator({
    Home: { screen: Home },
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#512DA8'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
});

const HomeNavigator = createAppContainer(HomeNav);

export default HomeNavigator;