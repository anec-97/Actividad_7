import React from 'react'//importar para componente web
// para uso de moviles
import{Text, Image, View} from "react-native"

const CatComponent = (props) => {
  return (
      //componente pagina web
    //<div>CatComponent</div>
    //para movil
    <View>
    <Text>soy un gato y mi nombre es {props.nombre} </Text>
    <Image
      source={{uri: props.foto}}
        style={{width: 200, height: 200}}
    ></Image>
    
    </View>
    
  )
}

export default CatComponent