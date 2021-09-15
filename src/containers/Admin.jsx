import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import NavbarAdmin from "../components/admin/NavbarAdmin";
import Productos from "../components/admin/Productos";
import EditProducts from "../components/admin/EditProducts.jsx";
import EditCategories from "../components/admin/EditCategories.jsx";
import EditCategoriesForm from "../components/admin/EditCategoriesForm.jsx";
import Registro from "../components/admin/Registro";

import Sidebar from "../components/admin/Sidebar";
import EditForm from "../components/admin/EditForm";

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
          <Route
            exact
            path="/admin/edit/products"
            render={() => <EditProducts />}
          />
          <Route
            exact
            path="/admin/edit/products/:title"
            render={() => <EditForm />}
          />
          <Route path="/admin/products" render={() => <Productos />} />
          <Route
            exact
            path="/admin/edit/categories"
            render={() => <EditCategories />}
          />
          <Route
            path="/admin/edit/categories/:name"
            render={() => <EditCategoriesForm />}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Admin;
