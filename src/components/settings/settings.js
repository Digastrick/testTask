import {useState} from 'react';
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
            <div className='settings__info d-flex flex-row'>
                    <IconsSettings Thems={Thems}/> 
                    <div className=' d-flex flex-column gap-4'>
                    
                        <SettingsTitle 
                        nameTitle={'Настройки'}
                        colorTitle = {Thems ?{color:"#252525"}:{color:"#F5F5F5"}}
                        />
                        <SettingsItem
                        text={'Логин: 777777777'}
                        colorText = {{color:"#919191"}}
                    />
                    </div>
            </div>
            <div className='settings__second-auth d-flex flex-column gap-4'>
                <a className='settings__second-auth-link d-flex justify-between '
                    onClick={closeTwoFactor}>
                <SettingsItem
                text={'Двухфакторная аутентификация'}
                colorText = {Thems ?{color:"#1FA2DE"}:{color:"#31BEFF"}}
                />
                <IconsEdit Thems={Thems} />
                </a>
                <SettingsItem 
                text={'Не подключена'}
                colorText = {{color:"#919191"}}/>
            </div>
            <div className='settings__item-wrapper d-flex justify-between'>
            <SettingsItem
            text={'Настройки безопасности и API'}
            colorText = {Thems ?{color:"#1FA2DE"}:{color:"#31BEFF"}}
            />
            <IconsArrow Thems={Thems}/>
            </div>  
            <div className='settings__item-wrapper d-flex justify-between'>
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