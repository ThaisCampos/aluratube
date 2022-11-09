import config from "../config.json";

import styled from "styled-components";
import { CSSReset } from "../components/CSSReset_index";
import Menu from "../components/Menu";
import { StyledTimeline } from "../components/Timeline";

function HomePage() {
  //const estilo = {backgroundColor:"white",fontSize:34 }

  //console.log(config.playlists)
  return (
    <>
      <CSSReset />
      <div>
        <Menu/>
        <Header />
        <TimeLine playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;

//function Menu() {
 // return <div>Menu</div>;
//}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top:50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`http://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  //console.log("teste props", props);
  const playlistNames = Object.keys(props.playlists);

  //Statement
  //Retorno por expressão
  //Map
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
