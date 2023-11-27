import s from "./style.module.css";
import copyPasteIcon from "../../assets/copy-paste.svg";

export function PasswordGeneratorFooter(props) {
  function copy() {
    navigator.clipboard.writeText(props.password);
  }

  return (
    <div className={s.root} onClick={copy}>
      <div>{props.password}</div>
      <img className={s.icon} src={copyPasteIcon} alt="Copy paste icon" />
    </div>
  );
}
