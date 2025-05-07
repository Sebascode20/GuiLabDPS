import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const Pais = ({ resultado }) => {
  const [nombre, setNombre] = useState();
  const [capital, setCapital] = useState();
  const [region, setRegion] = useState();
  const [lengua, setLengua] = useState([]);
  const [area, setArea] = useState();
  const [banderaUrl, setBanderaUrl] = useState(null);

  useEffect(() => {
    if (resultado && resultado.length > 0) {
      const pais = resultado[0];

      setNombre(pais.nome.abreviado);
      setCapital(pais.governo.capital.nome);
      setRegion(pais.localizacao.regiao.nome);
      setArea(pais.area.total);

      const lenguas = Object.values(pais.linguas).map((l) => l.nome);
      setLengua(lenguas);

      console.log("Resultado completo del país:", resultado[0]);

      const isoAlpha2 = pais.id["ISO-3166-1-ALPHA-2"];
      if (typeof isoAlpha2 === "string") {
        const bandera = `https://flagsapi.com/${isoAlpha2}/flat/64.png`;
        setBanderaUrl(bandera);
      } else {
        setBanderaUrl(null);
      }
    }
  }, [resultado]);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{nombre}</Title>
        {banderaUrl ? (
          <Image
            source={{ uri: banderaUrl }}
            style={styles.flag}
            resizeMode="contain"
            onError={() => console.log("No se pudo cargar la bandera")}
          />
        ) : (
          <Text style={{ color: "red" }}>Bandera no disponible</Text>
        )}
        <Paragraph>Capital: {capital}</Paragraph>
        <Paragraph>Región: {region}</Paragraph>
        <Paragraph>Área: {area?.toLocaleString()} km²</Paragraph>
        <Paragraph>Lenguas: {lengua.join(", ")}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
  },
  flag: {
    width: "100%",
    height: 150,
    marginVertical: 10,
    backgroundColor: "#eee",
  },
});

export default Pais;
