import styles from './Header.module.css';

import logoImage from '../../assets/logo.svg';
import closeIcon from '../../assets/icon-close.svg';
import maximizeIcon from '../../assets/icon-maximize.svg';
import minimizeIcon from '../../assets/icon-minimize.svg';

export function Header() {

  function maximizeScreen() {
    const full_screen_element = document.fullscreenElement;
    
    if(full_screen_element === null) {
      const element = document.querySelector("body");
      element.requestFullscreen();
      return true;
    }

    document.exitFullscreen();
    return true;
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        <img className={ styles.logo } src={ logoImage } alt="" />

        <p className={ styles.text }>Gabriel Roberto</p>
      </div>

      <div className={ styles.actionsContainer }>
        <div className={ styles.actionButton }>
          <img src={ minimizeIcon } alt="" />
        </div>

        <div className={ styles.actionButton } onClick={ maximizeScreen }>
          <img src={ maximizeIcon } alt="" />
        </div>

        <div className={ styles.actionButton }>
          <img src={ closeIcon } alt="" />
        </div>
      </div>
    </div>
  );
}