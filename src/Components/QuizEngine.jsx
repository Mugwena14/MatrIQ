import React, { useState } from 'react';
import styles from '../App.module.css'; 
import BeatLoad from './Spinner'; 

const rawQuizData = [
  // ===== Easy Difficulty =====
  {
    id: 1,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Define the term 'weather'.",
    answerOptions: [
      { answerText: "The condition of the atmosphere at a specific time and place", isCorrect: true },
      { answerText: "The long-term average of temperature and rainfall", isCorrect: false },
      { answerText: "The study of rocks and minerals", isCorrect: false },
      { answerText: "A sudden change in tectonic plates", isCorrect: false }
    ],
    explanation: "Weather refers to the short-term conditions of the atmosphere, such as temperature, humidity, precipitation, and wind.",
    image: null
  },
  {
    id: 2,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which layer of the atmosphere contains almost all weather events?",
    answerOptions: [
      { answerText: "Troposphere", isCorrect: true },
      { answerText: "Stratosphere", isCorrect: false },
      { answerText: "Mesosphere", isCorrect: false },
      { answerText: "Thermosphere", isCorrect: false }
    ],
    explanation: "The troposphere is the lowest layer of the atmosphere where nearly all weather phenomena occur.",
    image: null
  },
  {
    id: 3,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Name the instrument used to measure air pressure.",
    answerOptions: [
      { answerText: "Barometer", isCorrect: true },
      { answerText: "Anemometer", isCorrect: false },
      { answerText: "Hygrometer", isCorrect: false },
      { answerText: "Thermometer", isCorrect: false }
    ],
    explanation: "A barometer measures atmospheric pressure, which helps forecast weather changes.",
    image: null
  },
  {
    id: 4,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which gas in the atmosphere is the most abundant?",
    answerOptions: [
      { answerText: "Nitrogen", isCorrect: true },
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Carbon dioxide", isCorrect: false },
      { answerText: "Argon", isCorrect: false }
    ],
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere.",
    image: null
  },
  {
    id: 5,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Identify the main energy source that drives the Earth's weather systems.",
    answerOptions: [
      { answerText: "The Sun", isCorrect: true },
      { answerText: "The Moon", isCorrect: false },
      { answerText: "Volcanoes", isCorrect: false },
      { answerText: "Ocean tides", isCorrect: false }
    ],
    explanation: "Solar energy heats Earth's surface unevenly, driving winds and weather patterns.",
    image: null
  },
  {
    id: 6,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the term for precipitation that falls as ice pellets?",
    answerOptions: [
      { answerText: "Sleet", isCorrect: true },
      { answerText: "Hail", isCorrect: false },
      { answerText: "Snow", isCorrect: false },
      { answerText: "Freezing rain", isCorrect: false }
    ],
    explanation: "Sleet consists of small ice pellets that form when raindrops freeze before hitting the ground.",
    image: null
  },
  {
    id: 7,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Name the process by which water changes from liquid to gas.",
    answerOptions: [
      { answerText: "Evaporation", isCorrect: true },
      { answerText: "Condensation", isCorrect: false },
      { answerText: "Sublimation", isCorrect: false },
      { answerText: "Precipitation", isCorrect: false }
    ],
    explanation: "Evaporation is the process where water turns into water vapor, driven by heat from the Sun.",
    image: null
  },
  {
    id: 8,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which ocean current warms the climate of northwestern Europe?",
    answerOptions: [
      { answerText: "Gulf Stream", isCorrect: true },
      { answerText: "California Current", isCorrect: false },
      { answerText: "Humboldt Current", isCorrect: false },
      { answerText: "Canary Current", isCorrect: false }
    ],
    explanation: "The Gulf Stream carries warm water from the tropics to northwestern Europe, moderating its climate.",
    image: null
  },
  {
    id: 9,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the term for a long period of significantly less rainfall than average?",
    answerOptions: [
      { answerText: "Drought", isCorrect: true },
      { answerText: "Monsoon", isCorrect: false },
      { answerText: "Flood", isCorrect: false },
      { answerText: "Cyclone", isCorrect: false }
    ],
    explanation: "A drought occurs when an area experiences a prolonged shortage of rainfall.",
    image: null
  },
  {
    id: 10,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What type of cloud is thin, wispy, and found at high altitudes?",
    answerOptions: [
      { answerText: "Cirrus", isCorrect: true },
      { answerText: "Cumulus", isCorrect: false },
      { answerText: "Stratus", isCorrect: false },
      { answerText: "Nimbus", isCorrect: false }
    ],
    explanation: "Cirrus clouds are high-altitude clouds made mostly of ice crystals.",
    image: null
  },
  {
    id: 11,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which wind belt lies between 30° and 60° latitude?",
    answerOptions: [
      { answerText: "Westerlies", isCorrect: true },
      { answerText: "Trade winds", isCorrect: false },
      { answerText: "Polar easterlies", isCorrect: false },
      { answerText: "Monsoon winds", isCorrect: false }
    ],
    explanation: "The westerlies blow from the west to the east in the mid-latitudes.",
    image: null
  },
  {
    id: 12,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the difference between weather and climate?",
    answerOptions: [
      { answerText: "Weather is short-term; climate is long-term", isCorrect: true },
      { answerText: "Weather is long-term; climate is short-term", isCorrect: false },
      { answerText: "Both mean the same thing", isCorrect: false },
      { answerText: "Climate refers to daily changes", isCorrect: false }
    ],
    explanation: "Weather refers to short-term atmospheric conditions, while climate describes the long-term average patterns.",
    image: null
  },
  {
    id: 13,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Which month marks the start of summer in the Southern Hemisphere?",
    answerOptions: [
      { answerText: "December", isCorrect: true },
      { answerText: "June", isCorrect: false },
      { answerText: "September", isCorrect: false },
      { answerText: "March", isCorrect: false }
    ],
    explanation: "Summer in the Southern Hemisphere begins in December due to the tilt of Earth's axis.",
    image: null
  },
  {
    id: 14,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "What is the general name for winds that blow toward the equator from the subtropical highs?",
    answerOptions: [
      { answerText: "Trade winds", isCorrect: true },
      { answerText: "Westerlies", isCorrect: false },
      { answerText: "Polar easterlies", isCorrect: false },
      { answerText: "Jet stream", isCorrect: false }
    ],
    explanation: "Trade winds are steady winds that blow from subtropical high-pressure belts toward the equator.",
    image: null
  },
  {
    id: 15,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Name the boundary where two different air masses meet.",
    answerOptions: [
      { answerText: "Front", isCorrect: true },
      { answerText: "Trough", isCorrect: false },
      { answerText: "Isobar", isCorrect: false },
      { answerText: "Thermocline", isCorrect: false }
    ],
    explanation: "A front is the boundary between two air masses with different temperatures and humidity levels.",
    image: null
  }, // ===== Medium Difficulty =====
  {
    id: 16,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "State the main two factors that determine a region’s climate.",
    answerOptions: [
      { answerText: "Temperature and precipitation", isCorrect: true },
      { answerText: "Latitude and longitude", isCorrect: false },
      { answerText: "Humidity and wind speed", isCorrect: false },
      { answerText: "Ocean currents and air pressure", isCorrect: false }
    ],
    explanation: "Temperature and precipitation are the two primary factors that shape a region's climate.",
    image: null
  },
  {
    id: 17,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Which global wind pattern is deflected to the right in the Northern Hemisphere due to Earth’s rotation?",
    answerOptions: [
      { answerText: "Trade winds", isCorrect: false },
      { answerText: "Westerlies", isCorrect: true },
      { answerText: "Polar easterlies", isCorrect: false },
      { answerText: "Jet stream", isCorrect: false }
    ],
    explanation: "The Coriolis effect causes westerlies to be deflected to the right in the Northern Hemisphere.",
    image: null
  },
  {
    id: 18,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Explain what is meant by 'orographic rainfall'.",
    answerOptions: [
      { answerText: "Rainfall caused by air rising over mountains", isCorrect: true },
      { answerText: "Rainfall due to high humidity at night", isCorrect: false },
      { answerText: "Rainfall caused by a cold front", isCorrect: false },
      { answerText: "Rainfall due to tropical storms", isCorrect: false }
    ],
    explanation: "Orographic rainfall occurs when moist air is forced to rise over mountains, cooling and condensing into precipitation.",
    image: null
  },
  {
    id: 19,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "What is the Köppen climate classification primarily based on?",
    answerOptions: [
      { answerText: "Temperature and precipitation patterns", isCorrect: true },
      { answerText: "Wind speed and humidity", isCorrect: false },
      { answerText: "Air pressure and ocean currents", isCorrect: false },
      { answerText: "Latitude and longitude", isCorrect: false }
    ],
    explanation: "The Köppen system classifies climates based on long-term temperature and precipitation data.",
    image: null
  },
  {
    id: 20,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "What is El Niño, and how does it affect global weather patterns?",
    answerOptions: [
      { answerText: "A warming of Pacific Ocean waters affecting weather worldwide", isCorrect: true },
      { answerText: "A cooling of the Atlantic Ocean", isCorrect: false },
      { answerText: "A seasonal reversal of wind in Asia", isCorrect: false },
      { answerText: "A type of tropical cyclone", isCorrect: false }
    ],
    explanation: "El Niño is characterized by warmer-than-average sea surface temperatures in the central and eastern Pacific, disrupting global weather patterns.",
    image: null
  },
  {
    id: 21,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Name the atmospheric phenomenon that leads to strong winds high in the troposphere, moving from west to east.",
    answerOptions: [
      { answerText: "Jet streams", isCorrect: true },
      { answerText: "Trade winds", isCorrect: false },
      { answerText: "Westerlies", isCorrect: false },
      { answerText: "Monsoon winds", isCorrect: false }
    ],
    explanation: "Jet streams are narrow bands of strong winds in the upper troposphere, flowing west to east.",
    image: null
  },
  {
    id: 22,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Which type of front is associated with thunderstorms and heavy rain over a short period?",
    answerOptions: [
      { answerText: "Cold front", isCorrect: true },
      { answerText: "Warm front", isCorrect: false },
      { answerText: "Occluded front", isCorrect: false },
      { answerText: "Stationary front", isCorrect: false }
    ],
    explanation: "Cold fronts push warm air upward quickly, often creating thunderstorms and heavy rain.",
    image: null
  },
  {
    id: 23,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Describe the role of the greenhouse effect in maintaining Earth’s temperature.",
    answerOptions: [
      { answerText: "It traps heat in the atmosphere, keeping Earth warm enough for life", isCorrect: true },
      { answerText: "It blocks sunlight, cooling the Earth", isCorrect: false },
      { answerText: "It reflects all heat into space", isCorrect: false },
      { answerText: "It removes carbon dioxide from the atmosphere", isCorrect: false }
    ],
    explanation: "The greenhouse effect allows sunlight in but traps some heat, preventing Earth from freezing.",
    image: null
  },
  {
    id: 24,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "What is the average sea-level air pressure in hectopascals (hPa)?",
    answerOptions: [
      { answerText: "1013 hPa", isCorrect: true },
      { answerText: "100 hPa", isCorrect: false },
      { answerText: "500 hPa", isCorrect: false },
      { answerText: "2000 hPa", isCorrect: false }
    ],
    explanation: "Standard sea-level pressure is 1013 hPa (or 1013 millibars).",
    image: null
  },
  {
    id: 25,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Define 'relative humidity'.",
    answerOptions: [
      { answerText: "The amount of water vapor in the air compared to the maximum possible", isCorrect: true },
      { answerText: "The total mass of water vapor in the atmosphere", isCorrect: false },
      { answerText: "The temperature at which condensation begins", isCorrect: false },
      { answerText: "The rate of evaporation", isCorrect: false }
    ],
    explanation: "Relative humidity is expressed as a percentage of the maximum amount of water vapor air can hold at a given temperature.",
    image: null
  },
  {
    id: 26,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "What is a monsoon, and in which regions is it most common?",
    answerOptions: [
      { answerText: "A seasonal wind shift bringing heavy rain, common in South Asia", isCorrect: true },
      { answerText: "A type of hurricane in the Pacific Ocean", isCorrect: false },
      { answerText: "A constant wind blowing from east to west", isCorrect: false },
      { answerText: "A drought caused by wind changes", isCorrect: false }
    ],
    explanation: "Monsoons are seasonal wind patterns that bring wet and dry periods, most notable in South Asia.",
    image: null
  },
  {
    id: 27,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Explain the difference between a tropical cyclone and a mid-latitude cyclone.",
    answerOptions: [
      { answerText: "Tropical cyclones form over warm oceans; mid-latitude cyclones form along frontal boundaries", isCorrect: true },
      { answerText: "Both are the same weather event", isCorrect: false },
      { answerText: "Tropical cyclones occur in winter; mid-latitude in summer", isCorrect: false },
      { answerText: "Mid-latitude cyclones are stronger than tropical cyclones", isCorrect: false }
    ],
    explanation: "Tropical cyclones are fueled by warm ocean water, while mid-latitude cyclones form where cold and warm air masses meet.",
    image: null
  },
  {
    id: 28,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Which climate type is characterized by low rainfall, high evaporation rates, and large diurnal temperature ranges?",
    answerOptions: [
      { answerText: "Desert climate", isCorrect: true },
      { answerText: "Tropical rainforest", isCorrect: false },
      { answerText: "Mediterranean climate", isCorrect: false },
      { answerText: "Tundra climate", isCorrect: false }
    ],
    explanation: "Desert climates receive very little rainfall, experience high evaporation, and have extreme temperature differences between day and night.",
    image: null
  },
  {
    id: 29,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "How does the Coriolis effect influence wind direction in the Southern Hemisphere?",
    answerOptions: [
      { answerText: "It deflects winds to the left", isCorrect: true },
      { answerText: "It deflects winds to the right", isCorrect: false },
      { answerText: "It stops winds completely", isCorrect: false },
      { answerText: "It makes winds blow in circles", isCorrect: false }
    ],
    explanation: "In the Southern Hemisphere, the Coriolis effect causes moving air to be deflected to the left of its path.",
    image: null
  },
  {
    id: 30,
    topic: "Climate",
    difficulty: "Medium",
    questionText: "Which natural disaster’s intensity is measured using the Saffir-Simpson scale?",
    answerOptions: [
      { answerText: "Hurricanes", isCorrect: true },
      { answerText: "Tornadoes", isCorrect: false },
      { answerText: "Earthquakes", isCorrect: false },
      { answerText: "Floods", isCorrect: false }
    ],
    explanation: "The Saffir-Simpson scale measures hurricane intensity based on wind speed and potential damage.",
    image: null
  },

  // ===== Hard Difficulty =====
  {
    id: 31,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Explain the seasonal migration of the Intertropical Convergence Zone (ITCZ) and its impact on rainfall patterns.",
    answerOptions: [
      { answerText: "It shifts north and south with the Sun, affecting tropical rainfall", isCorrect: true },
      { answerText: "It moves only during El Niño events", isCorrect: false },
      { answerText: "It remains fixed at the equator", isCorrect: false },
      { answerText: "It shifts only during winter", isCorrect: false }
    ],
    explanation: "The ITCZ migrates toward the hemisphere receiving more solar energy, bringing wet and dry seasons to tropical areas.",
    image: null
  },
  {
    id: 32,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Compare the characteristics of cold fronts and occluded fronts.",
    answerOptions: [
      { answerText: "Cold fronts bring rapid weather changes; occluded fronts occur when a cold front overtakes a warm front", isCorrect: true },
      { answerText: "Both are the same type of front", isCorrect: false },
      { answerText: "Cold fronts always bring sunny weather", isCorrect: false },
      { answerText: "Occluded fronts occur in deserts only", isCorrect: false }
    ],
    explanation: "Cold fronts force warm air to rise quickly, while occluded fronts form when a cold front catches up with a warm front, lifting it off the ground.",
    image: null
  },
  {
    id: 33,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Define 'latent heat' and describe its role in storm development.",
    answerOptions: [
      { answerText: "Heat released during condensation, fueling storms", isCorrect: true },
      { answerText: "Heat from sunlight absorbed by oceans", isCorrect: false },
      { answerText: "Heat from volcanic eruptions", isCorrect: false },
      { answerText: "Heat lost during evaporation", isCorrect: false }
    ],
    explanation: "Latent heat is released when water vapor condenses, providing energy for storm systems.",
    image: null
  },
  {
    id: 34,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Explain how the urban heat island effect modifies local climates.",
    answerOptions: [
      { answerText: "Cities trap heat, making them warmer than surrounding areas", isCorrect: true },
      { answerText: "Cities are always cooler due to buildings", isCorrect: false },
      { answerText: "Cities cause more rainfall but not temperature changes", isCorrect: false },
      { answerText: "Cities block wind flow only", isCorrect: false }
    ],
    explanation: "Urban areas absorb and retain more heat due to concrete, asphalt, and human activity, raising local temperatures.",
    image: null
  },
  {
    id: 35,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "What is La Niña, and how does it differ from El Niño in terms of global impact?",
    answerOptions: [
      { answerText: "A cooling of Pacific waters with opposite effects to El Niño", isCorrect: true },
      { answerText: "A warming of Atlantic waters", isCorrect: false },
      { answerText: "A wind reversal in Africa", isCorrect: false },
      { answerText: "A drought caused by volcanoes", isCorrect: false }
    ],
    explanation: "La Niña features cooler-than-average Pacific waters, leading to weather patterns opposite to El Niño.",
    image: null
  },
  {
    id: 36,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Describe the role of thermohaline circulation in regulating Earth’s climate.",
    answerOptions: [
      { answerText: "It redistributes heat via global ocean currents", isCorrect: true },
      { answerText: "It traps heat in the atmosphere", isCorrect: false },
      { answerText: "It prevents ocean evaporation", isCorrect: false },
      { answerText: "It regulates only equatorial climate", isCorrect: false }
    ],
    explanation: "Thermohaline circulation moves warm and cold water globally, influencing climate patterns.",
    image: null
  },
  {
    id: 37,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Identify and explain the formation of katabatic winds.",
    answerOptions: [
      { answerText: "Cold, dense air flowing downhill due to gravity", isCorrect: true },
      { answerText: "Warm air rising up a mountain", isCorrect: false },
      { answerText: "Winds caused by hurricanes", isCorrect: false },
      { answerText: "Ocean breezes moving inland", isCorrect: false }
    ],
    explanation: "Katabatic winds form when dense, cold air descends slopes under the influence of gravity.",
    image: null
  },
  {
    id: 38,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "What is meant by 'cyclogenesis', and in which regions is it most common?",
    answerOptions: [
      { answerText: "The development of cyclones, common in mid-latitudes", isCorrect: true },
      { answerText: "The death of cyclones", isCorrect: false },
      { answerText: "The rotation of ocean currents", isCorrect: false },
      { answerText: "The movement of trade winds", isCorrect: false }
    ],
    explanation: "Cyclogenesis is the process of cyclone formation, most often occurring in mid-latitude regions.",
    image: null
  },
  {
    id: 39,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Define 'teleconnection' in the context of climate science.",
    answerOptions: [
      { answerText: "Climate anomalies linked across distant regions", isCorrect: true },
      { answerText: "The connection between the ocean and atmosphere locally", isCorrect: false },
      { answerText: "Radio waves used in weather forecasting", isCorrect: false },
      { answerText: "Seasonal monsoon winds", isCorrect: false }
    ],
    explanation: "A teleconnection is a climate pattern where changes in one part of the world influence weather in distant regions.",
    image: null
  },
  {
    id: 40,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "What climatic conditions are associated with the subtropical high-pressure belts?",
    answerOptions: [
      { answerText: "Dry, desert-like conditions", isCorrect: true },
      { answerText: "Heavy rainfall year-round", isCorrect: false },
      { answerText: "Constant thunderstorms", isCorrect: false },
      { answerText: "Frequent snowfall", isCorrect: false }
    ],
    explanation: "Subtropical highs are regions of descending dry air, creating deserts around 30° latitude.",
    image: null
  },
  {
    id: 41,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Explain how the tilt of Earth’s axis leads to seasonal changes.",
    answerOptions: [
      { answerText: "Different parts of Earth receive varying sunlight during the year", isCorrect: true },
      { answerText: "Earth’s orbit changes shape", isCorrect: false },
      { answerText: "The Moon blocks sunlight", isCorrect: false },
      { answerText: "The Sun moves closer and farther from Earth", isCorrect: false }
    ],
    explanation: "Earth’s 23.5° tilt causes seasonal variation in sunlight across the planet.",
    image: null
  },
  {
    id: 42,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "How can ice core samples be used to study past climates?",
    answerOptions: [
      { answerText: "They trap air bubbles showing past atmospheric conditions", isCorrect: true },
      { answerText: "They measure ocean salinity", isCorrect: false },
      { answerText: "They record volcanic eruptions only", isCorrect: false },
      { answerText: "They track earthquake activity", isCorrect: false }
    ],
    explanation: "Ice cores contain trapped gases and isotopes that reveal past temperatures and greenhouse gas levels.",
    image: null
  },
  {
    id: 43,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "What is the difference between absolute humidity and specific humidity?",
    answerOptions: [
      { answerText: "Absolute is water vapor per volume; specific is per mass of air", isCorrect: true },
      { answerText: "They mean the same thing", isCorrect: false },
      { answerText: "Absolute is per mass; specific is per volume", isCorrect: false },
      { answerText: "Specific humidity changes daily", isCorrect: false }
    ],
    explanation: "Absolute humidity measures vapor per cubic meter of air; specific humidity measures vapor per kilogram of air.",
    image: null
  },
  {
    id: 44,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Discuss how ENSO events can cause drought in some areas and flooding in others.",
    answerOptions: [
      { answerText: "They shift rainfall patterns globally, creating wet and dry anomalies", isCorrect: true },
      { answerText: "They increase snowfall only", isCorrect: false },
      { answerText: "They affect only South America", isCorrect: false },
      { answerText: "They cause volcanic activity", isCorrect: false }
    ],
    explanation: "ENSO events alter atmospheric circulation, redistributing rainfall and leading to drought in some regions and floods in others.",
    image: null
  },
  {
    id: 45,
    topic: "Climate",
    difficulty: "Hard",
    questionText: "Explain the mechanism behind the monsoon reversal in South Asia.",
    answerOptions: [
      { answerText: "Seasonal temperature differences between land and sea cause wind reversal", isCorrect: true },
      { answerText: "Earth`s tilt changes direction", isCorrect: false },
      { answerText: "Volcanic eruptions block sunlight", isCorrect: false },
      { answerText: "Ocean tides reverse flow", isCorrect: false }
    ],
    explanation: "In summer, the land heats faster than the ocean, drawing moist winds inland; in winter, the reverse occurs.",
    image: null
  },
  {
    // GEOMORPHOLOGY
    "id": 46,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What is geomorphology the study of?",
    "answerOptions": [
      { "answerText": "The oceans", "isCorrect": false },
      { "answerText": "The atmosphere", "isCorrect": false },
      { "answerText": "Animal habitats", "isCorrect": false },
      { "answerText": "The Earth's surface features and processes", "isCorrect": true }
    ],
    "explanation": "Geomorphology studies the origin, evolution, and configuration of landforms on Earth's surface.",
    "image": null
  },
  {
    "id": 47,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "Which process involves the breakdown of rocks without changing their chemical composition?",
    "answerOptions": [
      { "answerText": "Deposition", "isCorrect": false },
      { "answerText": "Physical weathering", "isCorrect": true },
      { "answerText": "Chemical weathering", "isCorrect": false },
      { "answerText": "Erosion", "isCorrect": false }
    ],
    "explanation": "Physical (mechanical) weathering breaks rocks into smaller pieces without altering their chemical makeup.",
    "image": null
  },
  {
    "id": 48,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What type of rock forms from cooled lava or magma?",
    "answerOptions": [
      { "answerText": "Sedimentary", "isCorrect": false },
      { "answerText": "Basaltic", "isCorrect": false },
      { "answerText": "Igneous", "isCorrect": true },
      { "answerText": "Metamorphic", "isCorrect": false }
    ],
    "explanation": "Igneous rocks form when molten rock cools and solidifies.",
    "image": null
  },
  {
    "id": 49,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "Which agents are responsible for erosion?",
    "answerOptions": [
      { "answerText": "Only water", "isCorrect": false },
      { "answerText": "Water, wind, ice, and gravity", "isCorrect": true },
      { "answerText": "Only wind and ice", "isCorrect": false },
      { "answerText": "Earthquakes", "isCorrect": false }
    ],
    "explanation": "Erosion is caused by moving water, wind, ice, and gravitational forces.",
    "image": null
  },
  {
    "id": 50,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What is the process by which sediments are dropped in a new location?",
    "answerOptions": [
      { "answerText": "Deposition", "isCorrect": true },
      { "answerText": "Transportation", "isCorrect": false },
      { "answerText": "Erosion", "isCorrect": false },
      { "answerText": "Weathering", "isCorrect": false }
    ],
    "explanation": "Deposition occurs when transported sediments are laid down in a new place.",
    "image": null
  },
  {
    "id": 51,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "Which river feature forms where a river meets the sea?",
    "answerOptions": [
      { "answerText": "Oxbow lake", "isCorrect": false },
      { "answerText": "Floodplain", "isCorrect": false },
      { "answerText": "Meander", "isCorrect": false },
      { "answerText": "Delta", "isCorrect": true }
    ],
    "explanation": "A delta is formed when a river deposits sediments at its mouth.",
    "image": null
  },
  {
    "id": 52,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "Which scale measures the magnitude of earthquakes?",
    "answerOptions": [
      { "answerText": "Richter scale", "isCorrect": true },
      { "answerText": "Beaufort scale", "isCorrect": false },
      { "answerText": "Mercalli scale", "isCorrect": false },
      { "answerText": "Saffir-Simpson scale", "isCorrect": false }
    ],
    "explanation": "The Richter scale measures the energy released by an earthquake.",
    "image": null
  },
  {
    "id": 53,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "Which type of volcano has gently sloping sides and is built by low-viscosity lava flows?",
    "answerOptions": [
      { "answerText": "Caldera", "isCorrect": false },
      { "answerText": "Cinder cone", "isCorrect": false },
      { "answerText": "Shield volcano", "isCorrect": true },
      { "answerText": "Stratovolcano", "isCorrect": false }
    ],
    "explanation": "Shield volcanoes are broad and gently sloped, formed by fluid basaltic lava.",
    "image": null
  },
  {
    "id": 54,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What is the term for a bend in a river?",
    "answerOptions": [
      { "answerText": "Oxbow", "isCorrect": false },
      { "answerText": "Channel", "isCorrect": false },
      { "answerText": "Meander", "isCorrect": true },
      { "answerText": "Delta", "isCorrect": false }
    ],
    "explanation": "A meander is a winding curve or bend in a river channel.",
    "image": null
  },
  {
    "id": 55,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What is the term for the large, flat area on either side of a river that floods periodically?",
    "answerOptions": [
      { "answerText": "Plateau", "isCorrect": false },
      { "answerText": "Floodplain", "isCorrect": true },
      { "answerText": "Terrace", "isCorrect": false },
      { "answerText": "Delta", "isCorrect": false }
    ],
    "explanation": "A floodplain is an area of low-lying ground near a river, prone to flooding.",
    "image": null
  },
  {
    "id": 56,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What is the process of rocks breaking down due to chemical reactions with water or air?",
    "answerOptions": [
      { "answerText": "Physical weathering", "isCorrect": false },
      { "answerText": "Erosion", "isCorrect": false },
      { "answerText": "Chemical weathering", "isCorrect": true },
      { "answerText": "Abrasion", "isCorrect": false }
    ],
    "explanation": "Chemical weathering involves changes in rock composition due to chemical reactions.",
    "image": null
  },
  {
    "id": 57,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What type of glacier covers large areas of land, such as in Greenland and Antarctica?",
    "answerOptions": [
      { "answerText": "Ice cap", "isCorrect": false },
      { "answerText": "Ice sheet", "isCorrect": true },
      { "answerText": "Valley glacier", "isCorrect": false },
      { "answerText": "Piedmont glacier", "isCorrect": false }
    ],
    "explanation": "Ice sheets are massive glaciers covering continental-sized areas.",
    "image": null
  },
  {
    "id": 58,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "What is the process by which sediments are moved from one place to another?",
    "answerOptions": [
      { "answerText": "Eruption", "isCorrect": false },
      { "answerText": "Transportation", "isCorrect": true },
      { "answerText": "Weathering", "isCorrect": false },
      { "answerText": "Deposition", "isCorrect": false }
    ],
    "explanation": "Transportation is the movement of weathered material by wind, water, ice, or gravity.",
    "image": null
  },
  {
    "id": 59,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "Which type of rock forms from layers of sediment compressed over time?",
    "answerOptions": [
      { "answerText": "Basaltic", "isCorrect": false },
      { "answerText": "Sedimentary", "isCorrect": true },
      { "answerText": "Igneous", "isCorrect": false },
      { "answerText": "Metamorphic", "isCorrect": false }
    ],
    "explanation": "Sedimentary rocks form from accumulated and compacted sediments.",
    "image": null
  },
  {
    "id": 60,
    "topic": "Geomorphology",
    "difficulty": "Easy",
    "questionText": "Which type of weathering involves the freezing and thawing of water in cracks?",
    "answerOptions": [
      { "answerText": "Oxidation", "isCorrect": false },
      { "answerText": "Frost wedging", "isCorrect": true },
      { "answerText": "Hydration", "isCorrect": false },
      { "answerText": "Chemical dissolution", "isCorrect": false }
    ],
    "explanation": "Frost wedging occurs when water freezes in rock cracks, expands, and breaks the rock apart.",
    "image": null
  },
  // ===== Medium Difficulty =====
   {
    id: 61,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "What is the main force responsible for mass movement on slopes?",
    answerOptions: [
      { answerText: "Wind", isCorrect: false },
      { answerText: "Gravity", isCorrect: true },
      { answerText: "Tectonic activity", isCorrect: false },
      { answerText: "River erosion", isCorrect: false }
    ],
    explanation: "Gravity is the driving force behind all forms of mass movement, causing material to move downslope.",
    image: null
  },
  {
    id: 62,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which type of mass movement is characterised by the slow downslope movement of soil?",
    answerOptions: [
      { answerText: "Rockfall", isCorrect: false },
      { answerText: "Soil creep", isCorrect: true },
      { answerText: "Mudflow", isCorrect: false },
      { answerText: "Landslide", isCorrect: false }
    ],
    explanation: "Soil creep is the slow, gradual movement of soil down a slope due to gravity.",
    image: null
  },
  {
    id: 63,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "What is the main agent of erosion in a V-shaped valley?",
    answerOptions: [
      { answerText: "Wind", isCorrect: false },
      { answerText: "River water", isCorrect: true },
      { answerText: "Glacial ice", isCorrect: false },
      { answerText: "Ocean waves", isCorrect: false }
    ],
    explanation: "Rivers erode vertically to form V-shaped valleys, particularly in their upper courses.",
    image: null
  },
  {
    id: 64,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "What is the process by which a river channel becomes wider due to erosion?",
    answerOptions: [
      { answerText: "Lateral erosion", isCorrect: true },
      { answerText: "Vertical erosion", isCorrect: false },
      { answerText: "Headward erosion", isCorrect: false },
      { answerText: "Deposition", isCorrect: false }
    ],
    explanation: "Lateral erosion occurs when a river erodes its banks, widening the channel.",
    image: null
  },
  {
    id: 65,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which type of weathering occurs when minerals in rocks react with oxygen?",
    answerOptions: [
      { answerText: "Oxidation", isCorrect: true },
      { answerText: "Hydration", isCorrect: false },
      { answerText: "Carbonation", isCorrect: false },
      { answerText: "Exfoliation", isCorrect: false }
    ],
    explanation: "Oxidation is a type of chemical weathering where minerals react with oxygen, often producing rust-like stains.",
    image: null
  },
  {
    id: 66,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "What is the main feature formed by river deposition at the mouth of a river?",
    answerOptions: [
      { answerText: "Delta", isCorrect: true },
      { answerText: "Levee", isCorrect: false },
      { answerText: "Oxbow lake", isCorrect: false },
      { answerText: "Floodplain", isCorrect: false }
    ],
    explanation: "A delta forms when a river deposits sediments at its mouth, usually where it enters a body of still water.",
    image: null
  },
  {
    id: 67,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which process lengthens a river's course by eroding upstream?",
    answerOptions: [
      { answerText: "Headward erosion", isCorrect: true },
      { answerText: "Vertical erosion", isCorrect: false },
      { answerText: "Lateral erosion", isCorrect: false },
      { answerText: "Deposition", isCorrect: false }
    ],
    explanation: "Headward erosion occurs when a river erodes at its source, extending its length.",
    image: null
  },
  {
    id: 68,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "What type of drainage pattern develops on uniform rock structure with gentle slopes?",
    answerOptions: [
      { answerText: "Radial", isCorrect: false },
      { answerText: "Dendritic", isCorrect: true },
      { answerText: "Trellis", isCorrect: false },
      { answerText: "Centripetal", isCorrect: false }
    ],
    explanation: "Dendritic patterns resemble tree branches and develop where the rock structure is uniform.",
    image: null
  },
  {
    id: 69,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which feature is formed when a meander loop is cut off from the main river channel?",
    answerOptions: [
      { answerText: "Oxbow lake", isCorrect: true },
      { answerText: "Levee", isCorrect: false },
      { answerText: "Delta", isCorrect: false },
      { answerText: "Floodplain", isCorrect: false }
    ],
    explanation: "An oxbow lake forms when a river cuts through the neck of a meander, isolating the loop.",
    image: null
  },
  {
    id: 70,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which type of rock is most resistant to weathering?",
    answerOptions: [
      { answerText: "Granite", isCorrect: true },
      { answerText: "Shale", isCorrect: false },
      { answerText: "Limestone", isCorrect: false },
      { answerText: "Sandstone", isCorrect: false }
    ],
    explanation: "Granite is a hard, crystalline igneous rock that resists weathering.",
    image: null
  },
  {
    id: 71,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which factor increases the rate of chemical weathering?",
    answerOptions: [
      { answerText: "Warm, wet climate", isCorrect: true },
      { answerText: "Cold, dry climate", isCorrect: false },
      { answerText: "High altitude", isCorrect: false },
      { answerText: "Strong winds", isCorrect: false }
    ],
    explanation: "Chemical weathering is faster in warm, moist environments where reactions occur more readily.",
    image: null
  },
  {
    id: 72,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "What is the downslope movement of saturated soil called?",
    answerOptions: [
      { answerText: "Mudflow", isCorrect: true },
      { answerText: "Soil creep", isCorrect: false },
      { answerText: "Rockfall", isCorrect: false },
      { answerText: "Avalanche", isCorrect: false }
    ],
    explanation: "A mudflow is the rapid movement of water-saturated soil and debris down a slope.",
    image: null
  },
  {
    id: 73,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which drainage pattern develops in areas of alternating hard and soft rock?",
    answerOptions: [
      { answerText: "Trellis", isCorrect: true },
      { answerText: "Dendritic", isCorrect: false },
      { answerText: "Radial", isCorrect: false },
      { answerText: "Rectangular", isCorrect: false }
    ],
    explanation: "Trellis patterns form where rivers flow along softer rock and join at right angles with main streams.",
    image: null
  },
  {
    id: 74,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "What is the process of rocks breaking down due to repeated heating and cooling?",
    answerOptions: [
      { answerText: "Exfoliation", isCorrect: true },
      { answerText: "Oxidation", isCorrect: false },
      { answerText: "Hydration", isCorrect: false },
      { answerText: "Carbonation", isCorrect: false }
    ],
    explanation: "Exfoliation is a type of physical weathering where rock layers peel away due to temperature changes.",
    image: null
  },
  {
    id: 75,
    topic: "Geomorphology",
    difficulty: "Medium",
    questionText: "Which stage of a river is characterised by a wide floodplain and meanders?",
    answerOptions: [
      { answerText: "Lower course", isCorrect: true },
      { answerText: "Upper course", isCorrect: false },
      { answerText: "Middle course", isCorrect: false },
      { answerText: "Youthful stage", isCorrect: false }
    ],
    explanation: "The lower course of a river features a wide floodplain, meanders, and deposition.",
    image: null
  },
  // Hard difficulty questions
  {
    id: 76,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "What is the long-term impact of river capture on the misfit stream?",
    answerOptions: [
      { answerText: "Reduction in discharge and valley underfit", isCorrect: true },
      { answerText: "Increase in sediment load", isCorrect: false },
      { answerText: "Formation of a braided channel", isCorrect: false },
      { answerText: "Development of an oxbow lake", isCorrect: false }
    ],
    explanation: "A misfit stream loses most of its water supply after river capture, leading to a smaller discharge and underfit valley.",
    image: null
  },
  {
    id: 77,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "Which erosion process involves the grinding action of sediments carried by a river?",
    answerOptions: [
      { answerText: "Attrition", isCorrect: false },
      { answerText: "Abrasion", isCorrect: true },
      { answerText: "Solution", isCorrect: false },
      { answerText: "Hydraulic action", isCorrect: false }
    ],
    explanation: "Abrasion occurs when sediments carried by a river scrape and grind against the bed and banks.",
    image: null
  },
  {
    id: 78,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "In the context of slope stability, what does the angle of repose refer to?",
    answerOptions: [
      { answerText: "The steepest slope angle at which material remains stable", isCorrect: true },
      { answerText: "The slope angle after mass movement", isCorrect: false },
      { answerText: "The slope angle formed by river deposition", isCorrect: false },
      { answerText: "The angle of maximum erosion", isCorrect: false }
    ],
    explanation: "The angle of repose is the maximum slope gradient at which loose material can remain stable without sliding.",
    image: null
  },
  {
    id: 79,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "Which drainage pattern is commonly associated with volcanic cones?",
    answerOptions: [
      { answerText: "Radial", isCorrect: true },
      { answerText: "Dendritic", isCorrect: false },
      { answerText: "Trellis", isCorrect: false },
      { answerText: "Rectangular", isCorrect: false }
    ],
    explanation: "Radial drainage develops when streams flow outward from a central high point, such as a volcanic cone.",
    image: null
  },
  {
    id: 80,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "Which process causes the head of one river valley to erode into another, resulting in river capture?",
    answerOptions: [
      { answerText: "Headward erosion", isCorrect: true },
      { answerText: "Lateral erosion", isCorrect: false },
      { answerText: "Vertical erosion", isCorrect: false },
      { answerText: "Stream piracy", isCorrect: false }
    ],
    explanation: "Headward erosion at the source of a stream can intersect another river's headwaters, leading to river capture.",
    image: null
  },
  {
    id: 81,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "What is the main distinguishing feature of a rejuvenated river?",
    answerOptions: [
      { answerText: "Knickpoint or river terrace formation", isCorrect: true },
      { answerText: "Wide meanders", isCorrect: false },
      { answerText: "Braided channels", isCorrect: false },
      { answerText: "Delta formation", isCorrect: false }
    ],
    explanation: "Rejuvenation often creates knickpoints and terraces due to renewed vertical erosion.",
    image: null
  },
  {
    id: 82,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "What landform results from the headward erosion of two streams toward each other, leaving a steep ridge?",
    answerOptions: [
      { answerText: "Interfluve", isCorrect: false },
      { answerText: "Watershed", isCorrect: false },
      { answerText: "Water gap", isCorrect: false },
      { answerText: "Col", isCorrect: true }
    ],
    explanation: "A col is a low point or pass in a ridge formed when headward erosion causes two valleys to meet.",
    image: null
  },
  {
    id: 83,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "Which factor can trigger slope failure even if the slope is below its angle of repose?",
    answerOptions: [
      { answerText: "Increased pore water pressure", isCorrect: true },
      { answerText: "Vegetation growth", isCorrect: false },
      { answerText: "Reduced precipitation", isCorrect: false },
      { answerText: "Lower sediment load", isCorrect: false }
    ],
    explanation: "Excess water increases pore pressure, reducing friction between particles and triggering slope failure.",
    image: null
  },
  {
    id: 84,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "What is the correct term for a river channel that splits into several smaller channels which rejoin later?",
    answerOptions: [
      { answerText: "Braided channel", isCorrect: true },
      { answerText: "Meander", isCorrect: false },
      { answerText: "Anabranch", isCorrect: false },
      { answerText: "Oxbow", isCorrect: false }
    ],
    explanation: "A braided channel is formed when a river is overloaded with sediment and divides into multiple channels.",
    image: null
  },
  {
    id: 85,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "In river profiles, what is the graded profile aiming to achieve?",
    answerOptions: [
      { answerText: "A smooth concave profile where erosion and deposition are balanced", isCorrect: true },
      { answerText: "A stepped profile caused by waterfalls", isCorrect: false },
      { answerText: "A straight profile with no meanders", isCorrect: false },
      { answerText: "A convex profile due to tectonic uplift", isCorrect: false }
    ],
    explanation: "A graded profile represents a balance between erosion and deposition, producing a smooth concave slope.",
    image: null
  },
  {
    id: 86,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "Which landform is created when a river cuts through a resistant rock ridge instead of flowing around it?",
    answerOptions: [
      { answerText: "Water gap", isCorrect: true },
      { answerText: "Gorge", isCorrect: false },
      { answerText: "Col", isCorrect: false },
      { answerText: "Interfluve", isCorrect: false }
    ],
    explanation: "A water gap is a pass where a river flows through a ridge of resistant rock, often due to antecedent drainage.",
    image: null
  },
  {
    id: 87,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "Which term describes the lowering of a landscape due to long-term weathering and erosion?",
    answerOptions: [
      { answerText: "Denudation", isCorrect: true },
      { answerText: "Deposition", isCorrect: false },
      { answerText: "Rejuvenation", isCorrect: false },
      { answerText: "Transportation", isCorrect: false }
    ],
    explanation: "Denudation refers to the overall lowering of the Earth's surface by weathering, erosion, and mass wasting.",
    image: null
  },
  {
    id: 88,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "What is the main cause of entrenched meanders?",
    answerOptions: [
      { answerText: "Rapid vertical erosion following uplift", isCorrect: true },
      { answerText: "Lateral erosion in the lower course", isCorrect: false },
      { answerText: "Excessive sediment deposition", isCorrect: false },
      { answerText: "Tectonic subsidence", isCorrect: false }
    ],
    explanation: "When a river is uplifted, it cuts down rapidly into its floodplain, creating entrenched meanders.",
    image: null
  },
  {
    id: 89,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "What is the long-term effect of tectonic uplift on a mature river system?",
    answerOptions: [
      { answerText: "Rejuvenation and renewed vertical erosion", isCorrect: true },
      { answerText: "Meander cut-offs and oxbow lakes", isCorrect: false },
      { answerText: "Increased lateral erosion", isCorrect: false },
      { answerText: "Delta progradation", isCorrect: false }
    ],
    explanation: "Tectonic uplift raises the land, increasing the river's potential energy and causing renewed vertical erosion.",
    image: null
  },
  {
    id: 90,
    topic: "Geomorphology",
    difficulty: "Hard",
    questionText: "What is the scientific term for a river that existed before the current landscape was uplifted?",
    answerOptions: [
      { answerText: "Antecedent river", isCorrect: true },
      { answerText: "Misfit stream", isCorrect: false },
      { answerText: "Subsequent river", isCorrect: false },
      { answerText: "Superimposed river", isCorrect: false }
    ],
    explanation: "An antecedent river maintains its course while the land is uplifted, cutting through the rising terrain.",
    image: null
  }
  

];

// Normalize mixed schemas into flat structure
function normalizeQuizData(data) {
  return data.map(item => {
    const base = item.questions || item;
    return {
      id: item.id,
      topic: item.topic,
      difficulty: item.difficulty,
      questionText: base.questionText,
      answerOptions: base.answerOptions,
      explanation: base.explanation,
      image: base.image
    };
  });
}

const quizData = normalizeQuizData(rawQuizData);

const QuizEngine = () => {
  function fetchQuiz({ topic, difficulty, limit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = quizData
          .filter(q => q.topic === topic && q.difficulty === difficulty)
          .slice(0, limit);
        resolve(filtered);
      }, 500);
    });
  }

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [requested, setRequested] = useState(false);
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [length, setLength] = useState();

  function handleGenerate(e) {
    e.preventDefault();
    if (!topic || !difficulty || !length) return;

    setLoading(true);
    setRequested(true);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);

    fetchQuiz({ topic, difficulty, limit: parseInt(length) }).then(data => {
      setQuestions(data);
      setLoading(false);
    });
  }

  function handleNextQ() {
    setCurrentQuestion(prev => prev + 1);
    setAnswered(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  }

  function handleAnswerOption(correct, index) {
    setAnswered(true);
    setSelectedAnswer(index);
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
  }

  const current = questions[currentQuestion];

  return (
    <div>
      {requested ? (
        <div className={styles.quiz}>
          {loading ? (
            <BeatLoad />
          ) : (
            <div>
              <h2>Geo Paper 1 2024</h2>

              {current.image && (
                <img src={current.image} alt="Question" className={styles.questionImage} />
              )}

              <div className={styles.inQuiz}>
                <h3>{current.questionText}</h3>

                {current.answerOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerOption(option.isCorrect, index)}
                    disabled={answered && selectedAnswer !== index}
                    className={`${styles.answerBtn} ${
                      answered
                        ? option.isCorrect
                          ? styles.correct
                          : selectedAnswer === index
                          ? styles.incorrect
                          : styles.empty
                        : styles.empty
                    }`}
                  >
                    {option.answerText}
                  </button>
                ))}

                <div>
                  <button
                    className={styles.nxtQ}
                    onClick={handleNextQ}
                    disabled={!answered || currentQuestion >= questions.length - 1}
                  >
                    {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish'}
                  </button>
                </div>

                <div className={styles.explanation}>
                  {answered && isCorrect === false && current.explanation && (
                    <p>{current.explanation}</p>
                  )}
                </div>

                <div className={styles.qNo}>
                  <p>Question {currentQuestion + 1} of {questions.length}</p>
                  <p>Score: {score}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.gen}>
          <div className={styles.genBox}>
            <form className={styles.form} onSubmit={handleGenerate}>
              <h1>Generate Quiz</h1>

              <div className={styles.field}>
                <select 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                >
                  <option value="">Choose Topic</option>
                  <option value="Climate">Climate & Weather</option>
                  <option value="Geomorphology">Geomorphology</option>
                </select>
              </div>

              <div className={styles.field}>
                <select 
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  required
                >
                  <option value="">Choose Difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>

              <div className={styles.field}>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  placeholder="No of Qs. Max = 10"
                  min={1}
                  max={10}
                  required
                />
              </div>

              <button type="submit">Generate</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizEngine;
