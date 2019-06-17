module.exports = {
  succeed,
  fail,
  repair,
  get
};
//- a `success(item)` method that accepts an `item` object and **returns a new item**
//  object modified according to the rules defined by the client for enhancement success.
//- The item's enhancement increases by 1.
//- If the item enhancement level is 20, the enhancement level is not changed.
//- The durability of the item is not changed.

function succeed(item) {
  if (item.enhancement >= 0 && item.enhancement <= 15) {
    item.enhancement += 1;
    item.name = `[+${item.enhancement}] ${item.origName}`;
  } else if (item.enhancement === 15) {
    item.enhancement += 1;
    item.name = `[PRI] ${item.origName}`;
  } else if (item.enhancement === 16) {
    item.enhancement += 1;
    item.name = `[DUO] ${item.origName}`;
  } else if (item.enhancement === 17) {
    item.enhancement += 1;
    item.name = `[TRI] ${item.origName}`;
  } else if (item.enhancement === 18) {
    item.enhancement += 1;
    item.name = `[TET] ${item.origName}`;
  } else if (item.enhancement === 19) {
    item.enhancement += 1;
    item.name = `[PEN] ${item.origName}`;
  }

  if (
    (item.enhancement <= 14 && item.durability < 25) ||
    (item.enhancement >= 15 && item.durability < 10)
  ) {
    throw new Error("Could not enhance. Durability level too low.");
  }

  return item;
}

//- a `fail(item)` method that accepts an `item` object and **returns a new item** object modified
//according to the rules defined by the client for enhancement failure.
//- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
//- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
//- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  if (item.enhancement >= 0 && item.enhancement <= 14) {
    item.durability -= 5;
  } else if (item.enhancement > 14 && item.enhancement <= 16) {
    item.durability -= 10;
  } else if (item.enhancement === 17) {
    item.enhancement -= 1;
    item.name = `[PRI] ${item.origName}`;
  } else if (item.enhancement === 18) {
    item.enhancement -= 1;
    item.name = `[DUO] ${item.origName}`;
  } else if (item.enhancement === 19) {
    item.enhancement -= 1;
    item.name = `[TRI] ${item.origName}`;
  } else if (item.enhancement === 20) {
    item.enhancement -= 1;
    item.name = `[TET] ${item.origName}`;
  }

  if (item.type === "armor" && item.enhancement <= 5) {
    return "Armor below level 5 have 100% success rate.";
  }

  if (item.type === "weapon" && item.enhancement <= 7) {
    return "Weapons below level 7 have 100% success rate.";
  }

  return item;
}

//- a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100.
//This method is the simplest of the three and would be a **good starting point** on this project.

function repair(item) {
  const repairedItem = {
    origName: item.origName,
    name: item.name,
    type: item.type,
    durability: 100,
    enhancement: item.enhancement
  };

  return repairedItem;
}

function get(item) {
  if (item.enhancement === 0) {
    return {
      ...item
    };
  } else {
    return {
      ...item,
      name: `[+${item.enhancement}] ${item.name}`
    };
  }
}
