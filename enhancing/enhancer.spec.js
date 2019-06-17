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

    describe("FAIL METHOD", () => {
      const failedWeaponBelow14 = {
        origName: "harkons_sword",
        name: "harkons_sword",
        type: "weapon",
        durability: 90,
        enhancement: 12
      };

      test("Failed - weapon below level 14 ehancement", () => {
        expect(enhance.fail(harkons_sword)).toEqual(failedWeaponBelow14);
      });

      const failedWeaponBelow16 = {
        origName: "dragonbane",
        name: "dragonbane",
        type: "weapon",
        durability: 90,
        enhancement: 14
      };

      test("Failed - weapon below level 16 ehancement", () => {
        expect(enhance.fail(dragonbane)).toEqual(failedWeaponBelow16);
      });

      const failedWeaponAbove16 = {
        origName: "bloodscythe",
        name: "bloodscythe",
        type: "weapon",
        durability: 100,
        enhancement: 17
      };

      test("Failed - weapon above level 16 ehancement", () => {
        expect(enhance.fail(bloodscythe)).toEqual(failedWeaponAbove16);
      });

      const failedArmorBelow14 = {
        origName: "dragonscale",
        name: "dragonscale",
        type: "armor",
        durability: 90,
        enhancement: 7
      };

      test("Failed - armor below level 14 enhancement", () => {
        expect(enhance.fail(dragonscale)).toEqual(failedArmorBelow14);
      });

      const failedArmorBelow16 = {
        origName: "deathbrand",
        name: "deathbrand",
        type: "armor",
        durability: 90,
        enhancement: 15
      };

      test("Failed - armor less than or equal to 16", () => {
        expect(enhance.fail(deathbrand)).toEqual(failedArmorBelow16);
      });

      const failedArmorAbove16 = {
        origName: "vampire_royal",
        name: "vampire_royal",
        type: "armor",
        durability: 100,
        enhancement: 17
      };

      test("Failed - armor above level 16 ehancement", () => {
        expect(enhance.fail(vampire_royal)).toEqual(failedArmorAbove16);
      });

      const lowArmorEnhancement = {
        origName: "archmages",
        name: "archmages",
        type: "armor",
        durability: 100,
        enhancement: 2
      };

      test("Armor enhancement level less than or equal to 5", () => {
        expect(enhance.fail(archmages)).toBe(
          "Armor below level 5 enhancement cannot fail."
        );
      });

      const lowWeaponEnhancement = {
        origName: "dwarven_crossbow",
        name: "dwarven_crossbow",
        type: "weapon",
        durability: 100,
        enhancement: 15
      };

      test("Weapon enhancements level less than or equal to 7", () => {
        expect(enhance.fail(dwarven_crossbow)).toEqual(
          "Weapons below level 7 ehancement cannot fail."
        );
      });

      describe("REPAIR METHOD", () => {
        const repairedArmor = {
          origName: "miraaks",
          name: "miraaks",
          type: "armor",
          durability: 100,
          enhancement: 0
        };

        test("Repaired the miraaks armor.", () => {
          expect(enhance.repair(miraaks)).toEqual(repairedArmor);
        });

        const repairedWeapon = {
          origName: "windshear",
          name: "windshear",
          type: "weapon",
          durability: 100,
          enhancement: 0
        };

        test("Repaired the windshear weapon.", () => {
          expect(enhance.repair(windshear)).toEqual(repairedWeapon);
        });
      });

      describe("GET ITEM TESTS", () => {
        it("Should return the item not modified in any way", () => {
          const item = {
            name: "chillrend",
            type: "weapon",
            durability: 100,
            enhancement: 0
          };

          const newItem = mockGet.get(item);

          expect(mockGet.get).toBeCalled();
          expect(mockGet.get).toBeCalledWith(item);
          expect(newItem).toEqual(item);
        });

        it("Should return the item with the enhancement level and the name", () => {
          const item = {
            name: "chillrend",
            durability: 7,
            enhancement: 7
          };
          const expected = {
            name: "[+7] chillrend",
            durability: 7,
            enhancement: 7
          };

          const newItem = mockGet.get(item);

          expect(mockGet.get).toBeCalled();
          expect(mockGet.get).toBeCalledWith(item);
          expect(newItem).toEqual(expected);
        });
      });
    });
  });
});
