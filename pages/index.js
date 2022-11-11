import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../components/CSSReset_index";
import Menu from "../components/Menu";
import { StyledTimeline } from "../components/Timeline";
import Image from 'next/image'
import BannerImg from "../images/banner.jpg"
import ImgBanner from "../images/code.jpg"
import { useState } from "react";
import React from "react";

function HomePage() {
  //const estilo = {backgroundColor:"white",fontSize:34 }

  //console.log(config.playlists)

  const [valorDoFiltro,setValorDoFiltro] = React.useState("");

  //const valorDoFiltro = "Frost";
  return (
    <>
      <CSSReset />
      <div>
       
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        
        <Header/>
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
       
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
    
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-color:blue;
  height:230px;
  //background-image:url(${config.bg});
  background-image:url(${({bg})=> bg};


`


function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg}/>  
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



/*  DESAFIO FEITO PARA COLOCAR O BANNER

function Banner(){
  return (
    <div>
      <Image src={ImgBanner} style={{width:"100%", height:"300px", objectFit:"cover" }}
      />
    </div>
  )
}
*/

function Timeline({ searchValue, ...props}) {
  //console.log("teste props", props);
  const playlistNames = Object.keys(props.playlists);

  //Statement
  //Retorno por expressão
  //Map
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        //console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.
              filter((video)=>{
                const titleNormalized= video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized);
              }).
              map((video) => {
                return (
                  <a key={video.url} href={video.url}>
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
