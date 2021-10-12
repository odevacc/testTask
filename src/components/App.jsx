import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import PassengerControl from './Passengers/PassengersControl'
import Header from './Header/Header'
import { Container, Grid } from 'semantic-ui-react'


function App() {
  return (
    <div className='wrapper_app'>
      <Container>
        <div className='content_app'>
          <Header />
          <Grid className='grid_app' centered>
            <Grid.Row>
              <PassengerControl />
            </Grid.Row>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
