import "./App.css";
import Header from "./containers/Header/Header";
import MainLayout from "./containers/MainLayout";
import { Container } from "reactstrap";
import DemoPage from "containers/DemoPage";
import Footer from "containers/Footer";
import { useState } from "react";
import { ModalProps } from "./components/Modal";

const defaultModalData: ModalProps = {
  showModal: false,
  icon: "",
  title: "",
  itemImage: "",
  itemName: "",
  price: "",
  size: "",
  flavor: "",
};

function App() {
  const [modalHeartData, setModalHeartData] = useState(defaultModalData);
  const [modalCartData, setModalCartData] = useState(defaultModalData);

  const closeHeartModal = () => {
    setModalHeartData((prev) => ({ ...prev, showModal: false }));
  };

  const closeCartModal = () => {
    setModalCartData((prev) => ({ ...prev, showModal: false }));
  };

  return (
    <>
      <Container className="px-md-5" fluid>
        {/* Prop  since no global state manager for this quick sample*/}
        <Header
          modalHeartData={modalHeartData}
          modalCartData={modalCartData}
          closeHeartModal={closeHeartModal}
          closeCartModal={closeCartModal}
        />
        <DemoPage
          setModalHeartData={setModalHeartData}
          setModalCartData={setModalCartData}
        />
      </Container>
      <Footer />
    </>
  );
}

export default App;
