import fs from "node:fs";
import { DateTime } from "luxon";

const adjustForDst = true;

const regions = {
  NA: {
    serverTimezone: "UTC",
    eventOffset: adjustForDst ? 240 : 300,
  },
  EU: {
    serverTimezone: "UTC",
    eventOffset: adjustForDst ? -180 : -120,
  },
  KR: {
    serverTimezone: "Asia/Seoul",
    eventOffset: 0,
  },
};

const getRegionTime = (
  day,
  time,
  region,
  useServerTimezone = false,
  useUTC = false,
) => {
  return DateTime.fromFormat(
    `${day} ${time} ${useUTC ? "UTC" : regions[region].serverTimezone}`,
    "EEEE HH:mm:ss z",
  )
    .plus({
      minutes: useServerTimezone || useUTC ? 0 : regions[region].eventOffset,
    })

    .toUTC();
};

const event = (template, timeTemplate, configuration) => {
  const times = [];

  configuration.schedule.forEach((sch) => {
    const days = sch.days || [
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ];

    const regions = sch.regions || ["EU", "NA", "KR"];

    regions.forEach((region) => {
      const time = getRegionTime(
        "MONDAY",
        sch.time,
        region,
        configuration.useServerTimezone,
        configuration.useUTC,
      );

      const eventDays = days.map((eD) => {
        return getRegionTime(
          eD,
          sch.time,
          region,
          configuration.useServerTimezone,
          configuration.useUTC,
        )
          .toFormat("EEEE")
          .toUpperCase();
      });

      times.push({
        duration: null,
        gameTime: null,
        name: null,
        startMessage: null,
        reminderTime: null,
        reminderMessage: null,
        ...timeTemplate,
        ...(sch.timeTemplate ? sch.timeTemplate : {}),
        region: region,
        time: time.toFormat("HH:mm:ss"),
        days: eventDays,
      });
    });
  });

  return {
    description: null,
    link: null,
    disabled: false,
    ...template,
    times,
  };
};

const res = [
  event(
    {
      id: 1,
      name: "Daily Reset",
      icon: "daily_reset",
      eventType: 5,
      description:
        "All daily content unlocks again, resetting daily quests and instance entries.",
    },
    {
      startMessage: "Daily activities have reset.",
      reminderTime: "00:30:00",
      reminderMessage: "Daily activities will reset in $1.",
    },
    {
      schedule: [{ time: "00:00:00" }],
      useServerTimezone: true,
    },
  ),
  event(
    {
      id: 2,
      name: "Weekly Reset",
      icon: "archepass_reset",
      eventType: 5,
      description: "Weekly quests and ArchePass missions reset.",
    },
    {
      startMessage: "Weekly quests and ArchePass mission count have reset.",
      reminderTime: "00:30:00",
      reminderMessage:
        "Weekly quests and ArchePass mission count will reset in $1.",
    },
    {
      schedule: [{ time: "00:00:00", days: ["SUNDAY"] }],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 3,
      name: "Abyssal Attack",
      icon: "abyssal_attack",
      eventType: 4,
    },
    {
      duration: "02:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "21:30:00", days: ["TUESDAY", "THURSDAY", "SATURDAY"] },
      ],
    },
  ),

  event(
    {
      id: 4,
      name: "Mirage Isle Fish Fest",
      icon: "fish_fest",
      eventType: 5,
      description:
        "The fishing contest in Mirage is open to everyone for most of the day on Saturday.",
    },
    {
      duration: "11:30:00",
      startMessage: "The Mirage Isle Fish Fest has begun.",
      reminderTime: "00:15:00",
      reminderMessage: "The Mirage Isle Fish Fest begins in $1.",
    },
    {
      schedule: [{ time: "12:00:00", days: ["SATURDAY"] }],
    },
  ),

  event(
    {
      id: 5,
      name: "Black Dragon",
      icon: "dragon_black",
      eventType: 3,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:30:00",
    },
    {
      schedule: [{ time: "21:30:00", days: ["SUNDAY", "TUESDAY"] }],
    },
  ),

  event(
    {
      id: 6,
      name: "Charybdis",
      icon: "charybdis",
      eventType: 3,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:30:00",
    },
    {
      schedule: [{ time: "21:30:00", days: ["SUNDAY", "THURSDAY"] }],
    },
  ),

  event(
    {
      id: 7,
      name: "Delphinad Ghost Ship",
      icon: "delphinad_ghost_ships",
      eventType: 3,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:30:00",
      startMessage: "$0 has spawned.",
    },
    {
      schedule: [
        { time: "21:00:00", days: ["MONDAY", "WEDNESDAY", "FRIDAY", "SUNDAY"] },
      ],
    },
  ),

  event(
    {
      id: 8,
      name: "Kadum",
      icon: "kadum",
      eventType: 1,
    },
    {
      duration: "00:45:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        {
          time: "02:00:00",
          days: ["SUNDAY", "TUESDAY", "THURSDAY", "SATURDAY"],
          timeTemplate: { duration: "00:30:00" },
        },
        {
          time: "15:15:00",
          days: ["SUNDAY", "TUESDAY", "THURSDAY", "SATURDAY"],
        },
        {
          time: "21:15:00",
          days: ["SUNDAY", "TUESDAY", "THURSDAY", "SATURDAY"],
        },
      ],
    },
  ),

  event(
    {
      id: 9,
      name: "Kraken",
      icon: "kraken",
      eventType: 3,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:30:00",
    },
    {
      schedule: [{ time: "21:30:00", days: ["SUNDAY", "TUESDAY"] }],
    },
  ),

  event(
    {
      id: 10,
      name: "Leviathan",
      icon: "leviathan",
      eventType: 3,
    },
    {
      duration: "02:00:00",
      reminderTime: "00:30:00",
    },
    {
      schedule: [{ time: "21:30:00", days: ["SUNDAY", "THURSDAY"] }],
    },
  ),

  event(
    {
      id: 11,
      name: "Lusca Awakening",
      icon: "lusca_awakening",
      eventType: 2,
      link: "/guides/honor-dailies#lusca-awakening",
    },
    {
      duration: "01:00:00",
      startMessage: "The Lusca have awoken in the Sea of Graves.",
      reminderTime: "00:15:00",
      reminderMessage: "The Lusca will awaken in the Sea of Graves in $1.",
    },
    {
      schedule: [
        {
          time: "22:00:00",
          days: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "SUNDAY"],
        },
        { time: "23:00:00", days: ["FRIDAY", "SATURDAY"] },
      ],
    },
  ),

  event(
    {
      id: 12,
      name: "Red Dragon's Keep",
      icon: "dragon_red",
      eventType: 1,
      link: "/guides/red-dragons-keep",
    },
    {
      duration: "00:45:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        {
          time: "02:00:00",
          days: ["MONDAY", "WEDNESDAY", "FRIDAY", "SUNDAY"],
          timeTemplate: { duration: "00:30:00" },
        },
        { time: "15:15:00", days: ["MONDAY", "WEDNESDAY", "FRIDAY", "SUNDAY"] },
        { time: "21:15:00", days: ["MONDAY", "WEDNESDAY", "FRIDAY", "SUNDAY"] },
      ],
    },
  ),

  event(
    {
      id: 13,
      name: "Castle",
      icon: "castle_siege",
      eventType: 4,
    },
    {
      reminderTime: "00:30:00",
      duration: "01:00:00",
    },
    {
      schedule: [
        {
          time: "00:00:00",
          days: ["WEDNESDAY"],
          timeTemplate: {
            name: "Supply Transport",
            duration: "20:00:00",
            startMessage: "Castle supply transportation is now available.",
            reminderMessage:
              "Castle supply transportation will be available in $1 for $2.",
          },
        },
        {
          time: "20:00:00",
          days: ["WEDNESDAY"],
          timeTemplate: {
            name: "Claim / Siege Preparation",
            startMessage:
              "Castle claim or siege preparations has begun for $1.",
            reminderMessage:
              "Castle claim or siege preparations begins in $1 for $2.",
          },
        },
        {
          time: "21:00:00",
          days: ["WEDNESDAY"],
          timeTemplate: {
            name: "Siege",
            startMessage: "Castle siege has begun for up to $1.",
            reminderMessage: "Castle siege is beginning in $1 for up to $2.",
            reminderTime: "00:05:00",
          },
        },
      ],
    },
  ),

  event(
    {
      id: 14,
      name: "The Fall of Hiram City",
      icon: "fall_of_hiram",
      eventType: 1,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "18:00:00", days: ["FRIDAY", "SUNDAY"] }],
    },
  ),

  event(
    {
      id: 15,
      name: "Faction War",
      icon: "goldplain",
      eventType: 1,
      link: "/guides/honor-dailies#golden-plains-battle",
    },
    {
      duration: "00:45:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        {
          time: "01:30:00",
          days: ["TUESDAY", "THURSDAY", "SATURDAY"],
          timeTemplate: { name: "Golden Plains Battle", duration: "00:30:00" },
        },
        {
          time: "14:30:00",
          days: ["TUESDAY", "THURSDAY", "SATURDAY"],
          timeTemplate: { name: "Golden Plains Battle" },
        },
        {
          time: "20:30:00",
          days: ["MONDAY", "WEDNESDAY", "FRIDAY", "SUNDAY"],
          timeTemplate: { name: "Golden Plains Battle" },
        },
        {
          time: "01:30:00",
          days: ["WEDNESDAY", "FRIDAY", "SUNDAY", "MONDAY"],
          timeTemplate: { name: "Skyfin War", duration: "00:30:00" },
        },
        {
          time: "14:30:00",
          days: ["MONDAY", "WEDNESDAY", "FRIDAY", "SUNDAY"],
          timeTemplate: { name: "Skyfin War" },
        },
        {
          time: "20:30:00",
          days: ["TUESDAY", "THURSDAY", "SATURDAY"],
          timeTemplate: { name: "Skyfin War" },
        },
      ],
    },
  ),

  event(
    {
      id: 16,
      name: "Stillwater Gulf",
      icon: "sea_battlefield",
      eventType: 1,
      disabled: true,
    },
    {
      duration: "08:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "16:00:00" }],
    },
  ),

  event(
    {
      id: 17,
      name: "Grimghast Rift",
      icon: "grimghast_rift",
      eventType: 2,
      link: "/guides/honor-dailies#grimghast-rift",
    },
    {
      duration: "00:15:00",
      reminderTime: "00:15:00",
      startMessage: "The Grimghast Rift has opened in Nuia and Haranya.",
      reminderMessage:
        "The Grimghast Rift will be opening in Nuia and Haranya in $1.",
      gameTime: "00:00:00",
    },
    {
      schedule: [
        { time: "02:20:00" },
        { time: "06:20:00" },
        { time: "10:20:00" },
        { time: "14:20:00" },
        { time: "18:20:00" },
        { time: "22:20:00" },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 18,
      name: "Crimson Rift",
      icon: "crimson_rift",
      eventType: 2,
      link: "/guides/honor-dailies#crimson-rift",
    },
    {
      duration: "00:10:00",
      reminderTime: "00:15:00",
      startMessage: "The Crimson Rift has opened in Nuia and Haranya.",
      reminderMessage:
        "The Crimson Rift will be opening in Nuia and Haranya in $1.",
      gameTime: "12:00:00",
    },
    {
      schedule: [
        { time: "00:20:00" },
        { time: "04:20:00" },
        { time: "08:20:00" },
        { time: "12:20:00" },
        { time: "16:20:00" },
        { time: "20:20:00" },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 19,
      name: "Jola, Meina, & Glenn",
      icon: "boss_monster",
      eventType: 3,
      link: "/guides/meina-and-glenn",
    },
    {
      duration: "01:00:00",
      startMessage: "$0 have spawned.",
      reminderTime: "00:15:00",
      reminderMessage: "$0 will spawn in $1.",
      gameTime: "06:00:00",
    },
    {
      schedule: [
        { time: "03:20:00" },
        { time: "07:20:00" },
        { time: "11:20:00" },
        { time: "15:20:00" },
        { time: "19:20:00" },
        { time: "23:20:00" },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 20,
      name: "The Yata Lantern",
      icon: "event",
      eventType: 5,
      description:
        "The Lantern Festival in Gweonid Forest's Yata Lantern is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "00:15:00",
      startMessage: "The Yata Lantern has spawned.",
      reminderTime: "00:15:00",
      reminderMessage: "The Yata Lantern is spawning in $1.",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 22,
      name: "Daru Treasure",
      icon: "event",
      eventType: 5,
      description:
        "Help Ian dig for buried Daru Treasure at the end of the rainbow in Ahnimar.",
      disabled: true,
    },
    {
      duration: "00:30:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 23,
      name: "Anthalon (Garden)",
      icon: "anthalon",
      eventType: 3,
    },
    {
      duration: "01:00:00",
      startMessage: "Anthalon has spawned in the Garden.",
      reminderTime: "00:15:00",
      reminderMessage: "Anthalon will spawn in the Garden in $1.",
    },
    {
      schedule: [{ time: "19:50:00", days: ["SUNDAY", "SATURDAY"] }],
    },
  ),

  event(
    {
      id: 24,
      name: "Aerial Delivery",
      icon: "event",
      eventType: 5,
      description: "Help deliver watermelons in Rookborne Basin.",
      disabled: true,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 25,
      name: "An Uninvited Guest",
      icon: "event",
      eventType: 5,
      description:
        "Defeat the Giant Blueglass Monster, a part of the Blue Salt Festival. The sculpture to turn in the quest remains for one hour.",
      disabled: true,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 26,
      name: "Diamond Shores",
      icon: "pioneer",
      eventType: 6,
      description: "Diamond Shores enters war four times per day.",
    },
    {
      duration: "02:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "01:00:00" },
        { time: "07:00:00" },
        { time: "13:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 27,
      name: "Garden of the Gods",
      icon: "archeage_green",
      eventType: 6,
      description: "Garden enters war every 4 hours.",
    },
    {
      duration: "01:50:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "03:00:00" },
        { time: "07:00:00" },
        { time: "11:00:00" },
        { time: "15:00:00" },
        { time: "19:00:00" },
        { time: "23:00:00" },
      ],
    },
  ),

  event(
    {
      id: 28,
      name: "A Royal Dish",
      icon: "event",
      eventType: 5,
      description:
        "The Singing Bard arrives at the Hasla Feastival. During this event, you can collect three more Feastival Coins, three times per day.",
      disabled: true,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 29,
      name: "Troubled Spirits",
      icon: "event",
      eventType: 5,
      description:
        "Help cheer up the Ezna or Moonswept Spirits as a part of the Hallowtide festival in Two Crowns.",
      disabled: true,
    },
    {
      duration: "00:15:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 30,
      name: "Crimson Rift (Auroria)",
      icon: "anthalon",
      eventType: 2,
      link: "/guides/honor-dailies#crimson-rift",
    },
    {
      duration: "00:10:00",
      reminderTime: "00:15:00",
      startMessage: "The Crimson Rift has opened in Auroria.",
      reminderMessage: "The Crimson Rift will be opening in Auroria in $1.",
      gameTime: "18:00:00",
    },
    {
      schedule: [
        { time: "01:20:00" },
        { time: "05:20:00" },
        { time: "09:20:00" },
        { time: "13:20:00" },
        { time: "17:20:00" },
        { time: "21:20:00" },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 31,
      name: "Akasch Invasion",
      icon: "ipyna",
      eventType: 2,
    },
    {
      duration: "00:20:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "21:00:00", days: ["SATURDAY", "MONDAY"] }],
    },
  ),

  event(
    {
      id: 32,
      name: "Halcyona Skirmish",
      icon: "camp3",
      eventType: 1,
      disabled: true,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "19:30:00" }, { time: "00:30:00" }],
    },
  ),

  event(
    {
      id: 33,
      name: "Land Rush",
      icon: "pioneer",
      eventType: 5,
      disabled: true,
    },
    {
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "21:00:00", days: ["SATURDAY"], regions: ["NA"] },
        { time: "12:00:00", days: ["SATURDAY"], regions: ["EU"] },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 34,
      name: "Animal Placement Program",
      icon: "event",
      eventType: 5,
      description:
        "The pawesome festival in Windscour needs your help at Windheart Lake.",
      disabled: true,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 35,
      name: "Reedwind",
      icon: "boss_monster",
      eventType: 6,
      description: "Reedwind enters war for 50 minutes every other hour.",
      disabled: true,
    },
    {
      duration: "00:50:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:26:00", regions: ["NA"] },
        { time: "02:26:00", regions: ["NA"] },
        { time: "04:26:00", regions: ["NA"] },
        { time: "06:26:00", regions: ["NA"] },
        { time: "08:26:00", regions: ["NA"] },
        { time: "10:26:00", regions: ["NA"] },
        { time: "12:26:00", regions: ["NA"] },
        { time: "14:26:00", regions: ["NA"] },
        { time: "16:26:00", regions: ["NA"] },
        { time: "18:26:00", regions: ["NA"] },
        { time: "20:26:00", regions: ["NA"] },
        { time: "22:26:00", regions: ["NA"] },
        { time: "01:37:00", regions: ["EU"] },
        { time: "03:37:00", regions: ["EU"] },
        { time: "05:37:00", regions: ["EU"] },
        { time: "07:37:00", regions: ["EU"] },
        { time: "09:37:00", regions: ["EU"] },
        { time: "11:37:00", regions: ["EU"] },
        { time: "13:37:00", regions: ["EU"] },
        { time: "15:37:00", regions: ["EU"] },
        { time: "17:37:00", regions: ["EU"] },
        { time: "19:37:00", regions: ["EU"] },
        { time: "21:37:00", regions: ["EU"] },
        { time: "23:37:00", regions: ["EU"] },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 36,
      name: "The Mock Duel of the Century",
      icon: "event",
      eventType: 5,
      description:
        "The Mock Duel of the Century in Marianople is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "00:01:00",
      reminderTime: "00:02:00",
    },
    {
      schedule: [
        {
          time: "00:00:00",
          timeTemplate: {
            startMessage:
              "The duelists for The Mock Duel of the Century have appeared.",
            reminderMessage:
              "The duelists for The Mock Duel of the Century appear in $1.",
            duration: "00:10:00",
            reminderTime: "00:15:00",
          },
        },
        {
          time: "00:10:00",
          timeTemplate: {
            name: "Duel",
            startMessage: "The Mock Duel of the Century starts now.",
            reminderMessage: "The Mock Duel of the Century starts in $1.",
          },
        },
        {
          time: "14:00:00",
          timeTemplate: {
            startMessage:
              "The duelists for The Mock Duel of the Century have appeared.",
            reminderMessage:
              "The duelists for The Mock Duel of the Century appear in $1.",
            duration: "00:10:00",
            reminderTime: "00:15:00",
          },
        },
        {
          time: "14:10:00",
          timeTemplate: {
            name: "Duel",
            startMessage: "The Mock Duel of the Century starts now.",
            reminderMessage: "The Mock Duel of the Century starts in $1.",
          },
        },
        {
          time: "19:00:00",
          timeTemplate: {
            startMessage:
              "The duelists for The Mock Duel of the Century have appeared.",
            reminderMessage:
              "The duelists for The Mock Duel of the Century appear in $1.",
            duration: "00:10:00",
            reminderTime: "00:15:00",
          },
        },
        {
          time: "19:10:00",
          timeTemplate: {
            name: "Duel",
            startMessage: "The Mock Duel of the Century starts now.",
            reminderMessage: "The Mock Duel of the Century starts in $1.",
          },
        },
      ],
    },
  ),

  event(
    {
      id: 37,
      name: "Guardian Scramble",
      icon: "ipyna",
      eventType: 4,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "22:00:00", days: ["FRIDAY", "SATURDAY"] }],
    },
  ),

  event(
    {
      id: 38,
      name: "Hereafter Rebellion",
      icon: "erosion_of_relics",
      eventType: 1,
    },
    {
      duration: "23:30:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "00:30:00" }],
    },
  ),

  event(
    {
      id: 39,
      name: "Drill Camp Arena",
      icon: "camp5",
      eventType: 7,
    },
    {
      duration: "12:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "12:00:00" }],
    },
  ),

  event(
    {
      id: 40,
      name: "Free-For-All Arena",
      icon: "camp3",
      eventType: 7,
    },
    {
      duration: "09:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "16:00:00" }],
    },
  ),

  event(
    {
      id: 41,
      name: "Sparring Arena",
      icon: "camp3",
      eventType: 7,
    },
    {
      duration: "12:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "12:00:00" }],
    },
  ),

  event(
    {
      id: 42,
      name: "Gladiator Arena",
      icon: "camp3",
      eventType: 7,
    },
    {
      duration: "12:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "12:00:00" }],
    },
  ),

  event(
    {
      id: 43,
      name: "Language Lesson",
      icon: "event",
      eventType: 5,
    },
    {
      duration: "00:04:15",
      reminderTime: "00:15:00",
      gameTime: "17:00:00",
      startMessage:
        "A language lesson for newcomers to the continent will soon begin.",
      reminderMessage:
        "A language lesson for newcomers to the continent will begin in $1.",
    },
    {
      schedule: [
        { time: "01:10:00" },
        { time: "05:10:00" },
        { time: "09:10:00" },
        { time: "13:10:00" },
        { time: "17:10:00" },
        { time: "21:10:00" },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 44,
      name: "Ayanad Merchant",
      icon: "ayanad_merchant",
      eventType: 5,
      disabled: true,
    },
    {
      duration: "06:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "18:00:00" }],
    },
  ),

  event(
    {
      id: 46,
      name: "Ocleera's Rift",
      icon: "ocleera",
      eventType: 2,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "03:00:00" },
        { time: "09:00:00" },
        { time: "15:00:00" },
        { time: "21:00:00" },
      ],
    },
  ),

  event(
    {
      id: 47,
      name: "Dimensional Boundary Defense Raid",
      icon: "event",
      eventType: 1,
    },
    {
      duration: "00:15:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "18:30:00", days: ["SATURDAY", "SUNDAY"] },
        { time: "20:30:00", days: ["SATURDAY", "SUNDAY"] },
        { time: "22:30:00", days: ["SATURDAY", "SUNDAY"] },
      ],
    },
  ),

  event(
    {
      id: 48,
      name: "Machine Filled Dimensional Crevice",
      icon: "event",
      eventType: 1,
      disabled: true,
    },
    {
      duration: "13:50:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "09:00:00" }],
    },
  ),

  event(
    {
      id: 49,
      name: "Puzzle King Jigsoo's Invitation",
      icon: "event",
      eventType: 5,
      description:
        "Puzzle King Jigsoo's Invitation is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "00:15:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "10:00:00" },
        { time: "13:00:00" },
        { time: "16:00:00" },
        { time: "19:00:00" },
        { time: "22:00:00" },
        { time: "01:00:00" },
      ],
    },
  ),

  event(
    {
      id: 50,
      name: "A Special Tree",
      icon: "event",
      eventType: 5,
      description:
        "A Special Tree in Miroir Tundra is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "00:20:00",
      reminderTime: "00:15:00",
      startMessage: "A Special Tree has spawned.",
      reminderMessage: "A Special Tree is spawning in $1.",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 51,
      name: "Winter Maiden Thieves",
      icon: "event",
      eventType: 5,
      description:
        "Winter Maiden Thieves is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "00:20:00",
      reminderTime: "00:15:00",
      startMessage: "Winter Maiden Thieves have appeared.",
      reminderMessage: "Winter Maiden Thieves appear in $1.",
    },
    {
      schedule: [
        { time: "00:30:00" },
        { time: "14:30:00" },
        { time: "19:30:00" },
      ],
    },
  ),

  event(
    {
      id: 52,
      name: "Hiram Dimensional Rift",
      icon: "event",
      eventType: 2,
    },
    {
      duration: "00:30:00",
      gameTime: "21:00:00",
      startMessage: "The Hiram Dimensional Rift has opened in Auroria.",
      reminderTime: "00:15:00",
      reminderMessage:
        "The Hiram Dimensional Rift will be opening in Auroria in $1.",
    },
    {
      schedule: [
        { time: "01:50:00" },
        { time: "05:50:00" },
        { time: "09:50:00" },
        { time: "13:50:00" },
        { time: "17:50:00" },
        { time: "21:50:00" },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 53,
      name: "Galaxy Gumbo",
      icon: "event",
      eventType: 5,
      description:
        "Galaxy Gumbo is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "01:00:00",
      startMessage: "Galaxy Gumbo quest has appeared in Solzreed Peninsula.",
      reminderTime: "00:15:00",
      reminderMessage: "Galaxy Gumbo quest appears in $1.",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 54,
      name: "Zodiac Owls",
      icon: "event",
      eventType: 5,
      description:
        "Zodiac Owls is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "01:40:00",
      gameTime: "22:00:00",
      startMessage: "Zodiac Owls have appeared in Solzreed Peninsula.",
      reminderTime: "00:15:00",
      reminderMessage: "Zodiac Owls will appear in $1.",
    },
    {
      schedule: [
        { time: "02:00:00" },
        { time: "06:00:00" },
        { time: "10:00:00" },
        { time: "14:00:00" },
        { time: "18:00:00" },
        { time: "22:00:00" },
      ],
      useServerTimezone: true,
    },
  ),

  event(
    {
      id: 55,
      name: "Banquet Cruise Host Cackle",
      icon: "event",
      eventType: 5,
      description:
        "Banquet Cruise Host Cackle is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "00:30:00",
      startMessage: "Banquet Cruise Host Cackle has appeared in Sanddeep.",
      reminderTime: "00:15:00",
      reminderMessage: "Banquet Cruise Host Cackle appears in $1.",
    },
    {
      schedule: [
        { time: "02:00:00" },
        { time: "06:00:00" },
        { time: "10:00:00" },
        { time: "14:00:00" },
        { time: "18:00:00" },
        { time: "22:00:00" },
      ],
    },
  ),

  event(
    {
      id: 56,
      name: "Arctic Architecture",
      icon: "event",
      eventType: 5,
      description:
        "Arctic Architecture is only available for short periods of time throughout the day.",
      disabled: true,
    },
    {
      duration: "01:00:00",
      startMessage: "Igloo has appeared in Miroir Tundra.",
      reminderTime: "00:15:00",
      reminderMessage: "Igloo will appear in $1.",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 57,
      name: "Woof and Meow Commanders",
      icon: "event",
      eventType: 5,
      description:
        "The Woof Commander and Meow Commander automatically spawn at the designated spawn time at four locations.",
      disabled: true,
    },
    {
      duration: "00:15:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "19:00:00" }],
    },
  ),

  event(
    {
      id: 58,
      name: "April Fools' Suspicious Chest",
      icon: "event",
      eventType: 5,
      description:
        "April Fools' Suspicious Chests appear in Marianople and Austera every 2 hours during the April Fools' day.",
      disabled: true,
    },
    {
      duration: "00:15:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "01:00:00" },
        { time: "03:00:00" },
        { time: "05:00:00" },
        { time: "07:00:00" },
        { time: "09:00:00" },
        { time: "11:00:00" },
        { time: "13:00:00" },
        { time: "15:00:00" },
        { time: "17:00:00" },
        { time: "19:00:00" },
        { time: "21:00:00" },
        { time: "23:00:00" },
      ],
    },
  ),

  event(
    {
      id: 59,
      name: "Honeybee Hunter",
      icon: "event",
      eventType: 5,
      description:
        "Honeybee Hunter is only available for short periods of time throughout the day.",
      disabled: false,
    },
    {
      duration: "01:00:00",
      startMessage: "Gigantic Honeybee has appeared in Villanelle.",
      reminderTime: "00:05:00",
      reminderMessage: "Gigantic Honeybee will appear in $1.",
    },
    {
      schedule: [
        { time: "00:00:00" },
        { time: "14:00:00" },
        { time: "19:00:00" },
      ],
    },
  ),

  event(
    {
      id: 60,
      name: "Just Don't Get Hit",
      icon: "event",
      eventType: 1,
      disabled: true,
    },
    {
      duration: "13:50:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "09:00:00" }],
    },
  ),

  event(
    {
      id: 61,
      name: "Flag War",
      icon: "event",
      eventType: 7,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "18:00:00" }, { time: "23:00:00" }],
    },
  ),

  event(
    {
      id: 62,
      name: "Drenching Arena",
      icon: "event",
      eventType: 7,
      disabled: true,
    },
    {
      duration: "14:30:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "00:00:00", days: ["SATURDAY", "SUNDAY"] },
        {
          time: "16:30:00",
          days: ["SATURDAY"],
          timeTemplate: { duration: "07:00:00" },
        },
      ],
      useUTC: true,
    },
  ),

  event(
    {
      id: 65,
      name: "Mistmerrow",
      icon: "mistmerrow",
      eventType: 4,
    },
    {
      duration: "00:45:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "20:30:00", days: ["TUESDAY", "THURSDAY", "SATURDAY"] },
        { time: "00:00:00", days: ["TUESDAY", "THURSDAY", "SATURDAY"] },
      ],
    },
  ),

  event(
    {
      id: 66,
      name: "Noryette Arena",
      icon: "event",
      eventType: 7,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [
        { time: "16:30:00" },
        { time: "18:30:00" },
        { time: "23:30:00" },
      ],
    },
  ),

  event(
    {
      id: 67,
      name: "Shadow Invasion",
      icon: "boss_monster",
      eventType: 3,
    },
    {
      duration: "01:00:00",
      reminderTime: "00:30:00",
    },
    {
      schedule: [{ time: "10:00:00" }, { time: "22:00:00" }],
    },
  ),

  event(
    {
      id: 68,
      name: "Stay still, don't avoid it",
      icon: "event",
      eventType: 5,
      disabled: true,
    },
    {
      duration: "13:50:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "10:00:00" }],
    },
  ),

  event(
    {
      id: 69,
      name: "Island of Abundance",
      icon: "event",
      eventType: 1,
    },
    {
      duration: "23:30:00",
      reminderTime: "00:15:00",
    },
    {
      schedule: [{ time: "00:30:00" }],
    },
  ),
];

fs.writeFileSync("output.json", JSON.stringify(res, null, 2));
