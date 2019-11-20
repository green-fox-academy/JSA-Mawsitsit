const registerStyles = {
  container: {
    marginTop: 60,
    marginLeft: 20,
    width: '90%',
    backgroundColor: '#fff',

  },
  // password strength
  passwordStrength: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bar: {
    marginTop: 10,
    height: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  baseBar: {
    backgroundColor: '#48BBEC',
  },
  weakbar: {
    width: 60,
    backgroundColor: 'red',
  },
  mediumbar: {
    width: 120,
    backgroundColor: 'orange',
  },
  strongbar: {
    width: 180,
    backgroundColor: 'green',
  },
  textStyle: {
    marginTop: 10,
    fontSize: 14,
  },
  warningTextColor: {
    color: 'red',
  },
  textInputStyle: {
    marginTop: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#b9c6c3',
  },
  warningBorderColor: {
    borderBottomColor: 'red',
  },
  buttontext: {
    color: 'white',
    fontSize: 23,
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 200,
    height: 60,
    width: 120,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default registerStyles;
