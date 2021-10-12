import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import PassengerControl from './Passengers/PassengersControl'
import Header from './Header/Header'
import { Container, Grid } from 'semantic-ui-react'


function App() {
  return (
    <div style={{ background: '#1f1f24', minHeight: '100vh' }}>
      <Container>
        <div style={{ background: '#e9eaed', minHeight: '98vh' }}>
          <Header />
          <Grid style={{ marginTop: '3em' }} centered>
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
