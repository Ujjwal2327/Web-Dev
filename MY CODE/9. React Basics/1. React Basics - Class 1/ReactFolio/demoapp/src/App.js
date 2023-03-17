import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from "./components/Card"

function App() {
  const itemTwoName = "SurfExcel";

  const response = [
    {
      itemName:"Nirma",
      itemDate:20,
      itemMonth:"June",
      itemYear:1998
    },
    {
      itemName:"Nirma2",
      itemDate:202,
      itemMonth:"June2",
      itemYear:19982
    },
    {
      itemName:"Nirma3",
      itemDate:203,
      itemMonth:"June3",
      itemYear:19983
    }
  ]

  return (
    <div>
      <Card>
        <Item name={response[0].itemName}>Hello Jee Mai Hu First Item</Item>     {/* component / custom html tags */}
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} ></ItemDate>

        <Item name={itemTwoName}></Item>
        <ItemDate  day="22" month="July" year="1999" ></ItemDate>

        <Item name="555"></Item>
        <ItemDate day="24" month="Sept" year="2010"></ItemDate>
        <div className="App">Hello Jee</div>
      </Card>
    </div>
  );
}

export default App;
