import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  inputContainer: {
    height: 42,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
  },

  button: {
    marginLeft: 10,
    color: '#358cff',
    fontWeight: 'bold',
  },

});

export default styles;
