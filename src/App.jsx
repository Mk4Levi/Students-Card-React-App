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
  const listY22 = studentsData.bsbeY22.map(CreateCard);
  const listY23 = studentsData.bsbeY23.map(CreateCard);
  return (
    <>
      <Header />

      <h1 id="first-heading">
        <u>Student's List - 1</u>
      </h1>

      <dl className="all-cards">{listY22}</dl>

      <h1 id="second-heading">
        <u>Student's List - 2</u>
      </h1>

      <dl className="all-cards">{listY23}</dl>

      <Footer />
    </>
  );
}

export default App;
