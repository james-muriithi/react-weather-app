import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.title};
  }
  .AppBar{
    background: ${({ theme }) => theme.appbar};
    color: #f5f5f5;
  }
  i.big-icon.wi {
    color: ${({ theme }) => theme.large_weather_icon};
  }
  i.wi {
    color: ${({ theme }) => theme.weather_icons};
  }

  .weather_description,
  .MuiFormControlLabel-label,
  .day_title {
      color: ${({ theme }) => theme.subTitle};
  }
  .arrow-back,
  h1.forecast-city {
      color: ${({ theme }) => theme.forecast_city};
  }
  .temperature{
    color: ${({ theme }) => theme.temperature};
  }
  .current_date{
    color: ${({ theme }) => theme.date};
  }
  .error_back,
  .geolocation{
    color: ${({ theme }) => theme.link};
  }
  input#search-city{
    color: ${({ theme }) => theme.title};
    border-color: ${({ theme }) => theme.title};
    text-transform: capitalize;
  }
  .MuiInput-underline:before {
      border-bottom-color: ${({ theme }) => theme.subTitle};
    }
    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom-color: ${({ theme }) => theme.logoColor};
    }
  `;