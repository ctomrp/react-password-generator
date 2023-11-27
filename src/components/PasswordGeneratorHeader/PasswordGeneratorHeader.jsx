import s from "./style.module.css";
import lockIcon from "../../assets/lock.svg";

export function PasswordGeneratorHeader() {
  return (
    <div className={s.root}>
      <div className={s.title}>Password Generator</div>
      <img src={lockIcon} className={s.icon} alt="Lock icon" />
    </div>
  );
}
