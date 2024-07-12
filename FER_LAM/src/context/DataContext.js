import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const dataDefault = 5; // so san pham trong 1 trang
  const [dataCha, setDataCha] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [dataListV2, setDataListV2] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [dataFilterV2, setDataFilterV2] = useState([]);
  const [filterFollowCondition, setFilterFollowCondition] = useState("");
  const [sort, setSort] = useState("asc");
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //
    axios.get("http://localhost:9999/departments").then((res) => {
      //
      setDataCha(res.data);
      //
      // dataFilter: ['1', '2', '3']
      // ['1']
      setDataFilter(res.data.map((user) => user.id.toString()));
      setDataFilterV2(res.data.map((user) => user.id.toString()));
    });
    //
    axios
      .get("http://localhost:9999/projects")
      .then((res) => setDataList(res.data));
    //
    axios
      .get("http://localhost:9999/employees")
      .then((res) => setDataListV2(res.data));
  }, []);

  // const changeStatus = (id) => {
  //   const todo = todos.find((todo) => todo.id === id);
  //   todo.completed = !todo.completed;
  //   axios.put(`http://localhost:9999/todo/${id}`, todo).then(() => {
  //     setTodos(todos.map((t) => (t.id === id ? todo : t)));

  //     alert("Change suscess.");
  //   });
  // };

  const getNameCha = (id) => {
    const cha = dataCha.find((it) => it.id == id);

    return cha;
  };

  const deleteData = (id) => {
    const dataDelete = dataList.find((it) => it.id == id);
    axios.delete(`http://localhost:9999/projects/${id}`).then(() => {
      
    });

    setDataList(dataList.filter((t) => (t.id != id)));
  };

  const addData = (data) => {
    axios.post(`http://localhost:9999/projects`, data).then(() => {
      setDataList(prev => [...prev, data]);
    });
  }

    const changeData = (data) => {
    axios.put(`http://localhost:9999/projects/${data.id}`, data).then(() => {
      axios
      .get("http://localhost:9999/projects")
      .then((res) => setDataList(res.data));

      alert("Change suscess.");
    });
  };

  return (
    <DataContext.Provider
      value={{
        dataCha,
        dataList,
        dataFilter,
        dataFilterV2,
        filterFollowCondition,
        cart,
        dataListV2,
        sort,
        currentPage,
        dataDefault,
        setDataFilterV2,
        setDataCha,
        setDataList,
        setDataFilter,
        setDataFilterV2,
        setFilterFollowCondition,
        getNameCha,
        setCart,
        deleteData,
        addData,
        changeData,
        setSort,
        setCurrentPage
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
