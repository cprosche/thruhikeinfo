export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface ITerminus {
  name: string;
  country: string;
  region: string;
  city: string;
  location: ILocation;
  startDate: string;
}

export interface ITrail {
  name: string;
  type: string;
  length: number; // miles
  offRoadLength: number;
  terminusA: ITerminus;
  terminusB: ITerminus;
}

// TODO: add more trails
// TODO: add name and link to trail associations
// TODO: add link to interactive online maps if they have one
export const trails: ITrail[] = [
  {
    name: "Appalachian Trail",
    type: "Linear",
    length: 2190,
    offRoadLength: 2190,
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
  },
  {
    name: "Continental Divide Trail",
    type: "Linear",
    length: 3100,
    offRoadLength: 2170,
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
  },
  {
    name: "Pacific Crest Trail",
    type: "Linear",
    length: 2650,
    offRoadLength: 2650,
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
  },
  {
    name: "Arizona Trail",
    type: "Linear",
    length: 800,
    offRoadLength: 0,
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
  },
  {
    name: "Colorado Trail",
    type: "Linear",
    length: 567,
    offRoadLength: 567,
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
  },
  {
    name: "Ice Age Trail",
    type: "Linear",
    length: 1200,
    offRoadLength: 640,
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
  },
  {
    name: "Florida Trail",
    type: "Linear",
    length: 1500,
    offRoadLength: 1300,
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
  },
  {
    name: "Superior Hiking Trail",
    type: "Linear",
    length: 310,
    offRoadLength: 310,
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
  },
  {
    name: "Te Araroa",
    type: "Linear",
    length: 1850,
    offRoadLength: 0,
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
  },
  {
    name: "Pacific Northwest Trail",
    type: "Linear",
    length: 1200,
    offRoadLength: 0,
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
  },
  {
    name: "North Country Trail",
    type: "Linear",
    length: 4800,
    offRoadLength: 3188,
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
  },
  {
    name: "Long Trail",
    type: "Linear",
    length: 273,
    offRoadLength: 273,
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
  },
  {
    name: "John Muir Trail",
    type: "Linear",
    length: 211,
    offRoadLength: 211,
    terminusA: {
      name: "Mist Trail & John Muir Trail Trailhead",
      country: "US",
      city: "Yosemite Valley",
      region: "California",
      location: {
        latitude: 37.7329744,
        longitude: -119.557763,
      },
      startDate: "August 1",
    },
    terminusB: {
      name: "Summit of Mount Whitney",
      country: "US",
      city: "Whitney Portal",
      region: "California",
      location: {
        latitude: 36.5785165,
        longitude: -118.2922642,
      },
      startDate: "August 1",
    },
  },
  {
    name: "Pinhoti Trail",
    type: "Linear",
    length: 335,
    offRoadLength: 0,
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      city: "Sylacuaga",
      region: "Alabama",
      location: {
        latitude: 32.9727812,
        longitude: -86.3480869,
      },
      startDate: "October 1",
    },
    terminusB: {
      name: "Northern Terminus",
      country: "US",
      city: "Epworth",
      region: "Georgia",
      location: {
        latitude: 34.8882042398775,
        longitude: -84.52724453124739,
      },
      startDate: "October 1",
    },
  },
];
