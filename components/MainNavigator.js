import HomeNavigator from './HomeNavigator';
import MenuNavigator from './MenuNavigator';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

const MainNav = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Menu',
            drawerLabel: 'Menu'
        }
    }
},{
    drawerBackgroundColor: '#D1C4E9'
});

const MainNavigator = createAppContainer(MainNav);

export default MainNavigator;