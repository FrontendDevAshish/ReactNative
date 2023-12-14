import { View,Text,Image} from "react-native";
const logoImg =require("./assets/adaptive-icon.png")
export default function App(){
  return(
    <View style={{flex:1, backgroundColor:"tan"}}>
     <Image source = {logoImg} style = {{width:300,height:300}}/>
     <Image source = {{uri:"https://unsplash.com/photos/absolut-vodka-bottle-lot-KIqw3GIhdHA"}} style = {{width:300,height:300}}/>
    </View>
  )
}