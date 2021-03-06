import React from 'react';
import styled from 'styled-components';
import TF from '@material-ui/core/TextField';
import cyan from '@material-ui/core/colors/purple';
import {Fade} from 'react-reveal'
const cyan500 = cyan[500]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 100%;

  span {
    font-size: 12px;
  }
`;

const TextField = styled(TF)`
  width: 300px;
  @media (max-width: 976px) {
      width: 100%;
  }
`

const LocationBtn = styled.button`
  position: relative;
  padding: 0;
  font: inherit;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  margin-top: 15px;
  font-size: 17px;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1976d2;
    visibility: hidden;
    transform: scaleX(0);
    transition: all .2s ease-in-out;
  }

  :hover::after {
    visibility: visible;
    transform: scaleX(1);
  }

  :active {
    color: ${cyan500};
  }

  :active::after {
    transition: none;
    background-color: ${cyan500};
  }
`;
const form = {
  padding: "0px 30px 0px 30px",
  width: "100%"
}

const Search = (props) => {
  return (
    <Wrapper>
      <Fade left duration={1000} distance="20px">
      <form onSubmit={props.getForecastByCity} style={form} autoComplete="off">
        <TextField
          placeholder="City"
          id='search-city'
          inputProps={{"aria-label": "city"}}
          value={props.city}
          onChange={(e) => props.textChanged(e.target.value)}
        />
      </form>
      <br />
      <span style={{fontSize:'17px'}}>or</span>
      <LocationBtn className='geolocation' onClick={props.getForecastByCoordinates}>Your current location</LocationBtn>
      </Fade>
    </Wrapper>
  );
}

export default Search;