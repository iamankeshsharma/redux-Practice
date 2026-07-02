import {useDispatch, useSelector} from 'react-redux';
import {selectFontSize, changeFontSize, changeFont, selectFont} from './canvasSlice';

const Font = ()=>{
    const dispatch = useDispatch();
    const fontSize = useSelector(selectFontSize);
    const font = useSelector(selectFont);
    return <>
    <h2
    style={{fontSize: `${fontSize}px`, fontFamily: font}}
    >font: {fontSize}px {font}</h2>
    <input type="range" min={16} max={60} value={fontSize} onChange={(e) => dispatch(changeFontSize(Number(e.target.value)))}/>
    <select defaultValue={font} onChange={(e) => dispatch(changeFont(e.target.value))}>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Verdana">Verdana</option>
        <option value="Inter">Inter</option>
        <option value="Roboto">Roboto</option>
    </select>
    </>;
}

export default Font;