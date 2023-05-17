import React from "react";
import Purse from "./Purse";
import PotionTile from "./PotionTile";
// import InventoryTile from "./InventoryTile";

function Inventory({ inventory, potions, sell, shake, stopShake, gold }) {
  const inventoryList = inventory.map((item) => {
    const potion = potions.find((potion) => potion.id === item.id);
//passing in sell as the onCLick - making a template to be filled out with whatever I'm passing in as props aka 
    return (
      <PotionTile className="inventory-card" onClick={sell} key={potion.id} potion={potion} sell={sell}>
        <h4>
          {potion.name} x {item.amount}
        </h4>
      </PotionTile>
    );
  });

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Purse stopShake={stopShake} shake={shake} gold={gold} />
      <div className="inventory-cards">{inventoryList}</div>
    </div>
  );
}

export default Inventory;
