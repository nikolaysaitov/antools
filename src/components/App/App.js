
import './App.css';
import Header from '../Header/Header';
import Awesome from '../Awesome/Awesome'
import MostPopularTools from '../MostPopularTools/MostPopularTools';
import Brands from '../Brands/Brands';
import NewcomerTools from '../NewcomerTools/NewcomerTools';
import Slider from '../Slider/Slider';
import Subscription from '../Subscription/Subscription';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Awesome />
      <MostPopularTools/>
      <Brands/>
      <NewcomerTools/>
      <Slider/>
      <Subscription/>
      <Footer/>
    </div>
  );
}

export default App;
