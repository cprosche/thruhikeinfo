// TODO: add more trails
// TODO: add number of on trail miles AKA completeness of trail
// TODO: add name and link to trail associations
// TODO: add link to interactive online maps if they have one
export const trails = [
  {
    name: "Appalachian Trail",
    type: "Linear",
    terminusA: {
      name: "Peak of Springer Mountain",
      country: "US",
      region: "Georgia",
      city: "Ellijay",
      location: {
        latitude: 34.62672226779845,
        longitude: -84.1938510080714,
      },
      startDate: "April 1",
    },
    terminusB: {
      name: "Peak of Mount Katahdin",
      country: "US",
      region: "Maine",
      city: "Millinocket",
      location: {
        latitude: 45.904433636008235,
        longitude: -68.92147437973453,
      },
      startDate: "June 1",
    },
    length: 2190,
  },
  {
    name: "Continental Divide Trail",
    type: "Linear",
    terminusA: {
      name: "Crazy Cook Monument",
      country: "US",
      region: "New Mexico",
      city: "Hachita",
      location: {
        latitude: 31.497162747577544,
        longitude: -108.20874030214652,
      },
      startDate: "April 1",
    },
    terminusB: {
      name: "Bertha Trailhead",
      country: "CA",
      region: "Alberta",
      city: "Waterton Park",
      location: {
        latitude: 49.0470732590971,
        longitude: -113.91663117785163,
      },
      startDate: "June 13",
    },
    length: 3100,
  },
  {
    name: "Pacific Crest Trail",
    type: "Linear",
    terminusA: {
      name: "Pacific Crest Trail Southern Terminus",
      country: "US",
      region: "California",
      city: "Campo",
      location: {
        latitude: 33.437260992907454,
        longitude: -116.46699756718175,
      },
      startDate: "April 1",
    },
    terminusB: {
      name: "Pacific Crest Trail Northern Terminus",
      country: "US",
      region: "Washington",
      city: "Manning Park",
      location: {
        latitude: 49.00041115333111,
        longitude: -120.79981454390118,
      },
      startDate: "June 26",
    },
    length: 2650,
  },
  {
    name: "Arizona Trail",
    type: "Linear",
    terminusA: {
      name: "Border Monument 102 Southern Terminus",
      country: "US",
      region: "Arizona",
      city: "Hereford",
      location: {
        latitude: 31.33447044548378,
        longitude: -110.28308131712704,
      },
      startDate: "March 15",
    },
    terminusB: {
      name: "Northern Terminus Arizona Trail",
      country: "US",
      region: "Arizona",
      city: "Marble Canyon",
      location: {
        latitude: 37.001829970754365,
        longitude: -112.03516276137317,
      },
      startDate: "March 15",
    },
    length: 800,
  },
  {
    name: "Colorado Trail",
    type: "Linear",
    terminusA: {
      name: "Waterton Canyon Trailhead",
      country: "US",
      region: "Colorado",
      city: "Littleton",
      location: {
        latitude: 39.49106755428632,
        longitude: -105.09410095586168,
      },
      startDate: "July 1",
    },
    terminusB: {
      name: "Colorado Trail Trailhead",
      country: "US",
      region: "Colorado",
      city: "Durango",
      location: {
        latitude: 37.33140925560323,
        longitude: -107.90283321780313,
      },
      startDate: "July 1",
    },
    length: 567,
  },
  {
    name: "Ice Age Trail",
    type: "Linear",
    terminusA: {
      name: "Western Terminus",
      country: "US",
      region: "Wisconsin",
      city: "Dresser",
      location: {
        latitude: 45.40014632640452,
        longitude: -92.6494693607597,
      },
      startDate: "September 1",
    },
    terminusB: {
      name: "Eastern Terminus",
      country: "US",
      region: "Wisconsin",
      city: "Sturgeon Bay",
      location: {
        latitude: 44.875179450658145,
        longitude: -87.43175103068305,
      },
      startDate: "September 1",
    },
    length: 1200,
  },
  {
    name: "Florida Trail",
    type: "Linear",
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      region: "Florida",
      city: "Ochopee",
      location: {
        latitude: 25.960822817653238,
        longitude: -81.02245344219796,
      },
      startDate: "January 1",
    },
    terminusB: {
      name: "Northern Terminus",
      country: "US",
      region: "Florida",
      city: "Pensacola Beach",
      location: {
        latitude: 30.328802234197365,
        longitude: -87.28953691595429,
      },
      startDate: "January 1",
    },
    length: 1500,
  },
  {
    name: "Superior Hiking Trail",
    type: "Linear",
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      region: "Minnesota",
      city: "Wrenshall",
      location: {
        latitude: 46.607910243765275,
        longitude: -92.2917804596569,
      },
      startDate: "September 1",
    },
    terminusB: {
      name: "Northern Terminus",
      country: "US",
      region: "Minnesota",
      city: "Hovland",
      location: {
        latitude: 47.99912473652048,
        longitude: -89.93471533077344,
      },
      startDate: "September 1",
    },
    length: 310,
  },
  {
    name: "Te Araroa",
    type: "Linear",
    terminusA: {
      name: "Northern Terminus",
      country: "NZ",
      region: "North Island",
      city: "Cape Regina",
      location: {
        latitude: -34.42838394108281,
        longitude: 172.67988499755322,
      },
      startDate: "November 1",
    },
    terminusB: {
      name: "Stirling Point",
      country: "NZ",
      region: "South Island",
      city: "Bluff",
      location: {
        latitude: -46.613314822220765,
        longitude: 168.3573299848666,
      },
      startDate: "November 15",
    },
    length: 1850,
  },
  {
    name: "Pacific Northwest Trail",
    type: "Linear",
    terminusA: {
      name: "Chief Mountain Customs Parking Area",
      country: "US",
      region: "Montana",
      city: "Browning",
      location: {
        latitude: 48.99570842725646,
        longitude: -113.65955417505153,
      },
      startDate: "June 15",
    },
    terminusB: {
      name: "Cape Alava",
      country: "US",
      region: "Washington",
      city: "Olympic National Park",
      location: {
        latitude: 48.16598088810253,
        longitude: -124.73246509084761,
      },
      startDate: "June 15",
    },
    length: 1200,
  },
  {
    name: "North Country Trail",
    type: "Linear",
    terminusA: {
      name: "Long Trail Access",
      country: "US",
      city: "Hancock",
      region: "Vermont",
      location: {
        latitude: 43.9367122149062,
        longitude: -72.94943596712082,
      },
      startDate: "N/a",
    },
    terminusB: {
      name: "Western Terminus",
      country: "US",
      city: "Pick City",
      region: "North Dakota",
      location: {
        latitude: 47.5200937006863,
        longitude: -101.45217816584685,
      },
      startDate: "N/a",
    },
    length: 4800,
  },
  {
    name: "Long Trail",
    type: "Linear",
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      city: "Clarksburg",
      region: "Massachusetts",
      location: {
        latitude: 42.74460435773166,
        longitude: -73.1557407693185,
      },
      startDate: "August 15",
    },
    terminusB: {
      name: "Northern Terminus",
      country: "US",
      city: "Jay",
      region: "Vermont",
      location: {
        latitude: 45.00909261906257,
        longitude: -72.4883542584306,
      },
      startDate: "August 15",
    },
    length: 273,
  },
];
