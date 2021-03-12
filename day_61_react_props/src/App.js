import somePicture from './components/img/bild1.jpg'
import './App.css';
import CarITem from './components/CarItem';
import FilmList from './components/FilmList';
import Collapsible from 'react-collapsible';
let cars = [
  {
    car: 'Audi',
    carModel: 'A6',
    carYear: '2007'
  },
  {
    car: 'Audi',
    carModel: 'A3',
    carYear: '2021'
  }
]
function App() {
  return (
    //  jsx
    < div className="App" >
      {/* <h1>Hello World</h1>
      <h2>option 1: Absolute path</h2>
      <img src="https://unsplash.it/300" alt="" />
      <h2>option 2: Absolute (mini-relative) path</h2>
      <img src="/img/bild.jpg" alt="" />
      <h2>option 3: image like variables</h2>
      <img src={somePicture} alt="" /> */}
      <h1>Cars Dealer </h1>
      <div className="grid">
        <CarITem
          car={'Audi'}
          carModel={'A4'}
          carYear={2009}
        />
        <CarITem
          car={'Audi'}
          carModel={'A5'}
          carYear={2010}
        />
        <CarITem
          car={cars[0].car}
          carModel={cars[0].carModel}
          carYear={cars[0].carYear}
        />
        <CarITem
          car={cars[1].car}
          carModel={cars[1].carModel}
          carYear={cars[1].carYear}
        />

        {/*<CarITem />
        <CarITem />
        <CarITem />
        <CarITem />
        <CarITem />
        <CarITem />
        <CarITem />
        <CarITem />
        <CarITem /> */}
      </div>
      <div>
        <FilmList />
      </div>
      <Collapsible trigger="Start here">
        <p>
          This is the collapsible content. It can be any element or React
          component you like.
      </p>
        <p>
          It can even be another Collapsible component. Check out the next
          section!
      </p>
      </Collapsible>
    </div >
  );
}

export default App;
