import { ReactComponent as  IconSettings } from "../../iconsImg/Settings.svg";
import './IconSettings.scss'
export const IconsSettings = ({Thems}) => {
return(
    <div className={`${Thems ? 'white-thems-settings' : 'black-thems-settings'}`}>
        <IconSettings className={`${Thems ? 'white-icons-settings' : 'black-icons-settings'} icon-settings`}/>
    </div>
)
}