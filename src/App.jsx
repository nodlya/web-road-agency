import React from "react";
import FormCreatePoint from "./components/FormCreatePoint/formCreatePoint";
import Map from "./components/Map/Map";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import pointDeleting from "./helpers/PointDeleting";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import "./App.css"
import { Container } from "react-bootstrap";
import MessageWindow from "./components/MessageWindow/MessageWindow";

function App() {
  const location = { center: [61.4, 55.16], zoom: 9 };
  const apiKey = "47e9428b-e698-4791-98ce-87001909f7fb";
  const [points_list, set_list] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [buttonName, setButtonName] = useState("Добавить");
  const [formValues, setFormValues] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [page, setPage] = useState("Карта");

  const handleFormValues = (marker) => {
    console.log(marker);
    setFormValues(marker);
  };

  return (
    <div>
      <div class="nav">
        <span onClick={() => setPage("Карта")} class="">Карта</span>
        <span onClick={() => setPage("Новости")} class="">Новости</span>
      </div>
      {page === "Карта" && (
        <div className="App bg-light-subtle">
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>
                {selectedPoint && selectedPoint["Название"]
                  ? selectedPoint["Название"]
                  : "Точка"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-between">
              <Button
                variant="light"
                onClick={() => {
                  setIsActive(true);
                  setShowModal(false);
                  setButtonName("Сохранить");
                }}
              >
                Редактировать
              </Button>
              <Button
                variant="dark"
                onClick={async () => {
                  setShowModal(false);
                  console.log("Удаляем...");
                  console.log(selectedPoint);
                  await pointDeleting(selectedPoint);
                }}
              >
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
              formValues={formValues}
              isActive={isActive}
            />
            <Map
              location={location}
              apiKey={apiKey}
              points_list={points_list}
              setShowModal={setShowModal}
              setSelectedPoint={setSelectedPoint}
              setFormValues={handleFormValues}
            />
            <NotificationContainer />
          </div>
        </div>
      )}

      {page === "Новости" && (
        <Container>
          <MessageWindow />
        </Container>
      )}
    </div>
  );
}

export default App;
