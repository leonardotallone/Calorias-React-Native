import { useState, useContext } from "react";
import { View, StyleSheet, Modal, Text, TextInput } from "react-native";
import { Button, Icon } from "@rneui/base";
import { Formik, ErrorMessage } from "formik";
import { saveFoodsContext } from "../context/SaveFoodsCoxtext";

const AddFoodModal = ({ visible, closeModal }) => {
  
  const { setSaveFoods } = useContext(saveFoodsContext);
  const [habilitar, setHabilitar] = useState(false);

  const validar = (values) => {
    const errors = {};

    if (!values.kcal) {
      errors.kcal = "Please enter calories";
    }
    if (!values.name) {
      errors.name = "Please enter Name";
    }
    if (!values.portion) {
      errors.portion = "Please enter Portion";
    }
    if (Object.keys(errors).length === 0) {
      setHabilitar(true);
    } else {
      setHabilitar(false);
    }
    return errors;
  };

  const handleSubmit = (values) => {
    const modalInput = {
      kcal: values.kcal,
      name: values.name,
      portion: values.portion,
    };
    setSaveFoods(modalInput);
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      transparent
      animationType="slide"
    >
      <Formik
        initialValues={{
          kcal: "",
          name: "",
          portion: "",
        }}
        onSubmit={handleSubmit}
        validate={validar}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={Styles.container}>
            <View style={Styles.content}>
              <View style={Styles.closeContainer}>
                <Button
                  icon={<Icon name="close" size={28} />}
                  radius={"lg"}
                  color="#4ecb71"
                  type="clear"
                  onPress={closeModal}
                />
              </View>

              <View style={Styles.formItem}>
                <View style={Styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Calories"
                    onChangeText={handleChange("kcal")}
                    onBlur={handleBlur("kcal")}
                    value={values.kcal}
                    style={Styles.textInput}
                  />
                </View>
                <View style={Styles.legendContainer}>
                  <Text style={Styles.legend}>Kcal.</Text>
                </View>
              </View>
              <View style={Styles.errorContainer}>
                <ErrorMessage
                  style={Styles.errorText}
                  name="kcal"
                  component={Text}
                />
              </View>

              <View style={Styles.formItem}>
                <View style={Styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Name"
                    onChangeText={handleChange("name")}
                    onBlur={handleBlur("name")}
                    value={values.name}
                    style={Styles.textInput}
                  />
                </View>
                <View style={Styles.legendContainer}>
                  <Text style={Styles.legend}>Name</Text>
                </View>
              </View>
              <View style={Styles.errorContainer}>
                <ErrorMessage
                  style={Styles.errorText}
                  name="name"
                  component={Text}
                />
              </View>

              <View style={Styles.formItem}>
                <View style={Styles.inputContainer}>
                  <TextInput
                    placeholder="Enter Portion"
                    onChangeText={handleChange("portion")}
                    onBlur={handleBlur("portion")}
                    value={values.portion}
                    style={Styles.textInput}
                  />
                </View>
                <View style={Styles.legendContainer}>
                  <Text style={Styles.legend}>Portion</Text>
                </View>
              </View>
              <View style={Styles.errorContainer}>
                <ErrorMessage
                  style={Styles.errorText}
                  name="portion"
                  component={Text}
                />
              </View>

              <View style={Styles.buttonContainer}>
                <Button
                  title="Add"
                  icon={<Icon name="add" size={28} color="white" />}
                  radius={"lg"}
                  color="#4ecb71"
                  onPress={handleSubmit}
                  disabled={habilitar === false}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    width: "75%",
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    alignItems: "flex-end",
  },
  formItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  inputContainer: {
    flex: 2,
  },
  legendContainer: {
    flex: 1,
  },
  legend: {
    fontWeight: "500",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
  textInput: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
  errorContainer: {
    paddingLeft: 12,
  },
  errorText: {
    fontSize: 12,
    color: "red",
  },
});
export default AddFoodModal;
