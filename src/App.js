import Backdrop from "./component/Backdrop";
import Modal from "./component/Modal";
import Todo from "./component/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Title 1" />
      <Todo title="Title 2" />
      <Todo title="Title 3" />
      <Modal></Modal>
      <Backdrop></Backdrop>
    </div>
  );
}

export default App;
