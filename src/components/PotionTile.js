import React from "react";

/* 
Write an abstracted component that can be used in place of InventoryTile AND ShopTile

Consider what the tiles have in common and what they do not: 
- For things that are the same, copy and pasting works just fine! 
- For things that are different, consider how you might make use of props and JSX to have the same component behave differently when rendered by different parents 
*/

function PotionTile({className, potion, children, onClick}) {
  return (
  <div className={className}>
  <div onClick={() => onClick(potion.id)} className="image-wrapper">
    <img className="image" alt={potion.name} src={potion.image_url} />
  </div>
  {children}
</div>
);
}

export default PotionTile;

//we know they have 2 differeent classNames
//this means, I need to pass down class sa a prop when it gets initialized 
//we know we will need potion as a prop
//replace inventorytile and shopTile wherever they are with PotionTile
//they both need the potion data as well
//<PotionTile className={inventory-card} />
//open both of them, look at their structure then paste that structure into tht new component, differetn classnames generalized into a prop, differernt functions generalized as a prop, that new component needs to be generalized as possible  i.e. className,  onClick, potion, and children  -- these are things that both shopTile and InventoryTile shared
//looking at what they haave in common and what their differences are to pass that in as a prop to be used in both, different classNames? make a prop called className. different functions? call it onClick

//Your goal is to write a new component called PotionTile (basic template provided for you) that will act as an abstracted version of InventoryTile and ShopTile


