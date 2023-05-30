import { ReactComponent as  IconArrow } from "../../iconsImg/arrow.svg";
import './iconArrow.scss'
export const IconsArrow = ({Thems}) => {
return(
    <div >
        <IconArrow className={Thems ? 'white-thems' : 'black-thems'}/>
    </div>
)
}