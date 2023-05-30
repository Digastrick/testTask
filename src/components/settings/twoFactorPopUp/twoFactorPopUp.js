import './twoFactorPopUp.scss';
import { SettingsTitle } from '../settingsTitle/settingsTitle';
import { IconsCross } from '../../icons/iconCross/iconCross';

export const TwoFactopPopUp = ({clickTwoFactor,closeTwoFactor,Thems}) => {
    return(
        <div className={`${Thems ? `two-factop-pop-up_white`: `two-factop-pop-up_dark`}`}>
        <div  className={clickTwoFactor ? 'two-factop-pop-up hidden  d-flex flex-column' : 'two-factop-pop-up nonhidden'}>
           <div className='two-factop-pop-up__cross-wrapper d-flex ' onClick={closeTwoFactor}
           ><IconsCross Thems={Thems} /></div>
           <div className='two-factop-pop-up__text-wrapper'>
            <SettingsTitle 
            nameTitle={'Заголовок'}
            colorTitle = {Thems ?{color:"#252525"} : {color:"#FFFFFF"}} />
            
            <p className='two-factop-pop-up__text'>Lorem ipsum dolor sit amet consectetur. Pretium enim turpis posuere amet orci. Consectetur dui velit et quam id. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
        </div>
        </div>
    )
}