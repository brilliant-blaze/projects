import React, { useEffect, useState } from "react";
import Logout from "../components/Logout";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  editGroceryActions,
  getGroceryActions,
} from "../redux/actions/grocery.action";

function Main() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const listGrocery = useSelector((state) => state.grocery.data);
  console.log("redux", listGrocery);

  useEffect(() => {
    dispatch(getGroceryActions());
  }, [dispatch]);

  const handleEdit = (id, name) => {
    console.log("id", id);
    console.log("name", name);
    let dataEdit = prompt("ubah grocery", name);
    console.log("data edit", dataEdit);

    dispatch(editGroceryActions(dataEdit, id));
  };

  return (
    <div>
      <h1>Halaman main</h1>
      <Logout />

      <h1>Grocery List</h1>
      {listGrocery !== undefined ? (
        listGrocery.map((item, index) => (
          <div key={index}>
            <h4>{item.name}</h4>
            <button onClick={() => handleEdit(item.id, item.name)}>Edit</button>
            <button>Delete</button>
          </div>
        ))
      ) : (
        <h1>Loading bos</h1>
      )}
    </div>
  );
}

export default Main;
