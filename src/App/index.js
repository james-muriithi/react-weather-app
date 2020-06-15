import React, { Component } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Search from '../components/Search/Search';
import Forecast from '../containers/Forecast/Forecast';
import Error from '../components/Error/Error';
import getUserLocation from '../helpers/Location';
import { getForecastDataByCoordinates, getForecastDataByCity} from '../helpers/Forecast';
import './index.css';

class App extends Component {
    state = {
        city: '',
        forecast: null,
        error: {
            state: false,
            message: ''
        }
    }

    getForecastByCity = async (e) => {
        e.preventDefault();

        try {
            const json = await getForecastDataByCity(this.state.city)
            if (json.cod !== '200') {
                this.setState({ error: { state: true, message: json.message } });
            } else {
                this.setState({ forecast: json.list });
            }
        } catch (error) {
            this.setState({ error: { state: true } });
        }
    }

    getForecastByCoordinates = async () => {
        try {
            const coords = await getUserLocation();
            const json = await getForecastDataByCoordinates(coords)
            
            if (json.cod !== '200') {
                this.setState({ error: { state: true } });
            } else {
                this.setState({ city: json.city.name, forecast: json.list });
            }
        } catch (error) {
            this.setState({ error: { state: true, message: error.message } });
        }
    }

    handleCityInput = (city) => {
        this.setState({ city });
    }

    clear = () => {
        this.setState({ city: '', forecast: null, error: { state: false } });
    }

    changeUnit = (currentTempUnit) => {
        const updatedForecast = [ ...this.state.forecast ];
        updatedForecast.forEach(day => {
            Object.keys(day.temp).forEach(key => {
                day.temp[ key ] = currentTempUnit === 'F' ? 9 / 5 * day.temp[ key ] + 32 : 5 / 9 * (day.temp[ key ] - 32);
            });
        });

        this.setState({ forecast: updatedForecast });
    }

    render() {
        const cardContent = this.state.forecast
            ? <Forecast
                back={this.clear}
                forecast={this.state.forecast}
                city={this.state.city}
                changeUnit={this.changeUnit}
            />
            : <Search
                getForecastByCity={this.getForecastByCity}
                getForecastByCoordinates={this.getForecastByCoordinates}
                textChanged={this.handleCityInput}
                city={this.state.city}
            />;

        return (
            <div style={{ height: "100%" }}>
                <AppBar />
                <div className="container">
                    <div className="card">
                        {!this.state.error.state ? cardContent : <Error back={this.clear} message={this.state.error.message} />}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
