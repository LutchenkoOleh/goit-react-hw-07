
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css"

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };


  return (
    <li className={css.contactItem}>
      <div className={css.contactItemWrap}>
        <p className={css.contactText}>
          <svg className={css.nameSvg} width="12" height="12">
            <use href="/public/img/phone.svg#name"></use>
          </svg>
          {name}
        </p>
        <p className={css.contactText}>
          <svg className={css.numberSvg} width="12" height="12">
            <use href="/public/img/phone.svg#number"></use>
          </svg>
          {number}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>Delete</button>
    </li >
  );

}