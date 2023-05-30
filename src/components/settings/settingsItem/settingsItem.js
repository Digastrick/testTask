import './settingsItem.scss'
import '../../../mixins/mixins.scss'
export const SettingsItem = ({text,colorText}) =>{
    return(
        <div className='settings__item' style={colorText} >
        {text}
        </div>
    )
}