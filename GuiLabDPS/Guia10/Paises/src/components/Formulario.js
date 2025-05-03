import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Formulario = ({ busqueda, guardaBusqueda, guardarConsulta }) => {
    const [ open, setOpen] = useState(false);
    const [value, setValue] = useState(busqueda.pais ?? "");

    const [items, setItems] = useState([
        { label: "--Seleccione un país", value: ""},
        { label: "Canadá", value: "ca"},
        { label: "El Salvador", value: "sv"},
        { label: "Guatemala", value: "gt"},
        { label: "Honduras", value: "hn"},
        { label: "Nicaragua", value: "ni"},
        { label: "Panamá", value: "pa"},
        { label: "Costa Rica", value: "cr"},
        { label: "México", value: "mx"},
        { label: "Argentina", value: "ar"},
        { label: "Estados Unidos", value: "us"},
        { label: "Colombia", value: "col"},
        { label: "España", value: "es"},
        { label: "Perú", value: "pe"},
    ]);

    const consultarPais = () => {
        if (value.trim() === ""){
            mostrarAlerta();
            return;
        }
        guardarConsulta(true);
    };

    const mostrarAlerta = () => {
        Alert.alert("Error", "Debe seleccionar un país", [{ text: "Entendido" }]);
    };

    return(
        <View>
            <View>
                <Text style={styles.input}>País</Text>
            </View>

            <DropDownPicker
                style={styles.dropdown}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Seleccione un país"
                onChangeValue={(val) => {
                    setValue(val);
                    guardaBusqueda({ ...busqueda, pais: val});
                }}
                listMode="MODAL"
                dropDownDirection="AUTO"
                scrollViewProps={{
                    nestedScrollEnabled: true,
                }}
            />

            <TouchableWithoutFeedback onPress={consultarPais}>
                <View style={styles.btnBuscar}>
                    <Text style={styles.textoBuscar}>Buscar pais</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        fontSize: 20,
        marginBottom: 10,
        textAlign: "center",
        color: "#000",
    },
    dropdown: {
        backgroundColor: "#fff",
        marginBottom: 20,
        borderColor: "#ccc",
    },
    btnBuscar: {
        marginTop: 20,
        height: 50,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    textoBuscar: {
        color: "#fff",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 18,
    },
});

export default Formulario;