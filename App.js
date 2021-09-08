// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "./components/Carousel";

export default function App() {
  const itemsCarousel = [
    {
      key: "1",
      title: "Petra, Jordania",
      image:
        "https://images.ecestaticos.com/ZI4F0cPiaLSs-A_L8J_uccbNNAM=/27x11:1070x601/1338x758/filters:fill(white):format(.JPG)/f.elconfidencial.com/original/505/fdd/718/505fdd71803f1f8067167fdef7495db5.jpg",
    },
    {
      key: "2",
      title: "Taj Mahal, India",
      image:
        "https://images.ecestaticos.com/NvJZzF1JvzmvScDWtlQ5-bhKkLY=/12x88:1069x802/1338x904/filters:fill(white):format(.JPG)/f.elconfidencial.com/original/8dc/fc6/449/8dcfc6449cbd8e6247c2c47fcc48def3.jpg",
    },
    {
      key: "3",
      title: "Machu Picchu, Perú",
      image:
        "https://images.ecestaticos.com/DzoKa62XvSYhFPEtCc4L5oNDspI=/24x55:1048x710/996x560/filters:fill(white):format(jpg)/https://f.elconfidencial.com/original/55e/d30/127/55ed301278891031222906a23f52748f.jpg",
    },
    {
      key: "4",
      title: "Chichén Itzá, en México",
      image:
        "https://images.ecestaticos.com/rckxhjUNgJ19hXOHIJIbmOHa2sc=/0x10:1070x600/996x560/filters:fill(white):format(jpg)/https://f.elconfidencial.com/original/1ca/d39/ba5/1cad39ba58700d5bc60c93572fdb4683.jpg",
    },
    {
      key: "5",
      title: "El Coliseo, Roma",
      image:
        "https://images.ecestaticos.com/IWF2eCV6_bFpAgl_OPXsGV_qGnc=/16x16:1069x712/996x560/filters:fill(white):format(jpg)/https://f.elconfidencial.com/original/79e/e20/4ef/79ee204ef3756dff209a94776d694977.jpg",
    },
    {
      key: "6",
      title: "La Gran Muralla china",
      image:
        "https://images.ecestaticos.com/FuoeHvP5NlHy-3DtOWCW_h3HB0A=/21x13:1070x713/996x560/filters:fill(white):format(jpg)/https://f.elconfidencial.com/original/a34/775/c47/a34775c4759b5e2673c4f6a21b1373d6.jpg",
    },
    {
      key: "7",
      title: "Cristo Redentor de Río de Janeiro",
      image:
        "https://images.ecestaticos.com/01zeE8sB2m8qFdQTfmobOI77zpU=/19x8:1070x602/996x560/filters:fill(white):format(jpg)/https://f.elconfidencial.com/original/933/4b4/636/9334b4636a3240579c0b9e88807c91a4.jpg",
    },
  ];

  return (
    <View style={styles.container}>
      <Carousel list={itemsCarousel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
