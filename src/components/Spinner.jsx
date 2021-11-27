import { FaSpinner } from 'react-icons/fa';
import Styles from "./Spinner.module.css";

export function Spinner() {
    return (
        <div className={Styles.Spinner}>
           <FaSpinner className={Styles.Spinning} size={60} />
        </div>
    );
}
