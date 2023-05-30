import { ReactComponent as  IconCross } from "../../iconsImg/cross.svg";
import './iconCross.scss'
export const IconsCross = ({Thems}) => {
return(
    <div className={`icon-cross ${Thems ?`white-thems-icons-cross` : `dark-thems-icons-cross`}`}>
        <IconCross/>
    </div>
)
}