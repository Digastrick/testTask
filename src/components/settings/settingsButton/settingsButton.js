import './settingsButton.scss'

export const SettingsButton =({Thems,colorText}) =>{
    return(
        <div className='settings__button-wrapper'>
    <button className={`settings__button ${Thems ? `settings__button_white` : `settings__button_black`}`} 
    style={colorText} >
            Создать пароль для API
    </button>
    </div>
    )
}