import React, { useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "Value has been edited successfully", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      console.log(list);
      setList([...list, newItem]);
      setName("");
      showAlert(true, "Value has been successfully added", "success");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "item has been Removed", "danger");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder=" eg:banana"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={() => clearList()}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
