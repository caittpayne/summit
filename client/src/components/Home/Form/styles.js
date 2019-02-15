import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  form: {
    flexDirection: "column",
    justifyContent: "flex-start",
    width: 250,
    marginTop: 20
  },
  button: {
    backgroundColor: "black",
    paddingRight: 20,
    paddingLeft: 20
  },
  picker: {
    width: "100%",
    marginTop: -40,
    alignSelf: "center"
  },
  successMessage: {
    fontSize: 12,
    fontFamily: "$mainFont",
    textTransform: "uppercase",
    color: "#707070",
    textAlign: "center",
    marginTop: 10
  }
});
