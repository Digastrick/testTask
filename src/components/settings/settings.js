import './settings.scss';
import { SettingsItem } from './settingsItem/settingsItem';
import { SettingsButton } from './settingsButton/settingsButton';
import { SettingsTitle } from './settingsTitle/settingsTitle';
import { TwoFactopPopUp } from './twoFactorPopUp/twoFactorPopUp';
import { IconsSettings } from '../icons/iconSettings/iconSettings';
import { IconsEdit } from '../icons/iconEdit/iconEdit';
import { IconsArrow } from '../icons/iconArrow/iconArrow';


export const Settings = ({Thems,clickTwoFactor,closeTwoFactor}) => {

   

    return(
        <div>
        <div className={Thems ? 'white-thems' : 'dark-thems'}>
        <div className={clickTwoFactor ? 'nonsettings' : ' settings  d-flex flex-column align-start'}>
            <div className='settings__info mb-25 d-flex flex-row'>
                    <IconsSettings Thems={Thems}/> 
                    <div className=' ml-25 d-flex flex-column margin-4'>         
                        <SettingsTitle 
                        nameTitle={'Настройки'}
                        colorTitle = {Thems ?{color:"#252525"}:{color:"#F5F5F5"}}
                        />
                        <div className='mt-5'>
                        <SettingsItem 
                        text={'Логин: 777777777'}
                        colorText = {{color:"#919191"}}
                    />
                    </div>
                    </div>
            </div>
            <div className='settings__second-auth mb-25 d-flex flex-column margin-4'>
                <div className='settings__second-auth-link mb-5 clear d-flex justify-between '
                    onClick={closeTwoFactor}
                    >
                <SettingsItem
                text={'Двухфакторная аутентификация'}
                colorText = {Thems ?{color:"#1FA2DE"}:{color:"#31BEFF"}}
                />
                <IconsEdit Thems={Thems} />
                </div>
                <SettingsItem 
                text={'Не подключена'}
                colorText = {{color:"#919191"}}/>
            </div>
            <div className='settings__item-wrapper mb-25 d-flex justify-between'>
            <SettingsItem
            text={'Настройки безопасности и API'}
            colorText = {Thems ?{color:"#1FA2DE"}:{color:"#31BEFF"}}
            />
            <IconsArrow Thems={Thems}/>
            </div>  
            <div className='settings__item-wrapper mb-25 d-flex justify-between'>
            <SettingsItem
            text={' Все протоколы интеграции'}
            colorText = {Thems ?{color:"#1FA2DE"}:{color:"#31BEFF"}}
            />
            <IconsArrow Thems={Thems}/>
            </div>
            <SettingsButton
                Thems ={Thems}
                colorText = {Thems ?{color:"#1FA2DE"}:{color:"#31BEFF"}}
            />
        </div>
        </div>
        <TwoFactopPopUp 
             clickTwoFactor = {clickTwoFactor}   
             closeTwoFactor = {closeTwoFactor}
             Thems={Thems}
            />
        </div>
    )
}