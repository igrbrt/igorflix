import React from 'react';
import Menu from '../../componentes/Menu';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';
//import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <div>
      <div style={{background: "#141414"}}>

      <Menu />

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é Front-End: Trabalhando na área"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Footer />
      
      </div>


    </div>
  );
}

//export default Home;
