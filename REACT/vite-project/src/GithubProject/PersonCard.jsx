import { useState, useEffect } from "react";
import axios from "axios";
import RepositoryList from "./RepositoryList"; // adjust path if needed

function PersonCard(props) {
  const { person } = props;

  const [followers, setFollowers] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const { login, repos_url, followers_url, avatar_url, html_url } = person;

  const getFollowers = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: followers_url,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      });
      setFollowers(response.data);
    } catch (e) {
      console.error("Failed to fetch followers:", e);
    }
  };

  useEffect(() => {
    getFollowers();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        marginBottom: "20px",
        border: "2px solid rgba(0,0,0,0.1)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <img src={avatar_url} alt={login} style={{ height: "100px" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <b style={{ fontSize: "20px" }}>{login}</b>
        </div>
        <div>Followers: {followers.length}</div>
        <a href={html_url} target="_blank" rel="noreferrer">
          <button>Github profile</button>
        </a>
        <button onClick={() => setIsVisible(true)}>View Repositories</button>
      </div>

      <RepositoryList
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        repos_url={repos_url}
      />
    </div>
  );
}

export default PersonCard;