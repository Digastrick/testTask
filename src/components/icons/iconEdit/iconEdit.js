import { ReactComponent as  IconEdit } from "../../iconsImg/Edit.svg";
import './iconEdit.scss'
export const IconsEdit = ({Thems}) => {
return(
    <div>
        <IconEdit  className={Thems ? 'white-thems' : 'black-thems'}/>
    </div>
)
}