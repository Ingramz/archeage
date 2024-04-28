const events = [
  {
      "id": 1,
      "name": "Daily Reset",
      "icon": "daily_reset",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "00:00:00",
              "duration": null,
              "gameTime": null,
              "name": null,
              "startMessage": "Daily activities have reset.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Daily activities will reset in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "00:00:00",
              "duration": null,
              "gameTime": null,
              "name": null,
              "startMessage": "Daily activities have reset.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Daily activities will reset in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "All daily content unlocks again, resetting daily quests and instance entries.",
      "link": null,
      "disabled": false
  },
  {
      "id": 2,
      "name": "Weekly Reset",
      "icon": "archepass_reset",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "00:00:00",
              "duration": null,
              "gameTime": null,
              "name": null,
              "startMessage": "Weekly quests and ArchePass mission count have reset.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Weekly quests and ArchePass mission count will reset in $1.",
              "days": [
                  "MONDAY"
              ]
          },
          {
              "region": "EU",
              "time": "00:00:00",
              "duration": null,
              "gameTime": null,
              "name": null,
              "startMessage": "Weekly quests and ArchePass mission count have reset.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Weekly quests and ArchePass mission count will reset in $1.",
              "days": [
                  "MONDAY"
              ]
          }
      ],
      "description": "Weekly quests and ArchePass missions reset.",
      "link": null,
      "disabled": false
  },
  {
      "id": 3,
      "name": "Abyssal Attack",
      "icon": "abyssal_attack",
      "eventType": 4,
      "times": [
          {
              "region": "NA",
              "time": "01:29:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "WEDNESDAY",
                  "FRIDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:29:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 4,
      "name": "Mirage Isle Fish Fest",
      "icon": "fish_fest",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "16:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Mirage Isle Fish Fest has begun.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Mirage Isle Fish Fest begins in $1.",
              "days": [
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "09:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Mirage Isle Fish Fest has begun.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Mirage Isle Fish Fest begins in $1.",
              "days": [
                  "SATURDAY"
              ]
          }
      ],
      "description": "The fishing contest in Mirage is open to everyone for most of the day on Saturday.",
      "link": null,
      "disabled": false
  },
  {
      "id": 5,
      "name": "Black Dragon",
      "icon": "dragon_black",
      "eventType": 3,
      "times": [
          {
              "region": "NA",
              "time": "01:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 6,
      "name": "Charybdis",
      "icon": "charybdis",
      "eventType": 3,
      "times": [
          {
              "region": "NA",
              "time": "01:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "FRIDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "THURSDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 7,
      "name": "Delphinad Ghost Ship",
      "icon": "delphinad_ghost_ships",
      "eventType": 3,
      "times": [
          {
              "region": "NA",
              "time": "01:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY",
                  "FRIDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 8,
      "name": "Kadum",
      "icon": "kadum",
      "eventType": 1,
      "times": [
          {
              "region": "NA",
              "time": "01:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "MONDAY",
                  "WEDNESDAY",
                  "FRIDAY"
              ]
          },
          {
              "region": "NA",
              "time": "06:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "NA",
              "time": "19:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "23:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY",
                  "FRIDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "12:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 9,
      "name": "Kraken",
      "icon": "kraken",
      "eventType": 3,
      "times": [
          {
              "region": "NA",
              "time": "01:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 10,
      "name": "Leviathan",
      "icon": "leviathan",
      "eventType": 3,
      "times": [
          {
              "region": "NA",
              "time": "01:30:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "FRIDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:30:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:30:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "THURSDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 11,
      "name": "Lusca Awakening",
      "icon": "lusca_awakening",
      "eventType": 2,
      "times": [
          {
              "region": "NA",
              "time": "02:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Lusca have awoken in the Sea of Graves.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Lusca will awaken in the Sea of Graves in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "FRIDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "19:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Lusca have awoken in the Sea of Graves.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Lusca will awaken in the Sea of Graves in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": "/guides/honor-dailies#lusca-awakening",
      "disabled": false
  },
  {
      "id": 12,
      "name": "Red Dragon's Keep",
      "icon": "dragon_red",
      "eventType": 1,
      "times": [
          {
              "region": "NA",
              "time": "01:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "NA",
              "time": "06:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY",
                  "FRIDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "19:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY",
                  "FRIDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "23:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "TUESDAY",
                  "THURSDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "12:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY",
                  "FRIDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:15:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "WEDNESDAY",
                  "FRIDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": "/guides/red-dragons-keep",
      "disabled": false
  },
  {
      "id": 13,
      "name": "Castle",
      "icon": "castle_siege",
      "eventType": 4,
      "times": [
          {
              "region": "NA",
              "time": "04:00:00",
              "duration": "20:00:00",
              "gameTime": null,
              "name": "Supply Transport",
              "startMessage": "Castle supply transportation is now available.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Castle supply transportation will be available in $1 for $2.",
              "days": [
                  "WEDNESDAY"
              ]
          },
          {
              "region": "NA",
              "time": "00:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": "Claim / Siege Prep",
              "startMessage": "Castle claim or siege preparations has begun for $1.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Castle claim or siege preparations begins in $1 for $2.",
              "days": [
                  "THURSDAY"
              ]
          },
          {
              "region": "NA",
              "time": "01:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": "Siege",
              "startMessage": "Castle siege has begun for up to $1.",
              "reminderTime": "00:05:00",
              "reminderMessage": "Castle siege is beginning in $1 for up to $2.",
              "days": [
                  "THURSDAY"
              ]
          },
          {
              "region": "EU",
              "time": "21:00:00",
              "duration": "20:00:00",
              "gameTime": null,
              "name": "Supply Transport",
              "startMessage": "Castle supply transportation is now available.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Castle supply transportation will be available in $1 for $2.",
              "days": [
                  "TUESDAY"
              ]
          },
          {
              "region": "EU",
              "time": "17:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": "Claim / Siege Preparation",
              "startMessage": "Castle claim or siege preparations has begun for $1.",
              "reminderTime": "00:30:00",
              "reminderMessage": "Castle claim or siege preparations begins in $1 for $2.",
              "days": [
                  "WEDNESDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": "Siege",
              "startMessage": "Castle siege has begun for up to $1.",
              "reminderTime": "00:05:00",
              "reminderMessage": "Castle siege is beginning in $1 for up to $2.",
              "days": [
                  "WEDNESDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 14,
      "name": "The Fall of Hiram City",
      "icon": "fall_of_hiram",
      "eventType": 1,
      "times": [
          {
              "region": "NA",
              "time": "14:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "22:00:00",
              "duration": "05:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "07:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ],
              "startTime": "2021-08-24T08:00:00.000Z",
              "endTime": "2021-08-24T10:00:00.000Z"
          },
          {
              "region": "EU",
              "time": "15:00:00",
              "duration": "05:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 15,
      "name": "Decorated Warrior",
      "icon": "goldplain",
      "eventType": 1,
      "times": [
          {
              "region": "NA",
              "time": "00:30:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "05:30:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "18:30:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "22:30:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "11:30:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "17:30:00",
              "duration": "00:45:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": "/guides/honor-dailies#golden-plains-battle",
      "disabled": false
  },
  {
      "id": 16,
      "name": "Stillwater Gulf",
      "icon": "sea_battlefield",
      "eventType": 1,
      "times": [
          {
              "region": "NA",
              "time": "20:00:00",
              "duration": "08:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "13:00:00",
              "duration": "08:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": true
  },
  {
      "id": 17,
      "name": "Grimghast Rift",
      "icon": "grimghast_rift",
      "eventType": 2,
      "times": [
          {
              "region": null,
              "time": "02:20:00",
              "duration": "00:15:00",
              "gameTime": "00:00:00",
              "name": null,
              "startMessage": "The Grimghast Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Grimghast Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "06:20:00",
              "duration": "00:15:00",
              "gameTime": "00:00:00",
              "name": null,
              "startMessage": "The Grimghast Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Grimghast Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "10:20:00",
              "duration": "00:10:00",
              "gameTime": "00:00:00",
              "name": null,
              "startMessage": "The Grimghast Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Grimghast Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "14:20:00",
              "duration": "00:10:00",
              "gameTime": "00:00:00",
              "name": null,
              "startMessage": "The Grimghast Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Grimghast Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "18:20:00",
              "duration": "00:10:00",
              "gameTime": "00:00:00",
              "name": null,
              "startMessage": "The Grimghast Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Grimghast Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "22:20:00",
              "duration": "00:10:00",
              "gameTime": "00:00:00",
              "name": null,
              "startMessage": "The Grimghast Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Grimghast Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": "/guides/honor-dailies#grimghast-rift",
      "disabled": false
  },
  {
      "id": 18,
      "name": "Crimson Rift",
      "icon": "crimson_rift",
      "eventType": 2,
      "times": [
          {
              "region": null,
              "time": "00:20:00",
              "duration": "00:10:00",
              "gameTime": "12:00:00",
              "name": "",
              "startMessage": "The Crimson Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "04:20:00",
              "duration": "00:10:00",
              "gameTime": "12:00:00",
              "name": "",
              "startMessage": "The Crimson Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "08:20:00",
              "duration": "00:10:00",
              "gameTime": "12:00:00",
              "name": "",
              "startMessage": "The Crimson Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "12:20:00",
              "duration": "00:10:00",
              "gameTime": "12:00:00",
              "name": "",
              "startMessage": "The Crimson Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "16:20:00",
              "duration": "00:10:00",
              "gameTime": "12:00:00",
              "name": "",
              "startMessage": "The Crimson Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "20:20:00",
              "duration": "00:10:00",
              "gameTime": "12:00:00",
              "name": "",
              "startMessage": "The Crimson Rift has opened in Nuia and Haranya.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Nuia and Haranya in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": "/guides/honor-dailies#crimson-rift",
      "disabled": false
  },
  {
      "id": 19,
      "name": "Jola, Meina, & Glenn",
      "icon": "boss_monster",
      "eventType": 3,
      "times": [
          {
              "region": null,
              "time": "03:20:00",
              "duration": "01:00:00",
              "gameTime": "06:00:00",
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "$0 will spawn in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "07:20:00",
              "duration": "01:00:00",
              "gameTime": "06:00:00",
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "$0 will spawn in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "11:20:00",
              "duration": "01:00:00",
              "gameTime": "06:00:00",
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "$0 will spawn in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "15:20:00",
              "duration": "01:00:00",
              "gameTime": "06:00:00",
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "$0 will spawn in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "19:20:00",
              "duration": "01:00:00",
              "gameTime": "06:00:00",
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "$0 will spawn in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "23:20:00",
              "duration": "01:00:00",
              "gameTime": "06:00:00",
              "name": null,
              "startMessage": "$0 have spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "$0 will spawn in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": "/guides/meina-and-glenn",
      "disabled": false
  },
  {
      "id": 20,
      "name": "The Yata Lantern",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "00:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Yata Lantern has spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Yata Lantern is spawning in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "05:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Yata Lantern has spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Yata Lantern is spawning in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "19:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Yata Lantern has spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Yata Lantern is spawning in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "22:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Yata Lantern has spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Yata Lantern is spawning in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "12:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Yata Lantern has spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Yata Lantern is spawning in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "17:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The Yata Lantern has spawned.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Yata Lantern is spawning in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "The Lantern Festival in Gweonid Forest's Yata Lantern is only available for short periods of time throughout the day.",
      "link": null,
      "disabled": true
  },
  {
      "id": 22,
      "name": "Daru Treasure",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "23:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "03:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "19:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "12:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "20:00:00",
              "duration": "00:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "Help Ian dig for buried Daru Treasure at the end of the rainbow in Ahnimar.",
      "link": null,
      "disabled": true
  },
  {
      "id": 23,
      "name": "Anthalon (Garden)",
      "icon": "anthalon",
      "eventType": 3,
      "times": [
          {
              "region": "NA",
              "time": "23:50:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "Anthalon has spawned in the Garden.",
              "reminderTime": "00:15:00",
              "reminderMessage": "Anthalon will spawn in the Garden in $1.",
              "days": [
                  "SUNDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:50:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": "Anthalon has spawned in the Garden.",
              "reminderTime": "00:15:00",
              "reminderMessage": "Anthalon will spawn in the Garden in $1.",
              "days": [
                  "SUNDAY",
                  "SATURDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 24,
      "name": "Aerial Delivery",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "EU",
              "time": "21:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "11:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "18:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "23:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "04:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "Help deliver watermelons in Rookborne Basin.",
      "link": null,
      "disabled": true
  },
  {
      "id": 25,
      "name": "An Uninvited Guest",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "19:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "23:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "05:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "14:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "19:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "22:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "Defeat the Giant Blueglass Monster, a part of the Blue Salt Festival. The sculpture to turn in the quest remains for one hour.",
      "link": null,
      "disabled": true
  },
  {
      "id": 26,
      "name": "Diamond Shores",
      "icon": "pioneer",
      "eventType": 6,
      "times": [
          {
              "region": "NA",
              "time": "05:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "11:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "17:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "23:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "04:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "10:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "22:00:00",
              "duration": "02:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "Diamond Shores enters war four times per day.",
      "link": null,
      "disabled": false
  },
  {
      "id": 27,
      "name": "Garden of the Gods",
      "icon": "archeage_green",
      "eventType": 6,
      "times": [
          {
              "region": "NA",
              "time": "03:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "07:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "11:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "15:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "19:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "23:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "00:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "04:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "08:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "12:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "20:00:00",
              "duration": "01:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "Garden enters war every 2 hours.",
      "link": null,
      "disabled": false
  },
  {
      "id": 28,
      "name": "A Royal Dish",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "18:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "23:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "04:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "11:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "21:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "The Singing Bard arrives at the Hasla Feastival. During this event, you can collect three more Feastival Coins, three times per day.",
      "link": null,
      "disabled": true
  },
  {
      "id": 29,
      "name": "Troubled Spirits",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "19:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "00:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "05:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "07:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "12:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "22:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "02:00:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "Help cheer up the Ezna or Moonswept Spirits as a part of the Hallowtide festival in Two Crowns.",
      "link": null,
      "disabled": true
  },
  {
      "id": 30,
      "name": "Crimson Rift (Auroria)",
      "icon": "anthalon",
      "eventType": 2,
      "times": [
          {
              "region": null,
              "time": "01:20:00",
              "duration": "00:10:00",
              "gameTime": "18:00:00",
              "name": null,
              "startMessage": "The Crimson Rift has opened in Auroria.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Auroria in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "05:20:00",
              "duration": "00:10:00",
              "gameTime": "18:00:00",
              "name": null,
              "startMessage": "The Crimson Rift has opened in Auroria.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Auroria in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "09:20:00",
              "duration": "00:10:00",
              "gameTime": "18:00:00",
              "name": null,
              "startMessage": "The Crimson Rift has opened in Auroria.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Auroria in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "13:20:00",
              "duration": "00:10:00",
              "gameTime": "18:00:00",
              "name": null,
              "startMessage": "The Crimson Rift has opened in Auroria.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Auroria in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "17:20:00",
              "duration": "00:10:00",
              "gameTime": "18:00:00",
              "name": null,
              "startMessage": "The Crimson Rift has opened in Auroria.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Auroria in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "21:20:00",
              "duration": "00:10:00",
              "gameTime": "18:00:00",
              "name": null,
              "startMessage": "The Crimson Rift has opened in Auroria.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The Crimson Rift will be opening in Auroria in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": "/guides/honor-dailies#crimson-rift",
      "disabled": false
  },
  {
      "id": 31,
      "name": "Akasch Invasion",
      "icon": "ipyna",
      "eventType": 2,
      "times": [
          {
              "region": "EU",
              "time": "18:00:00",
              "duration": "00:05:56",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "MONDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:05:56",
              "duration": "00:06:40",
              "gameTime": null,
              "name": "Wave 1",
              "startMessage": null,
              "reminderTime": "00:05:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "MONDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:12:56",
              "duration": "00:06:40",
              "gameTime": null,
              "name": "Wave 2",
              "startMessage": null,
              "reminderTime": "00:02:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "MONDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:20:56",
              "duration": "00:20:50",
              "gameTime": null,
              "name": "Rift",
              "startMessage": null,
              "reminderTime": "00:02:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "MONDAY"
              ]
          },
          {
              "region": "NA",
              "time": "01:00:00",
              "duration": "00:05:56",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY"
              ]
          },
          {
              "region": "NA",
              "time": "01:05:56",
              "duration": "00:06:40",
              "gameTime": null,
              "name": "Wave 1",
              "startMessage": null,
              "reminderTime": "00:05:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY"
              ]
          },
          {
              "region": "NA",
              "time": "01:12:56",
              "duration": "00:06:40",
              "gameTime": null,
              "name": "Wave 2",
              "startMessage": null,
              "reminderTime": "00:02:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY"
              ]
          },
          {
              "region": "NA",
              "time": "01:20:56",
              "duration": "00:20:50",
              "gameTime": null,
              "name": "Rift",
              "startMessage": null,
              "reminderTime": "00:02:00",
              "reminderMessage": null,
              "days": [
                  "SUNDAY",
                  "TUESDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 32,
      "name": "Halcyona Skirmish",
      "icon": "camp3",
      "eventType": 1,
      "times": [
          {
              "region": "EU",
              "time": "17:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "22:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "00:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "05:30:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": true
  },
  {
      "id": 33,
      "name": "Land Rush",
      "icon": "pioneer",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "20:00:00",
              "duration": null,
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY"
              ]
          },
          {
              "region": "EU",
              "time": "11:00:00",
              "duration": null,
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY"
              ]
          }
      ],
      "description": "",
      "link": null,
      "disabled": true
  },
  {
      "id": 34,
      "name": "Animal Placement Program",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "00:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "07:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "19:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "02:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "14:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "19:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "The pawesome festival in Windscour needs your help at Windheart Lake.",
      "link": null,
      "disabled": true
  },
  {
      "id": 35,
      "name": "Reedwind",
      "icon": "boss_monster",
      "eventType": 6,
      "times": [
          {
              "region": "NA",
              "time": "00:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "02:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "04:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "06:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "08:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "10:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "12:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "14:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "16:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "18:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "20:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "22:26:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "01:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "03:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "05:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "07:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "09:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "11:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "13:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "15:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "17:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "19:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "21:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "23:37:00",
              "duration": "00:50:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "Reedwind enters war for 50 minutes every other hour.",
      "link": null,
      "disabled": true
  },
  {
      "id": 36,
      "name": "The Mock Duel of the Century",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": "NA",
              "time": "04:00:00",
              "duration": "00:10:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The duelists for The Mock Duel of the Century have appeared.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The duelists for The Mock Duel of the Century appear in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "04:10:00",
              "duration": "00:01:00",
              "gameTime": null,
              "name": "Duel",
              "startMessage": "The Mock Duel of the Century starts now.",
              "reminderTime": "00:02:00",
              "reminderMessage": "The Mock Duel of the Century starts in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "18:00:00",
              "duration": "00:10:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The duelists for The Mock Duel of the Century have appeared.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The duelists for The Mock Duel of the Century appear in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "18:10:00",
              "duration": "00:01:00",
              "gameTime": null,
              "name": "Duel",
              "startMessage": "The Mock Duel of the Century starts now.",
              "reminderTime": "00:02:00",
              "reminderMessage": "The Mock Duel of the Century starts in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "23:00:00",
              "duration": "00:10:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The duelists for The Mock Duel of the Century have appeared.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The duelists for The Mock Duel of the Century appear in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "23:10:00",
              "duration": "00:01:00",
              "gameTime": null,
              "name": "Duel",
              "startMessage": "The Mock Duel of the Century starts now.",
              "reminderTime": "00:02:00",
              "reminderMessage": "The Mock Duel of the Century starts in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "11:00:00",
              "duration": "00:10:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The duelists for The Mock Duel of the Century have appeared.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The duelists for The Mock Duel of the Century appear in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "11:10:00",
              "duration": "00:01:00",
              "gameTime": null,
              "name": "Duel",
              "startMessage": "The Mock Duel of the Century starts now.",
              "reminderTime": "00:02:00",
              "reminderMessage": "The Mock Duel of the Century starts in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:00:00",
              "duration": "00:10:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The duelists for The Mock Duel of the Century have appeared.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The duelists for The Mock Duel of the Century appear in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "16:10:00",
              "duration": "00:01:00",
              "gameTime": null,
              "name": "Duel",
              "startMessage": "The Mock Duel of the Century starts now.",
              "reminderTime": "00:02:00",
              "reminderMessage": "The Mock Duel of the Century starts in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "21:00:00",
              "duration": "00:10:00",
              "gameTime": null,
              "name": null,
              "startMessage": "The duelists for The Mock Duel of the Century have appeared.",
              "reminderTime": "00:15:00",
              "reminderMessage": "The duelists for The Mock Duel of the Century appear in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "21:10:00",
              "duration": "00:01:00",
              "gameTime": null,
              "name": "Duel",
              "startMessage": "The Mock Duel of the Century starts now.",
              "reminderTime": "00:02:00",
              "reminderMessage": "The Mock Duel of the Century starts in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": "The Mock Duel of the Century in Marianople is only available for short periods of time throughout the day.",
      "link": null,
      "disabled": true
  },
  {
      "id": 37,
      "name": "Guardian Scramble",
      "icon": "ipyna",
      "eventType": 4,
      "times": [
          {
              "region": "EU",
              "time": "19:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "FRIDAY",
                  "SATURDAY"
              ]
          },
          {
              "region": "NA",
              "time": "02:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 38,
      "name": "Hereafter Rebellion",
      "icon": "erosion_of_relics",
      "eventType": 1,
      "times": [
          {
              "region": "EU",
              "time": "21:30:00",
              "duration": "23:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "04:30:00",
              "duration": "23:30:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 39,
      "name": "Drill Camp Arena",
      "icon": "camp5",
      "eventType": 7,
      "times": [
          {
              "region": "EU",
              "time": "09:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "16:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 40,
      "name": "Free-For-All Arena",
      "icon": "camp3",
      "eventType": 7,
      "times": [
          {
              "region": "EU",
              "time": "13:00:00",
              "duration": "09:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "20:00:00",
              "duration": "09:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 41,
      "name": "Sparring Arena",
      "icon": "camp3",
      "eventType": 7,
      "times": [
          {
              "region": "EU",
              "time": "09:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "16:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 42,
      "name": "Gladiator Arena",
      "icon": "camp3",
      "eventType": 7,
      "times": [
          {
              "region": "EU",
              "time": "09:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "16:00:00",
              "duration": "12:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 43,
      "name": "Language Lesson",
      "icon": "event",
      "eventType": 5,
      "times": [
          {
              "region": null,
              "time": "01:10:00",
              "duration": "00:04:15",
              "gameTime": "17:00:00",
              "name": null,
              "startMessage": "A language lesson for newcomers to the continent will soon begin.",
              "reminderTime": "00:15:00",
              "reminderMessage": "A language lesson for newcomers to the continent will begin in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "05:10:00",
              "duration": "00:04:15",
              "gameTime": "17:00:00",
              "name": null,
              "startMessage": "A language lesson for newcomers to the continent will soon begin.",
              "reminderTime": "00:15:00",
              "reminderMessage": "A language lesson for newcomers to the continent will begin in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "09:10:00",
              "duration": "00:04:15",
              "gameTime": "17:00:00",
              "name": null,
              "startMessage": "A language lesson for newcomers to the continent will soon begin.",
              "reminderTime": "00:15:00",
              "reminderMessage": "A language lesson for newcomers to the continent will begin in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "13:10:00",
              "duration": "00:04:15",
              "gameTime": "17:00:00",
              "name": null,
              "startMessage": "A language lesson for newcomers to the continent will soon begin.",
              "reminderTime": "00:15:00",
              "reminderMessage": "A language lesson for newcomers to the continent will begin in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "17:10:00",
              "duration": "00:04:15",
              "gameTime": "17:00:00",
              "name": null,
              "startMessage": "A language lesson for newcomers to the continent will soon begin.",
              "reminderTime": "00:15:00",
              "reminderMessage": "A language lesson for newcomers to the continent will begin in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": null,
              "time": "21:10:00",
              "duration": "00:04:15",
              "gameTime": "17:00:00",
              "name": null,
              "startMessage": "A language lesson for newcomers to the continent will soon begin.",
              "reminderTime": "00:15:00",
              "reminderMessage": "A language lesson for newcomers to the continent will begin in $1.",
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 44,
      "name": "Ayanad Merchant",
      "icon": "ayanad_merchant",
      "eventType": 5,
      "times": [
          {
              "region": "EU",
              "time": "15:00:00",
              "duration": "06:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "NA",
              "time": "22:00:00",
              "duration": "06:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 46,
      "name": "Ocleera's Rift",
      "icon": "ocleera",
      "eventType": 2,
      "times": [
          {
              "region": "EU",
              "time": "00:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "06:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "12:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "18:00:00",
              "duration": "01:00:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "MONDAY",
                  "TUESDAY",
                  "WEDNESDAY",
                  "THURSDAY",
                  "FRIDAY",
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  },
  {
      "id": 47,
      "name": "Dimensional Boundary Defense Raid",
      "icon": "event",
      "eventType": 1,
      "times": [
          {
              "region": "EU",
              "time": "15:30:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "17:30:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "SUNDAY"
              ]
          },
          {
              "region": "EU",
              "time": "19:30:00",
              "duration": "00:15:00",
              "gameTime": null,
              "name": null,
              "startMessage": null,
              "reminderTime": "00:15:00",
              "reminderMessage": null,
              "days": [
                  "SATURDAY",
                  "SUNDAY"
              ]
          }
      ],
      "description": null,
      "link": null,
      "disabled": false
  }
]

module.exports = (req, res) => {
  res.send(events)
}
