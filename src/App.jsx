import React from "react";
import FormCreatePoint from "./components/FormCreatePoint/formCreatePoint";
import Map from "./components/Map/Map";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function App() {
  const location = { center: [61.4, 55.16], zoom: 9 };
  const apiKey = "47e9428b-e698-4791-98ce-87001909f7fb";
  const [points_list, set_list] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [buttonName, setButtonName] = useState("Добавить");

  return (
    <div className="App bg-light-subtle">
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{"Точка" || selectedPoint["Название"]}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-between">
          <Button
            variant="light"
            onClick={() => {
              setShowModal(false);
              setButtonName("Сохранить");
            }}
          >
            Редактировать
          </Button>
          <Button variant="dark" onClick={() => setShowModal(false)}>
            Удалить
          </Button>
        </Modal.Body>
      </Modal>

      <div className="position-absolute translate-middle top-50 start-50 w-75 h-75 d-flex flex-row">
        <FormCreatePoint
          points_list={points_list}
          set_list={set_list}
          button_name={buttonName}
          setButtonName={setButtonName}
        />
        <Map
          location={location}
          apiKey={apiKey}
          points_list={points_list}
          setShowModal={setShowModal}
          setSelectedPoint={setSelectedPoint}
        />
      </div>

      <Button variant="dark" onClick={() => setShowModal(!showModal)}>
        Open Modal
      </Button>
    </div>
  );
}

export default App;
