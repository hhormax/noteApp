import {OpenButton} from "../OpenButton/OpenButton";
import s from './Navbar.module.css';

export function Navbar() {
    return (
        <div className={s.navbar}>
            <OpenButton />;
        </div>
      );
}

