import Tariff from './components/Tariff/Tariff';
import './App.css'; 

const tariffs = [
  { title: 'Безлимитный 300', price: 300, speed: 10, backgroundColor: '#17a2b8' }, // Бирюзовый
  { title: 'Безлимитный 450', price: 450, speed: 50, backgroundColor: '#28a745' }, // Зеленый
  { title: 'Безлимитный 550', price: 550, speed: 100, backgroundColor: '#dc3545' }, // Красный (выделенный)
  { title: 'Безлимитный 1000', price: 1000, speed: 200, backgroundColor: '#343a40' }, // Черный
];

function App = () => {
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffClick = (index) => {
    setSelectedTariff(index);
  };

  return (
    <div className="tariff-container">
      {tariffs.map((tariff, index) => (
        <Tariff
          key={index}
          title={tariff.title}
          rice={tariff.price}
          speed={tariff.speed}
          backgroundColor={tariff.backgroundColor}
          isSelected={selectedTariff === index}
          onClick={() => handleTariffClick(index)}
        />
      ))}
    </div>
  );
}

export default App;