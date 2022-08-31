//movie state
import { MovieState } from "../movieState";
//react router
import { useLocation, useNavigate } from "react-router-dom";
//react specific things
import { useEffect, useState } from "react";
//import styles
import styled from "styled-components";
//importing components
import AwardComponent from "./AwardComponent";
function MovieDetail() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState(MovieState());

  useEffect(() => {
    if (!movies.find((m) => m.url === pathname)) {
      navigate("/");
    }
    setMovie(movies.filter((m) => m.url === pathname)[0]);
  }, [movies, movie, pathname]);
  return (
    <>
      {" "}
      {movie && (
        <Details>
          <Headline>
            <div className="headline-sequencer">
              {" "}
              <h3>{movie.title}</h3>
            </div>

            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((a) => {
              return (
                <AwardComponent
                  title={a.title}
                  description={a.description}
                  key={a.title}
                />
              );
            })}
          </Awards>
          <SecondaryImage>
            <img src={movie.secondaryImg} alt="movie.secondaryImg" />
          </SecondaryImage>
        </Details>
      )}
    </>
  );
}
//styled components
const Details = styled.div``;
const Headline = styled.div`
  min-height: 90vh;
  .headline-sequencer {
    position: relative;
    min-height: 20vh;
  }
  .headline-sequencer h3 {
    position: absolute;
    font-size: 2.5rem;
    min-height: 11vh;

    top: 60%;
    left: 50%;
    transform: translate(-60%, -50%);
  }
  img {
    width: 100%;
    object-fit: cover;
    height: 80vh;
  }
`;
const Awards = styled.div`
  padding: 3rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  min-height: 80vh;
  p {
    width: 70%;
    font-size: 1rem;
  }
`;
const SecondaryImage = styled.div`
  height: 90vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default MovieDetail;
