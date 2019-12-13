// External Dependencies
import { StyleSheet } from 'react-native';

const MenuStyle = StyleSheet.create({
  menuRootStyle: {
    flex: 1,
  },
  menuHeadStyle: {
    height: 150,
    backgroundColor: 'rgb(39,150,243)',
    alignItems: 'center',
    justifyContent: 'center',

  },
  menuHeadInsideStyle: {
    right: 15,
    top: 30,
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItemInsideStyle: {
    right: 20,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuBodyStyle: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuHeadTextStyle: {
    color: '#fff',
    fontWeight: '600',
  },
  menuBodyTextStyle: {
    fontWeight: '300',
    fontSize: 20,
  },
});

export default MenuStyle;
