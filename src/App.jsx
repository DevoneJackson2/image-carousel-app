import { useState } from 'react'
import './App.css'


function ChangeImageButton({dir, i, OnChangeImage, images}){
  const value = dir === 1 ? "Right" : "Left";
  function ChangeImage(){
    if(dir === 1 && i === images.length - 1) OnChangeImage(0);
    else if (dir === -1 && i === 0 ) OnChangeImage(images.length - 1);
    else OnChangeImage(i + dir);


  }

  return (
    <button onClick={() => ChangeImage()}>{value}</button>
  )
}


function MyImage({i, images}){
  return (
    <img alt={"Image " + (i + 1)} src={images[i]}></img>
  )
}
function App() {

  const imageList = [
    "https://www.publicdomainpictures.net/pictures/170000/velka/dog-1461509373ztd.jpg", 
    "https://th.bing.com/th/id/R.b72e21ff61c90e80bd2ca06d07cce539?rik=jTZXLrX%2fjc9sJw&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f170000%2fvelka%2fdog-1463218026uIC.jpg&ehk=eiKvs7YimkT5gBrO2YgIvAvM4Wvm6Vz9ccZzcaWMmAA%3d&risl=&pid=ImgRaw&r=0",
    "https://c.pxhere.com/photos/6f/8c/dog_puppy_cute_love_animal_adorable_pet_fur-477801.jpg!d"

  ]
  const [currIndex, SetCurrIndex] = useState(0);

  return (
    <>
      <ChangeImageButton dir={-1} i={currIndex} OnChangeImage={SetCurrIndex} images={imageList}/>
      <MyImage i={currIndex} images={imageList}/>
      <ChangeImageButton dir={1} i={currIndex} OnChangeImage={SetCurrIndex} images={imageList}/>
    </>
  )
}

export default App
