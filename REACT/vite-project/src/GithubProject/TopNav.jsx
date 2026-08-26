import { useState } from "react";
import axios from "axios";

function TopNav(props) {
  const { setPeople } = props;
  const [search, setSearch] = useState("");

  const onSearch = async () => {
    try {
      const trimmedString = search.trim();
      if (trimmedString === "" || trimmedString.length < 3) {
        return;
      }

      let response = await axios({
        method: "GET",
        url: "https://api.github.com/search/users",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
        params: {
          q: trimmedString,
        },
      });

      console.log("Search results:", response.data.items);
      setPeople(response.data.items);
    } catch (e) {
      console.error("Search failed:", e);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: "40px" }}
        src="https://toppng.com/uploads/preview/github-logo-png-photo-11659780047rlwsegmg72.png"
        alt="GitHub logo"
      />
      <input
        style={{ width: "50vw", marginLeft: "1em" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default TopNav;