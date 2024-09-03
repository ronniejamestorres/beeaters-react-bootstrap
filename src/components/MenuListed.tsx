import React from "react";

const MenuListed: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <div className="col-12 col-md">
          <h6 className="text-muted">Menu listed</h6>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Tomato
              <span className="badge bg-danger rounded-pill">6€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Spicy and hot
              <span className="badge bg-danger rounded-pill">7€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Spicy beef
              <span className="badge bg-danger rounded-pill">6€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Mashroom
              <span className="badge bg-danger rounded-pill">7€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Hot-spicy pot
              <span className="badge bg-danger rounded-pill">6€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Pickeled pepper
              <span className="badge bg-danger rounded-pill">7€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Soup pot
              <span className="badge bg-danger rounded-pill">9€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Chicken potaito basilico
              <span className="badge bg-danger rounded-pill">7€</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Chicken potaito pineapple
              <span className="badge bg-danger rounded-pill">8€</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MenuListed;
