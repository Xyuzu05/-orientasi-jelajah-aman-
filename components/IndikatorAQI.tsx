import { View, Text } from "react-native";
import { LaporanUdara } from "../types/cuaca";

export default function IndikatorAQI({ kota, indeksAQI, tingkat, diperbaruiPada }: LaporanUdara) {
  // Menentukan warna teks berdasarkan tingkat kualitas udara
  let warnaTeks = "black";
  if (tingkat === "BAIK") {
    warnaTeks = "green";
  } else if (tingkat === "SEDANG") {
    warnaTeks = "orange";
  } else if (tingkat === "TIDAK_SEHAT") {
    warnaTeks = "red";
  } else if (tingkat === "BERBAHAYA") {
    warnaTeks = "darkred";
  }

  return (
    <View style={{ padding: 16, backgroundColor: "#E8F0F2", borderRadius: 8 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Kualitas Udara: {kota}</Text>
      <Text>Indeks AQI: {indeksAQI}</Text>
      <Text style={{ color: warnaTeks, fontWeight: "bold" }}>Status: {tingkat}</Text>
      {diperbaruiPada && (
        <Text style={{ fontSize: 12, marginTop: 4, fontStyle: "italic" }}>
          Diperbarui: {diperbaruiPada}
        </Text>
      )}
    </View>
  );
}