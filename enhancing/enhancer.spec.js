const enhancer = require("./enhancer.js");
// test away!

const {
  windshear,
  chillrend,
  dragonbane,
  bloodscythe,
  daedric_dagger,
  auriels_bow,
  harkons_sword,
  daedric_warhammer,
  dwarven_crossbow,
  mace_of_molagbal
} = require("../garb/weapons");

const {
  daedric,
  dragonscale,
  miraaks,
  ahzidals,
  deathbrand,
  nightingale,
  ancient_shrouded,
  archmages,
  guild_masters,
  vampire_royal
} = require("../garb/armor");

describe("GAME TEST SUITE", () => {
  describe("SUCCESS METHOD", () => {
    const expectedArmor = {
      origName: "ahzidals",
      name: "[+1] ahzidals",
      type: "armor",
      durability: 100,
      enhancement: 1
    };

    test("Increase armor enhancement by 1", () => {
      expect(enhance.success(ahzidals)).toEqual(expectedArmor);
    });

    const expectedArmorAbove15 = {
      origName: "daedric",
      name: "daedric",
      type: "armor",
      durability: 100,
      enhancement: 17
    };

    test("Increased armor enhancement by 1 above 15", () => {
      expect(enhance.success(daedric)).toEqual(expectedArmorAbove15);
    });

    const expectedWeapon = {
      origName: "daedric_dagger",
      name: "[+1] daedric_dagger",
      type: "weapon",
      durability: 100,
      enhancement: 1
    };

    test("Increase weapons enhancement by 1", () => {
      expect(enhance.success(daedric_dagger)).toEqual(expectedWeapon);
    });

    const expectedWeaponAbove15 = {
      origName: "daedric_warhammer",
      name: "daedric_warhammer",
      type: "weapon",
      durability: 100,
      enhancement: 19
    };

    test("Increase weapon enhancement by 1 above 15", () => {
      expect(enhance.success(daedric_warhammer)).toEqual(expectedWeaponAbove15);
    });
  });
});
