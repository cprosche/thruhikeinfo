export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface ITrailAssociation {
  name: string;
  url: string;
}

export interface IDayOfYear {
  month: number;
  day: number;
}

export interface ITerminus {
  name: string;
  country: string;
  region: string;
  city: string;
  location: ILocation;
  startDate: IDayOfYear | null;
}

export interface ITrail {
  name: string;
  type: string;
  length: number; // miles
  offRoadLength: number;
  trailAssociation: ITrailAssociation | null;
  terminusA: ITerminus;
  terminusB?: ITerminus;
}

// TODO: add more trails
// TODO: add milford track
// TODO: add himalayas hikes
// TODO: add south american hikes
// TODO: add european hikes - https://en.wikipedia.org/wiki/European_long-distance_paths?fbclid=IwAR3zYWEqZNzSZraw6o39bLthlJIjRbPpeZ5P11ZPHSsv1Fh8rl2M8HEwcqo - need multi country display not based on termini

// TODO: big project - add generated individual pages for trails
// TODO: add trail subsections as seperate trails on individual pages
// TODO: add links to multiple maps on individual pages
export const trails: ITrail[] = [
  {
    name: "Appalachian Trail",
    type: "Linear",
    length: 2190,
    offRoadLength: 2190,
    trailAssociation: {
      name: "Appalachian Trail Conservancy",
      url: "https://appalachiantrail.org/",
    },
    terminusA: {
      name: "Peak of Springer Mountain",
      country: "US",
      region: "Georgia",
      city: "Ellijay",
      location: {
        latitude: 34.62672226779845,
        longitude: -84.1938510080714,
      },
      startDate: { month: 4, day: 1 },
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
      startDate: { month: 6, day: 1 },
    },
  },
  {
    name: "Continental Divide Trail",
    type: "Linear",
    length: 3100,
    offRoadLength: 2170,
    trailAssociation: {
      name: "Continental Divide Trail Coalition",
      url: "https://continentaldividetrail.org/",
    },
    terminusA: {
      name: "Crazy Cook Monument",
      country: "US",
      region: "New Mexico",
      city: "Hachita",
      location: {
        latitude: 31.497162747577544,
        longitude: -108.20874030214652,
      },
      startDate: { month: 4, day: 1 },
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
      startDate: { month: 6, day: 13 },
    },
  },
  {
    name: "Pacific Crest Trail",
    type: "Linear",
    length: 2650,
    offRoadLength: 2650,
    trailAssociation: {
      name: "Pacific Crest Trail Association",
      url: "https://www.pcta.org/",
    },
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      region: "California",
      city: "Campo",
      location: {
        latitude: 33.437260992907454,
        longitude: -116.46699756718175,
      },
      startDate: { month: 4, day: 1 },
    },
    terminusB: {
      name: "Northern Terminus",
      country: "US",
      region: "Washington",
      city: "Manning Park",
      location: {
        latitude: 49.00041115333111,
        longitude: -120.79981454390118,
      },
      startDate: { month: 6, day: 26 },
    },
  },
  {
    name: "Arizona Trail",
    type: "Linear",
    length: 800,
    offRoadLength: null,
    trailAssociation: {
      name: "Arizona Trail Association",
      url: "https://aztrail.org/",
    },
    terminusA: {
      name: "Border Monument 102 Southern Terminus",
      country: "US",
      region: "Arizona",
      city: "Hereford",
      location: {
        latitude: 31.33447044548378,
        longitude: -110.28308131712704,
      },
      startDate: { month: 3, day: 15 },
    },
    terminusB: {
      name: "Northern Terminus",
      country: "US",
      region: "Arizona",
      city: "Marble Canyon",
      location: {
        latitude: 37.001829970754365,
        longitude: -112.03516276137317,
      },
      startDate: { month: 3, day: 15 },
    },
  },
  {
    name: "Colorado Trail",
    type: "Linear",
    length: 567,
    offRoadLength: 567,
    trailAssociation: {
      name: "Colorado Trail Foundation",
      url: "https://coloradotrail.org/",
    },
    terminusA: {
      name: "Waterton Canyon Trailhead",
      country: "US",
      region: "Colorado",
      city: "Littleton",
      location: {
        latitude: 39.49106755428632,
        longitude: -105.09410095586168,
      },
      startDate: { month: 7, day: 1 },
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
      startDate: { month: 7, day: 1 },
    },
  },
  {
    name: "Ice Age Trail",
    type: "Linear",
    length: 1200,
    offRoadLength: 640,
    trailAssociation: {
      name: "Ice Age Trail Alliance",
      url: "https://www.iceagetrail.org/",
    },
    terminusA: {
      name: "Western Terminus",
      country: "US",
      region: "Wisconsin",
      city: "Dresser",
      location: {
        latitude: 45.40014632640452,
        longitude: -92.6494693607597,
      },
      startDate: { month: 9, day: 1 },
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
      startDate: { month: 9, day: 1 },
    },
  },
  {
    name: "Florida Trail",
    type: "Linear",
    length: 1500,
    trailAssociation: {
      name: "Florida Trail Association",
      url: "https://floridatrail.org/",
    },
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
      startDate: { month: 1, day: 1 },
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
      startDate: { month: 1, day: 1 },
    },
  },
  {
    name: "Superior Hiking Trail",
    type: "Linear",
    length: 310,
    offRoadLength: 310,
    trailAssociation: {
      name: "Superior Hiking Trail Association",
      url: "https://superiorhiking.org/",
    },
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      region: "Minnesota",
      city: "Wrenshall",
      location: {
        latitude: 46.607910243765275,
        longitude: -92.2917804596569,
      },
      startDate: { month: 9, day: 1 },
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
      startDate: { month: 9, day: 1 },
    },
  },
  {
    name: "Te Araroa",
    type: "Linear",
    length: 1850,
    offRoadLength: null,
    trailAssociation: {
      name: "Te Araroa Trust",
      url: "https://www.teararoa.org.nz/",
    },
    terminusA: {
      name: "Northern Terminus",
      country: "NZ",
      region: "North Island",
      city: "Cape Regina",
      location: {
        latitude: -34.42838394108281,
        longitude: 172.67988499755322,
      },
      startDate: { month: 11, day: 15 },
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
      startDate: { month: 11, day: 15 },
    },
  },
  {
    name: "Pacific Northwest Trail",
    type: "Linear",
    length: 1200,
    offRoadLength: null,
    trailAssociation: {
      name: "Pacific Northwest Trail Association",
      url: "https://www.pnt.org/",
    },
    terminusA: {
      name: "Chief Mountain Customs Parking Area",
      country: "US",
      region: "Montana",
      city: "Browning",
      location: {
        latitude: 48.99570842725646,
        longitude: -113.65955417505153,
      },
      startDate: { month: 6, day: 15 },
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
      startDate: { month: 6, day: 15 },
    },
  },
  {
    name: "North Country Trail",
    type: "Linear",
    length: 4800,
    offRoadLength: 3188,
    trailAssociation: {
      name: "North Country Trail Association",
      url: "https://northcountrytrail.org/",
    },
    terminusA: {
      name: "Long Trail Access",
      country: "US",
      city: "Hancock",
      region: "Vermont",
      location: {
        latitude: 43.9367122149062,
        longitude: -72.94943596712082,
      },
      startDate: null,
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
      startDate: null,
    },
  },
  {
    name: "Long Trail",
    type: "Linear",
    length: 273,
    offRoadLength: 273,
    trailAssociation: {
      name: "Green Mountain Club",
      url: "https://www.greenmountainclub.org/the-long-trail/",
    },
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      city: "Clarksburg",
      region: "Massachusetts",
      location: {
        latitude: 42.74460435773166,
        longitude: -73.1557407693185,
      },
      startDate: { month: 8, day: 15 },
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
      startDate: { month: 8, day: 15 },
    },
  },
  {
    name: "John Muir Trail",
    type: "Linear",
    length: 211,
    offRoadLength: 211,
    trailAssociation: {
      name: "Pacific Crest Trail Association",
      url: "https://www.pcta.org/discover-the-trail/john-muir-trail/",
    },
    terminusA: {
      name: "Mist Trail & John Muir Trail Trailhead",
      country: "US",
      city: "Yosemite Valley",
      region: "California",
      location: {
        latitude: 37.7329744,
        longitude: -119.557763,
      },
      startDate: { month: 8, day: 1 },
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
      startDate: { month: 8, day: 1 },
    },
  },
  {
    name: "Pinhoti Trail",
    type: "Linear",
    length: 335,
    offRoadLength: null,
    trailAssociation: {
      name: "Pinhoti Trail Alliance",
      url: "http://www.pinhotitrailalliance.org",
    },
    terminusA: {
      name: "Southern Terminus",
      country: "US",
      city: "Sylacuaga",
      region: "Alabama",
      location: {
        latitude: 32.9727812,
        longitude: -86.3480869,
      },
      startDate: { month: 10, day: 1 },
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
      startDate: { month: 10, day: 1 },
    },
  },
  {
    name: "Wonderland Trail",
    type: "Loop",
    length: 93,
    offRoadLength: 93,
    trailAssociation: {
      name: "Washington Trails Association",
      url: "https://www.wta.org/go-hiking/hikes/wonderland-trail-thru-hike",
    },
    terminusA: {
      name: "Longmire",
      country: "US",
      city: "Packwood",
      region: "Washington",
      location: {
        latitude: 46.75175661332915,
        longitude: -121.81178836363384,
      },
      startDate: { month: 8, day: 1 },
    },
  },
  {
    name: "Timberline Trail",
    type: "Loop",
    length: 42,
    offRoadLength: 42,
    trailAssociation: null,
    terminusA: {
      name: "Timberline Lodge",
      country: "US",
      city: "Government Camp",
      region: "Oregon",
      location: {
        latitude: 45.33066208433231,
        longitude: -121.70905955162013,
      },
      startDate: { month: 8, day: 1 },
    },
  },
  {
    name: "Tahoe Rim Trail",
    type: "Loop",
    length: 165,
    offRoadLength: null,
    trailAssociation: {
      name: "Tahoe Rim Trail Association",
      url: "https://tahoerimtrail.org/",
    },
    terminusA: {
      name: "64 Acres",
      country: "US",
      city: "Tahoe City",
      region: "California",
      location: {
        latitude: 39.16507568164984,
        longitude: -120.14732643423736,
      },
      startDate: { month: 7, day: 1 },
    },
  },
  {
    name: "Kungsleden",
    type: "Linear",
    length: 280,
    offRoadLength: 280,
    trailAssociation: null,
    terminusA: {
      name: "Northern Terminus",
      country: "SE",
      city: "Abisko",
      region: "Sápmi",
      location: {
        latitude: 68.3578097,
        longitude: 18.7777581,
      },
      startDate: null,
    },
    terminusB: {
      name: "Southern Terminus",
      country: "SE",
      city: "Hamevan",
      region: "Västerbotten",
      location: {
        latitude: 65.8149255,
        longitude: 15.1051092,
      },
      startDate: null,
    },
  },
  {
    name: "Great Divide Trail",
    type: "Linear",
    length: 700,
    offRoadLength: null,
    trailAssociation: {
      name: "Great Divide Trail Association",
      url: "https://greatdividetrail.com/",
    },
    terminusA: {
      name: "Southern Terminus",
      country: "CA",
      city: "Waterton Park",
      region: "Alberta",
      location: {
        latitude: 48.9986875,
        longitude: -113.9061303,
      },
      startDate: null,
    },
    terminusB: {
      name: "Northern Terminus",
      country: "CA",
      city: "Fraser-Fort George",
      region: "British Columbia",
      location: {
        latitude: 53.8466669,
        longitude: -120.4202045,
      },
      startDate: null,
    },
  },
];
