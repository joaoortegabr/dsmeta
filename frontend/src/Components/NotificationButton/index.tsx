import icon from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
    return(
        <button className="notify-btn">
            <img src={icon} alt="Notify seller" />
        </button>
    )
  }
  
  export default NotificationButton