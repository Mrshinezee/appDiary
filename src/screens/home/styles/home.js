import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  titleHeading: {
    fontSize: 15
  },
  titleTextInput: {
    fontSize: 10
  },
  textArea: {
    flex: 1
  },
  textAreaTitle: {
    fontSize: 10
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center"
  },
  bottomBarWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1
  },
  saveBtn: {
    padding: 10
  },
  characterCount: {
    padding: 10,
    fontSize: 10
  }
});
