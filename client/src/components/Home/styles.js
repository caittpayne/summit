import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: "70%"
  },
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080"
  },
  modalBox: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "70%",
    width: "80%",
    backgroundColor: "white",
    padding: 20
  },
  closeView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  formView: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10
  },
  button: {
    backgroundColor: "black",
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 30,
    paddingLeft: 30
  },
  headerText: {
    fontSize: 20,
    fontFamily: "$mainFont",
    textTransform: "uppercase",
    color: "#707070",
    marginBottom: 10
  },
  text: {
    fontSize: 12,
    fontFamily: "$mainFont",
    textTransform: "uppercase",
    color: "#707070",
    textAlign: "center"
  }
});
