import {useSelector, useDispatch} from 'react-redux';
import {paintColorAsync, selectColorStatus, changeColor, changeOpacity, selectColor, selectOpacity, selectFontSize, selectFont} from './CanvasSlice';

const Color = ()=>{
    const color = useSelector(selectColor);
    const fontSize = useSelector(selectFontSize);
    const font = useSelector(selectFont);
    const opacity = useSelector(selectOpacity);
    const dispatch = useDispatch();
    const isColorLoading = useSelector(selectColorStatus) === 'loading';

    return <>
    <h3
    style={{backgroundColor: color, color:'white', fontSize: `${fontSize}px`, fontFamily: font, opacity: opacity}}
    >Color: {isColorLoading?'Loading...':color}</h3>
    <input type="range" min={0} max={100} value={opacity*100} onChange={(e) => dispatch(changeOpacity(Number(e.target.value/100)))} />
    <input type="color" value={color} onChange={(e) => dispatch(changeColor(e.target.value))} />
    <button onClick={() => dispatch(paintColorAsync())}>Get Random Color</button>
    </>;
};

export default Color;