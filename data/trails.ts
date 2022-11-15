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
  slug: string;
  name: string;
  aliases?: string[];
  type: string;
  length: number; // miles
  offRoadLength: number;
  continent: string;
  farOutGuideUrl: string;
  trailAssociation: ITrailAssociation | null;
  terminusA: ITerminus;
  terminusB?: ITerminus;
}

// TODO: add south american hikes
// TODO: add more asian hikes
export const trails: ITrail[] = [
  {
    slug: "at",
    name: "Appalachian Trail",
    aliases: ["AT", "Appalachian National Scenic Trail"],
    type: "Linear",
    length: 2190,
    offRoadLength: 2190,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/appalachian-trail-map/",
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
    slug: "cdt",
    name: "Continental Divide Trail",
    aliases: ["CDT", "Continental Divide National Scenic Trail"],
    type: "Linear",
    length: 3100,
    offRoadLength: 2170,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/continental-divide-trail-map/",
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
    slug: "pct",
    name: "Pacific Crest Trail",
    aliases: ["PCT", "Pacific Crest National Scenic Trail"],
    type: "Linear",
    length: 2650,
    offRoadLength: 2650,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/pacific-crest-trail-map/",
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
    slug: "azt",
    name: "Arizona Trail",
    aliases: ["AZT", "Arizona National Scenic Trail"],
    type: "Linear",
    length: 800,
    offRoadLength: null,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/arizona-trail-map/",
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
    slug: "ct",
    name: "Colorado Trail",
    aliases: ["CT"],
    type: "Linear",
    length: 567,
    offRoadLength: 567,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/colorado-trail-map/",
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
    slug: "iat",
    name: "Ice Age Trail",
    aliases: ["IAT", "Ice Age National Scenic Trail"],
    type: "Linear",
    length: 1200,
    offRoadLength: 640,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/ice-age-trail-map/",
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
    slug: "ft",
    name: "Florida Trail",
    aliases: ["FT", "Florida National Scenic Trail"],
    type: "Linear",
    length: 1500,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/florida-trail-map/",
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
    slug: "sht",
    name: "Superior Hiking Trail",
    aliases: ["SHT"],
    type: "Linear",
    length: 310,
    offRoadLength: 310,
    continent: "North America",
    farOutGuideUrl: null,
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
    slug: "ta",
    name: "Te Araroa",
    aliases: ["TA"],
    type: "Linear",
    length: 1850,
    offRoadLength: null,
    continent: "Oceania",
    farOutGuideUrl: "https://faroutguides.com/te-araroa-map/",
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
      name: "Stirling Point Trailhead",
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
    slug: "pnt",
    name: "Pacific Northwest Trail",
    aliases: ["PNT", "Pacific Northwest National Scenic Trail"],
    type: "Linear",
    length: 1200,
    offRoadLength: null,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/pacific-northwest-trail-map/",
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
      name: "Cape Alava Trailhead",
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
    slug: "nct",
    name: "North Country Trail",
    aliases: ["NCT", "North Country National Scenic Trail"],
    type: "Linear",
    length: 4800,
    offRoadLength: 3188,
    continent: "North America",
    farOutGuideUrl: null,
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
    slug: "lt",
    name: "Long Trail",
    aliases: ["LT"],
    type: "Linear",
    length: 273,
    offRoadLength: 273,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/long-trail-map/",
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
    slug: "jmt",
    name: "John Muir Trail",
    aliases: ["JMT"],
    type: "Linear",
    length: 211,
    offRoadLength: 211,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/john-muir-trail-map/",
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
    slug: "pinhoti-trail",
    name: "Pinhoti Trail",
    type: "Linear",
    length: 335,
    offRoadLength: null,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/pinhoti-trail-map/",
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
    slug: "wonderland-trail",
    name: "Wonderland Trail",
    type: "Loop",
    length: 93,
    offRoadLength: 93,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/wonderland-trail-map/",
    trailAssociation: {
      name: "Washington Trails Association",
      url: "https://www.wta.org/go-hiking/hikes/wonderland-trail-thru-hike",
    },
    terminusA: {
      name: "Longmire Trailhead",
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
    slug: "timberline-trail",
    name: "Timberline Trail",
    type: "Loop",
    length: 42,
    offRoadLength: 42,
    continent: "North America",
    trailAssociation: null,
    farOutGuideUrl: "https://faroutguides.com/timberline-trail-map/",
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
    slug: "tahoe-rim-trail",
    name: "Tahoe Rim Trail",
    type: "Loop",
    length: 165,
    offRoadLength: null,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/tahoe-rim-trail-map/",
    trailAssociation: {
      name: "Tahoe Rim Trail Association",
      url: "https://tahoerimtrail.org/",
    },
    terminusA: {
      name: "64 Acres Trailhead",
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
    slug: "kungsleden",
    name: "Kungsleden",
    type: "Linear",
    length: 280,
    offRoadLength: 280,
    continent: "Europe",
    farOutGuideUrl: null,
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
    slug: "gdt",
    name: "Great Divide Trail",
    aliases: ["GDT"],
    type: "Linear",
    length: 700,
    offRoadLength: null,
    continent: "North America",
    farOutGuideUrl: "https://faroutguides.com/great-divide-trail-map/",
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
  {
    slug: "overland-track",
    name: "Overland Track",
    type: "Linear",
    length: 40,
    offRoadLength: 40,
    continent: "Australia",
    farOutGuideUrl: "https://faroutguides.com/overland-track-map/",
    trailAssociation: {
      name: "Tasmanian Parks and Wildlife Service",
      url: "https://parks.tas.gov.au/explore-our-parks/cradle-mountain/overland-track",
    },
    terminusA: {
      name: "Southern Terminus",
      country: "AU",
      city: "Lake St Clair",
      region: "Tasmania",
      location: {
        latitude: -42.1168524782245,
        longitude: 146.17278604662647,
      },
      startDate: { month: 12, day: 1 },
    },
    terminusB: {
      name: "Ronny Creek Carpark",
      country: "AU",
      city: "Cradle Mountain",
      region: "Tasmania",
      location: {
        latitude: 145.94925417146916,
        longitude: -41.63535926023452,
      },
      startDate: { month: 12, day: 1 },
    },
  },
  {
    slug: "bibbulmun-track",
    name: "Bibbulmun Track",
    type: "Linear",
    length: 623,
    offRoadLength: null,
    continent: "Australia",
    farOutGuideUrl: "https://faroutguides.com/bibbulmun-track-map/",
    trailAssociation: {
      name: "Bibbulmun Track Foundation",
      url: "https://www.bibbulmuntrack.org.au/",
    },
    terminusA: {
      name: "Northern Terminus",
      country: "AU",
      city: "Kalamunda",
      region: "Western Australia",
      location: {
        latitude: -31.959053544858854,
        longitude: 116.0583162031077,
      },
      startDate: { month: 4, day: 1 },
    },
    terminusB: {
      name: "Southern Terminus",
      country: "AU",
      city: "Albany",
      region: "Western Autralia",
      location: {
        latitude: -35.02286264868417,
        longitude: 117.88313582330085,
      },
      startDate: { month: 4, day: 1 },
    },
  },
  {
    slug: "annapurna-circuit",
    name: "Annapurna Circuit",
    type: "Linear",
    length: 160,
    offRoadLength: 120,
    continent: "Asia",
    trailAssociation: null,
    farOutGuideUrl: null,
    terminusA: {
      name: "Eastern Terminus",
      country: "NP",
      city: "Bhulbhule",
      region: "Gandaki",
      location: {
        latitude: 28.2919871741505,
        longitude: 84.37662505114945,
      },
      startDate: { month: 10, day: 1 },
    },
    terminusB: {
      name: "Nayapul Trekking Starting Point",
      country: "NP",
      city: "Nayapul",
      region: "Salyan",
      location: {
        latitude: 28.29645212258597,
        longitude: 83.76767539109402,
      },
      startDate: { month: 10, day: 1 },
    },
  },
  {
    slug: "tmb",
    name: "Tour du Mont Blanc",
    aliases: ["TMB"],
    type: "Loop",
    length: 105,
    offRoadLength: 105,
    continent: "Europe",
    farOutGuideUrl: "https://faroutguides.com/tour-du-mont-blanc-map/",
    trailAssociation: null,
    terminusA: {
      name: "Les Houches Trailhead",
      country: "FR",
      city: "Les Houches",
      region: "Provence-Alpes-Côte d'Azur",
      location: {
        latitude: 45.89043990314168,
        longitude: 6.798559234215089,
      },
      startDate: { month: 6, day: 15 },
    },
  },
  {
    slug: "camino-frances",
    name: "Camino Frances (Camino De Santiago)",
    aliases: ["The French Way"],
    type: "Linear",
    length: 490,
    offRoadLength: null,
    continent: "Europe",
    trailAssociation: null,
    farOutGuideUrl: "https://faroutguides.com/camino-de-santiago-map/",
    terminusA: {
      name: "Pilgrim Information Office SJPP",
      country: "FR",
      city: "Saint-Jean-Pied-de-Port",
      region: "Nouvelle Aquitaine",
      location: {
        latitude: 43.1635848848777,
        longitude: -1.235808284659247,
      },
      startDate: { month: 4, day: 1 },
    },
    terminusB: {
      name: "Cathedral of Santiago de Compostela",
      country: "ES",
      city: "Santiago de Compostela",
      region: "Galicia",
      location: {
        latitude: 42.880635488173176,
        longitude: -8.544646566334398,
      },
      startDate: { month: 4, day: 1 },
    },
  },
  {
    slug: "allegany-trail",
    name: "Allegany Trail",
    type: "Linear",
    length: 311,
    offRoadLength: null,
    continent: "North America",
    trailAssociation: {
      name: "West Virginia Scenic Trails Association",
      url: "https://www.wvscenictrails.org/",
    },
    farOutGuideUrl: "https://faroutguides.com/allegheny-trail-map/",
    terminusA: {
      name: "Northern Trailhead",
      country: "US",
      city: "Bruceton Mills",
      region: "West Virginia",
      location: {
        latitude: 39.72100152917134,
        longitude: -79.70061157741559,
      },
      startDate: null,
    },
    terminusB: {
      name: "Southern Terminus",
      country: "US",
      city: "Ripplemead",
      region: "Virginia",
      location: {
        latitude: 37.44111084433142,
        longitude: -80.61919160070696,
      },
      startDate: null,
    },
  },
  {
    slug: "czech-trail",
    name: "Czech Trail",
    type: "Loop",
    length: 1210,
    offRoadLength: null,
    continent: "Europe",
    trailAssociation: {
      name: "Czech Trail",
      url: "https://www.stezkaceskem.cz/en/",
    },
    farOutGuideUrl: "https://faroutguides.com/czech-trail/",
    terminusA: {
      name: "Czech-German Border Duty Free",
      country: "CZ",
      city: "Rozvadov",
      region: "Rozvadov",
      location: {
        latitude: 49.66006998957655,
        longitude: 12.535180100099485,
      },
      startDate: null,
    },
  },
  {
    slug: "milford-track",
    name: "Milford Track",
    type: "Linear",
    length: 33.2,
    offRoadLength: null,
    continent: "Oceania",
    trailAssociation: {
      name: "Department of Conservation",
      url: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/fiordland/places/fiordland-national-park/things-to-do/tracks/milford-track/",
    },
    farOutGuideUrl: "https://app.faroutguides.com/guides/Milford%20Track",
    terminusA: {
      name: "Glade Wharf",
      country: "NZ",
      city: "Southland",
      region: "Southland",
      location: {
        latitude: -44.93173374465815,
        longitude: 167.9301133426562,
      },
      startDate: { month: 11, day: 1 },
    },
    terminusB: {
      name: "Sandfly Point",
      country: "NZ",
      city: "Southland",
      region: "Southland",
      location: {
        latitude: -44.68352534856122, 
        longitude: 167.9024617368894,
      },
      startDate: { month: 11, day: 1 },
    },
  },
];
