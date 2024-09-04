import React from "react";

type MenuItem = {
  name: string;
  price: string;
};

const menuItems: MenuItem[] = [
  { name: "Tomato", price: "6€" },
  { name: "Spicy and hot", price: "7€" },
  { name: "Spicy beef", price: "6€" },
  { name: "Mashroom", price: "7€" },
  { name: "Hot-spicy pot", price: "6€" },
  { name: "Pickeled pepper", price: "7€" },
  { name: "Soup pot", price: "9€" },
  { name: "Chicken potaito basilico", price: "7€" },
  { name: "Chicken potaito pineapple", price: "8€" },
];

const MenuListed: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <div className="col-12 col-md">
          <h6 className="text-muted">Menu listed</h6>
          <ul className="list-group">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.name}
                <span className="badge bg-danger rounded-pill">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuListed;
