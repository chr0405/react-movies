import styled from 'styled-components';

const Movies = styled.div`
    display: inline;
    width: 140px;
    height: 300px;
`;

const MoreInformation = styled.div`
    position: relative;

    width: 140px;
    height: 300px;

    border-radius: 2%;
    box-shadow: 2px 2px rgb(38, 38, 38);
    
    display: none;
    background-color: rgba(0, 0, 0, 0.536);

    position:absolute;
    top: 0px;
`;

const Movies_container = styled.div`
    position: relative;
    display: inline-block;

    width: 140px;
    height: 300px;

    border-radius: 2%;
    box-shadow: 2px 2px rgb(38, 38, 38);

    background-color: rgb(77, 48, 117);
    margin: 20px 20px;

    &:hover{
        ${MoreInformation}{
            display: block;
        }
    };
`;

const Movies_img = styled.img`
    display: inline;
    width: 140px;
    height: 230px;
`;

const View_title = styled.h6`
    position: relative;
    display: inline-block;
    color: white;
    font-size: 12px;
    margin: 0;
    top: 10px;

    width: 110px;
    text-align: center;
`;

const View_vote_average = styled.p`
    position: relative;
    display: inline-block;
    color: white;
    font-size: 12px;
    margin: 0;
    top: 10px;

    width: 30px;
    text-align: center;
`;



const Info_title = styled.h6`
    position: relative;
    display: inline-block;
    color: white;
    font-size: 12px;
    margin: 0;
    top: 10px;

    margin: 10px 10px;
`;

const Info_overview = styled.p`
    position: relative;
    display: inline-block;
    color: white;
    font-size: 12px;
    margin: 0;
    top: 10px;

    margin: 10px 10px;
`;


function Movie_styled ({poster_path, title, vote_average, overview}) {
    return (
      <Movies>
        <Movies_container>
          <Movies_img src={poster_path}/>
          <div>
            <View_title>{title}</View_title>
            <View_vote_average>{vote_average}</View_vote_average>
          </div>
          <MoreInformation>
            <Info_title>{title}</Info_title>
            <Info_overview>{overview}</Info_overview>
          </MoreInformation>
        </Movies_container>
      </Movies>
    )
  }
  
  export default Movie_styled