//
import "./css/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Card from "./components/Card";

import studentsData from "./components/students-data";

function CreateCard(data) {
  // console.log(data);
  return <Card key={data.rollNo} data={data} />;
}

function App() {
  const listY20 = studentsData.bsbeY20.map(CreateCard);
  const listY21 = studentsData.bsbeY21.map(CreateCard);
  return (
    <>
      <Header />

      <h1 id="first-heading">
        <u>BSBE Students of &nbsp; Y-20</u> :
      </h1>

      <dl className="all-cards">{listY20}</dl>

      <h1 id="second-heading">
        <u>BSBE Students of &nbsp; Y-21</u> :
      </h1>

      <dl className="all-cards">{listY21}</dl>

      <Footer />
    </>
  );
}

export default App;
