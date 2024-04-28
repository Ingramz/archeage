const recipes = [
  {
      "id": 115,
      "name": "Stone Brick",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 8343,
      "grade": 1,
      "quantity": 1,
      "productionTime": 6,
      "labor": 5,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 205,
      "rank": 1,
      "materials": [
          {
              "item": 8008,
              "grade": 1,
              "quantity": 3
          }
      ]
  },
  {
      "id": 116,
      "name": "Sturdy Stone",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 16321,
      "grade": 1,
      "quantity": 1,
      "productionTime": 7,
      "labor": 10,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 205,
      "rank": 2,
      "materials": [
          {
              "item": 8343,
              "grade": 1,
              "quantity": 10
          },
          {
              "item": 19450,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 118,
      "name": "Rising Star Stone",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 16323,
      "grade": 1,
      "quantity": 1,
      "productionTime": 9,
      "labor": 20,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 205,
      "rank": 3,
      "materials": [
          {
              "item": 16321,
              "grade": 1,
              "quantity": 10
          },
          {
              "item": 19410,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 23653,
              "grade": 1,
              "quantity": 5
          }
      ]
  },
  {
      "id": 4007,
      "name": "Stone Pack",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 17684,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 25,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 205,
      "rank": null,
      "materials": [
          {
              "item": 8343,
              "grade": 1,
              "quantity": 100
          }
      ]
  },
  {
      "id": 5346,
      "name": "Stone Brick: Mass Production",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 8343,
      "grade": 1,
      "quantity": 10,
      "productionTime": 10,
      "labor": 50,
      "gold": 100,
      "requiredProficiency": 50000,
      "category": 42,
      "subCat1": 198,
      "subCat2": 207,
      "rank": null,
      "materials": [
          {
              "item": 8008,
              "grade": 1,
              "quantity": 30
          }
      ]
  },
  {
      "id": 5462,
      "name": "Hereafter Stone",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 4052,
      "grade": 1,
      "quantity": 10,
      "productionTime": 6,
      "labor": 30,
      "gold": 3,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 205,
      "rank": null,
      "materials": [
          {
              "item": 8343,
              "grade": 1,
              "quantity": 6
          },
          {
              "item": 32103,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 6040,
      "name": "Rising Star Stone Pack",
      "vocation": "Masonry",
      "workbench": "Rising Star Stonemason Workbench",
      "item": 27301,
      "grade": 5,
      "quantity": 1,
      "productionTime": 10,
      "labor": 100,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 205,
      "rank": null,
      "materials": [
          {
              "item": 16323,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 7111,
      "name": "Radiant Dawnsdrop Cap",
      "vocation": "Leatherwork",
      "workbench": "Leather Armor Form",
      "item": 34957,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 500,
      "gold": 200000,
      "requiredProficiency": 20000,
      "category": 2,
      "subCat1": 4,
      "subCat2": 11,
      "rank": 3,
      "materials": [
          {
              "item": 16354,
              "grade": 1,
              "quantity": 38
          },
          {
              "item": 19045,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 27545,
              "grade": 1,
              "quantity": 230
          },
          {
              "item": 34950,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 7112,
      "name": "Radiant Dawnsdrop Jerkin",
      "vocation": "Leatherwork",
      "workbench": "Leather Armor Form",
      "item": 34958,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 500,
      "gold": 200000,
      "requiredProficiency": 20000,
      "category": 3,
      "subCat1": 4,
      "subCat2": 11,
      "rank": 3,
      "materials": [
          {
              "item": 15765,
              "grade": 1,
              "quantity": 10
          },
          {
              "item": 16354,
              "grade": 1,
              "quantity": 56
          },
          {
              "item": 27545,
              "grade": 1,
              "quantity": 350
          },
          {
              "item": 34951,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 7113,
      "name": "Radiant Dawnsdrop Breeches",
      "vocation": "Leatherwork",
      "workbench": "Leather Armor Form",
      "item": 34959,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 500,
      "gold": 200000,
      "requiredProficiency": 20000,
      "category": 8,
      "subCat1": 4,
      "subCat2": 11,
      "rank": 3,
      "materials": [
          {
              "item": 16354,
              "grade": 1,
              "quantity": 44
          },
          {
              "item": 27545,
              "grade": 1,
              "quantity": 290
          },
          {
              "item": 34952,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 42342,
              "grade": 1,
              "quantity": 50
          }
      ]
  },
  {
      "id": 7114,
      "name": "Radiant Dawnsdrop Fists",
      "vocation": "Leatherwork",
      "workbench": "Leather Armor Form",
      "item": 34960,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 500,
      "gold": 200000,
      "requiredProficiency": 20000,
      "category": 6,
      "subCat1": 4,
      "subCat2": 11,
      "rank": 3,
      "materials": [
          {
              "item": 16354,
              "grade": 1,
              "quantity": 38
          },
          {
              "item": 17715,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 27545,
              "grade": 1,
              "quantity": 150
          },
          {
              "item": 34953,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 7115,
      "name": "Radiant Dawnsdrop Boots",
      "vocation": "Leatherwork",
      "workbench": "Leather Armor Form",
      "item": 34961,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 500,
      "gold": 200000,
      "requiredProficiency": 20000,
      "category": 9,
      "subCat1": 4,
      "subCat2": 11,
      "rank": 3,
      "materials": [
          {
              "item": 16354,
              "grade": 1,
              "quantity": 38
          },
          {
              "item": 27545,
              "grade": 1,
              "quantity": 150
          },
          {
              "item": 30904,
              "grade": 1,
              "quantity": 10
          },
          {
              "item": 34954,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 7116,
      "name": "Radiant Dawnsdrop Guards",
      "vocation": "Leatherwork",
      "workbench": "Leather Armor Form",
      "item": 34962,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 500,
      "gold": 200000,
      "requiredProficiency": 20000,
      "category": 5,
      "subCat1": 4,
      "subCat2": 11,
      "rank": 3,
      "materials": [
          {
              "item": 16354,
              "grade": 1,
              "quantity": 26
          },
          {
              "item": 27545,
              "grade": 1,
              "quantity": 80
          },
          {
              "item": 34955,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 42343,
              "grade": 1,
              "quantity": 50
          }
      ]
  },
  {
      "id": 7117,
      "name": "Radiant Dawnsdrop Belt",
      "vocation": "Leatherwork",
      "workbench": "Leather Armor Form",
      "item": 34963,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 500,
      "gold": 200000,
      "requiredProficiency": 20000,
      "category": 4,
      "subCat1": 4,
      "subCat2": 11,
      "rank": 3,
      "materials": [
          {
              "item": 16354,
              "grade": 1,
              "quantity": 26
          },
          {
              "item": 27545,
              "grade": 1,
              "quantity": 80
          },
          {
              "item": 34956,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 42342,
              "grade": 1,
              "quantity": 50
          }
      ]
  },
  {
      "id": 7129,
      "name": "Harani Stone Lantern",
      "vocation": "Handicrafts",
      "workbench": "Handicraft Kiln",
      "item": 35428,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 15,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 22,
      "subCat1": 96,
      "subCat2": 98,
      "rank": null,
      "materials": [
          {
              "item": 8318,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 8337,
              "grade": 1,
              "quantity": 2
          },
          {
              "item": 8343,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 19020,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 43782,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 7548,
      "name": "Stone Brick: Fast Processing",
      "vocation": "Masonry",
      "workbench": "Complex Processing Shelf",
      "item": 8343,
      "grade": 1,
      "quantity": 1,
      "productionTime": 1.2,
      "labor": 5,
      "gold": 0,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 299,
      "rank": null,
      "materials": [
          {
              "item": 8008,
              "grade": 1,
              "quantity": 3
          }
      ]
  },
  {
      "id": 7549,
      "name": "Sturdy Stone: Fast Processing",
      "vocation": "Masonry",
      "workbench": "Complex Processing Shelf",
      "item": 16321,
      "grade": 1,
      "quantity": 1,
      "productionTime": 1.4,
      "labor": 10,
      "gold": 0,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 299,
      "rank": null,
      "materials": [
          {
              "item": 8343,
              "grade": 1,
              "quantity": 10
          },
          {
              "item": 19450,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 7550,
      "name": "Rising Star Stone: Fast Processing",
      "vocation": "Masonry",
      "workbench": "Complex Processing Shelf",
      "item": 16323,
      "grade": 1,
      "quantity": 1,
      "productionTime": 1.8,
      "labor": 20,
      "gold": 0,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 299,
      "rank": null,
      "materials": [
          {
              "item": 16321,
              "grade": 1,
              "quantity": 10
          },
          {
              "item": 19410,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 23653,
              "grade": 1,
              "quantity": 5
          }
      ]
  },
  {
      "id": 7551,
      "name": "Stone Pack: Fast Processing",
      "vocation": "Masonry",
      "workbench": "Complex Processing Shelf",
      "item": 17684,
      "grade": 1,
      "quantity": 1,
      "productionTime": 2,
      "labor": 25,
      "gold": 0,
      "requiredProficiency": 0,
      "category": 42,
      "subCat1": 198,
      "subCat2": 299,
      "rank": null,
      "materials": [
          {
              "item": 8343,
              "grade": 1,
              "quantity": 100
          }
      ]
  },
  {
      "id": 7568,
      "name": "Stone Brick: Fast Batch Processing",
      "vocation": "Masonry",
      "workbench": "Complex Processing Shelf",
      "item": 8343,
      "grade": 1,
      "quantity": 10,
      "productionTime": 6,
      "labor": 50,
      "gold": 20,
      "requiredProficiency": 10000,
      "category": 42,
      "subCat1": 198,
      "subCat2": 299,
      "rank": null,
      "materials": [
          {
              "item": 8008,
              "grade": 1,
              "quantity": 30
          }
      ]
  },
  {
      "id": 7569,
      "name": "Sturdy Stone: Fast Batch Processing",
      "vocation": "Masonry",
      "workbench": "Complex Processing Shelf",
      "item": 16321,
      "grade": 1,
      "quantity": 10,
      "productionTime": 7,
      "labor": 100,
      "gold": 20,
      "requiredProficiency": 10000,
      "category": 42,
      "subCat1": 198,
      "subCat2": 299,
      "rank": null,
      "materials": [
          {
              "item": 8343,
              "grade": 1,
              "quantity": 100
          },
          {
              "item": 19450,
              "grade": 1,
              "quantity": 10
          }
      ]
  },
  {
      "id": 7581,
      "name": "Stone Brick: Ultrafast Batch Processing",
      "vocation": "Masonry",
      "workbench": "Complex Processing Shelf",
      "item": 8343,
      "grade": 1,
      "quantity": 100,
      "productionTime": 12,
      "labor": 500,
      "gold": 600,
      "requiredProficiency": 30000,
      "category": 42,
      "subCat1": 198,
      "subCat2": 299,
      "rank": null,
      "materials": [
          {
              "item": 8008,
              "grade": 1,
              "quantity": 300
          }
      ]
  },
  {
      "id": 8878,
      "name": "Rough Stone Column",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 29954,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 5,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 53,
      "subCat1": 288,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 8008,
              "grade": 1,
              "quantity": 100
          }
      ]
  },
  {
      "id": 9115,
      "name": "Cottage Stone Partition",
      "vocation": "Carpentry",
      "workbench": "Regal Carpentry Workbench",
      "item": 38562,
      "grade": 1,
      "quantity": 1,
      "productionTime": 10,
      "labor": 10,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 22,
      "subCat1": 96,
      "subCat2": 100,
      "rank": null,
      "materials": [
          {
              "item": 8337,
              "grade": 1,
              "quantity": 100
          },
          {
              "item": 8343,
              "grade": 1,
              "quantity": 200
          },
          {
              "item": 43783,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 9245,
      "name": "Wrapped Synthesis Stone Pack",
      "vocation": "Masonry",
      "workbench": "Stonemason Workbench",
      "item": 43391,
      "grade": 1,
      "quantity": 1,
      "productionTime": 9,
      "labor": 100,
      "gold": 4,
      "requiredProficiency": 20000,
      "category": 48,
      "subCat1": 251,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 16321,
              "grade": 1,
              "quantity": 2
          },
          {
              "item": 23653,
              "grade": 1,
              "quantity": 5
          }
      ]
  },
  {
      "id": 10758,
      "name": "Radiant Golden Hero Statue",
      "vocation": "Handicrafts",
      "workbench": "Handicraft Kiln",
      "item": 46242,
      "grade": 12,
      "quantity": 1,
      "productionTime": 10,
      "labor": 100,
      "gold": 0,
      "requiredProficiency": 50000,
      "category": 22,
      "subCat1": 96,
      "subCat2": 223,
      "rank": null,
      "materials": [
          {
              "item": 8329,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 43236,
              "grade": 1,
              "quantity": 2
          }
      ]
  },
  {
      "id": 10759,
      "name": "Radiant Bronze Hero Statue",
      "vocation": "Handicrafts",
      "workbench": "Handicraft Kiln",
      "item": 46244,
      "grade": 10,
      "quantity": 1,
      "productionTime": 10,
      "labor": 100,
      "gold": 0,
      "requiredProficiency": 50000,
      "category": 22,
      "subCat1": 96,
      "subCat2": 223,
      "rank": null,
      "materials": [
          {
              "item": 8329,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 43238,
              "grade": 1,
              "quantity": 2
          }
      ]
  },
  {
      "id": 10760,
      "name": "Radiant Silver Hero Statue",
      "vocation": "Handicrafts",
      "workbench": "Handicraft Kiln",
      "item": 46246,
      "grade": 11,
      "quantity": 1,
      "productionTime": 10,
      "labor": 100,
      "gold": 0,
      "requiredProficiency": 50000,
      "category": 22,
      "subCat1": 96,
      "subCat2": 223,
      "rank": null,
      "materials": [
          {
              "item": 8329,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 43237,
              "grade": 1,
              "quantity": 2
          }
      ]
  },
  {
      "id": 10887,
      "name": "Radiant Runescribe Quill",
      "vocation": "Other",
      "workbench": "Printing Press",
      "item": 46018,
      "grade": 4,
      "quantity": 1,
      "productionTime": 10,
      "labor": 25,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 229,
      "subCat2": 230,
      "rank": null,
      "materials": [
          {
              "item": 8330,
              "grade": 1,
              "quantity": 150
          },
          {
              "item": 16356,
              "grade": 1,
              "quantity": 15
          },
          {
              "item": 16357,
              "grade": 1,
              "quantity": 15
          },
          {
              "item": 32103,
              "grade": 1,
              "quantity": 10
          }
      ]
  },
  {
      "id": 11020,
      "name": "Radiant Hiram Awakening Scroll",
      "vocation": "Printing",
      "workbench": "Proven Warrior Workbench",
      "item": 45908,
      "grade": 5,
      "quantity": 1,
      "productionTime": 1,
      "labor": 5,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 235,
      "subCat2": 335,
      "rank": null,
      "materials": [
          {
              "item": 45729,
              "grade": 1,
              "quantity": 5
          }
      ]
  },
  {
      "id": 11214,
      "name": "Radiant Hiram Infusion",
      "vocation": "Handicrafts",
      "workbench": "Territory Crafting Workbench",
      "item": 47052,
      "grade": 3,
      "quantity": 12,
      "productionTime": 1,
      "labor": 0,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 242,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 41488,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 48078,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 11216,
      "name": "Convert: Radiant Hiram Infusion",
      "vocation": "Alchemy",
      "workbench": "Territory Crafting Workbench",
      "item": 47052,
      "grade": 3,
      "quantity": 10,
      "productionTime": 2,
      "labor": 5,
      "gold": 20,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 242,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 46023,
              "grade": 1,
              "quantity": 40
          }
      ]
  },
  {
      "id": 11253,
      "name": "Radiant Hiram Infusion",
      "vocation": "Alchemy",
      "workbench": "Crimson Watch Research Workbench",
      "item": 47052,
      "grade": 3,
      "quantity": 10,
      "productionTime": 1,
      "labor": 0,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 242,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 41488,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 48078,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 11319,
      "name": "Radiant Erenor Awakening Scroll",
      "vocation": "Printing",
      "workbench": "Advanced Workbench",
      "item": 49173,
      "grade": 11,
      "quantity": 1,
      "productionTime": 1,
      "labor": 50,
      "gold": 1,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 235,
      "subCat2": 334,
      "rank": null,
      "materials": [
          {
              "item": 49239,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 49243,
              "grade": 1,
              "quantity": 100
          },
          {
              "item": 49244,
              "grade": 1,
              "quantity": 100
          },
          {
              "item": 49245,
              "grade": 1,
              "quantity": 100
          }
      ]
  },
  {
      "id": 11415,
      "name": "Radiant Hiram Awakening Scroll",
      "vocation": "Other",
      "workbench": "Territory Crafting Workbench",
      "item": 45908,
      "grade": 5,
      "quantity": 25,
      "productionTime": 1,
      "labor": 0,
      "gold": 0,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 235,
      "subCat2": 335,
      "rank": null,
      "materials": [
          {
              "item": 48078,
              "grade": 1,
              "quantity": 10
          }
      ]
  },
  {
      "id": 8000429,
      "name": "Vivid Synthium Stone",
      "vocation": "Alchemy",
      "workbench": "Alchemy Table",
      "item": 8000930,
      "grade": 3,
      "quantity": 1,
      "productionTime": 3,
      "labor": 25,
      "gold": 100000,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 232,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 32103,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 8000929,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 8000430,
      "name": "Lucid Synthium Stone",
      "vocation": "Alchemy",
      "workbench": "Alchemy Table",
      "item": 8000931,
      "grade": 5,
      "quantity": 1,
      "productionTime": 3,
      "labor": 25,
      "gold": 100000,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 232,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 32103,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 8000930,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 8000966,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 8000487,
      "name": "Bound Vivid Synthium Stone",
      "vocation": "Alchemy",
      "workbench": "Alchemy Table",
      "item": 8000998,
      "grade": 3,
      "quantity": 1,
      "productionTime": 3,
      "labor": 25,
      "gold": 100000,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 232,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 32103,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 8000997,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 8000488,
      "name": "Bound Lucid Synthium Stone",
      "vocation": "Alchemy",
      "workbench": "Alchemy Table",
      "item": 8001099,
      "grade": 5,
      "quantity": 1,
      "productionTime": 3,
      "labor": 25,
      "gold": 100000,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 232,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 32103,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 8000966,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 8000998,
              "grade": 1,
              "quantity": 1
          }
      ]
  },
  {
      "id": 8000597,
      "name": "Radiant Synthium Stone",
      "vocation": "Alchemy",
      "workbench": "Alchemy Table",
      "item": 8000932,
      "grade": 9,
      "quantity": 1,
      "productionTime": 3,
      "labor": 25,
      "gold": 100000,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 232,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 32103,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 8000931,
              "grade": 1,
              "quantity": 1
          },
          {
              "item": 8000966,
              "grade": 1,
              "quantity": 2
          }
      ]
  },
  {
      "id": 8000598,
      "name": "Bound Radiant Synthium Stone",
      "vocation": "Alchemy",
      "workbench": "Alchemy Table",
      "item": 8001100,
      "grade": 9,
      "quantity": 1,
      "productionTime": 3,
      "labor": 25,
      "gold": 100000,
      "requiredProficiency": 0,
      "category": 48,
      "subCat1": 232,
      "subCat2": null,
      "rank": null,
      "materials": [
          {
              "item": 32103,
              "grade": 1,
              "quantity": 5
          },
          {
              "item": 8000966,
              "grade": 1,
              "quantity": 2
          },
          {
              "item": 8001099,
              "grade": 1,
              "quantity": 1
          }
      ]
  }
]

const db = require('better-sqlite3')('74-english.sqlite');

const createRecipe = (id) => {
  const recipe = db.prepare(`select * from crafts where id = ?`).get(id)

  if (!recipe) return null

  const vocation = db.prepare(`select actability_groups.* from actability_groups
  inner join skills on skills.actability_group_id = actability_groups.id
  where skills.id = ?`).get(recipe.skill_id)
  const craftBCategoryId = db.prepare('select craft_b_category_id + 1000 as id from craft_c_categories where id = ?').get(recipe.craft_c_category_id)
  const doodad = db.prepare(`SELECT * FROM doodad_almighties WHERE id = ?`).get(recipe.req_doodad_id)
  const product = db.prepare(`select * from craft_products inner join items on items.id = craft_products.item_id where craft_products.craft_id = ?`).get(recipe.id)
  const craftLine = db.prepare(`SELECT * FROM craft_line_components WHERE craft_id = ?`).get(recipe.id)
  const materials = db.prepare(`SELECT * FROM craft_materials WHERE craft_id = ?`).all(recipe.id).map(material => ({
    item: material.item_id,
    grade: material.require_grade === -1 ? 1 : material.require_grade,
    quantity: material.amount
  }))
  const skill = db.prepare(`select * from skills where id = ?`).get(recipe.skill_id)

  if (!product) {
    return null
  }

  return {
    "id": recipe.id,
    "name": recipe.title,
    "vocation": vocation.name,
    "workbench": doodad && doodad.name,
    "item": product.item_id,
    "grade": product.use_grade ? ([0,1].includes(product.item_grade_id) ? product.item_grade_id ^ 1 : product.item_grade_id) : (product.fixed_grade >= 0 ? product.fixed_grade : 1),
    "quantity": product.amount,
    "productionTime": recipe.cast_delay / 1000,
    "labor": skill.consume_lp,
    "gold": recipe.cost,
    "requiredProficiency": recipe.actability_limit,
    "category": craftBCategoryId && craftBCategoryId.id || 1,
    "subCat1": recipe.craft_c_category_id,
    "subCat2": recipe.craft_d_category_id && recipe.craft_d_category_id + 1000 || 0,
    "rank": craftLine && craftLine.rank || null,
    "materials": materials
  }
}

const fs = require('fs')

const strip = (x) => {
  const { category, subCat1, subCat2, ...qux } = x

  qux.materials.sort((a, b) => a.item - b.item)

  return qux
}

module.exports = (req, res) => {
  const ids = req.query.ids.split(',').filter(x => parseInt(x) + '' === x).map(x => parseInt(x))

  res.send(ids.map(x => createRecipe(x)).filter(x => x))
}
