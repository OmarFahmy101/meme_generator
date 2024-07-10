
import { useState } from "react"
import memesData from "../memesData"
const InputsComponents = () => {
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        const memesDataLength = memesData.data.memes.length
        const randomNumber = Math.floor(Math.random() * memesDataLength)
        const imageArray = memesData.data.memes
        return imageArray[randomNumber].url;
    }

    function handleClick() {
        const randomMemeImage = getMemeImage();
        setMemeImage(randomMemeImage);
    };
    return (
        <main>
            <div className="inputs">
                <input type="text" placeholder="TopText" className="input1"></input>
                <input type="text" placeholder="BottomText" className="input2"></input>

            </div>
            <div>
                <button className="button" onClick={handleClick} >
                    Get a new meme image 🖼
                </button>
                <img src={memeImage} className="image" alt="" />
            </div>

        </main>
    )
}

export default InputsComponents
