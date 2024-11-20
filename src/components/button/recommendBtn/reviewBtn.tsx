import { BtnStyleMap } from "./reviewBtnStyle";
import {useState} from "react";

import { IcGoodGray16, IcHandshakeGray16, IcCometGray16  } from '@assets/icons';

interface ReviewBtnProps{
    type: "useful" | "recommend" | "like";
    clickedCount: number;
    
}

const ReviewBtn = ({type, clickedCount}: ReviewBtnProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const [count, setCount] = useState(clickedCount);

    const handleClick = (): void => {
        setCount(isClicked ? count - 1 : count + 1); //클릭시 이미 클릭된 버튼이면 -1, 클릭이 안 됐던 버튼은 +1
        setIsClicked(!isClicked); // 버튼 클릭 상태 바꾸기
    };

    const buttonType = {
        useful: {icon: <IcGoodGray16 />, btnText:"유용해요" },
        recommend: {icon: <IcCometGray16 />, btnText:"추천해요" },
        like: {icon: <IcHandshakeGray16 />, btnText:"공감해요" }
    };

    const { icon, btnText } = buttonType[type];
    
    
    return(
        <button css = {BtnStyleMap[isClicked ? "true" : "false"]}, onClick={handleClick}>
            <span>{icon}</span>
            <span>{btnText}</span>
            <span>{count}</span>
        </button>

    );
};

export default ReviewBtn;

