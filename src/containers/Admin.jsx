import { Box } from "@chakra-ui/layout";
import { position } from "@chakra-ui/styled-system";
import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import NavbarAdmin from "../components/admin/NavbarAdmin";
import Productos from "../components/admin/Productos";
import EditProducts from "../components/admin/EditProducts.jsx";
import Registro from "../components/admin/Registro";

import Sidebar from "../components/admin/Sidebar";

function Admin() {
  return (
    <div className="Admin">
      <BrowserRouter>
        <NavbarAdmin />
        <div
          style={{ display: "table-cell", width: "15%", verticalAlign: "top" }}
        >
          <Sidebar />
        </div>
        <div
          style={{ display: "table-cell", width: "85%", verticalAlign: "top" }}
        >
          <Route path="/admin/table" render={() => <Registro />} />
          <Route path="/admin/edit/products" render={() => <EditProducts />} />
          <Route path="/admin/products" render={() => <Productos />} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Admin;
