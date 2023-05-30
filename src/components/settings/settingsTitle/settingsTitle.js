import './settingsTitle.scss'

export const SettingsTitle = ({nameTitle,colorTitle}) =>{
    return(
        <h3 className='settingsTitle' style ={colorTitle}>{nameTitle}</h3>
    )
}