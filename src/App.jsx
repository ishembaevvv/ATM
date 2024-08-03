import { useDispatch, useSelector } from "react-redux";
import { ADD_CASH, GET_CASH } from "./store/cashReducer";
import {
  addCustomerAction,
  removeAllAction,
  removeCustomerAction,
} from "./store/customerReducer";
import { fetchCustomer } from "./asyncActions/customers";
import avatar from "./img/avatar.png";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customer = useSelector((state) => state.customer.customer);

  //! #1
  const addCash = (cash) => {
    dispatch({ type: ADD_CASH, payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: GET_CASH, payload: cash });
  };

  //? #2
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };

    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  const removeAll = () => {
    dispatch(removeAllAction());
  }

  return (
    <div className="App">
      <div className="cash">{cash}$</div>
      <div className="box-btns">
        <button className="btn" onClick={() => addCash(Number(prompt("Введите сумму:")))}>
          Пополнить счет
        </button>
        <button className="btn" onClick={() => getCash(Number(prompt("Введите сумму:")))}>
          Обналичить счет
        </button>
        <button className="btn" onClick={() => addCustomer(prompt("Введите имя клиента:"))}>
          Добавить
        </button>
        <button className="btn" onClick={() => dispatch(fetchCustomer())}>
          Получить клиентов из базы
        </button>
        <button className="btn" onClick={() => removeAll()}>Удалить всех клиентов</button>
      </div>

      <div className="container">
        {/* проверяет если у массива объекты и выводит их имена на экран */}
        {customer.length > 0 ? (
          <div className="users">
            {customer.map((customer, id) => (
              <div
                className="user"
                key={id}
              >
                <img src={avatar} className="avatar" />
                {customer.name}
                <span className="span" onClick={() => removeCustomer(customer)}>❌</span>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: "2rem" }}>Клиенты отсуствуют!</div>
        )}
      </div>
    </div>
  );
}

export default App;
