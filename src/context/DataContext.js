import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  
  return (
    <DataContext.Provider
      value={{
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
