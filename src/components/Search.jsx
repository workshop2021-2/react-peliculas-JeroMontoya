import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "../hooks/useQuery";
import {useHistory} from "react-dom";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    // const history = useHistory();

    const handleSubmit = (e) => {
      e.preventDefault();
    };  
    return (
        <form className={styles.searchContainer} onSubmi={handleSubmit}>
          <div className={styles.searchBox}>
            <input className={styles.searchInput}
             type="text"
              value={search}
               onChange={(e) => {
                 const value = e.target.value;
                // history.push("/?search=" + value);
               }}
                />  
            <button className={styles.searchButton} type="submit">
              <FaSearch size={20} />
            </button>
          </div>
        </form>
    )
}
