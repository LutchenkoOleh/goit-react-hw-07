
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice"
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css"

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchBoxText}>Find contacts by name</p>
      <input type="text"
        className={css.searchBoxInput}
        value={filter}
        onChange={handleChange}
        placeholder="Search contacts"
      />
    </div>
  )

}