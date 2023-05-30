import './settingsPage.scss'
import {useState} from 'react';
import {Settings} from '../../components/settings/settings'
import { ChangeThems } from '../../components/changeThems/changeThems';
import '../../mixins/mixins.scss'

export const SettingsPage = () => {

    const[twoFactorVisibility, setTwoFactorVisibility] = useState(false);

    const clickTwoFactor = () =>{
        setTwoFactorVisibility(!twoFactorVisibility)
    }
    const [changeThems, setChangeThems] = useState(false);

    
    const ClickChangeThems = () => {
        setChangeThems(!changeThems)
    }

    return(
        <div className={`settings-page  d-flex flex-column justify-center align-center ${changeThems ? `settings-page_white` : `settings-page_black ${twoFactorVisibility ? `opacity`:``}`}`}>
        <div  className='mb-40'
        onClick={ClickChangeThems}>
        <ChangeThems/>
        </div>
        <Settings
            Thems ={changeThems}
            clickTwoFactor = {twoFactorVisibility}   
            closeTwoFactor = {clickTwoFactor}

        />
    </div>
    )
}