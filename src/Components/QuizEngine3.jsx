import React, { useState } from 'react';
import styles from '../App.module.css'; 
import BeatLoad from './Spinner';
import { toast } from 'react-toastify'
import { useTheme } from '../Contexts/ThemeContext'
import { Link } from 'react-router-dom'



const rawQuizData = [
  // ===== Easy Difficulty =====
  {
    id: 1,
    topic: "Climate",
    difficulty: "Easy",
    questionText: "Define the term 'weather'.",
    answerOptions: [
      { answerText: "The long-term average of temperature and rainfall", isCorrect: false },
      { answerText: "The study of rocks and minerals", isCorrect: false },
      { answerText: "The condition of the atmosphere at a specific time and place", isCorrect: true },
      { answerText: "A sudden change in tectonic plates", isCorrect: false },
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
      { answerText: "Stratosphere", isCorrect: false },
      { answerText: "Troposphere", isCorrect: true },
      { answerText: "Mesosphere", isCorrect: false },
      { answerText: "Thermosphere", isCorrect: false },
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
      { answerText: "Anemometer", isCorrect: false },
      { answerText: "Hygrometer", isCorrect: false },
      { answerText: "Thermometer", isCorrect: false },
      { answerText: "Barometer", isCorrect: true },
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
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Carbon dioxide", isCorrect: false },
      { answerText: "Nitrogen", isCorrect: true },
      { answerText: "Argon", isCorrect: false },
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
      { answerText: "Ocean tides", isCorrect: false },
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
      { answerText: "Hail", isCorrect: false },
      { answerText: "Snow", isCorrect: false },
      { answerText: "Freezing rain", isCorrect: false },
      { answerText: "Sleet", isCorrect: true },
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
      { answerText: "Condensation", isCorrect: false },
      { answerText: "Sublimation", isCorrect: false },
      { answerText: "Evaporation", isCorrect: true },
      { answerText: "Precipitation", isCorrect: false },
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
      { answerText: "California Current", isCorrect: false },
      { answerText: "Humboldt Current", isCorrect: false },
      { answerText: "Canary Current", isCorrect: false },
      { answerText: "Gulf Stream", isCorrect: true },
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
      { answerText: "Monsoon", isCorrect: false },
      { answerText: "Flood", isCorrect: false },
      { answerText: "Drought", isCorrect: true },
      { answerText: "Cyclone", isCorrect: false },
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
      { answerText: "Cumulus", isCorrect: false },
      { answerText: "Stratus", isCorrect: false },
      { answerText: "Cirrus", isCorrect: true },
      { answerText: "Nimbus", isCorrect: false },
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
      { answerText: "Trade winds", isCorrect: false },
      { answerText: "Polar easterlies", isCorrect: false },
      { answerText: "Monsoon winds", isCorrect: false },
      { answerText: "Westerlies", isCorrect: true },
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
      { answerText: "Weather is long-term; climate is short-term", isCorrect: false },
      { answerText: "Weather is short-term; climate is long-term", isCorrect: true },
      { answerText: "Both mean the same thing", isCorrect: false },
      { answerText: "Climate refers to daily changes", isCorrect: false },
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
      { answerText: "June", isCorrect: false },
      { answerText: "September", isCorrect: false },
      { answerText: "December", isCorrect: true },
      { answerText: "March", isCorrect: false },
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
      { answerText: "Jet stream", isCorrect: false },
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
      { answerText: "Trough", isCorrect: false },
      { answerText: "Isobar", isCorrect: false },
      { answerText: "Thermocline", isCorrect: false },
      { answerText: "Front", isCorrect: true },
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
      { answerText: "Latitude and longitude", isCorrect: false },
      { answerText: "Humidity and wind speed", isCorrect: false },
      { answerText: "Temperature and precipitation", isCorrect: true },
      { answerText: "Ocean currents and air pressure", isCorrect: false },
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
      { answerText: "Polar easterlies", isCorrect: false },
      { answerText: "Jet stream", isCorrect: false },
      { answerText: "Westerlies", isCorrect: true },
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
      { answerText: "Rainfall due to high humidity at night", isCorrect: false },
      { answerText: "Rainfall caused by a cold front", isCorrect: false },
      { answerText: "Rainfall caused by air rising over mountains", isCorrect: true },
      { answerText: "Rainfall due to tropical storms", isCorrect: false },
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
      { answerText: "Latitude and longitude", isCorrect: false },
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
      { answerText: "A cooling of the Atlantic Ocean", isCorrect: false },
      { answerText: "A seasonal reversal of wind in Asia", isCorrect: false },
      { answerText: "A warming of Pacific Ocean waters affecting weather worldwide", isCorrect: true },
      { answerText: "A type of tropical cyclone", isCorrect: false },
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
      { answerText: "Trade winds", isCorrect: false },
      { answerText: "Jet streams", isCorrect: true },
      { answerText: "Westerlies", isCorrect: false },
      { answerText: "Monsoon winds", isCorrect: false },
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
      { answerText: "Warm front", isCorrect: false },
      { answerText: "Cold front", isCorrect: true },
      { answerText: "Occluded front", isCorrect: false },
      { answerText: "Stationary front", isCorrect: false },
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
      { answerText: "It blocks sunlight, cooling the Earth", isCorrect: false },
      { answerText: "It reflects all heat into space", isCorrect: false },
      { answerText: "It removes carbon dioxide from the atmosphere", isCorrect: false },
      { answerText: "It traps heat in the atmosphere, keeping Earth warm enough for life", isCorrect: true },
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
      { answerText: "100 hPa", isCorrect: false },
      { answerText: "1013 hPa", isCorrect: true },
      { answerText: "500 hPa", isCorrect: false },
      { answerText: "2000 hPa", isCorrect: false },
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
      { answerText: "The total mass of water vapor in the atmosphere", isCorrect: false },
      { answerText: "The temperature at which condensation begins", isCorrect: false },
      { answerText: "The rate of evaporation", isCorrect: false },
      { answerText: "The amount of water vapor in the air compared to the maximum possible", isCorrect: true },
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
      { answerText: "A type of hurricane in the Pacific Ocean", isCorrect: false },
      { answerText: "A constant wind blowing from east to west", isCorrect: false },
      { answerText: "A seasonal wind shift bringing heavy rain, common in South Asia", isCorrect: true },
      { answerText: "A drought caused by wind changes", isCorrect: false },
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
      { answerText: "Both are the same weather event", isCorrect: false },
      { answerText: "Tropical cyclones occur in winter; mid-latitude in summer", isCorrect: false },
      { answerText: "Tropical cyclones form over warm oceans; mid-latitude cyclones form along frontal boundaries", isCorrect: true },
      { answerText: "Mid-latitude cyclones are stronger than tropical cyclones", isCorrect: false },
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
      { answerText: "Tropical rainforest", isCorrect: false },
      { answerText: "Desert climate", isCorrect: true },
      { answerText: "Mediterranean climate", isCorrect: false },
      { answerText: "Tundra climate", isCorrect: false },
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
      { answerText: "It deflects winds to the right", isCorrect: false },
      { answerText: "It stops winds completely", isCorrect: false },
      { answerText: "It deflects winds to the left", isCorrect: true },
      { answerText: "It makes winds blow in circles", isCorrect: false },
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
      { answerText: "Tornadoes", isCorrect: false },
      { answerText: "Earthquakes", isCorrect: false },
      { answerText: "Floods", isCorrect: false },
      { answerText: "Hurricanes", isCorrect: true },
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
      { answerText: "It moves only during El Niño events", isCorrect: false },
      { answerText: "It remains fixed at the equator", isCorrect: false },
      { answerText: "It shifts only during winter", isCorrect: false },
      { answerText: "It shifts north and south with the Sun, affecting tropical rainfall", isCorrect: true },
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
      { answerText: "Both are the same type of front", isCorrect: false },
      { answerText: "Cold fronts always bring sunny weather", isCorrect: false },
      { answerText: "Occluded fronts occur in deserts only", isCorrect: false },
      { answerText: "Cold fronts bring rapid weather changes; occluded fronts occur when a cold front overtakes a warm front", isCorrect: true },
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
      { answerText: "Heat from sunlight absorbed by oceans", isCorrect: false },
      { answerText: "Heat released during condensation, fueling storms", isCorrect: true },
      { answerText: "Heat from volcanic eruptions", isCorrect: false },
      { answerText: "Heat lost during evaporation", isCorrect: false },
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
      { answerText: "Cities are always cooler due to buildings", isCorrect: false },
      { answerText: "Cities cause more rainfall but not temperature changes", isCorrect: false },
      { answerText: "Cities trap heat, making them warmer than surrounding areas", isCorrect: true },
      { answerText: "Cities block wind flow only", isCorrect: false },
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
      { answerText: "A warming of Atlantic waters", isCorrect: false },
      { answerText: "A wind reversal in Africa", isCorrect: false },
      { answerText: "A cooling of Pacific waters with opposite effects to El Niño", isCorrect: true },
      { answerText: "A drought caused by volcanoes", isCorrect: false },
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
      { answerText: "It regulates only equatorial climate", isCorrect: false },
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
      { answerText: "Warm air rising up a mountain", isCorrect: false },
      { answerText: "Cold, dense air flowing downhill due to gravity", isCorrect: true },
      { answerText: "Winds caused by hurricanes", isCorrect: false },
      { answerText: "Ocean breezes moving inland", isCorrect: false },
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
      { answerText: "The death of cyclones", isCorrect: false },
      { answerText: "The rotation of ocean currents", isCorrect: false },
      { answerText: "The development of cyclones, common in mid-latitudes", isCorrect: true },
      { answerText: "The movement of trade winds", isCorrect: false },
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
      { answerText: "The connection between the ocean and atmosphere locally", isCorrect: false },
      { answerText: "Radio waves used in weather forecasting", isCorrect: false },
      { answerText: "Seasonal monsoon winds", isCorrect: false },
      { answerText: "Climate anomalies linked across distant regions", isCorrect: true },
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
      { answerText: "Heavy rainfall year-round", isCorrect: false },
      { answerText: "Constant thunderstorms", isCorrect: false },
      { answerText: "Dry, desert-like conditions", isCorrect: true },
      { answerText: "Frequent snowfall", isCorrect: false },
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
      { answerText: "Earth’s orbit changes shape", isCorrect: false },
      { answerText: "The Moon blocks sunlight", isCorrect: false },
      { answerText: "The Sun moves closer and farther from Earth", isCorrect: false },
      { answerText: "Different parts of Earth receive varying sunlight during the year", isCorrect: true },
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
      { answerText: "They measure ocean salinity", isCorrect: false },
      { answerText: "They record volcanic eruptions only", isCorrect: false },
      { answerText: "They track earthquake activity", isCorrect: false },
      { answerText: "They trap air bubbles showing past atmospheric conditions", isCorrect: true },
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
      { answerText: "They mean the same thing", isCorrect: false },
      { answerText: "Absolute is per mass; specific is per volume", isCorrect: false },
      { answerText: "Specific humidity changes daily", isCorrect: false },
      { answerText: "Absolute is water vapor per volume; specific is per mass of air", isCorrect: true },
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
      { answerText: "They increase snowfall only", isCorrect: false },
      { answerText: "They affect only South America", isCorrect: false },
      { answerText: "They cause volcanic activity", isCorrect: false },
      { answerText: "They shift rainfall patterns globally, creating wet and dry anomalies", isCorrect: true },
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
      { answerText: "Earth`s tilt changes direction", isCorrect: false },
      { answerText: "Seasonal temperature differences between land and sea cause wind reversal", isCorrect: true },
      { answerText: "Volcanic eruptions block sunlight", isCorrect: false },
      { answerText: "Ocean tides reverse flow", isCorrect: false },
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
      { "answerText": "The Earth's surface features and processes", "isCorrect": true },
      { "answerText": "The atmosphere", "isCorrect": false },
      { "answerText": "Animal habitats", "isCorrect": false },
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
      { "answerText": "Chemical weathering", "isCorrect": false },
      { "answerText": "Physical weathering", "isCorrect": true },
      { "answerText": "Erosion", "isCorrect": false },
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
      { "answerText": "Metamorphic", "isCorrect": false },
      { "answerText": "Igneous", "isCorrect": true },
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
      { "answerText": "Water, wind, ice, and gravity", "isCorrect": true },
      { "answerText": "Only water", "isCorrect": false },
      { "answerText": "Only wind and ice", "isCorrect": false },
      { "answerText": "Earthquakes", "isCorrect": false },
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
      { "answerText": "Transportation", "isCorrect": false },
      { "answerText": "Erosion", "isCorrect": false },
      { "answerText": "Weathering", "isCorrect": false },
      { "answerText": "Deposition", "isCorrect": true },
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
      { "answerText": "Delta", "isCorrect": true },
      { "answerText": "Floodplain", "isCorrect": false },
      { "answerText": "Meander", "isCorrect": false },
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
      { "answerText": "Beaufort scale", "isCorrect": false },
      { "answerText": "Mercalli scale", "isCorrect": false },
      { "answerText": "Richter scale", "isCorrect": true },
      { "answerText": "Saffir-Simpson scale", "isCorrect": false },
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
      { "answerText": "Stratovolcano", "isCorrect": false },
      { "answerText": "Shield volcano", "isCorrect": true },
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
      { "answerText": "Delta", "isCorrect": false },
      { "answerText": "Meander", "isCorrect": true },
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
      { "answerText": "Terrace", "isCorrect": false },
      { "answerText": "Delta", "isCorrect": false },
      { "answerText": "Floodplain", "isCorrect": true },
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
      { "answerText": "Chemical weathering", "isCorrect": true },
      { "answerText": "Physical weathering", "isCorrect": false },
      { "answerText": "Erosion", "isCorrect": false },
      { "answerText": "Abrasion", "isCorrect": false },
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
      { "answerText": "Valley glacier", "isCorrect": false },
      { "answerText": "Piedmont glacier", "isCorrect": false },
      { "answerText": "Ice sheet", "isCorrect": true },
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
      { "answerText": "Weathering", "isCorrect": false },
      { "answerText": "Deposition", "isCorrect": false },
      { "answerText": "Transportation", "isCorrect": true },
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
      { "answerText": "Igneous", "isCorrect": false },
      { "answerText": "Metamorphic", "isCorrect": false },
      { "answerText": "Sedimentary", "isCorrect": true },
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
      { "answerText": "Hydration", "isCorrect": false },
      { "answerText": "Chemical dissolution", "isCorrect": false },
      { "answerText": "Frost wedging", "isCorrect": true },
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
      { answerText: "Gravity", isCorrect: true },
      { answerText: "Wind", isCorrect: false },
      { answerText: "Tectonic activity", isCorrect: false },
      { answerText: "River erosion", isCorrect: false },
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
      { answerText: "Landslide", isCorrect: false },
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
      { answerText: "Ocean waves", isCorrect: false },
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
      { answerText: "Vertical erosion", isCorrect: false },
      { answerText: "Headward erosion", isCorrect: false },
      { answerText: "Lateral erosion", isCorrect: true },
      { answerText: "Deposition", isCorrect: false },
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
      { answerText: "Hydration", isCorrect: false },
      { answerText: "Carbonation", isCorrect: false },
      { answerText: "Oxidation", isCorrect: true },
      { answerText: "Exfoliation", isCorrect: false },
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
      { answerText: "Levee", isCorrect: false },
      { answerText: "Oxbow lake", isCorrect: false },
      { answerText: "Floodplain", isCorrect: false },
      { answerText: "Delta", isCorrect: true },
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
      { answerText: "Vertical erosion", isCorrect: false },
      { answerText: "Headward erosion", isCorrect: true },
      { answerText: "Lateral erosion", isCorrect: false },
      { answerText: "Deposition", isCorrect: false },
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
      { answerText: "Dendritic", isCorrect: true },
      { answerText: "Radial", isCorrect: false },
      { answerText: "Trellis", isCorrect: false },
      { answerText: "Centripetal", isCorrect: false },
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
      { answerText: "Floodplain", isCorrect: false },
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
      { answerText: "Shale", isCorrect: false },
      { answerText: "Granite", isCorrect: true },
      { answerText: "Limestone", isCorrect: false },
      { answerText: "Sandstone", isCorrect: false },
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
      { answerText: "Cold, dry climate", isCorrect: false },
      { answerText: "High altitude", isCorrect: false },
      { answerText: "Strong winds", isCorrect: false },
      { answerText: "Warm, wet climate", isCorrect: true },
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
      { answerText: "Soil creep", isCorrect: false },
      { answerText: "Rockfall", isCorrect: false },
      { answerText: "Mudflow", isCorrect: true },
      { answerText: "Avalanche", isCorrect: false },
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
      { answerText: "Dendritic", isCorrect: false },
      { answerText: "Trellis", isCorrect: true },
      { answerText: "Radial", isCorrect: false },
      { answerText: "Rectangular", isCorrect: false },
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
      { answerText: "Oxidation", isCorrect: false },
      { answerText: "Hydration", isCorrect: false },
      { answerText: "Exfoliation", isCorrect: true },
      { answerText: "Carbonation", isCorrect: false },
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
      { answerText: "Upper course", isCorrect: false },
      { answerText: "Middle course", isCorrect: false },
      { answerText: "Lower course", isCorrect: true },
      { answerText: "Youthful stage", isCorrect: false },
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
      { answerText: "Increase in sediment load", isCorrect: false },
      { answerText: "Formation of a braided channel", isCorrect: false },
      { answerText: "Reduction in discharge and valley underfit", isCorrect: true },
      { answerText: "Development of an oxbow lake", isCorrect: false },
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
      { answerText: "Solution", isCorrect: false },
      { answerText: "Abrasion", isCorrect: true },
      { answerText: "Hydraulic action", isCorrect: false },
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
      { answerText: "The slope angle after mass movement", isCorrect: false },
      { answerText: "The slope angle formed by river deposition", isCorrect: false },
      { answerText: "The steepest slope angle at which material remains stable", isCorrect: true },
      { answerText: "The angle of maximum erosion", isCorrect: false },
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
      { answerText: "Dendritic", isCorrect: false },
      { answerText: "Radial", isCorrect: true },
      { answerText: "Trellis", isCorrect: false },
      { answerText: "Rectangular", isCorrect: false },
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
      { answerText: "Stream piracy", isCorrect: false },
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
      { answerText: "Wide meanders", isCorrect: false },
      { answerText: "Braided channels", isCorrect: false },
      { answerText: "Delta formation", isCorrect: false },
      { answerText: "Knickpoint or river terrace formation", isCorrect: true },
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
      { answerText: "Col", isCorrect: true },
      { answerText: "Watershed", isCorrect: false },
      { answerText: "Water gap", isCorrect: false },
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
      { answerText: "Lower sediment load", isCorrect: false },
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
      { answerText: "Meander", isCorrect: false },
      { answerText: "Anabranch", isCorrect: false },
      { answerText: "Braided channel", isCorrect: true },
      { answerText: "Oxbow", isCorrect: false },
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
      { answerText: "A stepped profile caused by waterfalls", isCorrect: false },
      { answerText: "A straight profile with no meanders", isCorrect: false },
      { answerText: "A convex profile due to tectonic uplift", isCorrect: false },
      { answerText: "A smooth concave profile where erosion and deposition are balanced", isCorrect: true },
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
      { answerText: "Gorge", isCorrect: false },
      { answerText: "Col", isCorrect: false },
      { answerText: "Water gap", isCorrect: true },
      { answerText: "Interfluve", isCorrect: false },
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
      { answerText: "Deposition", isCorrect: false },
      { answerText: "Rejuvenation", isCorrect: false },
      { answerText: "Denudation", isCorrect: true },
      { answerText: "Transportation", isCorrect: false },
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
      { answerText: "Lateral erosion in the lower course", isCorrect: false },
      { answerText: "Excessive sediment deposition", isCorrect: false },
      { answerText: "Rapid vertical erosion following uplift", isCorrect: true },
      { answerText: "Tectonic subsidence", isCorrect: false },
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
      { answerText: "Delta progradation", isCorrect: false },
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
      { answerText: "Misfit stream", isCorrect: false },
      { answerText: "Subsequent river", isCorrect: false },
      { answerText: "Antecedent river", isCorrect: true },
      { answerText: "Superimposed river", isCorrect: false },
    ],
    explanation: "An antecedent river maintains its course while the land is uplifted, cutting through the rising terrain.",
    image: null
  },
  // SETTLEMENT GEOGRAPHY
    {
    id: 91,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which term describes a group of houses and buildings clustered together?",
    answerOptions: [
      { answerText: "Dispersed settlement", isCorrect: false },
      { answerText: "Linear settlement", isCorrect: false },
      { answerText: "Radial settlement", isCorrect: false },
      { answerText: "Nucleated settlement", isCorrect: true },
    ],
    explanation: "Nucleated settlements have buildings grouped closely together, often around a central point such as a market or church.",
    image: null
  },
  {
    id: 92,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which type of settlement is built along a transport route such as a road or river?",
    answerOptions: [
      { answerText: "Dispersed settlement", isCorrect: false },
      { answerText: "Linear settlement", isCorrect: true },
      { answerText: "Nucleated settlement", isCorrect: false },
      { answerText: "Scattered settlement", isCorrect: false },
    ],
    explanation: "Linear settlements develop along roads, rivers, or railways for easy access to transport and trade.",
    image: null
  },
  {
    id: 93,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "What does the term 'site' refer to in settlement geography?",
    answerOptions: [
      { answerText: "The surrounding region of a settlement", isCorrect: false },
      { answerText: "The actual land where a settlement is located", isCorrect: true },
      { answerText: "The economic role of a settlement", isCorrect: false },
      { answerText: "The political influence of a settlement", isCorrect: false },
    ],
    explanation: "Site refers to the specific piece of land and its physical characteristics where a settlement is built.",
    image: null
  },
  {
    id: 94,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which factor most commonly influences the location of early settlements?",
    answerOptions: [
      { answerText: "Access to internet", isCorrect: false },
      { answerText: "Presence of shopping malls", isCorrect: false },
      { answerText: "Availability of water", isCorrect: true },
      { answerText: "Political boundaries", isCorrect: false },
    ],
    explanation: "Water is a vital resource for drinking, farming, and transportation, making it key to settlement location.",
    image: null
  },
  {
    id: 95,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which of the following is an example of a rural settlement?",
    answerOptions: [
      { answerText: "Industrial estate", isCorrect: false },
      { answerText: "Central Business District", isCorrect: false },
      { answerText: "Port city", isCorrect: false },
      { answerText: "Farming village", isCorrect: true },
    ],
    explanation: "Rural settlements are found in the countryside and are often based on primary activities such as farming.",
    image: null
  },
  {
    id: 96,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "What does the term 'function' of a settlement refer to?",
    answerOptions: [
      { answerText: "Its main economic or social role", isCorrect: true },
      { answerText: "Its political boundaries", isCorrect: false },
      { answerText: "Its shape on a map", isCorrect: false },
      { answerText: "Its population size", isCorrect: false },
    ],
    explanation: "Function refers to the main purpose of a settlement, such as farming, trade, or industry.",
    image: null
  },
  {
    id: 97,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which urban land-use zone is typically located in the center of a city?",
    answerOptions: [
      { answerText: "Residential suburb", isCorrect: false },
      { answerText: "Central Business District", isCorrect: true },
      { answerText: "Industrial area", isCorrect: false },
      { answerText: "Rural-urban fringe", isCorrect: false },
    ],
    explanation: "The CBD is at the heart of a city and is the focus for business and commerce.",
    image: null
  },
  {
    id: 98,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which shape describes a settlement built in a circle around a central point?",
    answerOptions: [
      { answerText: "Linear", isCorrect: false },
      { answerText: "Nucleated", isCorrect: false },
      { answerText: "Radial", isCorrect: true },
      { answerText: "Dispersed", isCorrect: false },
    ],
    explanation: "Radial settlements grow outward in all directions from a central point, often a market or important building.",
    image: null
  },
  {
    id: 99,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "What is the main difference between rural and urban settlements?",
    answerOptions: [
      { answerText: "Climate and weather", isCorrect: false },
      { answerText: "Type of vegetation", isCorrect: false },
      { answerText: "Population size and function", isCorrect: true },
      { answerText: "Distance from the equator", isCorrect: false },
    ],
    explanation: "Urban settlements are larger and have more varied functions, while rural settlements are smaller and mainly rely on primary activities.",
    image: null
  },
  {
    id: 100,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "What does the term 'situation' refer to in settlement geography?",
    answerOptions: [
      { answerText: "The actual land where the settlement is built", isCorrect: false },
      { answerText: "The climate of a settlement", isCorrect: false },
      { answerText: "The political importance of a settlement", isCorrect: false },
      { answerText: "The position of a settlement relative to its surroundings", isCorrect: true },
    ],
    explanation: "Situation describes the location of a settlement in relation to other places and features.",
    image: null
  },
  {
    id: 101,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which settlement pattern is most common in farming areas with large fields?",
    answerOptions: [
      { answerText: "Dispersed settlement", isCorrect: true },
      { answerText: "Linear settlement", isCorrect: false },
      { answerText: "Nucleated settlement", isCorrect: false },
      { answerText: "Radial settlement", isCorrect: false },
    ],
    explanation: "In dispersed patterns, houses are spread out over large areas, often to access farmland.",
    image: null
  },
  {
    id: 102,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which of the following is an example of a secondary activity in settlements?",
    answerOptions: [
      { answerText: "Fishing", isCorrect: false },
      { answerText: "Farming", isCorrect: false },
      { answerText: "Manufacturing", isCorrect: true },
      { answerText: "Forestry", isCorrect: false },
    ],
    explanation: "Secondary activities involve manufacturing and processing of raw materials.",
    image: null
  },
  {
    id: 103,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which type of settlement is usually located along coasts and rivers for transport and trade?",
    answerOptions: [
      { answerText: "Mining settlement", isCorrect: false },
      { answerText: "Port settlement", isCorrect: true },
      { answerText: "Farming village", isCorrect: false },
      { answerText: "Tourist settlement", isCorrect: false },
    ],
    explanation: "Port settlements develop in areas with good water access for shipping and trade.",
    image: null
  },
  {
    id: 104,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which type of settlement shape is most common where roads intersect?",
    answerOptions: [
      { answerText: "Linear", isCorrect: false },
      { answerText: "Nucleated", isCorrect: false },
      { answerText: "Radial", isCorrect: true },
      { answerText: "Dispersed", isCorrect: false },
    ],
    explanation: "Radial settlements spread out from a central point such as a crossroads.",
    image: null
  },
  {
    id: 105,
    topic: "Settlement",
    difficulty: "Easy",
    questionText: "Which of the following is a primary activity in a rural settlement?",
    answerOptions: [
      { answerText: "Banking", isCorrect: false },
      { answerText: "Retail trade", isCorrect: false },
      { answerText: "Car manufacturing", isCorrect: false },
      { answerText: "Farming", isCorrect: true },
    ],
    explanation: "Primary activities involve extracting resources from nature, such as farming, mining, and fishing.",
    image: null
  },
  // MEDIUM
  {
    id: 106,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which factor often leads to the growth of informal settlements on the outskirts of cities?",
    answerOptions: [
      { answerText: "Declining birth rates", isCorrect: false },
      { answerText: "Increased agricultural mechanisation", isCorrect: false },
      { answerText: "Rural-urban migration", isCorrect: true },
      { answerText: "Urban renewal", isCorrect: false },
    ],
    explanation: "Many people migrate from rural to urban areas for job opportunities, leading to the expansion of informal housing.",
    image: null
  },
  {
    id: 107,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "What does the concept of 'urban sprawl' describe?",
    answerOptions: [
      { answerText: "Redevelopment of inner-city areas", isCorrect: false },
      { answerText: "Unplanned outward expansion of urban areas", isCorrect: true },
      { answerText: "Decline of old industrial zones", isCorrect: false },
      { answerText: "Concentration of businesses in the CBD", isCorrect: false },
    ],
    explanation: "Urban sprawl is the uncontrolled spread of built-up areas into rural land, often leading to increased commuting and loss of farmland.",
    image: null
  },
  {
    id: 108,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which urban land-use zone is most likely to contain old factories and warehouses?",
    answerOptions: [
      { answerText: "Transition zone", isCorrect: true },
      { answerText: "Residential suburb", isCorrect: false },
      { answerText: "Central Business District", isCorrect: false },
      { answerText: "Rural-urban fringe", isCorrect: false },
    ],
    explanation: "The transition zone lies between the CBD and residential areas and often contains older industries and lower-income housing.",
    image: null
  },
  {
    id: 109,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "What is the main aim of urban renewal projects?",
    answerOptions: [
      { answerText: "To improve and redevelop run-down urban areas", isCorrect: true },
      { answerText: "To expand urban sprawl", isCorrect: false },
      { answerText: "To reduce rural-urban migration", isCorrect: false },
      { answerText: "To establish new informal settlements", isCorrect: false },
    ],
    explanation: "Urban renewal focuses on improving infrastructure, housing, and services in decaying urban areas.",
    image: null
  },
  {
    id: 110,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which factor is the most important in the location of industrial areas in cities?",
    answerOptions: [
      { answerText: "Proximity to shopping malls", isCorrect: false },
      { answerText: "Availability of entertainment facilities", isCorrect: false },
      { answerText: "Accessibility to transport routes", isCorrect: true },
      { answerText: "Number of schools nearby", isCorrect: false },
    ],
    explanation: "Industries require efficient transport access for raw materials and distribution of products.",
    image: null
  },
  {
    id: 111,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "What is the term for the merging of towns and cities into one continuous built-up area?",
    answerOptions: [
      { answerText: "Urban fringe", isCorrect: false },
      { answerText: "Rural cluster", isCorrect: false },
      { answerText: "Conurbation", isCorrect: true },
      { answerText: "Suburbanisation", isCorrect: false },
    ],
    explanation: "Conurbations form when urban areas grow and merge into one large, continuous settlement.",
    image: null
  },
  {
    id: 112,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which factor can lead to urban decay in the CBD?",
    answerOptions: [
      { answerText: "Increase in public transport availability", isCorrect: false },
      { answerText: "Development of pedestrian zones", isCorrect: false },
      { answerText: "Introduction of green belts", isCorrect: false },
      { answerText: "Relocation of businesses to suburbs", isCorrect: true },
    ],
    explanation: "When businesses move to suburbs, the CBD can experience reduced activity and decline.",
    image: null
  },
  {
    id: 113,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which type of settlement develops mainly around a single economic activity, such as mining?",
    answerOptions: [
      { answerText: "Specialised settlement", isCorrect: true },
      { answerText: "Linear settlement", isCorrect: false },
      { answerText: "Nucleated settlement", isCorrect: false },
      { answerText: "Dispersed settlement", isCorrect: false },
    ],
    explanation: "Specialised settlements exist primarily to support one main function, such as mining towns or fishing villages.",
    image: null
  },
  {
    id: 114,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "What is the main function of a rural service centre?",
    answerOptions: [
      { answerText: "Produce manufactured goods", isCorrect: false },
      { answerText: "Serve as the CBD of a large city", isCorrect: false },
      { answerText: "Act as a tourist attraction", isCorrect: false },
      { answerText: "Provide goods and services to surrounding farming areas", isCorrect: true },
    ],
    explanation: "Rural service centres supply goods, markets, and services to the surrounding rural population.",
    image: null
  },
  {
    id: 115,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which planning approach tries to integrate housing, jobs, and transport to create sustainable cities?",
    answerOptions: [
      { answerText: "Integrated urban planning", isCorrect: true },
      { answerText: "Urban sprawl", isCorrect: false },
      { answerText: "Gentrification", isCorrect: false },
      { answerText: "Informal settlement upgrading", isCorrect: false },
    ],
    explanation: "Integrated planning aims to create cities where living, working, and services are located close together to reduce travel and environmental impact.",
    image: null
  },
  {
    id: 116,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which term describes the outward movement of middle-class families from inner cities to suburbs?",
    answerOptions: [
      { answerText: "Urbanisation", isCorrect: false },
      { answerText: "Counter-urbanisation", isCorrect: false },
      { answerText: "Suburbanisation", isCorrect: true },
      { answerText: "Decentralisation", isCorrect: false },
    ],
    explanation: "Suburbanisation is the movement of people from the city centre to residential areas on the outskirts.",
    image: null
  },
  {
    id: 117,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which transport improvement often leads to the development of edge cities?",
    answerOptions: [
      { answerText: "Pedestrian zones", isCorrect: false },
      { answerText: "Railway closures", isCorrect: false },
      { answerText: "Highway construction", isCorrect: true },
      { answerText: "Cycle lanes", isCorrect: false },
    ],
    explanation: "Highways allow businesses and retail centres to develop on the outskirts of cities, forming edge cities.",
    image: null
  },
  {
    id: 118,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which factor often leads to the decline of inner-city residential areas?",
    answerOptions: [
      { answerText: "Increased green space", isCorrect: false },
      { answerText: "Improved housing conditions", isCorrect: false },
      { answerText: "Upgrading of infrastructure", isCorrect: false },
      { answerText: "Overcrowding and poor maintenance", isCorrect: true },
    ],
    explanation: "When housing is overcrowded and poorly maintained, it leads to social and physical decline in inner-city areas.",
    image: null
  },
  {
    id: 119,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which urban land-use zone is located at the edge of a city where it meets the countryside?",
    answerOptions: [
      { answerText: "Rural-urban fringe", isCorrect: true },
      { answerText: "Central Business District", isCorrect: false },
      { answerText: "Transition zone", isCorrect: false },
      { answerText: "Industrial area", isCorrect: false },
    ],
    explanation: "The rural-urban fringe is a zone where urban and rural activities mix, often experiencing rapid change.",
    image: null
  },
  {
    id: 120,
    topic: "Settlement Geography",
    difficulty: "Medium",
    questionText: "Which challenge is often linked with rapid urbanisation in developing countries?",
    answerOptions: [
      { answerText: "Decline in public transport usage", isCorrect: false },
      { answerText: "Shortage of housing and basic services", isCorrect: true },
      { answerText: "Increase in rural employment", isCorrect: false },
      { answerText: "Low population growth", isCorrect: false },
    ],
    explanation: "Rapid urbanisation often outpaces infrastructure development, leading to housing and service shortages.",
    image: null
  },
  // HARD
   {
    id: 121,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which urban model suggests that cities develop in a series of rings with the CBD at the centre?",
    answerOptions: [
      { answerText: "Hoyt Sector Model", isCorrect: false },
      { answerText: "Multiple Nuclei Model", isCorrect: false },
      { answerText: "Urban Realms Model", isCorrect: false },
      { answerText: "Burgess Concentric Zone Model", isCorrect: true },
    ],
    explanation: "The Burgess Model describes cities expanding in concentric rings outward from the CBD.",
    image: null
  },
  {
    id: 122,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which process involves wealthier people moving into a run-down urban area, improving housing, and displacing lower-income residents?",
    answerOptions: [
      { answerText: "Gentrification", isCorrect: true },
      { answerText: "Urban sprawl", isCorrect: false },
      { answerText: "Urban decay", isCorrect: false },
      { answerText: "Counter-urbanisation", isCorrect: false },
    ],
    explanation: "Gentrification upgrades an area but often increases rents, forcing poorer residents to leave.",
    image: null
  },
  {
    id: 123,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "In terms of settlement hierarchy, which type of settlement typically offers the widest range of specialised services?",
    answerOptions: [
      { answerText: "Village", isCorrect: false },
      { answerText: "Hamlet", isCorrect: false },
      { answerText: "Town", isCorrect: false },
      { answerText: "City", isCorrect: true },
    ],
    explanation: "Cities, at the top of the settlement hierarchy, offer the greatest variety and specialisation of services.",
    image: null
  },
  {
    id: 124,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which factor is the primary reason for the decentralisation of retail from CBDs to suburban malls?",
    answerOptions: [
      { answerText: "Better quality of air", isCorrect: false },
      { answerText: "Availability of cheaper land and parking space", isCorrect: true },
      { answerText: "Access to rail transport", isCorrect: false },
      { answerText: "Higher pedestrian density", isCorrect: false },
    ],
    explanation: "Suburban malls benefit from larger, cheaper plots and extensive parking facilities compared to CBDs.",
    image: null
  },
  {
    id: 125,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which South African policy aims to integrate previously segregated urban areas and improve access to services?",
    answerOptions: [
      { answerText: "Industrial Development Strategy", isCorrect: false },
      { answerText: "Urban Sprawl Management Plan", isCorrect: false },
      { answerText: "Smart City Initiative", isCorrect: false },
      { answerText: "Integrated Development Plan (IDP)", isCorrect: true },
    ],
    explanation: "IDPs provide a framework for coordinated development and service delivery in municipalities.",
    image: null
  },
  {
    id: 126,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which concept explains the maximum distance people are willing to travel for a service?",
    answerOptions: [
      { answerText: "Range", isCorrect: true },
      { answerText: "Threshold population", isCorrect: false },
      { answerText: "Carrying capacity", isCorrect: false },
      { answerText: "Sphere of influence", isCorrect: false },
    ],
    explanation: "The range of a good or service is the maximum distance customers are prepared to travel to obtain it.",
    image: null
  },
  {
    id: 127,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "According to central place theory, which factor determines the spacing and size of settlements?",
    answerOptions: [
      { answerText: "Altitude and climate", isCorrect: false },
      { answerText: "Historical age of the settlement", isCorrect: false },
      { answerText: "Threshold population and range", isCorrect: true },
      { answerText: "Availability of entertainment", isCorrect: false },
    ],
    explanation: "Central place theory states that settlements are spaced based on the minimum population needed to support services and the range people will travel.",
    image: null
  },
  {
    id: 128,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which urban model is most useful for describing cities with multiple centres of activity?",
    answerOptions: [
      { answerText: "Burgess Concentric Zone Model", isCorrect: false },
      { answerText: "Hoyt Sector Model", isCorrect: false },
      { answerText: "Multiple Nuclei Model", isCorrect: true },
      { answerText: "Urban Realms Model", isCorrect: false },
    ],
    explanation: "The Multiple Nuclei Model suggests cities grow around several nodes such as industrial areas, commercial zones, and residential districts.",
    image: null
  },
  {
    id: 129,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which phenomenon describes the movement of people from cities to rural areas in search of a better quality of life?",
    answerOptions: [
      { answerText: "Counter-urbanisation", isCorrect: true },
      { answerText: "Urban sprawl", isCorrect: false },
      { answerText: "Gentrification", isCorrect: false },
      { answerText: "Suburbanisation", isCorrect: false },
    ],
    explanation: "Counter-urbanisation is driven by people leaving congested urban areas for rural environments.",
    image: null
  },
  {
    id: 130,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which term describes a city that dominates the economic, political, and cultural life of a country?",
    answerOptions: [
      { answerText: "Edge city", isCorrect: false },
      { answerText: "Conurbation", isCorrect: false },
      { answerText: "Primate city", isCorrect: true },
      { answerText: "Satellite town", isCorrect: false },
    ],
    explanation: "A primate city is disproportionately larger and more influential than other cities in a country.",
    image: null
  },
  {
    id: 131,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "What is the main disadvantage of radial road patterns in cities?",
    answerOptions: [
      { answerText: "Poor accessibility to the outskirts", isCorrect: false },
      { answerText: "High construction costs", isCorrect: false },
      { answerText: "Traffic congestion at the centre", isCorrect: true },
      { answerText: "Difficulty in navigation", isCorrect: false },
    ],
    explanation: "Radial patterns funnel traffic toward the centre, often leading to congestion in the CBD.",
    image: null
  },
  {
    id: 132,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which factor has most influenced the location of South Africa's major cities along the coast?",
    answerOptions: [
      { answerText: "Mild climate", isCorrect: false },
      { answerText: "Tourism potential", isCorrect: false },
      { answerText: "Availability of flat land", isCorrect: false },
      { answerText: "Access to harbours and trade routes", isCorrect: true },
    ],
    explanation: "Ports facilitate trade, making coastal locations ideal for economic growth.",
    image: null
  },
  {
    id: 133,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which urban policy encourages higher-density housing near public transport routes to reduce car dependency?",
    answerOptions: [
      { answerText: "Transit-oriented development", isCorrect: true },
      { answerText: "Urban sprawl management", isCorrect: false },
      { answerText: "Gentrification", isCorrect: false },
      { answerText: "Integrated rural development", isCorrect: false },
    ],
    explanation: "Transit-oriented development aims to reduce traffic and promote sustainable urban living.",
    image: null
  },
  {
    id: 134,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which South African city is an example of a conurbation?",
    answerOptions: [
      { answerText: "Durban", isCorrect: false },
      { answerText: "Cape Town", isCorrect: false },
      { answerText: "Johannesburg–Pretoria region", isCorrect: true },
      { answerText: "Port Elizabeth", isCorrect: false },
    ],
    explanation: "Johannesburg and Pretoria have grown towards each other, forming a continuous built-up area.",
    image: null
  },
  {
    id: 135,
    topic: "Settlement Geography",
    difficulty: "Hard",
    questionText: "Which factor has contributed most to the emergence of 'edge cities' in South Africa?",
    answerOptions: [
      { answerText: "Decline in rural industries", isCorrect: false },
      { answerText: "Development of major highways and decentralised business districts", isCorrect: true },
      { answerText: "High population growth in rural areas", isCorrect: false },
      { answerText: "Increase in small-scale farming", isCorrect: false },
    ],
    explanation: "Improved transport networks and decentralisation have led to the growth of commercial hubs outside traditional CBDs.",
    image: null
  },
  // ECONOMIC GEOGRAPGY
  {
    id: 136,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which sector of the economy includes activities like farming, fishing, and mining?",
    answerOptions: [
      { answerText: "Secondary sector", isCorrect: false },
      { answerText: "Primary sector", isCorrect: true },
      { answerText: "Tertiary sector", isCorrect: false },
      { answerText: "Quaternary sector", isCorrect: false },
    ],
    explanation: "The primary sector involves extracting natural resources directly from the Earth.",
    image: null
  },
  {
    id: 137,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which sector of the economy focuses on manufacturing and processing raw materials?",
    answerOptions: [
      { answerText: "Secondary sector", isCorrect: true },
      { answerText: "Primary sector", isCorrect: false },
      { answerText: "Tertiary sector", isCorrect: false },
      { answerText: "Quinary sector", isCorrect: false },
    ],
    explanation: "The secondary sector processes raw materials into finished goods.",
    image: null
  },
  {
    id: 138,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which term describes the exchange of goods and services across countries?",
    answerOptions: [
      { answerText: "Local trade", isCorrect: false },
      { answerText: "International trade", isCorrect: true },
      { answerText: "Bartering", isCorrect: false },
      { answerText: "Import substitution", isCorrect: false },
    ],
    explanation: "International trade is the exchange of goods and services between nations.",
    image: null
  },
  {
    id: 139,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which type of farming is aimed mainly at producing food for the farmer's family?",
    answerOptions: [
      { answerText: "Commercial farming", isCorrect: false },
      { answerText: "Mixed farming", isCorrect: false },
      { answerText: "Intensive farming", isCorrect: false },
      { answerText: "Subsistence farming", isCorrect: true },
    ],
    explanation: "Subsistence farming produces enough food for local consumption rather than sale.",
    image: null
  },
  {
    id: 140,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which economic activity involves services such as teaching, banking, and healthcare?",
    answerOptions: [
      { answerText: "Primary sector", isCorrect: false },
      { answerText: "Secondary sector", isCorrect: false },
      { answerText: "Quinary sector", isCorrect: false },
      { answerText: "Tertiary sector", isCorrect: true },
    ],
    explanation: "The tertiary sector provides services rather than producing goods.",
    image: null
  },
  {
    id: 141,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which country is South Africa's largest trading partner for both imports and exports?",
    answerOptions: [
      { answerText: "United States", isCorrect: false },
      { answerText: "United Kingdom", isCorrect: false },
      { answerText: "Germany", isCorrect: false },
      { answerText: "China", isCorrect: true },
    ],
    explanation: "China is South Africa's biggest trading partner, especially for minerals and manufactured goods.",
    image: null
  },
  {
    id: 142,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "What is the main purpose of the Industrial Development Zones (IDZs) in South Africa?",
    answerOptions: [
      { answerText: "To promote rural subsistence farming", isCorrect: false },
      { answerText: "To attract foreign investment and boost exports", isCorrect: true },
      { answerText: "To encourage urban sprawl", isCorrect: false },
      { answerText: "To replace all mining operations", isCorrect: false },
    ],
    explanation: "IDZs aim to encourage manufacturing for export and attract investment.",
    image: null
  },
  {
    id: 143,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which energy source is most widely used for electricity generation in South Africa?",
    answerOptions: [
      { answerText: "Solar", isCorrect: false },
      { answerText: "Wind", isCorrect: false },
      { answerText: "Nuclear", isCorrect: false },
      { answerText: "Coal", isCorrect: true },
    ],
    explanation: "Coal-fired power stations supply most of South Africa’s electricity.",
    image: null
  },
  {
    id: 144,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which term describes goods that are brought into a country from abroad?",
    answerOptions: [
      { answerText: "Exports", isCorrect: false },
      { answerText: "Local products", isCorrect: false },
      { answerText: "Trade balance", isCorrect: false },
      { answerText: "Imports", isCorrect: true },
    ],
    explanation: "Imports are goods and services bought from another country.",
    image: null
  },
  {
    id: 145,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which province is South Africa’s main producer of gold?",
    answerOptions: [
      { answerText: "KwaZulu-Natal", isCorrect: false },
      { answerText: "Gauteng", isCorrect: true },
      { answerText: "Western Cape", isCorrect: false },
      { answerText: "Eastern Cape", isCorrect: false },
    ],
    explanation: "Gauteng’s Witwatersrand Basin has some of the world's richest gold deposits.",
    image: null
  },
  {
    id: 146,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which measure compares the value of exports to imports in a country?",
    answerOptions: [
      { answerText: "Exchange rate", isCorrect: false },
      { answerText: "Balance of trade", isCorrect: true },
      { answerText: "Inflation rate", isCorrect: false },
      { answerText: "Economic growth rate", isCorrect: false },
    ],
    explanation: "The balance of trade is the difference between a country's exports and imports.",
    image: null
  },
  {
    id: 147,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which farming type focuses on growing crops and raising animals for sale?",
    answerOptions: [
      { answerText: "Commercial farming", isCorrect: true },
      { answerText: "Subsistence farming", isCorrect: false },
      { answerText: "Pastoral farming", isCorrect: false },
      { answerText: "Shifting cultivation", isCorrect: false },
    ],
    explanation: "Commercial farming is aimed at selling produce for profit.",
    image: null
  },
  {
    id: 148,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which economic sector includes research, technology, and information services?",
    answerOptions: [
      { answerText: "Tertiary sector", isCorrect: false },
      { answerText: "Secondary sector", isCorrect: false },
      { answerText: "Primary sector", isCorrect: false },
      { answerText: "Quaternary sector", isCorrect: true },
    ],
    explanation: "The quaternary sector focuses on knowledge-based services and innovation.",
    image: null
  },
  {
    id: 149,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which term refers to the value of all goods and services produced in a country in a year?",
    answerOptions: [
      { answerText: "Balance of trade", isCorrect: false },
      { answerText: "Inflation rate", isCorrect: false },
      { answerText: "National debt", isCorrect: false },
      { answerText: "Gross Domestic Product (GDP)", isCorrect: true },
    ],
    explanation: "GDP measures the total economic output of a country in a year.",
    image: null
  },
  {
    id: 150,
    topic: "Economic Geography",
    difficulty: "Easy",
    questionText: "Which South African port is the largest container terminal in the Southern Hemisphere?",
    answerOptions: [
      { answerText: "Cape Town", isCorrect: false },
      { answerText: "Durban", isCorrect: true },
      { answerText: "Port Elizabeth", isCorrect: false },
      { answerText: "Richards Bay", isCorrect: false },
    ],
    explanation: "Durban Harbour handles the highest volume of container traffic in the Southern Hemisphere.",
    image: null
  },
  // MEDIUM
   {
    id: 151,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which factor is most likely to encourage the location of a factory near a port?",
    answerOptions: [
      { answerText: "Availability of cheap electricity", isCorrect: false },
      { answerText: "Low rainfall", isCorrect: false },
      { answerText: "Proximity to a farming area", isCorrect: false },
      { answerText: "Easy access to import and export markets", isCorrect: true },
    ],
    explanation: "Factories near ports benefit from lower transport costs for imported raw materials and exported goods.",
    image: null
  },
  {
    id: 152,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "What is the main purpose of the Spatial Development Initiatives (SDIs) in South Africa?",
    answerOptions: [
      { answerText: "To replace all mining with farming", isCorrect: false },
      { answerText: "To expand informal settlements", isCorrect: false },
      { answerText: "To reduce the need for exports", isCorrect: false },
      { answerText: "To stimulate economic growth in specific areas", isCorrect: true },
    ],
    explanation: "SDIs are designed to promote development in targeted regions by improving infrastructure and attracting investment.",
    image: null
  },
  {
    id: 153,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which factor is a human influence on the location of industries?",
    answerOptions: [
      { answerText: "Government incentives", isCorrect: true },
      { answerText: "Climate", isCorrect: false },
      { answerText: "Soil fertility", isCorrect: false },
      { answerText: "Relief", isCorrect: false },
    ],
    explanation: "Human factors like tax breaks or subsidies can influence where industries locate.",
    image: null
  },
  {
    id: 154,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which type of farming involves the production of high-value crops such as fruit and flowers for export?",
    answerOptions: [
      { answerText: "Pastoral farming", isCorrect: false },
      { answerText: "Mixed farming", isCorrect: false },
      { answerText: "Horticulture", isCorrect: true },
      { answerText: "Shifting cultivation", isCorrect: false },
    ],
    explanation: "Horticulture focuses on crops like fruit, vegetables, and flowers, often for export markets.",
    image: null
  },
  {
    id: 155,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which term describes the manufacturing of goods in people’s homes or small workshops?",
    answerOptions: [
      { answerText: "Heavy industry", isCorrect: false },
      { answerText: "Cottage industry", isCorrect: true },
      { answerText: "Light industry", isCorrect: false },
      { answerText: "Service industry", isCorrect: false },
    ],
    explanation: "Cottage industries are small-scale production activities, often home-based.",
    image: null
  },
  {
    id: 156,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which South African province is most associated with large-scale sugarcane production?",
    answerOptions: [
      { answerText: "Limpopo", isCorrect: false },
      { answerText: "North West", isCorrect: false },
      { answerText: "Free State", isCorrect: false },
      { answerText: "KwaZulu-Natal", isCorrect: true },
    ],
    explanation: "KwaZulu-Natal's warm, moist climate is ideal for sugarcane cultivation.",
    image: null
  },
  {
    id: 157,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which economic term describes a country's ability to produce goods at a lower cost than its trading partners?",
    answerOptions: [
      { answerText: "Absolute advantage", isCorrect: false },
      { answerText: "Trade deficit", isCorrect: false },
      { answerText: "Comparative advantage", isCorrect: true },
      { answerText: "Economic diversification", isCorrect: false },
    ],
    explanation: "Comparative advantage refers to producing goods more efficiently relative to other nations.",
    image: null
  },
  {
    id: 158,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which industrial area in South Africa is known for its iron and steel production?",
    answerOptions: [
      { answerText: "Durban", isCorrect: false },
      { answerText: "Vereeniging", isCorrect: true },
      { answerText: "Kimberley", isCorrect: false },
      { answerText: "Polokwane", isCorrect: false },
    ],
    explanation: "Vereeniging is a major hub for South Africa's iron and steel industry.",
    image: null
  },
  {
    id: 159,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which factor has contributed most to the decline of the South African textile industry?",
    answerOptions: [
      { answerText: "Cheap imports from other countries", isCorrect: true },
      { answerText: "High rainfall", isCorrect: false },
      { answerText: "Soil erosion", isCorrect: false },
      { answerText: "Lack of raw cotton", isCorrect: false },
    ],
    explanation: "Increased competition from low-cost imports has reduced local textile production.",
    image: null
  },
  {
    id: 160,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which type of mining is used to extract minerals found close to the Earth's surface?",
    answerOptions: [
      { answerText: "Open-cast mining", isCorrect: true },
      { answerText: "Deep-shaft mining", isCorrect: false },
      { answerText: "Underground mining", isCorrect: false },
      { answerText: "Hydraulic mining", isCorrect: false },
    ],
    explanation: "Open-cast mining is used for minerals that are located near the surface.",
    image: null
  },
  {
    id: 161,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "What is a common environmental impact of large-scale mining in South Africa?",
    answerOptions: [
      { answerText: "Increased soil fertility", isCorrect: false },
      { answerText: "Improved biodiversity", isCorrect: false },
      { answerText: "Decreased energy consumption", isCorrect: false },
      { answerText: "Land degradation", isCorrect: true },
    ],
    explanation: "Mining often leads to land degradation, which can harm ecosystems.",
    image: null
  },
  {
    id: 162,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which factor is NOT typically considered when deciding where to locate a factory?",
    answerOptions: [
      { answerText: "Distance from raw materials", isCorrect: false },
      { answerText: "Cost of labour", isCorrect: false },
      { answerText: "Type of government", isCorrect: false },
      { answerText: "Astrological signs", isCorrect: true },
    ],
    explanation: "Business location decisions are based on practical economic factors, not astrology.",
    image: null
  },
  {
    id: 163,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which South African port is mainly used for exporting coal?",
    answerOptions: [
      { answerText: "Cape Town", isCorrect: false },
      { answerText: "Durban", isCorrect: false },
      { answerText: "Richards Bay", isCorrect: true },
      { answerText: "Port Elizabeth", isCorrect: false },
    ],
    explanation: "Richards Bay Coal Terminal is the largest coal export facility in South Africa.",
    image: null
  },
  {
    id: 164,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which factor has encouraged the growth of high-technology industries in urban areas?",
    answerOptions: [
      { answerText: "Availability of flat farmland", isCorrect: false },
      { answerText: "Abundance of raw minerals", isCorrect: false },
      { answerText: "High annual rainfall", isCorrect: false },
      { answerText: "Access to skilled labour and research facilities", isCorrect: true },
    ],
    explanation: "High-tech industries rely on skilled workers and proximity to universities or research centres.",
    image: null
  },
  {
    id: 165,
    topic: "Economic Geography",
    difficulty: "Medium",
    questionText: "Which policy encourages local industries to produce goods that would otherwise be imported?",
    answerOptions: [
      { answerText: "Import substitution", isCorrect: true },
      { answerText: "Export promotion", isCorrect: false },
      { answerText: "Free trade", isCorrect: false },
      { answerText: "Economic liberalisation", isCorrect: false },
    ],
    explanation: "Import substitution aims to replace imported goods with domestically produced ones.",
    image: null
  },
  // HARD
   {
    id: 166,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which factor best explains why the automobile industry is often located close to major transport routes and urban markets?",
    answerOptions: [
      { answerText: "Efficient distribution of finished products", isCorrect: true },
      { answerText: "Access to irrigation water", isCorrect: false },
      { answerText: "Proximity to tourist attractions", isCorrect: false },
      { answerText: "Favourable climatic conditions", isCorrect: false },
    ],
    explanation: "Car manufacturing requires quick delivery to urban markets and access to major transport routes.",
    image: null
  },
  {
    id: 167,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which concept refers to the decline in industrial activity in a region due to factory closures or relocations?",
    answerOptions: [
      { answerText: "Industrialisation", isCorrect: false },
      { answerText: "Deindustrialisation", isCorrect: true },
      { answerText: "Economic diversification", isCorrect: false },
      { answerText: "Urbanisation", isCorrect: false },
    ],
    explanation: "Deindustrialisation is when industries close or move, leading to economic decline in that area.",
    image: null
  },
  {
    id: 168,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "In South Africa, the Maputo Development Corridor is an example of:",
    answerOptions: [
      { answerText: "An informal settlement project", isCorrect: false },
      { answerText: "A mining rehabilitation scheme", isCorrect: false },
      { answerText: "A Spatial Development Initiative", isCorrect: true },
      { answerText: "A climate adaptation programme", isCorrect: false },
    ],
    explanation: "The Maputo Development Corridor is an SDI linking Gauteng with Mozambique’s port city of Maputo.",
    image: null
  },
  {
    id: 169,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which economic activity is most vulnerable to fluctuations in global commodity prices?",
    answerOptions: [
      { answerText: "Mining", isCorrect: true },
      { answerText: "Retail trade", isCorrect: false },
      { answerText: "Tourism", isCorrect: false },
      { answerText: "Banking", isCorrect: false },
    ],
    explanation: "Mining products are traded internationally, and their prices can rise or fall with global demand.",
    image: null
  },
  {
    id: 170,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which industrial development strategy focuses on producing goods for export rather than for local consumption?",
    answerOptions: [
      { answerText: "Import substitution", isCorrect: false },
      { answerText: "Deindustrialisation", isCorrect: false },
      { answerText: "Self-sufficiency strategy", isCorrect: false },
      { answerText: "Export-oriented industrialisation", isCorrect: true },
    ],
    explanation: "Export-oriented industrialisation promotes industries that target foreign markets.",
    image: null
  },
  {
    id: 171,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Why is beneficiation important for South Africa’s mineral-based economy?",
    answerOptions: [
      { answerText: "It reduces the number of mining jobs", isCorrect: false },
      { answerText: "It increases the value of raw minerals before export", isCorrect: true },
      { answerText: "It replaces mining with agriculture", isCorrect: false },
      { answerText: "It stops the export of all minerals", isCorrect: false },
    ],
    explanation: "Beneficiation adds value to minerals by processing them locally before exporting.",
    image: null
  },
  {
    id: 172,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which port is the primary gateway for South Africa’s motor vehicle exports?",
    answerOptions: [
      { answerText: "Richards Bay", isCorrect: false },
      { answerText: "Port Elizabeth/Gqeberha", isCorrect: true },
      { answerText: "Cape Town", isCorrect: false },
      { answerText: "East London", isCorrect: false },
    ],
    explanation: "Port Elizabeth has specialised facilities for exporting motor vehicles.",
    image: null
  },
  {
    id: 173,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which is NOT a likely challenge faced by secondary economic activities in South Africa?",
    answerOptions: [
      { answerText: "High transport costs", isCorrect: false },
      { answerText: "Frequent electricity load shedding", isCorrect: false },
      { answerText: "Shortage of skilled labour", isCorrect: false },
      { answerText: "Overabundance of raw materials", isCorrect: true },
    ],
    explanation: "South Africa’s industries often face resource shortages, not an overabundance.",
    image: null
  },
  {
    id: 174,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which statement best describes the term 'agglomeration' in industrial geography?",
    answerOptions: [
      { answerText: "The movement of industries to rural areas", isCorrect: false },
      { answerText: "The clustering of industries to benefit from shared services and infrastructure", isCorrect: true },
      { answerText: "The reduction in production due to strikes", isCorrect: false },
      { answerText: "The relocation of industries overseas", isCorrect: false },
    ],
    explanation: "Agglomeration allows industries to reduce costs by sharing infrastructure and suppliers.",
    image: null
  },
  {
    id: 175,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which sector contributes the largest share to South Africa’s GDP?",
    answerOptions: [
      { answerText: "Primary sector", isCorrect: false },
      { answerText: "Secondary sector", isCorrect: false },
      { answerText: "Tertiary sector", isCorrect: true },
      { answerText: "Quaternary sector", isCorrect: false },
    ],
    explanation: "Services like finance, retail, and transport dominate South Africa’s GDP contribution.",
    image: null
  },
  {
    id: 176,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which factor explains why some mining towns in South Africa have become ghost towns?",
    answerOptions: [
      { answerText: "Increase in mineral reserves", isCorrect: false },
      { answerText: "Rapid urbanisation", isCorrect: false },
      { answerText: "Depletion of mineral resources", isCorrect: true },
      { answerText: "Improved mining technology", isCorrect: false },
    ],
    explanation: "When minerals run out, mines close and workers leave, leading to ghost towns.",
    image: null
  },
  {
    id: 177,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which policy encourages foreign companies to establish production facilities in South Africa?",
    answerOptions: [
      { answerText: "Import substitution", isCorrect: false },
      { answerText: "Local content requirement", isCorrect: false },
      { answerText: "Export processing", isCorrect: false },
      { answerText: "Foreign direct investment", isCorrect: true },
    ],
    explanation: "Foreign direct investment brings overseas companies into the local economy.",
    image: null
  },
  {
    id: 178,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which city is at the centre of South Africa’s gold mining industry?",
    answerOptions: [
      { answerText: "Kimberley", isCorrect: false },
      { answerText: "Johannesburg", isCorrect: true },
      { answerText: "Durban", isCorrect: false },
      { answerText: "Port Nolloth", isCorrect: false },
    ],
    explanation: "Johannesburg developed due to the gold discovered on the Witwatersrand.",
    image: null
  },
  {
    id: 179,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Why are Special Economic Zones (SEZs) established in South Africa?",
    answerOptions: [
      { answerText: "To create informal settlements", isCorrect: false },
      { answerText: "To replace all local industries", isCorrect: false },
      { answerText: "To attract investment and promote exports", isCorrect: true },
      { answerText: "To reduce agricultural production", isCorrect: false },
    ],
    explanation: "SEZs are designated areas with incentives for businesses to promote trade and jobs.",
    image: null
  },
  {
    id: 180,
    topic: "Economic Geography",
    difficulty: "Hard",
    questionText: "Which term describes the increasing integration of economies through trade, investment, and communication?",
    answerOptions: [
      { answerText: "Localisation", isCorrect: false },
      { answerText: "Isolationism", isCorrect: false },
      { answerText: "Globalisation", isCorrect: true },
      { answerText: "Nationalisation", isCorrect: false },
    ],
    explanation: "Globalisation connects economies worldwide through trade, investment, and technology.",
    image: null
  },
  // LIFE SCIENCES: HUMAN REPRODUCTION
   {
    id: 181,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which organ produces sperm cells in males?",
    answerOptions: [
      { answerText: "Prostate gland", isCorrect: false },
      { answerText: "Urethra", isCorrect: false },
      { answerText: "Testes", isCorrect: true },
      { answerText: "Seminal vesicle", isCorrect: false },
    ],
    explanation: "The testes produce sperm cells and secrete testosterone.",
    image: null
  },
  {
    id: 182,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "What is the site of fertilisation in humans?",
    answerOptions: [
      { answerText: "Fallopian tube", isCorrect: true },
      { answerText: "Uterus", isCorrect: false },
      { answerText: "Ovary", isCorrect: false },
      { answerText: "Cervix", isCorrect: false },
    ],
    explanation: "Fertilisation usually occurs in the fallopian tube before the zygote moves to the uterus.",
    image: null
  },
  {
    id: 183,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which hormone triggers ovulation in the menstrual cycle?",
    answerOptions: [
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "Oestrogen", isCorrect: false },
      { answerText: "Luteinising hormone (LH)", isCorrect: true },
      { answerText: "Follicle-stimulating hormone (FSH)", isCorrect: false },
    ],
    explanation: "A surge in luteinising hormone triggers the release of an egg from the ovary.",
    image: null
  },
  {
    id: 184,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which structure connects a developing foetus to the placenta?",
    answerOptions: [
      { answerText: "Amniotic sac", isCorrect: false },
      { answerText: "Cervix", isCorrect: false },
      { answerText: "Fallopian tube", isCorrect: false },
      { answerText: "Umbilical cord", isCorrect: true },
    ],
    explanation: "The umbilical cord carries nutrients and oxygen from the placenta to the foetus.",
    image: null
  },
  {
    id: 185,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which female reproductive organ produces eggs?",
    answerOptions: [
      { answerText: "Ovary", isCorrect: true },
      { answerText: "Uterus", isCorrect: false },
      { answerText: "Vagina", isCorrect: false },
      { answerText: "Cervix", isCorrect: false },
    ],
    explanation: "Ovaries produce eggs (ova) and secrete female sex hormones.",
    image: null
  },
  {
    id: 186,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "What is the role of the amniotic fluid during pregnancy?",
    answerOptions: [
      { answerText: "Supplies oxygen to the foetus", isCorrect: false },
      { answerText: "Triggers labour contractions", isCorrect: false },
      { answerText: "Protects the foetus and cushions it from shocks", isCorrect: true },
      { answerText: "Produces hormones", isCorrect: false },
    ],
    explanation: "Amniotic fluid cushions the foetus, allowing free movement and protection.",
    image: null
  },
  {
    id: 187,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which structure stores sperm before ejaculation?",
    answerOptions: [
      { answerText: "Prostate gland", isCorrect: false },
      { answerText: "Vas deferens", isCorrect: false },
      { answerText: "Urethra", isCorrect: false },
      { answerText: "Epididymis", isCorrect: true },
    ],
    explanation: "Sperm mature and are stored in the epididymis before ejaculation.",
    image: null
  },
  {
    id: 188,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which hormone maintains the thickened lining of the uterus during pregnancy?",
    answerOptions: [
      { answerText: "Progesterone", isCorrect: true },
      { answerText: "LH", isCorrect: false },
      { answerText: "FSH", isCorrect: false },
      { answerText: "Testosterone", isCorrect: false },
    ],
    explanation: "Progesterone maintains the endometrium to support pregnancy.",
    image: null
  },
  {
    id: 189,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Where does implantation of the embryo occur?",
    answerOptions: [
      { answerText: "Fallopian tube", isCorrect: false },
      { answerText: "Uterus", isCorrect: true },
      { answerText: "Ovary", isCorrect: false },
      { answerText: "Cervix", isCorrect: false },
    ],
    explanation: "The embryo implants into the endometrium of the uterus for further development.",
    image: null
  },
  {
    id: 190,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "What is the function of the placenta?",
    answerOptions: [
      { answerText: "Stores urine", isCorrect: false },
      { answerText: "Produces digestive enzymes", isCorrect: false },
      { answerText: "Secretes sperm", isCorrect: false },
      { answerText: "Transfers nutrients and oxygen from mother to foetus", isCorrect: true },
    ],
    explanation: "The placenta facilitates exchange of nutrients, gases, and wastes between mother and foetus.",
    image: null
  },
  {
    id: 191,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which hormone stimulates the production of sperm in males?",
    answerOptions: [
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "Oestrogen", isCorrect: false },
      { answerText: "Follicle-stimulating hormone (FSH)", isCorrect: true },
      { answerText: "LH", isCorrect: false },
    ],
    explanation: "FSH stimulates sperm production in the testes.",
    image: null
  },
  {
    id: 192,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which term describes the union of sperm and egg?",
    answerOptions: [
      { answerText: "Ovulation", isCorrect: false },
      { answerText: "Implantation", isCorrect: false },
      { answerText: "Menstruation", isCorrect: false },
      { answerText: "Fertilisation", isCorrect: true },
    ],
    explanation: "Fertilisation occurs when a sperm cell fuses with an egg cell.",
    image: null
  },
  {
    id: 193,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which male reproductive structure transports sperm from the testes to the urethra?",
    answerOptions: [
      { answerText: "Epididymis", isCorrect: false },
      { answerText: "Vas deferens", isCorrect: true },
      { answerText: "Prostate gland", isCorrect: false },
      { answerText: "Scrotum", isCorrect: false },
    ],
    explanation: "The vas deferens carries sperm from the epididymis to the urethra.",
    image: null
  },
  {
    id: 194,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "What is the average duration of a normal human pregnancy?",
    answerOptions: [
      { answerText: "6 months", isCorrect: false },
      { answerText: "12 months", isCorrect: false },
      { answerText: "Approximately 9 months", isCorrect: true },
      { answerText: "3 months", isCorrect: false },
    ],
    explanation: "A full-term pregnancy lasts about 40 weeks, roughly 9 months.",
    image: null
  },
  {
    id: 195,
    topic: "Human Reproduction",
    difficulty: "Easy",
    questionText: "Which part of the sperm contains genetic material?",
    answerOptions: [
      { answerText: "Head", isCorrect: true },
      { answerText: "Tail", isCorrect: false },
      { answerText: "Midpiece", isCorrect: false },
      { answerText: "Acrosome", isCorrect: false },
    ],
    explanation: "The head of the sperm contains the nucleus with genetic material.",
    image: null
  },
  // MEDIUM
  {
    id: 196,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "Which part of the male reproductive system adds a fluid that nourishes and protects sperm?",
    answerOptions: [
      { answerText: "Vas deferens", isCorrect: false },
      { answerText: "Scrotum", isCorrect: false },
      { answerText: "Seminal vesicles", isCorrect: true },
      { answerText: "Penis", isCorrect: false },
    ],
    explanation: "The seminal vesicles secrete a fluid rich in fructose that nourishes sperm.",
    image: null
  },
  {
    id: 197,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "What is the main role of luteinising hormone (LH) in males?",
    answerOptions: [
      { answerText: "Triggers spermatogenesis directly", isCorrect: false },
      { answerText: "Promotes growth of the endometrium", isCorrect: false },
      { answerText: "Stimulates testosterone production", isCorrect: true },
      { answerText: "Causes erection", isCorrect: false },
    ],
    explanation: "In males, LH stimulates the Leydig cells in the testes to produce testosterone.",
    image: null
  },
  {
    id: 198,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "What happens during the follicular phase of the menstrual cycle?",
    answerOptions: [
      { answerText: "The endometrium sheds", isCorrect: false },
      { answerText: "Ovulation occurs", isCorrect: false },
      { answerText: "An egg matures in the ovary", isCorrect: true },
      { answerText: "The corpus luteum degenerates", isCorrect: false },
    ],
    explanation: "During the follicular phase, FSH stimulates the development of a follicle and the maturation of an egg.",
    image: null
  },
  {
    id: 199,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "What is capacitation in sperm?",
    answerOptions: [
      { answerText: "Storage of sperm in the epididymis", isCorrect: false },
      { answerText: "Production of sperm in the testes", isCorrect: false },
      { answerText: "Fusion of sperm with the egg membrane", isCorrect: false },
      { answerText: "Changes that make sperm capable of fertilising an egg", isCorrect: true },
    ],
    explanation: "Capacitation is a process that alters the sperm’s membrane, enabling it to penetrate the egg.",
    image: null
  },
  {
    id: 200,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "Which hormone is tested for in most pregnancy tests?",
    answerOptions: [
      { answerText: "Oestrogen", isCorrect: false },
      { answerText: "Human chorionic gonadotropin (hCG)", isCorrect: true },
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "FSH", isCorrect: false },
    ],
    explanation: "Pregnancy tests detect hCG, produced by the placenta shortly after implantation.",
    image: null
  },
  {
    id: 201,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "What is the main function of the corpus luteum?",
    answerOptions: [
      { answerText: "Stores the ovum", isCorrect: false },
      { answerText: "Releases FSH", isCorrect: false },
      { answerText: "Secretes progesterone to maintain the uterine lining", isCorrect: true },
      { answerText: "Produces sperm", isCorrect: false },
    ],
    explanation: "The corpus luteum forms from the ruptured follicle after ovulation and secretes progesterone.",
    image: null
  },
  {
    id: 202,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "Why are the testes located outside the abdominal cavity?",
    answerOptions: [
      { answerText: "For easier delivery of sperm", isCorrect: false },
      { answerText: "To maintain a cooler temperature for sperm production", isCorrect: true },
      { answerText: "To allow testosterone production", isCorrect: false },
      { answerText: "For better blood supply", isCorrect: false },
    ],
    explanation: "Sperm production requires a temperature slightly lower than body temperature.",
    image: null
  },
  {
    id: 203,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "During which stage of the menstrual cycle is progesterone at its highest?",
    answerOptions: [
      { answerText: "Follicular phase", isCorrect: false },
      { answerText: "Ovulation", isCorrect: false },
      { answerText: "Luteal phase", isCorrect: true },
      { answerText: "Menstruation", isCorrect: false },
    ],
    explanation: "Progesterone peaks during the luteal phase to prepare and maintain the uterine lining.",
    image: null
  },
  {
    id: 204,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "Which structure produces seminal fluid that neutralises acidity in the urethra?",
    answerOptions: [
      { answerText: "Epididymis", isCorrect: false },
      { answerText: "Vas deferens", isCorrect: false },
      { answerText: "Bulbourethral glands", isCorrect: false },
      { answerText: "Prostate gland", isCorrect: true },
    ],
    explanation: "The prostate gland secretes alkaline fluid to protect sperm in acidic conditions.",
    image: null
  },
  {
    id: 205,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "Which part of the sperm contains mitochondria to provide energy for movement?",
    answerOptions: [
      { answerText: "Midpiece", isCorrect: true },
      { answerText: "Head", isCorrect: false },
      { answerText: "Tail", isCorrect: false },
      { answerText: "Acrosome", isCorrect: false },
    ],
    explanation: "The midpiece contains mitochondria that generate energy for the sperm’s tail movement.",
    image: null
  },
  {
    id: 206,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "What is the function of the acrosome in the sperm head?",
    answerOptions: [
      { answerText: "Releases enzymes to penetrate the egg", isCorrect: true },
      { answerText: "Stores genetic material", isCorrect: false },
      { answerText: "Generates energy", isCorrect: false },
      { answerText: "Assists in swimming", isCorrect: false },
    ],
    explanation: "The acrosome contains enzymes that digest the outer layers of the egg for fertilisation.",
    image: null
  },
  {
    id: 207,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "Why is the umbilical vein important for the foetus?",
    answerOptions: [
      { answerText: "It carries oxygenated blood from the placenta", isCorrect: true },
      { answerText: "It removes waste from the foetus", isCorrect: false },
      { answerText: "It produces amniotic fluid", isCorrect: false },
      { answerText: "It connects the foetus to the ovary", isCorrect: false },
    ],
    explanation: "The umbilical vein carries nutrient-rich, oxygenated blood from the placenta to the foetus.",
    image: null
  },
  {
    id: 208,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "What triggers menstruation if fertilisation does not occur?",
    answerOptions: [
      { answerText: "A rise in FSH and LH", isCorrect: false },
      { answerText: "An increase in hCG", isCorrect: false },
      { answerText: "A drop in progesterone and oestrogen levels", isCorrect: true },
      { answerText: "A surge in testosterone", isCorrect: false },
    ],
    explanation: "The drop in progesterone and oestrogen causes the uterine lining to break down.",
    image: null
  },
  {
    id: 209,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "Which structure forms immediately after fertilisation?",
    answerOptions: [
      { answerText: "Blastocyst", isCorrect: false },
      { answerText: "Zygote", isCorrect: true },
      { answerText: "Embryo", isCorrect: false },
      { answerText: "Foetus", isCorrect: false },
    ],
    explanation: "The fusion of sperm and egg nuclei produces a single-celled zygote.",
    image: null
  },
  {
    id: 210,
    topic: "Human Reproduction",
    difficulty: "Medium",
    questionText: "What is the role of FSH in the female reproductive cycle?",
    answerOptions: [
      { answerText: "Triggers ovulation", isCorrect: false },
      { answerText: "Maintains uterine lining", isCorrect: false },
      { answerText: "Promotes milk production", isCorrect: false },
      { answerText: "Stimulates follicle development in the ovary", isCorrect: true },
    ],
    explanation: "FSH promotes the growth and maturation of ovarian follicles.",
    image: null
  },
  // HARD
  {
    id: 211,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which specific cell type in the testes is directly responsible for nourishing developing sperm cells?",
    answerOptions: [
      { answerText: "Leydig cells", isCorrect: false },
      { answerText: "Sertoli cells", isCorrect: true },
      { answerText: "Spermatogonia", isCorrect: false },
      { answerText: "Epididymal cells", isCorrect: false },
    ],
    explanation: "Sertoli cells provide nutrients and structural support to developing sperm within the seminiferous tubules.",
    image: null
  },
  {
    id: 212,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "What is the correct sequence of early embryonic development immediately after fertilisation?",
    answerOptions: [
      { answerText: "Zygote → Morula → Blastocyst → Implantation", isCorrect: true },
      { answerText: "Zygote → Blastocyst → Morula → Implantation", isCorrect: false },
      { answerText: "Morula → Zygote → Blastocyst → Implantation", isCorrect: false },
      { answerText: "Blastocyst → Zygote → Morula → Implantation", isCorrect: false },
    ],
    explanation: "The zygote divides into a morula, which then develops into a blastocyst before implanting in the uterine wall.",
    image: null
  },
  {
    id: 213,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which hormone prevents the degeneration of the corpus luteum in early pregnancy?",
    answerOptions: [
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "Human chorionic gonadotropin (hCG)", isCorrect: true },
      { answerText: "Oestrogen", isCorrect: false },
      { answerText: "Luteinising hormone", isCorrect: false },
    ],
    explanation: "hCG, produced by the embryo, signals the corpus luteum to continue progesterone production.",
    image: null
  },
  {
    id: 214,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "In the female reproductive system, which structure is homologous to the male penis?",
    answerOptions: [
      { answerText: "Labia majora", isCorrect: false },
      { answerText: "Labia minora", isCorrect: false },
      { answerText: "Clitoris", isCorrect: true },
      { answerText: "Cervix", isCorrect: false },
    ],
    explanation: "The clitoris and penis both develop from the same embryonic tissues and have similar erectile structures.",
    image: null
  },
  {
    id: 215,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "What is the main purpose of the acrosomal reaction during fertilisation?",
    answerOptions: [
      { answerText: "To activate the sperm tail", isCorrect: false },
      { answerText: "To release the egg from the follicle", isCorrect: false },
      { answerText: "To digest the zona pellucida", isCorrect: true },
      { answerText: "To prevent polyspermy", isCorrect: false },
    ],
    explanation: "The acrosomal reaction releases enzymes that digest the zona pellucida, allowing sperm entry.",
    image: null
  },
  {
    id: 216,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which structure acts as the barrier that prevents multiple sperm from fertilising an egg?",
    answerOptions: [
      { answerText: "Zona pellucida", isCorrect: false },
      { answerText: "Corona radiata", isCorrect: false },
      { answerText: "Cortical granules in the egg", isCorrect: true },
      { answerText: "Vitelline membrane", isCorrect: false },
    ],
    explanation: "Upon sperm entry, cortical granules release enzymes that harden the zona pellucida to block polyspermy.",
    image: null
  },
  {
    id: 217,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which structure produces oestrogen during the early follicular phase of the menstrual cycle?",
    answerOptions: [
      { answerText: "Corpus luteum", isCorrect: false },
      { answerText: "Developing ovarian follicles", isCorrect: true },
      { answerText: "Hypothalamus", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
    ],
    explanation: "Granulosa cells in developing follicles secrete oestrogen before ovulation.",
    image: null
  },
  {
    id: 218,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "What is the primary function of the amnion during pregnancy?",
    answerOptions: [
      { answerText: "Transfers nutrients to the foetus", isCorrect: false },
      { answerText: "Produces hormones for pregnancy maintenance", isCorrect: false },
      { answerText: "Provides a fluid-filled sac that cushions and protects the foetus", isCorrect: true },
      { answerText: "Facilitates gas exchange", isCorrect: false },
    ],
    explanation: "The amnion surrounds the foetus and contains amniotic fluid, which cushions and protects it.",
    image: null
  },
  {
    id: 219,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which assisted reproductive technology involves fertilisation outside the body followed by implantation?",
    answerOptions: [
      { answerText: "Artificial insemination", isCorrect: false },
      { answerText: "Surrogacy", isCorrect: false },
      { answerText: "Intracytoplasmic sperm injection", isCorrect: false },
      { answerText: "In vitro fertilisation (IVF)", isCorrect: true },
    ],
    explanation: "IVF is the process of fertilising an egg outside the body and implanting the embryo into the uterus.",
    image: null
  },
  {
    id: 220,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "What is the main structural difference between identical and fraternal twins?",
    answerOptions: [
      { answerText: "Identical twins are always of the same sex, fraternal twins are not", isCorrect: false },
      { answerText: "Identical twins share the same genetic material, fraternal twins do not", isCorrect: true },
      { answerText: "Identical twins share the same placenta, fraternal twins have separate placentas", isCorrect: false },
      { answerText: "Fraternal twins develop from one zygote, identical from two", isCorrect: false },
    ],
    explanation: "Identical twins result from a single fertilised egg splitting, producing genetically identical individuals.",
    image: null
  },
  {
    id: 221,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "In which stage of meiosis does crossing over occur during gametogenesis?",
    answerOptions: [
      { answerText: "Prophase I", isCorrect: true },
      { answerText: "Metaphase I", isCorrect: false },
      { answerText: "Anaphase I", isCorrect: false },
      { answerText: "Prophase II", isCorrect: false },
    ],
    explanation: "Crossing over, which increases genetic variation, happens during prophase I of meiosis.",
    image: null
  },
  {
    id: 222,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which placental structure ensures maternal and foetal blood do not mix?",
    answerOptions: [
      { answerText: "Amniotic sac", isCorrect: false },
      { answerText: "Umbilical cord", isCorrect: false },
      { answerText: "Placental barrier", isCorrect: true },
      { answerText: "Chorionic villi", isCorrect: false },
    ],
    explanation: "The placental barrier is made up of membranes that allow nutrient and gas exchange but prevent direct blood mixing.",
    image: null
  },
  {
    id: 223,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which event marks the onset of puberty in females?",
    answerOptions: [
      { answerText: "Ovulation", isCorrect: false },
      { answerText: "Breast development", isCorrect: false },
      { answerText: "Menarche", isCorrect: true },
      { answerText: "Growth spurt", isCorrect: false },
    ],
    explanation: "Menarche, the first menstrual period, signals reproductive maturity in females.",
    image: null
  },
  {
    id: 224,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which process ensures that the ovum has the correct haploid number of chromosomes?",
    answerOptions: [
      { answerText: "Mitosis", isCorrect: false },
      { answerText: "Fertilisation", isCorrect: false },
      { answerText: "Meiosis", isCorrect: true },
      { answerText: "Cleavage", isCorrect: false },
    ],
    explanation: "Meiosis reduces the chromosome number by half to produce haploid gametes.",
    image: null
  },
  {
    id: 225,
    topic: "Human Reproduction",
    difficulty: "Hard",
    questionText: "Which layer of the uterus is shed during menstruation?",
    answerOptions: [
      { answerText: "Myometrium", isCorrect: false },
      { answerText: "Perimetrium", isCorrect: false },
      { answerText: "Endometrium", isCorrect: true },
      { answerText: "Cervical lining", isCorrect: false },
    ],
    explanation: "The endometrium thickens during the menstrual cycle and is shed if no pregnancy occurs.",
    image: null
  },
  // Reporoduction in vetebrates: EASY
  {
    id: 226,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "Which type of fertilisation occurs in most fish species?",
    answerOptions: [
      { answerText: "Internal fertilisation", isCorrect: false },
      { answerText: "Self-fertilisation", isCorrect: false },
      { answerText: "External fertilisation", isCorrect: true },
      { answerText: "Cross-pollination", isCorrect: false },
    ],
    explanation: "Most fish release eggs and sperm into the water where fertilisation happens externally.",
    image: null
  },
  {
    id: 227,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "Which vertebrate group generally lays amniotic eggs with leathery or hard shells?",
    answerOptions: [
      { answerText: "Amphibians", isCorrect: false },
      { answerText: "Reptiles", isCorrect: true },
      { answerText: "Bony fish", isCorrect: false },
      { answerText: "Cartilaginous fish", isCorrect: false },
    ],
    explanation: "Reptiles produce amniotic eggs with leathery or hard shells for protection on land.",
    image: null
  },
  {
    id: 228,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "What is the main reproductive feature of mammals?",
    answerOptions: [
      { answerText: "External fertilisation", isCorrect: false },
      { answerText: "Laying eggs", isCorrect: false },
      { answerText: "Metamorphosis", isCorrect: false },
      { answerText: "Live birth", isCorrect: true },
    ],
    explanation: "Most mammals are viviparous, giving birth to live young after internal fertilisation.",
    image: null
  },
  {
    id: 229,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "Which vertebrate group undergoes metamorphosis as part of reproduction and development?",
    answerOptions: [
      { answerText: "Birds", isCorrect: false },
      { answerText: "Reptiles", isCorrect: false },
      { answerText: "Mammals", isCorrect: false },
      { answerText: "Amphibians", isCorrect: true },
    ],
    explanation: "Amphibians develop from aquatic larvae into terrestrial adults through metamorphosis.",
    image: null
  },
  {
    id: 230,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "Which structure provides nourishment to the developing embryo in placental mammals?",
    answerOptions: [
      { answerText: "Placenta", isCorrect: true },
      { answerText: "Amnion", isCorrect: false },
      { answerText: "Yolk sac", isCorrect: false },
      { answerText: "Chorion", isCorrect: false },
    ],
    explanation: "The placenta allows nutrient and gas exchange between the mother and the developing foetus.",
    image: null
  },
  {
    id: 231,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "Which vertebrate group has feathers and lays hard-shelled eggs?",
    answerOptions: [
      { answerText: "Amphibians", isCorrect: false },
      { answerText: "Reptiles", isCorrect: false },
      { answerText: "Birds", isCorrect: true },
      { answerText: "Mammals", isCorrect: false },
    ],
    explanation: "Birds are characterised by feathers and hard-shelled eggs.",
    image: null
  },
  {
    id: 232,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "Which vertebrate group gives birth to live young but also lays eggs in some species?",
    answerOptions: [
      { answerText: "Mammals", isCorrect: true },
      { answerText: "Reptiles", isCorrect: false },
      { answerText: "Amphibians", isCorrect: false },
      { answerText: "Birds", isCorrect: false },
    ],
    explanation: "Most mammals give birth to live young, but monotremes like the platypus lay eggs.",
    image: null
  },
  {
    id: 233,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "What is the purpose of jelly around amphibian eggs?",
    answerOptions: [
      { answerText: "To help eggs sink to the bottom", isCorrect: false },
      { answerText: "To allow internal fertilisation", isCorrect: false },
      { answerText: "To provide heat to the embryo", isCorrect: false },
      { answerText: "To protect eggs from predators and drying out", isCorrect: true },
    ],
    explanation: "The jelly coating protects amphibian eggs from damage, predators, and drying out.",
    image: null
  },
  {
    id: 234,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "Which vertebrate group has cartilaginous skeletons and internal fertilisation?",
    answerOptions: [
      { answerText: "Bony fish", isCorrect: false },
      { answerText: "Amphibians", isCorrect: false },
      { answerText: "Cartilaginous fish", isCorrect: true },
      { answerText: "Birds", isCorrect: false },
    ],
    explanation: "Sharks and rays are cartilaginous fish with internal fertilisation.",
    image: null
  },
  {
    id: 235,
    topic: "Vertebrate Reproduction",
    difficulty: "Easy",
    questionText: "In which environment do amphibians usually lay their eggs?",
    answerOptions: [
      { answerText: "On dry land", isCorrect: false },
      { answerText: "In nests", isCorrect: false },
      { answerText: "In burrows", isCorrect: false },
      { answerText: "In water", isCorrect: true },
    ],
    explanation: "Amphibians lay their eggs in water to prevent them from drying out.",
    image: null
  },
  //MEDIUM
  {
    id: 236,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which term describes animals that give birth to live young after development inside the mother's body?",
    answerOptions: [
      { answerText: "Oviparous", isCorrect: false },
      { answerText: "Ovoviviparous", isCorrect: false },
      { answerText: "Viviparous", isCorrect: true },
      { answerText: "Metamorphic", isCorrect: false },
    ],
    explanation: "Viviparous animals, such as most mammals, develop embryos internally before live birth.",
    image: null
  },
  {
    id: 237,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "In birds, what is the main function of the albumen (egg white)?",
    answerOptions: [
      { answerText: "Acts as a hard protective shell", isCorrect: false },
      { answerText: "Stores fat for energy", isCorrect: false },
      { answerText: "Provides water and protein to the developing embryo", isCorrect: true },
      { answerText: "Performs gas exchange", isCorrect: false },
    ],
    explanation: "The albumen cushions the embryo and supplies water and protein for its development.",
    image: null
  },
  {
    id: 238,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which vertebrate reproductive strategy produces many eggs but provides little parental care?",
    answerOptions: [
      { answerText: "Viviparity", isCorrect: false },
      { answerText: "Ovoviviparity", isCorrect: false },
      { answerText: "Internal fertilisation with parental care", isCorrect: false },
      { answerText: "Oviparity with external fertilisation", isCorrect: true },
    ],
    explanation: "External fertilisation, common in fish and amphibians, produces many eggs with minimal care.",
    image: null
  },
  {
    id: 239,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which membrane in the amniotic egg stores waste from the developing embryo?",
    answerOptions: [
      { answerText: "Chorion", isCorrect: false },
      { answerText: "Allantois", isCorrect: true },
      { answerText: "Amnion", isCorrect: false },
      { answerText: "Yolk sac", isCorrect: false },
    ],
    explanation: "The allantois stores nitrogenous waste and also helps with gas exchange.",
    image: null
  },
  {
    id: 240,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which group of vertebrates mostly uses internal fertilisation but does not have amniotic eggs?",
    answerOptions: [
      { answerText: "Birds", isCorrect: false },
      { answerText: "Reptiles", isCorrect: false },
      { answerText: "Mammals", isCorrect: false },
      { answerText: "Cartilaginous fish", isCorrect: true },
    ],
    explanation: "Sharks and rays fertilise internally but produce eggs without an amniotic shell.",
    image: null
  },
  {
    id: 241,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "What is a main advantage of internal fertilisation over external fertilisation?",
    answerOptions: [
      { answerText: "Larger number of eggs produced", isCorrect: false },
      { answerText: "Higher chance of fertilisation success", isCorrect: true },
      { answerText: "Requires less energy from the parents", isCorrect: false },
      { answerText: "No need for mating behaviour", isCorrect: false },
    ],
    explanation: "Internal fertilisation protects gametes and increases the likelihood of successful fertilisation.",
    image: null
  },
  {
    id: 242,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "In reptiles, the leathery shell of the egg primarily functions to:",
    answerOptions: [
      { answerText: "Act as a source of calcium for the embryo", isCorrect: false },
      { answerText: "Completely seal off air exchange", isCorrect: false },
      { answerText: "Provide extra nutrients", isCorrect: false },
      { answerText: "Prevent water loss while allowing gas exchange", isCorrect: true },
    ],
    explanation: "Reptile eggshells limit water loss but still allow oxygen and carbon dioxide to pass through.",
    image: null
  },
  {
    id: 243,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which vertebrate group includes species that are ovoviviparous?",
    answerOptions: [
      { answerText: "Most birds", isCorrect: false },
      { answerText: "All amphibians", isCorrect: false },
      { answerText: "Most reptiles", isCorrect: false },
      { answerText: "Some sharks", isCorrect: true },
    ],
    explanation: "In ovoviviparous species, embryos develop inside eggs within the parent's body until hatching.",
    image: null
  },
  {
    id: 244,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which structure in amniotic eggs surrounds the embryo and contains fluid for protection?",
    answerOptions: [
      { answerText: "Amnion", isCorrect: true },
      { answerText: "Chorion", isCorrect: false },
      { answerText: "Yolk sac", isCorrect: false },
      { answerText: "Allantois", isCorrect: false },
    ],
    explanation: "The amnion encloses the embryo in a fluid-filled sac for cushioning and protection.",
    image: null
  },
  {
    id: 245,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "In mammals, the umbilical cord connects the developing foetus to which structure?",
    answerOptions: [
      { answerText: "Placenta", isCorrect: true },
      { answerText: "Amnion", isCorrect: false },
      { answerText: "Allantois", isCorrect: false },
      { answerText: "Yolk sac", isCorrect: false },
    ],
    explanation: "The umbilical cord links the foetus to the placenta for nutrient and gas exchange.",
    image: null
  },
  {
    id: 246,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "What is a characteristic of oviparous reproduction?",
    answerOptions: [
      { answerText: "Embryos develop without any yolk", isCorrect: false },
      { answerText: "Eggs are laid outside the mother's body", isCorrect: true },
      { answerText: "Embryos are nourished via a placenta", isCorrect: false },
      { answerText: "Eggs are fertilised internally only", isCorrect: false },
    ],
    explanation: "In oviparous reproduction, eggs develop outside the mother, as seen in birds and reptiles.",
    image: null
  },
  {
    id: 247,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which vertebrate group relies on external fertilisation in water for reproduction?",
    answerOptions: [
      { answerText: "Birds", isCorrect: false },
      { answerText: "Mammals", isCorrect: false },
      { answerText: "Amphibians", isCorrect: true },
      { answerText: "Reptiles", isCorrect: false },
    ],
    explanation: "Most amphibians lay eggs in water, where fertilisation occurs outside the body.",
    image: null
  },
  {
    id: 248,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which reproductive strategy is common in animals with fewer offspring but high parental care?",
    answerOptions: [
      { answerText: "r-strategy", isCorrect: false },
      { answerText: "Oviparity", isCorrect: false },
      { answerText: "K-strategy", isCorrect: true },
      { answerText: "External fertilisation", isCorrect: false },
    ],
    explanation: "K-strategists produce fewer young but invest more care, increasing survival chances.",
    image: null
  },
  {
    id: 249,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "In reptiles, what role does the yolk sac play?",
    answerOptions: [
      { answerText: "Performs waste storage", isCorrect: false },
      { answerText: "Stores nutrients for the developing embryo", isCorrect: true },
      { answerText: "Produces shell material", isCorrect: false },
      { answerText: "Acts as a respiratory organ", isCorrect: false },
    ],
    explanation: "The yolk sac contains nutrients that the embryo uses for growth.",
    image: null
  },
  {
    id: 250,
    topic: "Vertebrate Reproduction",
    difficulty: "Medium",
    questionText: "Which vertebrate group includes monotremes that lay eggs?",
    answerOptions: [
      { answerText: "Reptiles", isCorrect: false },
      { answerText: "Birds", isCorrect: false },
      { answerText: "Mammals", isCorrect: true },
      { answerText: "Amphibians", isCorrect: false },
    ],
    explanation: "Monotremes, like the platypus, are egg-laying mammals.",
    image: null
  },
  //HARD
   {
    id: 251,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Why is the amniotic egg considered a key evolutionary adaptation for terrestrial life?",
    answerOptions: [
      { answerText: "It prevents the need for fertilisation", isCorrect: false },
      { answerText: "It increases the number of offspring", isCorrect: false },
      { answerText: "It allows reproduction away from water", isCorrect: true },
      { answerText: "It eliminates the need for parental care", isCorrect: false },
    ],
    explanation: "The amniotic egg provides its own aquatic environment, enabling vertebrates to reproduce on land.",
    image: null
  },
  {
    id: 252,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Which combination correctly matches a vertebrate group with its typical fertilisation method and egg type?",
    answerOptions: [
      { answerText: "Fish – internal fertilisation – amniotic egg", isCorrect: false },
      { answerText: "Reptiles – internal fertilisation – amniotic egg", isCorrect: true },
      { answerText: "Birds – external fertilisation – amniotic egg", isCorrect: false },
      { answerText: "Amphibians – internal fertilisation – leathery egg", isCorrect: false },
    ],
    explanation: "Reptiles fertilise internally and produce amniotic eggs with leathery shells for terrestrial life.",
    image: null
  },
  {
    id: 253,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Why do many fish species produce thousands of eggs during spawning?",
    answerOptions: [
      { answerText: "Because each egg needs less energy to produce", isCorrect: false },
      { answerText: "To increase parental care", isCorrect: false },
      { answerText: "To compensate for high egg and larva mortality rates", isCorrect: true },
      { answerText: "To avoid genetic variation", isCorrect: false },
    ],
    explanation: "In species with external fertilisation, many eggs are produced to ensure that some survive to adulthood.",
    image: null
  },
  {
    id: 254,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "In ovoviviparous reproduction, how is the embryo nourished?",
    answerOptions: [
      { answerText: "Directly by the mother via a placenta", isCorrect: false },
      { answerText: "By absorbing nutrients from the amniotic fluid", isCorrect: false },
      { answerText: "By photosynthesis within the egg membrane", isCorrect: false },
      { answerText: "By yolk within the egg inside the mother's body", isCorrect: true },
    ],
    explanation: "Ovoviviparous embryos rely on yolk stores inside the egg while being retained in the parent's body.",
    image: null
  },
  {
    id: 255,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Which statement best explains the survival advantage of parental care in K-strategist species?",
    answerOptions: [
      { answerText: "It reduces the need for fertilisation", isCorrect: false },
      { answerText: "It increases the likelihood of offspring survival to reproductive age", isCorrect: true },
      { answerText: "It allows for external fertilisation in harsh environments", isCorrect: false },
      { answerText: "It increases the total number of offspring produced", isCorrect: false },
    ],
    explanation: "Parental care in K-strategists ensures higher survival rates despite producing fewer offspring.",
    image: null
  },
  {
    id: 256,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Which structural adaptation in birds ensures efficient gas exchange for the developing embryo?",
    answerOptions: [
      { answerText: "Thick, impermeable eggshell", isCorrect: false },
      { answerText: "Yolk sac with air pockets", isCorrect: false },
      { answerText: "Chorion close to the shell", isCorrect: true },
      { answerText: "Amnion fused with the shell", isCorrect: false },
    ],
    explanation: "The chorion lies just beneath the eggshell and facilitates oxygen and carbon dioxide exchange.",
    image: null
  },
  {
    id: 257,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Why do amphibians generally require water for reproduction?",
    answerOptions: [
      { answerText: "They use internal fertilisation only", isCorrect: false },
      { answerText: "Their embryos require saltwater to survive", isCorrect: false },
      { answerText: "Their eggs lack a protective shell and would dry out on land", isCorrect: true },
      { answerText: "They cannot produce amniotic eggs", isCorrect: false },
    ],
    explanation: "Amphibian eggs are soft and jelly-like, making them vulnerable to desiccation outside water.",
    image: null
  },
  {
    id: 258,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Which adaptation is unique to monotreme reproduction among mammals?",
    answerOptions: [
      { answerText: "Producing milk for offspring", isCorrect: false },
      { answerText: "Providing parental care", isCorrect: false },
      { answerText: "Laying eggs instead of giving live birth", isCorrect: true },
      { answerText: "Internal fertilisation", isCorrect: false },
    ],
    explanation: "Monotremes, like the platypus, are the only mammals that lay eggs.",
    image: null
  },
  {
    id: 259,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "How does oviparity differ from viviparity in terms of embryonic nutrition?",
    answerOptions: [
      { answerText: "Oviparous embryos are nourished via the placenta, viviparous embryos rely solely on yolk", isCorrect: false },
      { answerText: "Both rely solely on the amniotic fluid", isCorrect: false },
      { answerText: "Oviparous embryos rely solely on yolk, viviparous embryos are nourished via the placenta", isCorrect: true },
      { answerText: "Both rely solely on maternal blood supply", isCorrect: false },
    ],
    explanation: "In oviparity, yolk provides nutrients; in viviparity, nutrients are supplied directly from the mother via the placenta.",
    image: null
  },
  {
    id: 260,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Why do some reptiles bury their eggs in warm sand?",
    answerOptions: [
      { answerText: "To prevent eggs from absorbing oxygen", isCorrect: false },
      { answerText: "To harden the shell faster", isCorrect: false },
      { answerText: "To use environmental heat for incubation", isCorrect: true },
      { answerText: "To stop embryo growth until hatching season", isCorrect: false },
    ],
    explanation: "Burying eggs in warm sand provides consistent heat for embryonic development.",
    image: null
  },
  {
    id: 261,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Which factor most limits the success of external fertilisation in fish?",
    answerOptions: [
      { answerText: "Lack of egg yolk", isCorrect: false },
      { answerText: "Slow embryonic development", isCorrect: false },
      { answerText: "Predation and dispersal of gametes in water", isCorrect: true },
      { answerText: "Inability to lay eggs", isCorrect: false },
    ],
    explanation: "Gametes released into water are easily lost or eaten, reducing fertilisation success.",
    image: null
  },
  {
    id: 262,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Why is the placenta considered an efficient adaptation in mammals?",
    answerOptions: [
      { answerText: "It replaces the need for amniotic fluid", isCorrect: false },
      { answerText: "It eliminates the need for fertilisation", isCorrect: false },
      { answerText: "It prevents gestation from occurring", isCorrect: false },
      { answerText: "It allows direct exchange of nutrients and wastes between mother and foetus", isCorrect: true },
    ],
    explanation: "The placenta enables a constant supply of nutrients and removal of wastes during gestation.",
    image: null
  },
  {
    id: 263,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "In temperature-dependent sex determination in reptiles, how does incubation temperature influence sex?",
    answerOptions: [
      { answerText: "High temperatures always produce females", isCorrect: false },
      { answerText: "Low temperatures always produce males", isCorrect: false },
      { answerText: "Specific temperature ranges trigger male or female development", isCorrect: true },
      { answerText: "Temperature has no effect on sex determination", isCorrect: false },
    ],
    explanation: "In some reptiles, incubation temperature activates genes that control sexual development.",
    image: null
  },
  {
    id: 264,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Which of the following is an example of an r-strategist vertebrate?",
    answerOptions: [
      { answerText: "An elephant", isCorrect: false },
      { answerText: "A whale", isCorrect: false },
      { answerText: "A frog", isCorrect: true },
      { answerText: "A gorilla", isCorrect: false },
    ],
    explanation: "Frogs produce many offspring with little parental care, typical of r-strategists.",
    image: null
  },
  {
    id: 265,
    topic: "Vertebrate Reproduction",
    difficulty: "Hard",
    questionText: "Which structural feature in the amniotic egg facilitates both respiration and waste storage?",
    answerOptions: [
      { answerText: "Chorion", isCorrect: false },
      { answerText: "Allantois", isCorrect: true },
      { answerText: "Yolk sac", isCorrect: false },
      { answerText: "Amnion", isCorrect: false },
    ],
    explanation: "The allantois is involved in both gas exchange and storing nitrogenous waste from the embryo.",
    image: null
  },
  // Response to Enviromant(Humans): EASY
   {
    id: 266,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "Which part of the brain controls balance and coordination?",
    answerOptions: [
      { answerText: "Cerebellum", isCorrect: true },
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Cerebrum", isCorrect: false },
      { answerText: "Hypothalamus", isCorrect: false },
    ],
    explanation: "The cerebellum controls balance, posture, and fine muscle coordination.",
    image: null
  },
  {
    id: 267,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "What is the main function of the iris in the eye?",
    answerOptions: [
      { answerText: "To focus light onto the retina", isCorrect: false },
      { answerText: "To protect the eye from dust", isCorrect: false },
      { answerText: "To control the amount of light entering the eye", isCorrect: true },
      { answerText: "To detect colour", isCorrect: false },
    ],
    explanation: "The iris adjusts the size of the pupil to regulate light entering the eye.",
    image: null
  },
  {
    id: 268,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "Which part of the nervous system includes the brain and spinal cord?",
    answerOptions: [
      { answerText: "Central nervous system", isCorrect: true },
      { answerText: "Peripheral nervous system", isCorrect: false },
      { answerText: "Autonomic nervous system", isCorrect: false },
      { answerText: "Sympathetic nervous system", isCorrect: false },
    ],
    explanation: "The central nervous system (CNS) consists of the brain and spinal cord.",
    image: null
  },
  {
    id: 269,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "What is the basic unit of the nervous system?",
    answerOptions: [
      { answerText: "Synapse", isCorrect: false },
      { answerText: "Neuron", isCorrect: true },
      { answerText: "Axon", isCorrect: false },
      { answerText: "Dendrite", isCorrect: false },
    ],
    explanation: "The neuron is the basic functional and structural unit of the nervous system.",
    image: null
  },
  {
    id: 270,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "Which structure in the ear detects sound vibrations?",
    answerOptions: [
      { answerText: "Semicircular canals", isCorrect: false },
      { answerText: "Eustachian tube", isCorrect: false },
      { answerText: "Cochlea", isCorrect: true },
      { answerText: "Auditory nerve", isCorrect: false },
    ],
    explanation: "The cochlea converts sound vibrations into nerve impulses.",
    image: null
  },
  {
    id: 271,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "Which photoreceptor cells detect colour in the retina?",
    answerOptions: [
      { answerText: "Rods", isCorrect: false },
      { answerText: "Ganglion cells", isCorrect: false },
      { answerText: "Cones", isCorrect: true },
      { answerText: "Bipolar cells", isCorrect: false },
    ],
    explanation: "Cones detect colour and work best in bright light.",
    image: null
  },
  {
    id: 272,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "Which part of the brain regulates body temperature and hunger?",
    answerOptions: [
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Thalamus", isCorrect: false },
      { answerText: "Cerebellum", isCorrect: false },
      { answerText: "Hypothalamus", isCorrect: true },
    ],
    explanation: "The hypothalamus controls homeostasis, including temperature and appetite.",
    image: null
  },
  {
    id: 273,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "Which part of a neuron carries impulses away from the cell body?",
    answerOptions: [
      { answerText: "Axon", isCorrect: true },
      { answerText: "Dendrite", isCorrect: false },
      { answerText: "Myelin sheath", isCorrect: false },
      { answerText: "Synapse", isCorrect: false },
    ],
    explanation: "The axon transmits impulses away from the neuron's cell body.",
    image: null
  },
  {
    id: 274,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "What is the function of the semicircular canals in the ear?",
    answerOptions: [
      { answerText: "To transmit sound to the cochlea", isCorrect: false },
      { answerText: "To detect balance and head movement", isCorrect: true },
      { answerText: "To equalise air pressure", isCorrect: false },
      { answerText: "To protect the inner ear", isCorrect: false },
    ],
    explanation: "The semicircular canals detect changes in head position and movement for balance.",
    image: null
  },
  {
    id: 275,
    topic: "Responding to the Environment: Humans",
    difficulty: "Easy",
    questionText: "Which part of the eye focuses light onto the retina?",
    answerOptions: [
      { answerText: "Pupil", isCorrect: false },
      { answerText: "Lens", isCorrect: true },
      { answerText: "Cornea", isCorrect: false },
      { answerText: "Sclera", isCorrect: false },
    ],
    explanation: "The lens changes shape to focus light precisely onto the retina.",
    image: null
  },
  //MEDIUM
  {
    id: 276,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "Which part of the brain controls involuntary activities such as heartbeat and breathing?",
    answerOptions: [
      { answerText: "Medulla oblongata", isCorrect: true },
      { answerText: "Cerebellum", isCorrect: false },
      { answerText: "Cerebrum", isCorrect: false },
      { answerText: "Pons", isCorrect: false },
    ],
    explanation: "The medulla oblongata regulates involuntary processes like breathing and heartbeat.",
    image: null
  },
  {
    id: 277,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "What is the role of the myelin sheath in neurons?",
    answerOptions: [
      { answerText: "To store neurotransmitters", isCorrect: false },
      { answerText: "To produce energy for the neuron", isCorrect: false },
      { answerText: "To speed up the transmission of nerve impulses", isCorrect: true },
      { answerText: "To detect stimuli", isCorrect: false },
    ],
    explanation: "The myelin sheath insulates axons, increasing the speed of impulse transmission.",
    image: null
  },
  {
    id: 278,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "Which eye structure contains photoreceptor cells?",
    answerOptions: [
      { answerText: "Lens", isCorrect: false },
      { answerText: "Cornea", isCorrect: false },
      { answerText: "Pupil", isCorrect: false },
      { answerText: "Retina", isCorrect: true },
    ],
    explanation: "The retina contains rods and cones that detect light and colour.",
    image: null
  },
  {
    id: 279,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "Which nerve transmits impulses from the ear to the brain?",
    answerOptions: [
      { answerText: "Optic nerve", isCorrect: false },
      { answerText: "Olfactory nerve", isCorrect: false },
      { answerText: "Auditory nerve", isCorrect: true },
      { answerText: "Facial nerve", isCorrect: false },
    ],
    explanation: "The auditory nerve carries sound information from the cochlea to the brain.",
    image: null
  },
  {
    id: 280,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "What is the function of the corpus callosum?",
    answerOptions: [
      { answerText: "To regulate hormone release", isCorrect: false },
      { answerText: "To control reflex actions", isCorrect: false },
      { answerText: "To connect the left and right hemispheres of the brain", isCorrect: true },
      { answerText: "To maintain posture", isCorrect: false },
    ],
    explanation: "The corpus callosum allows communication between the two cerebral hemispheres.",
    image: null
  },
  {
    id: 281,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "Which part of the ear helps equalise pressure on either side of the eardrum?",
    answerOptions: [
      { answerText: "Cochlea", isCorrect: false },
      { answerText: "Ossicles", isCorrect: false },
      { answerText: "Eustachian tube", isCorrect: true },
      { answerText: "Pinna", isCorrect: false },
    ],
    explanation: "The Eustachian tube maintains air pressure balance between the outer and middle ear.",
    image: null
  },
  {
    id: 282,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "Which receptor in the skin detects pressure?",
    answerOptions: [
      { answerText: "Meissner’s corpuscle", isCorrect: false },
      { answerText: "Free nerve endings", isCorrect: false },
      { answerText: "Pacinian corpuscle", isCorrect: true },
      { answerText: "Merkel cells", isCorrect: false },
    ],
    explanation: "Pacinian corpuscles detect deep pressure and vibration.",
    image: null
  },
  {
    id: 283,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "Which brain structure acts as a relay centre for sensory information?",
    answerOptions: [
      { answerText: "Hypothalamus", isCorrect: false },
      { answerText: "Thalamus", isCorrect: true },
      { answerText: "Midbrain", isCorrect: false },
      { answerText: "Cerebellum", isCorrect: false },
    ],
    explanation: "The thalamus directs sensory signals to the appropriate areas of the brain.",
    image: null
  },
  {
    id: 284,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "Which part of the brain is responsible for reasoning, problem-solving, and voluntary movement?",
    answerOptions: [
      { answerText: "Brainstem", isCorrect: false },
      { answerText: "Cerebellum", isCorrect: false },
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Cerebrum", isCorrect: true },
    ],
    explanation: "The cerebrum controls higher mental processes and voluntary movements.",
    image: null
  },
  {
    id: 285,
    topic: "Responding to the Environment: Humans",
    difficulty: "Medium",
    questionText: "What is the function of the fovea centralis in the eye?",
    answerOptions: [
      { answerText: "Provides the sharpest vision", isCorrect: true },
      { answerText: "Controls the amount of light entering the eye", isCorrect: false },
      { answerText: "Detects peripheral vision", isCorrect: false },
      { answerText: "Focuses light onto the retina", isCorrect: false },
    ],
    explanation: "The fovea centralis contains a high concentration of cones for sharp central vision.",
    image: null
  },
  //HARD
   {
    id: 286,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Which part of the brain controls body temperature, hunger, and water balance?",
    answerOptions: [
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Thalamus", isCorrect: false },
      { answerText: "Hypothalamus", isCorrect: true },
      { answerText: "Cerebellum", isCorrect: false },
    ],
    explanation: "The hypothalamus maintains homeostasis by regulating temperature, hunger, and water balance.",
    image: null
  },
  {
    id: 287,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Which structure in the inner ear is responsible for detecting rotational movement?",
    answerOptions: [
      { answerText: "Cochlea", isCorrect: false },
      { answerText: "Ossicles", isCorrect: false },
      { answerText: "Vestibule", isCorrect: false },
      { answerText: "Semicircular canals", isCorrect: true },
    ],
    explanation: "The semicircular canals contain fluid and sensory cells that detect rotational movements of the head.",
    image: null
  },
  {
    id: 288,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "What is the main neurotransmitter involved in stimulating muscle contraction?",
    answerOptions: [
      { answerText: "Dopamine", isCorrect: false },
      { answerText: "Acetylcholine", isCorrect: true },
      { answerText: "Serotonin", isCorrect: false },
      { answerText: "Adrenaline", isCorrect: false },
    ],
    explanation: "Acetylcholine is released at neuromuscular junctions to trigger muscle contraction.",
    image: null
  },
  {
    id: 289,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Damage to which part of the brain would most likely affect coordination and balance?",
    answerOptions: [
      { answerText: "Cerebellum", isCorrect: true },
      { answerText: "Cerebrum", isCorrect: false },
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Corpus callosum", isCorrect: false },
    ],
    explanation: "The cerebellum fine-tunes voluntary movements and maintains balance.",
    image: null
  },
  {
    id: 290,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Which photoreceptor cells are responsible for colour vision?",
    answerOptions: [
      { answerText: "Rods", isCorrect: false },
      { answerText: "Cones", isCorrect: true },
      { answerText: "Ganglion cells", isCorrect: false },
      { answerText: "Bipolar cells", isCorrect: false },
    ],
    explanation: "Cones detect colour and function best in bright light.",
    image: null
  },
  {
    id: 291,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Which type of neuron carries impulses from receptors to the central nervous system?",
    answerOptions: [
      { answerText: "Motor neuron", isCorrect: false },
      { answerText: "Sensory neuron", isCorrect: true },
      { answerText: "Relay neuron", isCorrect: false },
      { answerText: "Interneuron", isCorrect: false },
    ],
    explanation: "Sensory neurons transmit impulses from sensory receptors to the brain or spinal cord.",
    image: null
  },
  {
    id: 292,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Which part of the eye controls the amount of light entering?",
    answerOptions: [
      { answerText: "Cornea", isCorrect: false },
      { answerText: "Lens", isCorrect: false },
      { answerText: "Iris", isCorrect: true },
      { answerText: "Retina", isCorrect: false },
    ],
    explanation: "The iris adjusts the pupil size to regulate light entering the eye.",
    image: null
  },
  {
    id: 293,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Which lobe of the cerebrum is responsible for processing visual information?",
    answerOptions: [
      { answerText: "Occipital lobe", isCorrect: true },
      { answerText: "Parietal lobe", isCorrect: false },
      { answerText: "Frontal lobe", isCorrect: false },
      { answerText: "Temporal lobe", isCorrect: false },
    ],
    explanation: "The occipital lobe processes visual input from the eyes.",
    image: null
  },
  {
    id: 294,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "What is the function of the semicircular canals and vestibule together?",
    answerOptions: [
      { answerText: "Transmitting sound to the cochlea", isCorrect: false },
      { answerText: "Maintaining balance and equilibrium", isCorrect: true },
      { answerText: "Amplifying sound waves", isCorrect: false },
      { answerText: "Regulating air pressure", isCorrect: false },
    ],
    explanation: "The semicircular canals detect movement, while the vestibule detects head position for balance.",
    image: null
  },
  {
    id: 295,
    topic: "Responding to the Environment: Humans",
    difficulty: "Hard",
    questionText: "Which brain structure links the nervous system to the endocrine system?",
    answerOptions: [
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Thalamus", isCorrect: false },
      { answerText: "Pons", isCorrect: false },
      { answerText: "Hypothalamus", isCorrect: true },
    ],
    explanation: "The hypothalamus regulates the pituitary gland, linking the nervous and endocrine systems.",
    image: null
  },
  //RESPONSE TO THE ENVIROMANT(PLANTS): EASY
   {
    id: 296,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "What is the bending of a plant towards light called?",
    answerOptions: [
      { answerText: "Geotropism", isCorrect: false },
      { answerText: "Phototropism", isCorrect: true },
      { answerText: "Hydrotropism", isCorrect: false },
      { answerText: "Thigmotropism", isCorrect: false },
    ],
    explanation: "Phototropism is the directional growth of a plant towards a light source.",
    image: null
  },
  {
    id: 297,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which plant hormone is responsible for cell elongation during phototropism?",
    answerOptions: [
      { answerText: "Gibberellin", isCorrect: false },
      { answerText: "Cytokinin", isCorrect: false },
      { answerText: "Auxin", isCorrect: true },
      { answerText: "Ethylene", isCorrect: false },
    ],
    explanation: "Auxin accumulates on the shaded side of the plant, causing cell elongation and bending toward the light.",
    image: null
  },
  {
    id: 298,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "What type of tropism is the growth of roots downward due to gravity?",
    answerOptions: [
      { answerText: "Negative geotropism", isCorrect: false },
      { answerText: "Phototropism", isCorrect: false },
      { answerText: "Positive geotropism", isCorrect: true },
      { answerText: "Thigmotropism", isCorrect: false },
    ],
    explanation: "Roots exhibit positive geotropism because they grow in the direction of gravitational pull.",
    image: null
  },
  {
    id: 299,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "What is the growth response of a plant to touch called?",
    answerOptions: [
      { answerText: "Hydrotropism", isCorrect: false },
      { answerText: "Phototropism", isCorrect: false },
      { answerText: "Thigmotropism", isCorrect: true },
      { answerText: "Thermotropism", isCorrect: false },
    ],
    explanation: "Thigmotropism occurs when plants grow in response to contact, as seen in climbing plants.",
    image: null
  },
  {
    id: 300,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which plant hormone promotes ripening of fruit?",
    answerOptions: [
      { answerText: "Auxin", isCorrect: false },
      { answerText: "Ethylene", isCorrect: true },
      { answerText: "Gibberellin", isCorrect: false },
      { answerText: "Cytokinin", isCorrect: false },
    ],
    explanation: "Ethylene gas stimulates the ripening process in fruits.",
    image: null
  },
  {
    id: 301,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "What is the growth response of a plant towards water called?",
    answerOptions: [
      { answerText: "Thigmotropism", isCorrect: false },
      { answerText: "Phototropism", isCorrect: false },
      { answerText: "Hydrotropism", isCorrect: true },
      { answerText: "Geotropism", isCorrect: false },
    ],
    explanation: "Hydrotropism is the growth of plant roots toward a source of water.",
    image: null
  },
  {
    id: 302,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which hormone is responsible for seed germination and stem elongation?",
    answerOptions: [
      { answerText: "Auxin", isCorrect: false },
      { answerText: "Cytokinin", isCorrect: false },
      { answerText: "Abscisic acid", isCorrect: false },
      { answerText: "Gibberellin", isCorrect: true },
    ],
    explanation: "Gibberellin stimulates cell division and elongation during germination.",
    image: null
  },
  {
    id: 303,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "What is the name for the growth of a plant stem away from gravity?",
    answerOptions: [
      { answerText: "Positive geotropism", isCorrect: false },
      { answerText: "Phototropism", isCorrect: false },
      { answerText: "Hydrotropism", isCorrect: false },
      { answerText: "Negative geotropism", isCorrect: true },
    ],
    explanation: "Stems exhibit negative geotropism as they grow upward against gravitational pull.",
    image: null
  },
  {
    id: 304,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which hormone causes the abscission (shedding) of leaves?",
    answerOptions: [
      { answerText: "Auxin", isCorrect: false },
      { answerText: "Ethylene", isCorrect: false },
      { answerText: "Abscisic acid", isCorrect: true },
      { answerText: "Gibberellin", isCorrect: false },
    ],
    explanation: "Abscisic acid promotes leaf fall during certain seasons.",
    image: null
  },
  {
    id: 305,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "What is the term for a plant’s response to seasonal changes in day length?",
    answerOptions: [
      { answerText: "Phototropism", isCorrect: false },
      { answerText: "Photoperiodism", isCorrect: true },
      { answerText: "Hydrotropism", isCorrect: false },
      { answerText: "Thermotropism", isCorrect: false },
    ],
    explanation: "Photoperiodism influences flowering and other seasonal activities in plants.",
    image: null
  },
  {
    id: 306,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which plant hormone promotes lateral bud growth?",
    answerOptions: [
      { answerText: "Auxin", isCorrect: false },
      { answerText: "Ethylene", isCorrect: false },
      { answerText: "Cytokinin", isCorrect: true },
      { answerText: "Abscisic acid", isCorrect: false },
    ],
    explanation: "Cytokinins stimulate cell division and promote growth of lateral buds.",
    image: null
  },
  {
    id: 307,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which part of the plant detects light direction?",
    answerOptions: [
      { answerText: "Root cap", isCorrect: false },
      { answerText: "Leaves", isCorrect: false },
      { answerText: "Stem", isCorrect: false },
      { answerText: "Shoot tip", isCorrect: true },
    ],
    explanation: "The shoot tip contains cells that sense light direction and trigger phototropic growth.",
    image: null
  },
  {
    id: 308,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which hormone helps plants close their stomata during water stress?",
    answerOptions: [
      { answerText: "Auxin", isCorrect: false },
      { answerText: "Abscisic acid", isCorrect: true },
      { answerText: "Cytokinin", isCorrect: false },
      { answerText: "Gibberellin", isCorrect: false },
    ],
    explanation: "Abscisic acid triggers stomatal closure to reduce water loss during drought.",
    image: null
  },
  {
    id: 309,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "What is the term for growth in response to temperature changes?",
    answerOptions: [
      { answerText: "Thermotropism", isCorrect: true },
      { answerText: "Phototropism", isCorrect: false },
      { answerText: "Hydrotropism", isCorrect: false },
      { answerText: "Geotropism", isCorrect: false },
    ],
    explanation: "Thermotropism is the growth movement of plants in response to temperature.",
    image: null
  },
  {
    id: 310,
    topic: "Responding to the Environment: Plants",
    difficulty: "Easy",
    questionText: "Which hormone delays leaf senescence (aging)?",
    answerOptions: [
      { answerText: "Auxin", isCorrect: false },
      { answerText: "Abscisic acid", isCorrect: false },
      { answerText: "Ethylene", isCorrect: false },
      { answerText: "Cytokinin", isCorrect: true },
    ],
    explanation: "Cytokinins slow down leaf aging by promoting nutrient mobilization.",
    image: null
  },
  //MEDIUM
  {
    id: 311,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "Why does a plant stem bend towards light during phototropism?",
    answerOptions: [
      { answerText: "Light directly stimulates cell division", isCorrect: false },
      { answerText: "Photosynthesis occurs more on the shaded side", isCorrect: false },
      { answerText: "Unequal distribution of auxin causes more elongation on the shaded side", isCorrect: true },
      { answerText: "Gravity pulls the stem toward the light", isCorrect: false },
    ],
    explanation: "Auxin accumulates on the shaded side of the stem, stimulating greater cell elongation there, bending the plant toward the light.",
    image: null
  },
  {
    id: 312,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "In roots, how does auxin affect cell elongation?",
    answerOptions: [
      { answerText: "It inhibits elongation on the lower side, causing roots to bend downward", isCorrect: true },
      { answerText: "It stimulates elongation on the upper side, bending roots upward", isCorrect: false },
      { answerText: "It has no effect on root elongation", isCorrect: false },
      { answerText: "It causes equal elongation on both sides", isCorrect: false },
    ],
    explanation: "In roots, high auxin concentrations inhibit cell elongation on the lower side, resulting in positive geotropism.",
    image: null
  },
  {
    id: 313,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "What is the role of the root cap in geotropism?",
    answerOptions: [
      { answerText: "It produces auxin for root growth", isCorrect: false },
      { answerText: "It absorbs water and minerals", isCorrect: false },
      { answerText: "It contains statoliths that detect gravity", isCorrect: true },
      { answerText: "It anchors the plant in the soil", isCorrect: false },
    ],
    explanation: "The root cap contains statoliths (starch grains) that settle due to gravity, helping roots detect orientation.",
    image: null
  },
  {
    id: 314,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "Which hormone works with auxin to promote cell division in plant tissues?",
    answerOptions: [
      { answerText: "Gibberellin", isCorrect: false },
      { answerText: "Ethylene", isCorrect: false },
      { answerText: "Cytokinin", isCorrect: true },
      { answerText: "Abscisic acid", isCorrect: false },
    ],
    explanation: "Cytokinins promote cell division, often working synergistically with auxin.",
    image: null
  },
  {
    id: 315,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "What is the function of phytochrome in plants?",
    answerOptions: [
      { answerText: "It detects changes in light quality and length of day", isCorrect: true },
      { answerText: "It stimulates photosynthesis directly", isCorrect: false },
      { answerText: "It transports auxin to shaded cells", isCorrect: false },
      { answerText: "It stores starch for energy", isCorrect: false },
    ],
    explanation: "Phytochromes are light-sensitive pigments that detect red and far-red light, regulating photoperiodism.",
    image: null
  },
  {
    id: 316,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "Why do climbing plants wrap around supports?",
    answerOptions: [
      { answerText: "They are guided by gravity", isCorrect: false },
      { answerText: "They respond to touch through thigmotropism", isCorrect: true },
      { answerText: "They grow faster on one side due to phototropism", isCorrect: false },
      { answerText: "They grow towards water", isCorrect: false },
    ],
    explanation: "Thigmotropism causes one side of the stem to grow faster upon touching a support, leading to coiling.",
    image: null
  },
  {
    id: 317,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "How does abscisic acid help plants survive drought conditions?",
    answerOptions: [
      { answerText: "It increases leaf surface area", isCorrect: false },
      { answerText: "It promotes root growth", isCorrect: false },
      { answerText: "It stimulates seed germination", isCorrect: false },
      { answerText: "It closes stomata to reduce water loss", isCorrect: true },
    ],
    explanation: "Abscisic acid triggers stomatal closure, minimizing transpiration during water stress.",
    image: null
  },
  {
    id: 318,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "What is the effect of gibberellins on plant growth?",
    answerOptions: [
      { answerText: "They inhibit bud growth", isCorrect: false },
      { answerText: "They promote stem elongation and seed germination", isCorrect: true },
      { answerText: "They cause leaf drop", isCorrect: false },
      { answerText: "They detect light direction", isCorrect: false },
    ],
    explanation: "Gibberellins stimulate stem elongation and break seed dormancy to promote germination.",
    image: null
  },
  {
    id: 319,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "In photoperiodism, what triggers flowering in short-day plants?",
    answerOptions: [
      { answerText: "A day longer than the critical length", isCorrect: false },
      { answerText: "Exposure to constant light", isCorrect: false },
      { answerText: "A night longer than the critical length", isCorrect: true },
      { answerText: "Exposure to far-red light only", isCorrect: false },
    ],
    explanation: "Short-day plants flower when the night period exceeds their critical photoperiod.",
    image: null
  },
  {
    id: 320,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "How does auxin distribution differ in stems versus roots?",
    answerOptions: [
      { answerText: "In stems it promotes elongation, in roots it inhibits elongation", isCorrect: true },
      { answerText: "In stems it inhibits elongation, in roots it promotes elongation", isCorrect: false },
      { answerText: "It has no effect in roots", isCorrect: false },
      { answerText: "It acts the same way in both", isCorrect: false },
    ],
    explanation: "Auxin stimulates cell elongation in stems but inhibits elongation in roots.",
    image: null
  },
  {
    id: 321,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "Which environmental cue is most important for seed germination in many desert plants?",
    answerOptions: [
      { answerText: "Touch", isCorrect: false },
      { answerText: "Water availability", isCorrect: true },
      { answerText: "Length of day", isCorrect: false },
      { answerText: "Gravity", isCorrect: false },
    ],
    explanation: "Desert plants often remain dormant until rainfall provides sufficient water for germination.",
    image: null
  },
  {
    id: 322,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "What type of plant movement occurs without directional growth?",
    answerOptions: [
      { answerText: "Tropism", isCorrect: false },
      { answerText: "Geotropism", isCorrect: false },
      { answerText: "Nastic movement", isCorrect: true },
      { answerText: "Hydrotropism", isCorrect: false },
    ],
    explanation: "Nastic movements, such as leaf folding in Mimosa, are non-directional responses to stimuli.",
    image: null
  },
  {
    id: 323,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "How do statoliths function in gravity perception?",
    answerOptions: [
      { answerText: "They produce auxin directly", isCorrect: false },
      { answerText: "They absorb water for growth", isCorrect: false },
      { answerText: "They settle under gravity, signaling the direction of growth", isCorrect: true },
      { answerText: "They photosynthesize", isCorrect: false },
    ],
    explanation: "Statoliths are dense starch grains that settle in the direction of gravity, triggering growth responses.",
    image: null
  },
  {
    id: 324,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "In positive phototropism, which side of the plant has more auxin?",
    answerOptions: [
      { answerText: "The lit side", isCorrect: false },
      { answerText: "Both sides equally", isCorrect: false },
      { answerText: "The shaded side", isCorrect: true },
      { answerText: "Neither side", isCorrect: false },
    ],
    explanation: "Auxin redistributes to the shaded side, causing more elongation there and bending toward light.",
    image: null
  },
  {
    id: 325,
    topic: "Responding to the Environment: Plants",
    difficulty: "Medium",
    questionText: "Which pigment system regulates photoperiodism in plants?",
    answerOptions: [
      { answerText: "Chlorophyll system", isCorrect: false },
      { answerText: "Phytochrome system", isCorrect: true },
      { answerText: "Carotenoid system", isCorrect: false },
      { answerText: "Anthocyanin system", isCorrect: false },
    ],
    explanation: "The phytochrome system senses red and far-red light, regulating flowering and seasonal responses.",
    image: null
  },
  //HARD
  {
    id: 326,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "In phototropism, how does auxin move from the lit side to the shaded side of the stem?",
    answerOptions: [
      { answerText: "Via lateral transport through the epidermis", isCorrect: false },
      { answerText: "Through active transport in parenchyma cells", isCorrect: true },
      { answerText: "By diffusion through xylem vessels", isCorrect: false },
      { answerText: "By bulk flow in the phloem", isCorrect: false },
    ],
    explanation: "Auxin is actively transported laterally from the illuminated side to the shaded side via parenchyma cells, creating the concentration gradient needed for bending.",
    image: null
  },
  {
    id: 327,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "Why does the root exhibit a slower geotropic response compared to the shoot's phototropic response?",
    answerOptions: [
      { answerText: "Roots lack phytochrome pigments", isCorrect: false },
      { answerText: "Roots have no statoliths", isCorrect: false },
      { answerText: "Root cells elongate more slowly and respond differently to auxin", isCorrect: true },
      { answerText: "Roots use cytokinin instead of auxin", isCorrect: false },
    ],
    explanation: "Roots grow slower because their cells elongate less rapidly, and high auxin concentrations inhibit rather than promote elongation.",
    image: null
  },
  {
    id: 328,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "Which part of the plant detects light direction in phototropism?",
    answerOptions: [
      { answerText: "Base of the stem", isCorrect: false },
      { answerText: "Apical meristem of the shoot", isCorrect: true },
      { answerText: "Root cap", isCorrect: false },
      { answerText: "Lateral buds", isCorrect: false },
    ],
    explanation: "The shoot tip detects light direction and initiates auxin redistribution to the shaded side.",
    image: null
  },
  {
    id: 329,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "What is the role of far-red light in photoperiodism?",
    answerOptions: [
      { answerText: "It promotes auxin synthesis", isCorrect: false },
      { answerText: "It stimulates chlorophyll production", isCorrect: false },
      { answerText: "It converts Pfr to Pr, affecting flowering responses", isCorrect: true },
      { answerText: "It breaks seed dormancy", isCorrect: false },
    ],
    explanation: "Far-red light converts active Pfr to inactive Pr, which influences photoperiodic flowering responses.",
    image: null
  },
  {
    id: 330,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "In positive geotropism of roots, where is auxin concentration highest?",
    answerOptions: [
      { answerText: "On the lower side of the root", isCorrect: true },
      { answerText: "On the upper side of the root", isCorrect: false },
      { answerText: "Evenly distributed", isCorrect: false },
      { answerText: "In the root cap only", isCorrect: false },
    ],
    explanation: "Auxin accumulates more on the lower side due to statolith movement, inhibiting elongation there and bending the root downward.",
    image: null
  },
  {
    id: 331,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "What adaptive advantage does thigmotropism give climbing plants?",
    answerOptions: [
      { answerText: "It helps them store water in dry conditions", isCorrect: false },
      { answerText: "It enables faster seed germination", isCorrect: false },
      { answerText: "It aids nutrient absorption", isCorrect: false },
      { answerText: "It allows them to reach sunlight without investing in thick supportive stems", isCorrect: true },
    ],
    explanation: "By climbing other structures, plants can access more light without needing to produce strong, thick stems.",
    image: null
  },
  {
    id: 332,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "Why do short-day plants not flower if their dark period is interrupted by light?",
    answerOptions: [
      { answerText: "The light increases auxin levels too much", isCorrect: false },
      { answerText: "Light converts Pr to Pfr, disrupting the necessary night length signal", isCorrect: true },
      { answerText: "It causes leaf abscission", isCorrect: false },
      { answerText: "It triggers seed germination instead", isCorrect: false },
    ],
    explanation: "Interruption of darkness by light changes the phytochrome state, preventing the plant from perceiving the correct photoperiod.",
    image: null
  },
  {
    id: 333,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "What is the main role of statolith sedimentation in root cap cells?",
    answerOptions: [
      { answerText: "To promote cell wall thickening", isCorrect: false },
      { answerText: "To store starch for root growth", isCorrect: false },
      { answerText: "To trigger redistribution of auxin in response to gravity", isCorrect: true },
      { answerText: "To produce hormones for flowering", isCorrect: false },
    ],
    explanation: "Statolith sedimentation signals gravity direction, altering auxin transport and causing directional growth.",
    image: null
  },
  {
    id: 334,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "Why do gibberellins promote seed germination in some plants?",
    answerOptions: [
      { answerText: "They increase chlorophyll synthesis", isCorrect: false },
      { answerText: "They strengthen the seed coat", isCorrect: false },
      { answerText: "They transport water into the seed", isCorrect: false },
      { answerText: "They stimulate enzymes that break down stored food", isCorrect: true },
    ],
    explanation: "Gibberellins activate production of enzymes like amylase, which break down starches for seedling growth.",
    image: null
  },
  {
    id: 335,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "In which part of the plant does auxin synthesis primarily occur?",
    answerOptions: [
      { answerText: "Root tips", isCorrect: false },
      { answerText: "Mature leaves", isCorrect: false },
      { answerText: "Shoot apical meristems and young leaves", isCorrect: true },
      { answerText: "Xylem vessels", isCorrect: false },
    ],
    explanation: "Auxin is mainly synthesized in shoot tips and young leaves, from where it is transported to other parts.",
    image: null
  },
  {
    id: 336,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "Which mechanism explains the bending of shoots during phototropism?",
    answerOptions: [
      { answerText: "Differential cell elongation due to asymmetric auxin distribution", isCorrect: true },
      { answerText: "Cell division on the shaded side", isCorrect: false },
      { answerText: "Water accumulation on the shaded side", isCorrect: false },
      { answerText: "Gravity pulling cells toward the light", isCorrect: false },
    ],
    explanation: "Phototropism occurs because cells on the shaded side elongate more, causing bending toward the light.",
    image: null
  },
  {
    id: 337,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "Why do desert plants often have CAM photosynthesis alongside photoperiodic adaptations?",
    answerOptions: [
      { answerText: "It speeds up growth in high heat", isCorrect: false },
      { answerText: "It allows stomata to open at night, reducing water loss", isCorrect: true },
      { answerText: "It increases auxin production", isCorrect: false },
      { answerText: "It prevents seed dormancy", isCorrect: false },
    ],
    explanation: "CAM photosynthesis minimizes water loss by opening stomata at night and storing CO₂ for use in the day.",
    image: null
  },
  {
    id: 338,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "How do plants integrate multiple stimuli like light and gravity for growth direction?",
    answerOptions: [
      { answerText: "Each stimulus acts independently without interaction", isCorrect: false },
      { answerText: "The stronger physical force always dominates", isCorrect: false },
      { answerText: "Hormone signaling pathways interact to prioritize the response", isCorrect: true },
      { answerText: "The plant alternates responses over time", isCorrect: false },
    ],
    explanation: "Plants process multiple stimuli through hormone cross-talk, integrating signals to produce the most adaptive growth direction.",
    image: null
  },
  {
    id: 339,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "Why do some alpine plants have photoperiodic responses different from lowland plants?",
    answerOptions: [
      { answerText: "They cannot produce phytochrome", isCorrect: false },
      { answerText: "They use gravity instead of light cues", isCorrect: false },
      { answerText: "They are adapted to shorter growing seasons and different daylength patterns", isCorrect: true },
      { answerText: "They lack auxin", isCorrect: false },
    ],
    explanation: "High-altitude plants adapt their flowering to short seasons and unique daylength variations to maximize reproductive success.",
    image: null
  },
  {
    id: 340,
    topic: "Responding to the Environment: Plants",
    difficulty: "Hard",
    questionText: "What is the main role of vernalization in plants?",
    answerOptions: [
      { answerText: "It delays germination until spring", isCorrect: false },
      { answerText: "It stimulates seed dispersal", isCorrect: false },
      { answerText: "It induces flowering after exposure to prolonged cold", isCorrect: true },
      { answerText: "It increases water uptake", isCorrect: false },
    ],
    explanation: "Vernalization ensures flowering occurs after winter, preventing premature blooming in autumn.",
    image: null
  },
  //EDNOCRINE SYSTEM: EASY
   {
    id: 341,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which gland is often called the 'master gland'?",
    answerOptions: [
      { answerText: "Thyroid gland", isCorrect: false },
      { answerText: "Adrenal gland", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: true },
      { answerText: "Pancreas", isCorrect: false },
    ],
    explanation: "The pituitary gland is called the 'master gland' because it secretes hormones that regulate other endocrine glands.",
    image: null
  },
  {
    id: 342,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which hormone regulates blood sugar by lowering glucose levels?",
    answerOptions: [
      { answerText: "Glucagon", isCorrect: false },
      { answerText: "Insulin", isCorrect: true },
      { answerText: "Adrenaline", isCorrect: false },
      { answerText: "Thyroxine", isCorrect: false },
    ],
    explanation: "Insulin, secreted by the pancreas, helps cells take in glucose, lowering blood sugar levels.",
    image: null
  },
  {
    id: 343,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which gland produces thyroxine?",
    answerOptions: [
      { answerText: "Adrenal gland", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Thyroid gland", isCorrect: true },
      { answerText: "Pineal gland", isCorrect: false },
    ],
    explanation: "The thyroid gland, located in the neck, produces thyroxine, which regulates metabolism.",
    image: null
  },
  {
    id: 344,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "What is the role of adrenaline in the body?",
    answerOptions: [
      { answerText: "Lowers blood glucose", isCorrect: false },
      { answerText: "Prepares the body for 'fight or flight'", isCorrect: true },
      { answerText: "Promotes bone growth", isCorrect: false },
      { answerText: "Regulates sleep cycles", isCorrect: false },
    ],
    explanation: "Adrenaline increases heart rate, blood flow to muscles, and energy release during emergencies.",
    image: null
  },
  {
    id: 345,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which endocrine gland is located on top of each kidney?",
    answerOptions: [
      { answerText: "Adrenal gland", isCorrect: true },
      { answerText: "Thyroid gland", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Parathyroid gland", isCorrect: false },
    ],
    explanation: "The adrenal glands sit above the kidneys and produce hormones like adrenaline and cortisol.",
    image: null
  },
  {
    id: 346,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which gland controls the body's circadian rhythms by releasing melatonin?",
    answerOptions: [
      { answerText: "Pineal gland", isCorrect: true },
      { answerText: "Thyroid gland", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Adrenal gland", isCorrect: false },
    ],
    explanation: "The pineal gland secretes melatonin, which helps regulate sleep-wake cycles.",
    image: null
  },
  {
    id: 347,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which hormone increases blood calcium levels?",
    answerOptions: [
      { answerText: "Calcitonin", isCorrect: false },
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Parathyroid hormone", isCorrect: true },
      { answerText: "Glucagon", isCorrect: false },
    ],
    explanation: "Parathyroid hormone increases calcium release from bones and absorption in the gut.",
    image: null
  },
  {
    id: 348,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which gland is responsible for regulating metabolism?",
    answerOptions: [
      { answerText: "Pancreas", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Thyroid gland", isCorrect: true },
      { answerText: "Adrenal gland", isCorrect: false },
    ],
    explanation: "The thyroid gland produces hormones like thyroxine that control the body's metabolic rate.",
    image: null
  },
  {
    id: 349,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which hormone stimulates milk production after childbirth?",
    answerOptions: [
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "Oxytocin", isCorrect: false },
      { answerText: "Estrogen", isCorrect: false },
      { answerText: "Prolactin", isCorrect: true },
    ],
    explanation: "Prolactin, produced by the anterior pituitary, stimulates milk production in the mammary glands.",
    image: null
  },
  {
    id: 350,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which hormone stimulates the uterus to contract during childbirth?",
    answerOptions: [
      { answerText: "Estrogen", isCorrect: false },
      { answerText: "Prolactin", isCorrect: false },
      { answerText: "Oxytocin", isCorrect: true },
      { answerText: "Testosterone", isCorrect: false },
    ],
    explanation: "Oxytocin triggers uterine contractions during labour and helps with milk ejection.",
    image: null
  },
  {
    id: 351,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which part of the brain controls the pituitary gland?",
    answerOptions: [
      { answerText: "Cerebellum", isCorrect: false },
      { answerText: "Medulla oblongata", isCorrect: false },
      { answerText: "Hypothalamus", isCorrect: true },
      { answerText: "Cerebral cortex", isCorrect: false },
    ],
    explanation: "The hypothalamus regulates the pituitary gland by releasing hormones that control its activity.",
    image: null
  },
  {
    id: 352,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which hormone is released when blood sugar levels fall?",
    answerOptions: [
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Adrenaline", isCorrect: false },
      { answerText: "Thyroxine", isCorrect: false },
      { answerText: "Glucagon", isCorrect: true },
    ],
    explanation: "Glucagon, produced by the pancreas, raises blood glucose by stimulating glycogen breakdown.",
    image: null
  },
  {
    id: 353,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Where are the parathyroid glands located?",
    answerOptions: [
      { answerText: "Inside the adrenal glands", isCorrect: false },
      { answerText: "On the back of the thyroid gland", isCorrect: true },
      { answerText: "In the pancreas", isCorrect: false },
      { answerText: "Behind the pituitary gland", isCorrect: false },
    ],
    explanation: "The parathyroid glands are four small glands located on the posterior surface of the thyroid gland.",
    image: null
  },
  {
    id: 354,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which hormone is responsible for secondary sexual characteristics in males?",
    answerOptions: [
      { answerText: "Estrogen", isCorrect: false },
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "Testosterone", isCorrect: true },
      { answerText: "LH", isCorrect: false },
    ],
    explanation: "Testosterone, produced by the testes, is responsible for male secondary sexual traits.",
    image: null
  },
  {
    id: 355,
    topic: "Human Endocrine System",
    difficulty: "Easy",
    questionText: "Which hormone helps the body retain water by acting on the kidneys?",
    answerOptions: [
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "ADH (antidiuretic hormone)", isCorrect: true },
      { answerText: "Cortisol", isCorrect: false },
      { answerText: "Insulin", isCorrect: false },
    ],
    explanation: "ADH increases water reabsorption in the kidneys, reducing water loss in urine.",
    image: null
  },
  // MEDIUM
  {
    id: 356,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "What is the function of cortisol in the body?",
    answerOptions: [
      { answerText: "Lowers blood sugar levels", isCorrect: false },
      { answerText: "Stimulates milk production", isCorrect: false },
      { answerText: "Helps the body respond to stress and regulates metabolism", isCorrect: true },
      { answerText: "Regulates sleep-wake cycles", isCorrect: false },
    ],
    explanation: "Cortisol, produced by the adrenal cortex, helps manage stress, controls blood sugar, and affects metabolism.",
    image: null
  },
  {
    id: 357,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which gland produces both endocrine and exocrine secretions?",
    answerOptions: [
      { answerText: "Pancreas", isCorrect: true },
      { answerText: "Adrenal gland", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Thyroid gland", isCorrect: false },
    ],
    explanation: "The pancreas produces hormones (endocrine) and digestive enzymes (exocrine).",
    image: null
  },
  {
    id: 358,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "What effect does thyroxine have on the body?",
    answerOptions: [
      { answerText: "Decreases heart rate", isCorrect: false },
      { answerText: "Raises blood glucose levels", isCorrect: false },
      { answerText: "Promotes milk secretion", isCorrect: false },
      { answerText: "Increases the basal metabolic rate", isCorrect: true },
    ],
    explanation: "Thyroxine increases the rate of energy production in cells, affecting overall metabolism.",
    image: null
  },
  {
    id: 359,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "How does negative feedback regulate hormone levels?",
    answerOptions: [
      { answerText: "By increasing hormone secretion when levels are high", isCorrect: false },
      { answerText: "By preventing any hormone release", isCorrect: false },
      { answerText: "By reducing hormone secretion when levels are high", isCorrect: true },
      { answerText: "By speeding up nerve impulses", isCorrect: false },
    ],
    explanation: "Negative feedback stops further hormone production when enough has been released, maintaining balance.",
    image: null
  },
  {
    id: 360,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which hormone is released by the posterior pituitary and increases water reabsorption in kidneys?",
    answerOptions: [
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "Cortisol", isCorrect: false },
      { answerText: "ADH (antidiuretic hormone)", isCorrect: true },
      { answerText: "Prolactin", isCorrect: false },
    ],
    explanation: "ADH is secreted by the posterior pituitary and acts on kidney tubules to conserve water.",
    image: null
  },
  {
    id: 361,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which hormone stimulates the adrenal cortex to release cortisol?",
    answerOptions: [
      { answerText: "TSH", isCorrect: false },
      { answerText: "LH", isCorrect: false },
      { answerText: "FSH", isCorrect: false },
      { answerText: "ACTH (adrenocorticotropic hormone)", isCorrect: true },
    ],
    explanation: "ACTH from the anterior pituitary stimulates cortisol release from the adrenal cortex.",
    image: null
  },
  {
    id: 362,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which disorder results from an overproduction of growth hormone in adults?",
    answerOptions: [
      { answerText: "Goitre", isCorrect: false },
      { answerText: "Acromegaly", isCorrect: true },
      { answerText: "Gigantism", isCorrect: false },
      { answerText: "Dwarfism", isCorrect: false },
    ],
    explanation: "Acromegaly causes abnormal growth of hands, feet, and facial bones due to excess GH in adulthood.",
    image: null
  },
  {
    id: 363,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "What is the role of the hypothalamus in endocrine control?",
    answerOptions: [
      { answerText: "It stores thyroid hormones", isCorrect: false },
      { answerText: "It produces digestive enzymes", isCorrect: false },
      { answerText: "It secretes releasing hormones that control the pituitary gland", isCorrect: true },
      { answerText: "It directly controls adrenal hormone secretion", isCorrect: false },
    ],
    explanation: "The hypothalamus releases regulatory hormones that signal the pituitary to secrete specific hormones.",
    image: null
  },
  {
    id: 364,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which hormone regulates the body’s circadian rhythms?",
    answerOptions: [
      { answerText: "Thyroxine", isCorrect: false },
      { answerText: "Melatonin", isCorrect: true },
      { answerText: "Cortisol", isCorrect: false },
      { answerText: "Adrenaline", isCorrect: false },
    ],
    explanation: "Melatonin from the pineal gland helps regulate sleep-wake cycles.",
    image: null
  },
  {
    id: 365,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which hormone lowers blood calcium levels?",
    answerOptions: [
      { answerText: "Parathyroid hormone", isCorrect: false },
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "Calcitonin", isCorrect: true },
      { answerText: "Cortisol", isCorrect: false },
    ],
    explanation: "Calcitonin from the thyroid gland lowers blood calcium by promoting calcium deposition in bones.",
    image: null
  },
  {
    id: 366,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which hormone is produced in the testes and regulated by LH?",
    answerOptions: [
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "Estrogen", isCorrect: false },
      { answerText: "Testosterone", isCorrect: true },
      { answerText: "FSH", isCorrect: false },
    ],
    explanation: "LH stimulates Leydig cells in the testes to produce testosterone.",
    image: null
  },
  {
    id: 367,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "What is the main function of aldosterone?",
    answerOptions: [
      { answerText: "Increases heart rate", isCorrect: false },
      { answerText: "Promotes milk secretion", isCorrect: false },
      { answerText: "Regulates sodium and potassium balance", isCorrect: true },
      { answerText: "Regulates metabolism", isCorrect: false },
    ],
    explanation: "Aldosterone from the adrenal cortex controls sodium reabsorption and potassium excretion in the kidneys.",
    image: null
  },
  {
    id: 368,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which hormone stimulates ovulation in females?",
    answerOptions: [
      { answerText: "LH (luteinising hormone)", isCorrect: true },
      { answerText: "FSH", isCorrect: false },
      { answerText: "Progesterone", isCorrect: false },
      { answerText: "Estrogen", isCorrect: false },
    ],
    explanation: "LH triggers ovulation and the formation of the corpus luteum in the ovary.",
    image: null
  },
  {
    id: 369,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which hormone prepares the uterus lining for possible implantation?",
    answerOptions: [
      { answerText: "FSH", isCorrect: false },
      { answerText: "LH", isCorrect: false },
      { answerText: "Estrogen", isCorrect: false },
      { answerText: "Progesterone", isCorrect: true },
    ],
    explanation: "Progesterone maintains and thickens the uterine lining for possible pregnancy.",
    image: null
  },
  {
    id: 370,
    topic: "Human Endocrine System",
    difficulty: "Medium",
    questionText: "Which gland releases growth hormone (GH)?",
    answerOptions: [
      { answerText: "Thyroid", isCorrect: false },
      { answerText: "Adrenal cortex", isCorrect: false },
      { answerText: "Anterior pituitary", isCorrect: true },
      { answerText: "Posterior pituitary", isCorrect: false },
    ],
    explanation: "The anterior pituitary gland releases GH, which stimulates growth and cell reproduction.",
    image: null
  },
  // HARD
  {
    id: 371,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "A patient has persistently high blood glucose despite normal insulin secretion. Which condition is most likely?",
    answerOptions: [
      { answerText: "Hypoglycaemia", isCorrect: false },
      { answerText: "Type 2 diabetes mellitus", isCorrect: true },
      { answerText: "Cushing’s syndrome", isCorrect: false },
      { answerText: "Type 1 diabetes mellitus", isCorrect: false },
    ],
    explanation: "In Type 2 diabetes, body cells become resistant to insulin, leading to high blood glucose despite normal or high insulin levels.",
    image: null
  },
  {
    id: 372,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Which hormonal imbalance is responsible for the development of a goitre in iodine-deficient individuals?",
    answerOptions: [
      { answerText: "Low TSH due to high thyroxine", isCorrect: false },
      { answerText: "Excess ACTH", isCorrect: false },
      { answerText: "Excess TSH due to low thyroxine", isCorrect: true },
      { answerText: "Low ADH", isCorrect: false },
    ],
    explanation: "Iodine deficiency reduces thyroxine production, prompting the pituitary to release more TSH, which stimulates thyroid enlargement.",
    image: null
  },
  {
    id: 373,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "A tumour in the adrenal medulla would cause excessive production of which hormones?",
    answerOptions: [
      { answerText: "Cortisol and aldosterone", isCorrect: false },
      { answerText: "Thyroxine and calcitonin", isCorrect: false },
      { answerText: "Adrenaline and noradrenaline", isCorrect: true },
      { answerText: "FSH and LH", isCorrect: false },
    ],
    explanation: "The adrenal medulla secretes adrenaline and noradrenaline, which increase heart rate, blood pressure, and metabolism.",
    image: null
  },
  {
    id: 374,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "In Addison’s disease, the adrenal cortex produces insufficient cortisol and aldosterone. Which symptom would be expected?",
    answerOptions: [
      { answerText: "High blood pressure and hyperglycaemia", isCorrect: false },
      { answerText: "Weight gain and water retention", isCorrect: false },
      { answerText: "Low blood pressure and chronic fatigue", isCorrect: true },
      { answerText: "Excessive sweating and tremors", isCorrect: false },
    ],
    explanation: "Low aldosterone causes sodium loss and low blood pressure, while low cortisol contributes to fatigue.",
    image: null
  },
  {
    id: 375,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "A child with delayed growth and development is diagnosed with hypothyroidism. Which treatment is most effective?",
    answerOptions: [
      { answerText: "Growth hormone injections", isCorrect: false },
      { answerText: "Insulin therapy", isCorrect: false },
      { answerText: "Thyroxine supplementation", isCorrect: true },
      { answerText: "Cortisol tablets", isCorrect: false },
    ],
    explanation: "Supplementing thyroxine restores normal metabolism and growth in hypothyroid children.",
    image: null
  },
  {
    id: 376,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Why does long-term use of anabolic steroids disrupt normal testosterone production?",
    answerOptions: [
      { answerText: "Steroids damage Leydig cells", isCorrect: false },
      { answerText: "Steroids block FSH receptors", isCorrect: false },
      { answerText: "Negative feedback reduces LH secretion", isCorrect: true },
      { answerText: "Steroids stimulate excess ACTH", isCorrect: false },
    ],
    explanation: "Anabolic steroids mimic testosterone, triggering negative feedback that suppresses LH and endogenous testosterone production.",
    image: null
  },
  {
    id: 377,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Which gland is most likely to be affected in a person experiencing both hormonal and temperature regulation issues?",
    answerOptions: [
      { answerText: "Thyroid", isCorrect: false },
      { answerText: "Adrenal gland", isCorrect: false },
      { answerText: "Pineal gland", isCorrect: false },
      { answerText: "Hypothalamus", isCorrect: true },
    ],
    explanation: "The hypothalamus controls both endocrine signals to the pituitary and temperature regulation.",
    image: null
  },
  {
    id: 378,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Which hormonal disorder is caused by autoimmune destruction of pancreatic beta cells?",
    answerOptions: [
      { answerText: "Type 2 diabetes mellitus", isCorrect: false },
      { answerText: "Addison’s disease", isCorrect: false },
      { answerText: "Type 1 diabetes mellitus", isCorrect: true },
      { answerText: "Cushing’s syndrome", isCorrect: false },
    ],
    explanation: "In Type 1 diabetes, the immune system destroys insulin-producing beta cells in the pancreas.",
    image: null
  },
  {
    id: 379,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Excess growth hormone in children before puberty leads to which condition?",
    answerOptions: [
      { answerText: "Acromegaly", isCorrect: false },
      { answerText: "Dwarfism", isCorrect: false },
      { answerText: "Gigantism", isCorrect: true },
      { answerText: "Cretinism", isCorrect: false },
    ],
    explanation: "Gigantism occurs when excess growth hormone causes abnormal bone lengthening before epiphyseal plates close.",
    image: null
  },
  {
    id: 380,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Why can a pituitary tumour cause vision problems?",
    answerOptions: [
      { answerText: "It releases hormones that damage the retina", isCorrect: false },
      { answerText: "It blocks blood flow to the eyes", isCorrect: false },
      { answerText: "It can press on the optic chiasm", isCorrect: true },
      { answerText: "It causes optic nerve inflammation", isCorrect: false },
    ],
    explanation: "The pituitary gland lies near the optic chiasm, and a tumour can compress it, affecting vision.",
    image: null
  },
  {
    id: 381,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "A patient presents with high cortisol levels but low ACTH. Which is the most likely cause?",
    answerOptions: [
      { answerText: "Pituitary tumour", isCorrect: false },
      { answerText: "Hypothalamic dysfunction", isCorrect: false },
      { answerText: "Adrenal tumour", isCorrect: true },
      { answerText: "Addison’s disease", isCorrect: false },
    ],
    explanation: "An adrenal tumour can produce cortisol independently, suppressing ACTH via negative feedback.",
    image: null
  },
  {
    id: 382,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Which hormone imbalance would lead to increased urine output and constant thirst?",
    answerOptions: [
      { answerText: "High ADH", isCorrect: false },
      { answerText: "High aldosterone", isCorrect: false },
      { answerText: "Low ADH (diabetes insipidus)", isCorrect: true },
      { answerText: "Low cortisol", isCorrect: false },
    ],
    explanation: "A lack of ADH prevents water reabsorption in the kidneys, causing large volumes of dilute urine.",
    image: null
  },
  {
    id: 383,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "Which disorder is associated with hypersecretion of cortisol due to a pituitary tumour?",
    answerOptions: [
      { answerText: "Addison’s disease", isCorrect: false },
      { answerText: "Graves’ disease", isCorrect: false },
      { answerText: "Cushing’s disease", isCorrect: true },
      { answerText: "Hashimoto’s thyroiditis", isCorrect: false },
    ],
    explanation: "Cushing’s disease is caused by excess ACTH from a pituitary tumour, leading to high cortisol levels.",
    image: null
  },
  {
    id: 384,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "In Graves’ disease, which type of feedback loop is disrupted?",
    answerOptions: [
      { answerText: "Negative feedback on TSH secretion", isCorrect: true },
      { answerText: "Positive feedback on TSH secretion", isCorrect: false },
      { answerText: "Negative feedback on ACTH secretion", isCorrect: false },
      { answerText: "Positive feedback on ACTH secretion", isCorrect: false },
    ],
    explanation: "Graves’ disease involves autoantibodies that mimic TSH, bypassing normal negative feedback and overstimulating the thyroid.",
    image: null
  },
  {
    id: 385,
    topic: "Human Endocrine System",
    difficulty: "Hard",
    questionText: "A sudden drop in blood calcium would immediately stimulate the release of which hormone?",
    answerOptions: [
      { answerText: "Calcitonin", isCorrect: false },
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "Parathyroid hormone (PTH)", isCorrect: true },
      { answerText: "Thyroxine", isCorrect: false },
    ],
    explanation: "PTH raises blood calcium levels by increasing calcium release from bone and reabsorption in the kidneys.",
    image: null
  },
  // HOMEOSTASIS
  {
    id: 346,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which organ is primarily responsible for filtering blood and removing urea?",
    answerOptions: [
      { answerText: "Kidney", isCorrect: true },
      { answerText: "Liver", isCorrect: false },
      { answerText: "Lungs", isCorrect: false },
      { answerText: "Heart", isCorrect: false },
    ],
    explanation: "The kidneys filter blood, remove urea, and regulate water and salt balance.",
    image: null
  },
  {
    id: 347,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which hormone regulates blood sugar by lowering glucose levels?",
    answerOptions: [
      { answerText: "Insulin", isCorrect: true },
      { answerText: "Glucagon", isCorrect: false },
      { answerText: "Adrenaline", isCorrect: false },
      { answerText: "Cortisol", isCorrect: false },
    ],
    explanation: "Insulin lowers blood glucose by promoting uptake into cells and storage as glycogen.",
    image: null
  },
  {
    id: 348,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which part of the brain is responsible for regulating body temperature?",
    answerOptions: [
      { answerText: "Cerebrum", isCorrect: false },
      { answerText: "Hypothalamus", isCorrect: true },
      { answerText: "Cerebellum", isCorrect: false },
      { answerText: "Medulla oblongata", isCorrect: false },
    ],
    explanation: "The hypothalamus detects temperature changes and initiates responses to maintain balance.",
    image: null
  },
  {
    id: 349,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which hormone increases blood sugar levels during fasting?",
    answerOptions: [
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Thyroxine", isCorrect: false },
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "Glucagon", isCorrect: true },
    ],
    explanation: "Glucagon stimulates the breakdown of glycogen to glucose in the liver.",
    image: null
  },
  {
    id: 350,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which structure in the kidney contains the glomerulus?",
    answerOptions: [
      { answerText: "Loop of Henle", isCorrect: false },
      { answerText: "Bowman's capsule", isCorrect: true },
      { answerText: "Collecting duct", isCorrect: false },
      { answerText: "Ureter", isCorrect: false },
    ],
    explanation: "The Bowman's capsule surrounds the glomerulus and is the site of filtration.",
    image: null
  },
  {
    id: 351,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which hormone helps the kidneys reabsorb water?",
    answerOptions: [
      { answerText: "Aldosterone", isCorrect: false },
      { answerText: "Insulin", isCorrect: false },
      { answerText: "ADH", isCorrect: true },
      { answerText: "Thyroxine", isCorrect: false },
    ],
    explanation: "Antidiuretic hormone (ADH) increases water reabsorption in the kidneys.",
    image: null
  },
  {
    id: 352,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "What is the normal human body temperature in degrees Celsius?",
    answerOptions: [
      { answerText: "35°C", isCorrect: false },
      { answerText: "36°C", isCorrect: false },
      { answerText: "37°C", isCorrect: true },
      { answerText: "39°C", isCorrect: false },
    ],
    explanation: "The average normal human body temperature is about 37°C.",
    image: null
  },
  {
    id: 353,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which gland produces insulin and glucagon?",
    answerOptions: [
      { answerText: "Adrenal gland", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Pancreas", isCorrect: true },
      { answerText: "Thyroid gland", isCorrect: false },
    ],
    explanation: "The pancreas produces insulin and glucagon to regulate blood glucose levels.",
    image: null
  },
  {
    id: 354,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "What is the process by which the body maintains a stable internal environment?",
    answerOptions: [
      { answerText: "Homeostasis", isCorrect: true },
      { answerText: "Metabolism", isCorrect: false },
      { answerText: "Photosynthesis", isCorrect: false },
      { answerText: "Respiration", isCorrect: false },
    ],
    explanation: "Homeostasis is the regulation of the body’s internal environment to maintain stability.",
    image: null
  },
  {
    id: 355,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which blood vessels carry blood into the kidneys for filtration?",
    answerOptions: [
      { answerText: "Renal veins", isCorrect: false },
      { answerText: "Ureters", isCorrect: false },
      { answerText: "Renal arteries", isCorrect: true },
      { answerText: "Aorta", isCorrect: false },
    ],
    explanation: "The renal arteries carry oxygenated blood into the kidneys for filtration.",
    image: null
  },
  {
    id: 356,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which organ regulates water balance by producing urine?",
    answerOptions: [
      { answerText: "Liver", isCorrect: false },
      { answerText: "Pancreas", isCorrect: false },
      { answerText: "Kidney", isCorrect: true },
      { answerText: "Heart", isCorrect: false },
    ],
    explanation: "The kidneys regulate water and salt balance by adjusting urine production.",
    image: null
  },
  {
    id: 357,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which gland produces ADH?",
    answerOptions: [
      { answerText: "Thyroid gland", isCorrect: false },
      { answerText: "Adrenal gland", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: true },
      { answerText: "Pancreas", isCorrect: false },
    ],
    explanation: "The pituitary gland secretes ADH to control water reabsorption in the kidneys.",
    image: null
  },
  {
    id: 358,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "What is the name of the functional unit of the kidney?",
    answerOptions: [
      { answerText: "Nephron", isCorrect: true },
      { answerText: "Alveolus", isCorrect: false },
      { answerText: "Neuron", isCorrect: false },
      { answerText: "Glomerulus", isCorrect: false },
    ],
    explanation: "The nephron is the structural and functional unit of the kidney responsible for filtration.",
    image: null
  },
  {
    id: 359,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which blood vessels carry filtered blood away from the kidneys?",
    answerOptions: [
      { answerText: "Ureters", isCorrect: false },
      { answerText: "Vena cava", isCorrect: false },
      { answerText: "Renal arteries", isCorrect: false },
      { answerText: "Renal veins", isCorrect: true },
    ],
    explanation: "Renal veins carry deoxygenated, filtered blood from the kidneys to the vena cava.",
    image: null
  },
  {
    id: 360,
    topic: "Homeostasis in Humans",
    difficulty: "Easy",
    questionText: "Which hormone regulates sodium and potassium levels in the blood?",
    answerOptions: [
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Cortisol", isCorrect: false },
      { answerText: "Aldosterone", isCorrect: true },
      { answerText: "ADH", isCorrect: false },
    ],
    explanation: "Aldosterone regulates sodium and potassium levels by controlling their reabsorption in the kidneys.",
    image: null
  },
  // MEDIUM
  {
    id: 361,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "During dehydration, which hormone increases to conserve water in the body?",
    answerOptions: [
      { answerText: "ADH", isCorrect: true },
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Thyroxine", isCorrect: false },
      { answerText: "Glucagon", isCorrect: false },
    ],
    explanation: "ADH increases during dehydration to promote water reabsorption in the kidneys.",
    image: null
  },
  {
    id: 362,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which part of the nephron is responsible for most reabsorption of water and nutrients?",
    answerOptions: [
      { answerText: "Distal convoluted tubule", isCorrect: false },
      { answerText: "Proximal convoluted tubule", isCorrect: true },
      { answerText: "Loop of Henle", isCorrect: false },
      { answerText: "Collecting duct", isCorrect: false },
    ],
    explanation: "The proximal convoluted tubule reabsorbs most filtered water, glucose, and salts.",
    image: null
  },
  {
    id: 363,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which feedback mechanism controls blood glucose regulation?",
    answerOptions: [
      { answerText: "Positive feedback", isCorrect: false },
      { answerText: "Feedforward regulation", isCorrect: false },
      { answerText: "Negative feedback", isCorrect: true },
      { answerText: "Reflex action", isCorrect: false },
    ],
    explanation: "Blood glucose is regulated by negative feedback involving insulin and glucagon.",
    image: null
  },
  {
    id: 364,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "What is the main role of the loop of Henle?",
    answerOptions: [
      { answerText: "Producing urea", isCorrect: false },
      { answerText: "Filtering blood", isCorrect: false },
      { answerText: "Concentrating urine", isCorrect: true },
      { answerText: "Producing hormones", isCorrect: false },
    ],
    explanation: "The loop of Henle creates a concentration gradient to allow water reabsorption.",
    image: null
  },
  {
    id: 365,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which blood vessel carries blood away from the glomerulus?",
    answerOptions: [
      { answerText: "Afferent arteriole", isCorrect: false },
      { answerText: "Renal vein", isCorrect: false },
      { answerText: "Efferent arteriole", isCorrect: true },
      { answerText: "Renal artery", isCorrect: false },
    ],
    explanation: "The efferent arteriole carries blood away from the glomerulus after filtration.",
    image: null
  },
  {
    id: 366,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "What effect would a lack of ADH have on urine output?",
    answerOptions: [
      { answerText: "Decreased volume of concentrated urine", isCorrect: false },
      { answerText: "No urine production", isCorrect: false },
      { answerText: "Increased volume of dilute urine", isCorrect: true },
      { answerText: "Blood in urine", isCorrect: false },
    ],
    explanation: "Without ADH, the kidneys cannot reabsorb much water, leading to dilute urine.",
    image: null
  },
  {
    id: 367,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which condition results from the pancreas producing little or no insulin?",
    answerOptions: [
      { answerText: "Diabetes insipidus", isCorrect: false },
      { answerText: "Hyperthyroidism", isCorrect: false },
      { answerText: "Hypoglycaemia", isCorrect: false },
      { answerText: "Diabetes mellitus", isCorrect: true },
    ],
    explanation: "In diabetes mellitus, insulin production is impaired, causing high blood glucose.",
    image: null
  },
  {
    id: 368,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which hormone is secreted when blood sodium levels are low?",
    answerOptions: [
      { answerText: "ADH", isCorrect: false },
      { answerText: "Insulin", isCorrect: false },
      { answerText: "Cortisol", isCorrect: false },
      { answerText: "Aldosterone", isCorrect: true },
    ],
    explanation: "Aldosterone increases sodium reabsorption in the kidneys.",
    image: null
  },
  {
    id: 369,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "What is the function of osmoreceptors in the hypothalamus?",
    answerOptions: [
      { answerText: "Filter blood plasma", isCorrect: false },
      { answerText: "Produce hormones", isCorrect: false },
      { answerText: "Detect changes in blood water concentration", isCorrect: true },
      { answerText: "Transport oxygen", isCorrect: false },
    ],
    explanation: "Osmoreceptors detect water concentration and trigger ADH release when needed.",
    image: null
  },
  {
    id: 370,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Why does sweating help cool the body?",
    answerOptions: [
      { answerText: "Sweat blocks sunlight", isCorrect: false },
      { answerText: "Evaporation of sweat removes heat from the skin", isCorrect: true },
      { answerText: "Sweat absorbs body heat directly", isCorrect: false },
      { answerText: "Sweat increases blood flow", isCorrect: false },
    ],
    explanation: "Sweating cools the body through evaporation, which removes heat from the skin surface.",
    image: null
  },
  {
    id: 371,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which part of the nephron connects to the collecting duct?",
    answerOptions: [
      { answerText: "Proximal convoluted tubule", isCorrect: false },
      { answerText: "Loop of Henle", isCorrect: false },
      { answerText: "Distal convoluted tubule", isCorrect: true },
      { answerText: "Bowman's capsule", isCorrect: false },
    ],
    explanation: "The distal convoluted tubule connects to the collecting duct, where final adjustments to urine composition occur.",
    image: null
  },
  {
    id: 372,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "In a healthy person, which substance is not found in urine?",
    answerOptions: [
      { answerText: "Urea", isCorrect: false },
      { answerText: "Salts", isCorrect: false },
      { answerText: "Water", isCorrect: false },
      { answerText: "Glucose", isCorrect: true },
    ],
    explanation: "Glucose is normally reabsorbed in the nephron and should not be present in urine.",
    image: null
  },
  {
    id: 373,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which blood vessel brings blood into the glomerulus?",
    answerOptions: [
      { answerText: "Afferent arteriole", isCorrect: true },
      { answerText: "Efferent arteriole", isCorrect: false },
      { answerText: "Renal vein", isCorrect: false },
      { answerText: "Renal artery", isCorrect: false },
    ],
    explanation: "The afferent arteriole carries blood into the glomerulus for filtration.",
    image: null
  },
  {
    id: 374,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "What happens to ADH secretion when blood water concentration is high?",
    answerOptions: [
      { answerText: "It stops completely", isCorrect: false },
      { answerText: "It decreases", isCorrect: true },
      { answerText: "It increases", isCorrect: false },
      { answerText: "It remains constant", isCorrect: false },
    ],
    explanation: "When water concentration is high, less ADH is secreted, producing more dilute urine.",
    image: null
  },
  {
    id: 375,
    topic: "Homeostasis in Humans",
    difficulty: "Medium",
    questionText: "Which gland releases aldosterone?",
    answerOptions: [
      { answerText: "Adrenal gland", isCorrect: true },
      { answerText: "Pancreas", isCorrect: false },
      { answerText: "Pituitary gland", isCorrect: false },
      { answerText: "Thyroid gland", isCorrect: false },
    ],
    explanation: "The adrenal gland releases aldosterone to regulate sodium and potassium balance.",
    image: null
  },
  // HARD
  {
    id: 376,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Explain how negative feedback involving ADH helps maintain water balance during dehydration.",
    answerOptions: [
      { answerText: "ADH decreases water reabsorption in the kidneys, increasing water loss", isCorrect: false },
      { answerText: "ADH increases urine production", isCorrect: false },
      { answerText: "ADH increases water reabsorption in the kidneys, reducing water loss", isCorrect: true },
      { answerText: "ADH removes salts from the blood", isCorrect: false },
    ],
    explanation: "When dehydration occurs, osmoreceptors detect low water concentration and trigger ADH release, which increases water reabsorption in the kidneys until balance is restored.",
    image: null
  },
  {
    id: 377,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Describe how aldosterone and ADH work together to conserve water.",
    answerOptions: [
      { answerText: "Both increase sodium reabsorption", isCorrect: false },
      { answerText: "Both decrease sodium levels", isCorrect: false },
      { answerText: "Aldosterone increases sodium reabsorption, ADH increases water reabsorption", isCorrect: true },
      { answerText: "Aldosterone removes urea, ADH adds water to blood", isCorrect: false },
    ],
    explanation: "Aldosterone retains sodium, which draws water back into the blood, while ADH directly promotes water reabsorption in the kidneys.",
    image: null
  },
  {
    id: 378,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Explain why glucose in the urine is an indicator of possible diabetes mellitus.",
    answerOptions: [
      { answerText: "Kidneys start producing glucose", isCorrect: false },
      { answerText: "Excess glucose exceeds kidney reabsorption capacity", isCorrect: true },
      { answerText: "Glucose breaks down in urine", isCorrect: false },
      { answerText: "Insulin converts glucose to urine", isCorrect: false },
    ],
    explanation: "In uncontrolled diabetes mellitus, blood glucose levels are so high that not all glucose can be reabsorbed by the nephron, leading to its presence in urine.",
    image: null
  },
  {
    id: 379,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "How does the loop of Henle create a concentration gradient in the medulla?",
    answerOptions: [
      { answerText: "Through countercurrent multiplication", isCorrect: true },
      { answerText: "By storing sodium in the cortex", isCorrect: false },
      { answerText: "By filtering glucose from blood", isCorrect: false },
      { answerText: "By producing hormones", isCorrect: false },
    ],
    explanation: "The loop of Henle pumps ions into the medulla, making it hypertonic, which draws water out of the collecting ducts.",
    image: null
  },
  {
    id: 380,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Describe the role of the hypothalamus in thermoregulation.",
    answerOptions: [
      { answerText: "It stores heat during cold conditions", isCorrect: false },
      { answerText: "It detects blood temperature changes and triggers effectors to restore balance", isCorrect: true },
      { answerText: "It circulates warm blood around the body", isCorrect: false },
      { answerText: "It produces sweat directly", isCorrect: false },
    ],
    explanation: "The hypothalamus contains thermoreceptors that detect temperature changes and activate mechanisms like sweating or shivering.",
    image: null
  },
  {
    id: 381,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Explain why excessive sweating without fluid replacement can lead to dehydration.",
    answerOptions: [
      { answerText: "Sweat absorbs water from the blood", isCorrect: false },
      { answerText: "Water is lost faster than it is replaced, reducing blood volume", isCorrect: true },
      { answerText: "Sweat converts water to salt", isCorrect: false },
      { answerText: "Sweat removes glucose from the blood", isCorrect: false },
    ],
    explanation: "Sweating leads to water loss from the body. Without replacement, blood plasma volume decreases, impairing normal function.",
    image: null
  },
  {
    id: 382,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Describe how the kidneys respond to low blood pressure.",
    answerOptions: [
      { answerText: "Release renin, activating the renin-angiotensin-aldosterone system", isCorrect: true },
      { answerText: "Produce more ADH", isCorrect: false },
      { answerText: "Filter more blood", isCorrect: false },
      { answerText: "Release adrenaline", isCorrect: false },
    ],
    explanation: "Low blood pressure triggers renin release, which leads to sodium and water retention via aldosterone, increasing blood volume and pressure.",
    image: null
  },
  {
    id: 383,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Why does prolonged high salt intake increase the risk of hypertension?",
    answerOptions: [
      { answerText: "It directly thickens arteries", isCorrect: false },
      { answerText: "It stops aldosterone secretion", isCorrect: false },
      { answerText: "It increases water retention, raising blood volume", isCorrect: true },
      { answerText: "It increases heart rate permanently", isCorrect: false },
    ],
    explanation: "High salt levels cause the body to retain more water, increasing blood volume and thus blood pressure.",
    image: null
  },
  {
    id: 384,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Explain why untreated diabetes insipidus causes frequent urination.",
    answerOptions: [
      { answerText: "Too much insulin increases urination", isCorrect: false },
      { answerText: "Excess aldosterone removes water", isCorrect: false },
      { answerText: "Glucose is filtered into urine", isCorrect: false },
      { answerText: "Lack of ADH prevents water reabsorption", isCorrect: true },
    ],
    explanation: "Without ADH, the collecting ducts cannot reabsorb water effectively, leading to large volumes of dilute urine.",
    image: null
  },
  {
    id: 385,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "How do baroreceptors contribute to blood pressure regulation?",
    answerOptions: [
      { answerText: "They pump blood directly", isCorrect: false },
      { answerText: "They release aldosterone", isCorrect: false },
      { answerText: "They produce insulin", isCorrect: false },
      { answerText: "They detect blood pressure changes and signal the medulla to adjust heart rate and vessel diameter", isCorrect: true },
    ],
    explanation: "Baroreceptors in arteries detect pressure changes and send signals to the brainstem to maintain stable blood pressure.",
    image: null
  },
  {
    id: 386,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Why is thermoregulation more challenging in elderly individuals?",
    answerOptions: [
      { answerText: "Increased muscle mass", isCorrect: false },
      { answerText: "Reduced sweat gland activity and slower circulation", isCorrect: true },
      { answerText: "Excessive hormone production", isCorrect: false },
      { answerText: "Higher metabolic rate", isCorrect: false },
    ],
    explanation: "Aging reduces sweat production and slows blood flow, making temperature control less efficient.",
    image: null
  },
  {
    id: 387,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Explain how shivering helps restore body temperature.",
    answerOptions: [
      { answerText: "Shivering increases blood sugar", isCorrect: false },
      { answerText: "Shivering reduces blood flow", isCorrect: false },
      { answerText: "Rapid muscle contractions generate heat", isCorrect: true },
      { answerText: "Shivering removes heat from muscles", isCorrect: false },
    ],
    explanation: "Shivering produces heat through muscle contractions, raising body temperature during cold conditions.",
    image: null
  },
  {
    id: 388,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Why is the medulla of the kidney hypertonic compared to the cortex?",
    answerOptions: [
      { answerText: "Water removal by Bowman's capsule", isCorrect: false },
      { answerText: "Passive diffusion of salts from blood", isCorrect: false },
      { answerText: "Active transport of salts into the medulla by the loop of Henle", isCorrect: true },
      { answerText: "Hormone production in the medulla", isCorrect: false },
    ],
    explanation: "The loop of Henle pumps salts into the medulla, creating a hypertonic environment that aids water reabsorption.",
    image: null
  },
  {
    id: 389,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Why is protein normally absent from urine?",
    answerOptions: [
      { answerText: "Proteins are too large to pass through the glomerular filter", isCorrect: true },
      { answerText: "Proteins are broken down in the nephron", isCorrect: false },
      { answerText: "Proteins are stored in the kidneys", isCorrect: false },
      { answerText: "Proteins dissolve in blood plasma only", isCorrect: false },
    ],
    explanation: "The glomerular basement membrane prevents large molecules like proteins from entering the filtrate.",
    image: null
  },
  {
    id: 390,
    topic: "Homeostasis in Humans",
    difficulty: "Hard",
    questionText: "Explain why marathon runners are advised to replace electrolytes as well as water.",
    answerOptions: [
      { answerText: "Electrolytes produce energy for muscles", isCorrect: false },
      { answerText: "Electrolytes prevent water loss", isCorrect: false },
      { answerText: "Electrolytes lower body temperature", isCorrect: false },
      { answerText: "Electrolytes are lost in sweat and are essential for nerve and muscle function", isCorrect: true },
    ],
    explanation: "Sweating causes loss of salts like sodium and potassium, which are vital for proper nerve signaling and muscle contraction.",
    image: null
  },
  // HUMAN IMPACT ON THE ENVIROMENT: EASY
  {
    id: 346,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "Which gas is the main contributor to global warming?",
    answerOptions: [
      { answerText: "Nitrogen", isCorrect: false },
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Hydrogen", isCorrect: false },
      { answerText: "Carbon dioxide", isCorrect: true },
    ],
    explanation: "Carbon dioxide traps heat in the atmosphere, contributing to global warming.",
    image: null
  },
  {
    id: 347,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "Which human activity is the main cause of deforestation?",
    answerOptions: [
      { answerText: "Fishing", isCorrect: false },
      { answerText: "Agricultural expansion", isCorrect: true },
      { answerText: "Tourism", isCorrect: false },
      { answerText: "Mining for gems", isCorrect: false },
    ],
    explanation: "Agricultural expansion often involves clearing forests to create farmland.",
    image: null
  },
  {
    id: 348,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "Which of the following is a renewable energy source?",
    answerOptions: [
      { answerText: "Solar power", isCorrect: true },
      { answerText: "Coal", isCorrect: false },
      { answerText: "Natural gas", isCorrect: false },
      { answerText: "Petroleum", isCorrect: false },
    ],
    explanation: "Solar power is renewable because it is naturally replenished by the Sun.",
    image: null
  },
  {
    id: 349,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "What type of pollution is caused by excessive fertilizers in rivers?",
    answerOptions: [
      { answerText: "Noise pollution", isCorrect: false },
      { answerText: "Water pollution", isCorrect: true },
      { answerText: "Light pollution", isCorrect: false },
      { answerText: "Thermal pollution", isCorrect: false },
    ],
    explanation: "Fertilizer runoff contaminates water sources, leading to eutrophication.",
    image: null
  },
  {
    id: 350,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "What is the term for the gradual increase in Earth's average temperature?",
    answerOptions: [
      { answerText: "Ozone depletion", isCorrect: false },
      { answerText: "Deforestation", isCorrect: false },
      { answerText: "Global warming", isCorrect: true },
      { answerText: "Desertification", isCorrect: false },
    ],
    explanation: "Global warming refers to the long-term rise in Earth's average temperature.",
    image: null
  },
  {
    id: 351,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "Which type of waste takes the longest to decompose?",
    answerOptions: [
      { answerText: "Plastic", isCorrect: true },
      { answerText: "Paper", isCorrect: false },
      { answerText: "Food scraps", isCorrect: false },
      { answerText: "Cotton cloth", isCorrect: false },
    ],
    explanation: "Plastics can take hundreds of years to decompose in the environment.",
    image: null
  },
  {
    id: 352,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "What is the main cause of acid rain?",
    answerOptions: [
      { answerText: "Oxygen emissions", isCorrect: false },
      { answerText: "Sulphur dioxide emissions", isCorrect: true },
      { answerText: "Water vapour", isCorrect: false },
      { answerText: "Carbon monoxide", isCorrect: false },
    ],
    explanation: "Sulphur dioxide reacts with water in the atmosphere to form acidic precipitation.",
    image: null
  },
  {
    id: 353,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "Which layer of the atmosphere contains the ozone layer?",
    answerOptions: [
      { answerText: "Troposphere", isCorrect: false },
      { answerText: "Mesosphere", isCorrect: false },
      { answerText: "Exosphere", isCorrect: false },
      { answerText: "Stratosphere", isCorrect: true },
    ],
    explanation: "The ozone layer, located in the stratosphere, protects us from UV radiation.",
    image: null
  },
  {
    id: 354,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "Which of the following is an example of a greenhouse gas?",
    answerOptions: [
      { answerText: "Nitrogen", isCorrect: false },
      { answerText: "Methane", isCorrect: true },
      { answerText: "Oxygen", isCorrect: false },
      { answerText: "Argon", isCorrect: false },
    ],
    explanation: "Methane is a potent greenhouse gas produced by livestock and landfills.",
    image: null
  },
  {
    id: 355,
    topic: "Human Impact on the Environment",
    difficulty: "Easy",
    questionText: "Which practice helps conserve water?",
    answerOptions: [
      { answerText: "Flood irrigation", isCorrect: false },
      { answerText: "Overwatering", isCorrect: false },
      { answerText: "Drip irrigation", isCorrect: true },
      { answerText: "Washing cars with hoses", isCorrect: false },
    ],
    explanation: "Drip irrigation delivers water directly to plant roots, reducing wastage.",
    image: null
  },

  // MEDIUM (356–365)
  {
    id: 356,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which process describes the over-enrichment of water with nutrients?",
    answerOptions: [
      { answerText: "Sedimentation", isCorrect: false },
      { answerText: "Eutrophication", isCorrect: true },
      { answerText: "Deforestation", isCorrect: false },
      { answerText: "Desalination", isCorrect: false },
    ],
    explanation: "Eutrophication occurs when nutrient overload promotes excessive algae growth.",
    image: null
  },
  {
    id: 357,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which farming method helps prevent soil erosion?",
    answerOptions: [
      { answerText: "Monocropping", isCorrect: false },
      { answerText: "Overgrazing", isCorrect: false },
      { answerText: "Deforestation", isCorrect: false },
      { answerText: "Contour ploughing", isCorrect: true },
    ],
    explanation: "Contour ploughing follows the land's natural shape, reducing water runoff.",
    image: null
  },
  {
    id: 358,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "What is the term for the decline of soil fertility due to overuse?",
    answerOptions: [
      { answerText: "Soil erosion", isCorrect: false },
      { answerText: "Soil compaction", isCorrect: false },
      { answerText: "Soil degradation", isCorrect: true },
      { answerText: "Soil salinisation", isCorrect: false },
    ],
    explanation: "Soil degradation includes nutrient loss from overfarming and poor land management.",
    image: null
  },
  {
    id: 359,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which environmental issue is caused by chlorofluorocarbons (CFCs)?",
    answerOptions: [
      { answerText: "Acid rain", isCorrect: false },
      { answerText: "Global warming", isCorrect: false },
      { answerText: "Soil erosion", isCorrect: false },
      { answerText: "Ozone layer depletion", isCorrect: true },
    ],
    explanation: "CFCs destroy ozone molecules, reducing UV protection.",
    image: null
  },
  {
    id: 360,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which type of mining causes the most environmental damage?",
    answerOptions: [
      { answerText: "Underground mining", isCorrect: false },
      { answerText: "Artisanal mining", isCorrect: false },
      { answerText: "Open-pit mining", isCorrect: true },
      { answerText: "Drift mining", isCorrect: false },
    ],
    explanation: "Open-pit mining removes vast amounts of earth, destroying habitats.",
    image: null
  },
  {
    id: 361,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which practice reduces the impact of landfills?",
    answerOptions: [
      { answerText: "Burning waste", isCorrect: false },
      { answerText: "Recycling", isCorrect: true },
      { answerText: "Burying waste", isCorrect: false },
      { answerText: "Dumping waste into rivers", isCorrect: false },
    ],
    explanation: "Recycling reduces the volume of waste sent to landfills.",
    image: null
  },
  {
    id: 362,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which agricultural practice increases biodiversity on farms?",
    answerOptions: [
      { answerText: "Monoculture", isCorrect: false },
      { answerText: "Overfertilisation", isCorrect: false },
      { answerText: "Crop rotation", isCorrect: true },
      { answerText: "Overgrazing", isCorrect: false },
    ],
    explanation: "Crop rotation prevents soil depletion and promotes varied species.",
    image: null
  },
  {
    id: 363,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which human activity is the biggest cause of species extinction?",
    answerOptions: [
      { answerText: "Habitat destruction", isCorrect: true },
      { answerText: "Overfishing", isCorrect: false },
      { answerText: "Poaching", isCorrect: false },
      { answerText: "Pollution", isCorrect: false },
    ],
    explanation: "Habitat destruction eliminates the living spaces necessary for survival.",
    image: null
  },
  {
    id: 364,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "What is the main cause of desertification?",
    answerOptions: [
      { answerText: "Overgrazing and deforestation", isCorrect: true },
      { answerText: "Volcanic eruptions", isCorrect: false },
      { answerText: "Earthquakes", isCorrect: false },
      { answerText: "Glacier melting", isCorrect: false },
    ],
    explanation: "Overgrazing and deforestation remove vegetation, exposing soil to erosion.",
    image: null
  },
  {
    id: 365,
    topic: "Human Impact on the Environment",
    difficulty: "Medium",
    questionText: "Which greenhouse gas is mainly released from rice paddies and livestock?",
    answerOptions: [
      { answerText: "Carbon dioxide", isCorrect: false },
      { answerText: "Nitrous oxide", isCorrect: false },
      { answerText: "Sulphur dioxide", isCorrect: false },
      { answerText: "Methane", isCorrect: true },
    ],
    explanation: "Methane is produced by anaerobic decomposition in wetlands and animal digestion.",
    image: null
  },

  // HARD (366–375)
  {
    id: 366,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which international agreement aimed to phase out CFCs?",
    answerOptions: [
      { answerText: "Kyoto Protocol", isCorrect: false },
      { answerText: "Montreal Protocol", isCorrect: true },
      { answerText: "Paris Agreement", isCorrect: false },
      { answerText: "Doha Amendment", isCorrect: false },
    ],
    explanation: "The Montreal Protocol of 1987 targeted substances that deplete the ozone layer.",
    image: null
  },
  {
    id: 367,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "What is the main cause of ocean acidification?",
    answerOptions: [
      { answerText: "Oil spills", isCorrect: false },
      { answerText: "Plastic waste", isCorrect: false },
      { answerText: "Increased CO2 absorption", isCorrect: true },
      { answerText: "Overfishing", isCorrect: false },
    ],
    explanation: "Oceans absorb CO2 from the atmosphere, lowering pH and harming marine life.",
    image: null
  },
  {
    id: 368,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which pollutant is most associated with bioaccumulation in aquatic food chains?",
    answerOptions: [
      { answerText: "Lead", isCorrect: false },
      { answerText: "Mercury", isCorrect: true },
      { answerText: "Sulphur dioxide", isCorrect: false },
      { answerText: "Carbon monoxide", isCorrect: false },
    ],
    explanation: "Mercury accumulates in aquatic organisms and increases in concentration up the food chain.",
    image: null
  },
  {
    id: 369,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which term describes the long-term storage of carbon in forests, soils, or oceans?",
    answerOptions: [
      { answerText: "Carbon footprint", isCorrect: false },
      { answerText: "Carbon cycling", isCorrect: false },
      { answerText: "Carbon sequestration", isCorrect: true },
      { answerText: "Carbon emission", isCorrect: false },
    ],
    explanation: "Carbon sequestration is the capture and storage of carbon to mitigate climate change.",
    image: null
  },
  {
    id: 370,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which country emits the most CO2 annually?",
    answerOptions: [
      { answerText: "United States", isCorrect: false },
      { answerText: "India", isCorrect: false },
      { answerText: "China", isCorrect: true },
      { answerText: "Russia", isCorrect: false },
    ],
    explanation: "China leads global CO2 emissions due to heavy industrialisation and coal use.",
    image: null
  },
  {
    id: 371,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which type of fishing involves dragging heavy nets along the ocean floor?",
    answerOptions: [
      { answerText: "Purse seining", isCorrect: false },
      { answerText: "Longlining", isCorrect: false },
      { answerText: "Bottom trawling", isCorrect: true },
      { answerText: "Gillnetting", isCorrect: false },
    ],
    explanation: "Bottom trawling damages seafloor habitats and causes bycatch.",
    image: null
  },
  {
    id: 372,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which energy source has the highest carbon footprint per unit of electricity?",
    answerOptions: [
      { answerText: "Natural gas", isCorrect: false },
      { answerText: "Oil", isCorrect: false },
      { answerText: "Coal", isCorrect: true },
      { answerText: "Nuclear", isCorrect: false },
    ],
    explanation: "Coal releases more CO2 per unit of electricity than any other major source.",
    image: null
  },
  {
    id: 373,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which concept promotes meeting present needs without harming future generations?",
    answerOptions: [
      { answerText: "Industrial development", isCorrect: false },
      { answerText: "Economic growth", isCorrect: false },
      { answerText: "Urbanisation", isCorrect: false },
      { answerText: "Sustainable development", isCorrect: true },
    ],
    explanation: "Sustainable development balances environmental, economic, and social needs.",
    image: null
  },
  {
    id: 374,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which human activity is the largest source of nitrous oxide emissions?",
    answerOptions: [
      { answerText: "Transportation", isCorrect: false },
      { answerText: "Industry", isCorrect: false },
      { answerText: "Agriculture", isCorrect: true },
      { answerText: "Deforestation", isCorrect: false },
    ],
    explanation: "Fertiliser use and livestock waste release significant amounts of nitrous oxide.",
    image: null
  },
  {
    id: 375,
    topic: "Human Impact on the Environment",
    difficulty: "Hard",
    questionText: "Which international treaty addresses climate change by reducing greenhouse gas emissions?",
    answerOptions: [
      { answerText: "Montreal Protocol", isCorrect: false },
      { answerText: "Basel Convention", isCorrect: false },
      { answerText: "Paris Agreement", isCorrect: true },
      { answerText: "CITES", isCorrect: false },
    ],
    explanation: "The Paris Agreement aims to limit global temperature rise by cutting emissions.",
    image: null
  },
   {
    id: 351,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "What does DNA stand for?",
    answerOptions: [
      { answerText: "Deoxyribonucleic acid", isCorrect: true },
      { answerText: "Deoxyribose nitrogen acid", isCorrect: false },
      { answerText: "Deoxyribose nucleic acid", isCorrect: false },
      { answerText: "Deoxyribonuclear acid", isCorrect: false },
    ],
    explanation: "DNA stands for deoxyribonucleic acid, the molecule that carries genetic information.",
    image: null
  },
  {
    id: 352,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "In DNA, adenine always pairs with which base?",
    answerOptions: [
      { answerText: "Cytosine", isCorrect: false },
      { answerText: "Thymine", isCorrect: true },
      { answerText: "Guanine", isCorrect: false },
      { answerText: "Uracil", isCorrect: false },
    ],
    explanation: "In DNA, adenine (A) pairs with thymine (T) through hydrogen bonds.",
    image: null
  },
  {
    id: 353,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "What is the shape of a DNA molecule?",
    answerOptions: [
      { answerText: "Single helix", isCorrect: false },
      { answerText: "Triple helix", isCorrect: false },
      { answerText: "Double helix", isCorrect: true },
      { answerText: "Straight chain", isCorrect: false },
    ],
    explanation: "DNA has a double helix structure, discovered by Watson and Crick.",
    image: null
  },
  {
    id: 354,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "Which sugar is found in DNA nucleotides?",
    answerOptions: [
      { answerText: "Ribose", isCorrect: false },
      { answerText: "Deoxyribose", isCorrect: true },
      { answerText: "Glucose", isCorrect: false },
      { answerText: "Fructose", isCorrect: false },
    ],
    explanation: "DNA nucleotides contain the sugar deoxyribose, unlike RNA which contains ribose.",
    image: null
  },
  {
    id: 355,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "What is the function of DNA?",
    answerOptions: [
      { answerText: "To break down food", isCorrect: false },
      { answerText: "To provide energy", isCorrect: false },
      { answerText: "To store genetic information", isCorrect: true },
      { answerText: "To transport oxygen", isCorrect: false },
    ],
    explanation: "DNA stores instructions for the development, functioning, and reproduction of organisms.",
    image: null
  },
  {
    id: 356,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "Which nitrogenous base is found in DNA but not RNA?",
    answerOptions: [
      { answerText: "Thymine", isCorrect: true },
      { answerText: "Uracil", isCorrect: false },
      { answerText: "Cytosine", isCorrect: false },
      { answerText: "Adenine", isCorrect: false },
    ],
    explanation: "Thymine is found only in DNA, while uracil is found only in RNA.",
    image: null
  },
  {
    id: 357,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "What are the building blocks of DNA called?",
    answerOptions: [
      { answerText: "Amino acids", isCorrect: false },
      { answerText: "Fatty acids", isCorrect: false },
      { answerText: "Nucleotides", isCorrect: true },
      { answerText: "Monosaccharides", isCorrect: false },
    ],
    explanation: "DNA is made of repeating units called nucleotides, each with a sugar, phosphate, and base.",
    image: null
  },
  {
    id: 358,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "During replication, which enzyme unzips the DNA strands?",
    answerOptions: [
      { answerText: "DNA polymerase", isCorrect: false },
      { answerText: "Ligase", isCorrect: false },
      { answerText: "RNA polymerase", isCorrect: false },
      { answerText: "DNA helicase", isCorrect: true },
    ],
    explanation: "DNA helicase unwinds and separates the two strands of the DNA double helix.",
    image: null
  },
  {
    id: 359,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "What type of bonds hold the two DNA strands together?",
    answerOptions: [
      { answerText: "Hydrogen bonds", isCorrect: true },
      { answerText: "Ionic bonds", isCorrect: false },
      { answerText: "Covalent bonds", isCorrect: false },
      { answerText: "Peptide bonds", isCorrect: false },
    ],
    explanation: "The nitrogenous bases on opposite strands are held together by hydrogen bonds.",
    image: null
  },
  {
    id: 360,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "Where in a cell is DNA found?",
    answerOptions: [
      { answerText: "Nucleus", isCorrect: true },
      { answerText: "Cytoplasm", isCorrect: false },
      { answerText: "Mitochondrial membrane", isCorrect: false },
      { answerText: "Ribosome", isCorrect: false },
    ],
    explanation: "In eukaryotic cells, DNA is located mainly in the nucleus.",
    image: null
  },
  {
    id: 361,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "What is complementary base pairing?",
    answerOptions: [
      { answerText: "Random matching of nucleotides", isCorrect: false },
      { answerText: "Pairing of sugars and phosphates", isCorrect: false },
      { answerText: "Specific pairing of nitrogenous bases", isCorrect: true },
      { answerText: "Binding of enzymes to DNA", isCorrect: false },
    ],
    explanation: "Complementary base pairing means adenine pairs with thymine, and cytosine with guanine.",
    image: null
  },
  {
    id: 362,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "Which scientist's X-ray photographs helped reveal DNA's structure?",
    answerOptions: [
      { answerText: "Charles Darwin", isCorrect: false },
      { answerText: "Gregor Mendel", isCorrect: false },
      { answerText: "Rosalind Franklin", isCorrect: true },
      { answerText: "Louis Pasteur", isCorrect: false },
    ],
    explanation: "Rosalind Franklin's X-ray diffraction images were crucial in discovering DNA's double helix.",
    image: null
  },
  {
    id: 363,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "What is a gene?",
    answerOptions: [
      { answerText: "A segment of DNA that codes for a protein", isCorrect: true },
      { answerText: "A sugar molecule", isCorrect: false },
      { answerText: "A type of cell", isCorrect: false },
      { answerText: "A lipid molecule", isCorrect: false },
    ],
    explanation: "A gene is a sequence of DNA nucleotides that provides instructions for making a protein.",
    image: null
  },
  {
    id: 364,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "Which process produces an identical copy of DNA?",
    answerOptions: [
      { answerText: "Transcription", isCorrect: false },
      { answerText: "Translation", isCorrect: false },
      { answerText: "Mutation", isCorrect: false },
      { answerText: "DNA replication", isCorrect: true },
    ],
    explanation: "DNA replication ensures each new cell receives an identical copy of genetic material.",
    image: null
  },
  {
    id: 365,
    topic: "DNA",
    difficulty: "Easy",
    questionText: "In protein synthesis, what is the role of DNA?",
    answerOptions: [
      { answerText: "It directly assembles amino acids", isCorrect: false },
      { answerText: "It carries amino acids to the ribosome", isCorrect: false },
      { answerText: "It acts as an enzyme", isCorrect: false },
      { answerText: "It provides the instructions to make proteins", isCorrect: true },
    ],
    explanation: "DNA stores the genetic code used to build proteins during protein synthesis.",
    image: null
  },

  // ---------------- MEDIUM (366–380) ----------------
  {
    id: 366,
    topic: "DNA",
    difficulty: "Medium",
    questionText: "What is the complementary DNA sequence to 5'-ATCGGA-3'?",
    answerOptions: [
      { answerText: "5'-TACGCT-3'", isCorrect: false },
      { answerText: "5'-TAGCCT-3'", isCorrect: true },
      { answerText: "5'-CGATTC-3'", isCorrect: false },
      { answerText: "5'-ATCGGA-3'", isCorrect: false },
    ],
    explanation: "A pairs with T, T with A, C with G, G with C, G with C, and A with T, giving TAGCCT.",
    image: null
  },
  {
    id: 367,
    topic: "DNA",
    difficulty: "Medium",
    questionText: "Which enzyme adds nucleotides to the growing DNA strand during replication?",
    answerOptions: [
      { answerText: "RNA polymerase", isCorrect: false },
      { answerText: "Ligase", isCorrect: false },
      { answerText: "Helicase", isCorrect: false },
      { answerText: "DNA polymerase", isCorrect: true },
    ],
    explanation: "DNA polymerase adds complementary nucleotides to the new strand during replication.",
    image: null
  },
  {
    id: 368,
    topic: "DNA",
    difficulty: "Medium",
    questionText: "Which bond connects the sugar and phosphate groups in DNA?",
    answerOptions: [
      { answerText: "Hydrogen bond", isCorrect: false },
      { answerText: "Ionic bond", isCorrect: false },
      { answerText: "Phosphodiester bond", isCorrect: true },
      { answerText: "Peptide bond", isCorrect: false },
    ],
    explanation: "The sugar and phosphate in the DNA backbone are connected by phosphodiester bonds.",
    image: null
  },
  {
    id: 369,
    topic: "DNA",
    difficulty: "Medium",
    questionText: "In replication, the lagging strand is built in short fragments called:",
    answerOptions: [
      { answerText: "Exons", isCorrect: false },
      { answerText: "Introns", isCorrect: false },
      { answerText: "Peptide fragments", isCorrect: false },
      { answerText: "Okazaki fragments", isCorrect: true },
    ],
    explanation: "Okazaki fragments are short DNA sequences formed on the lagging strand during replication.",
    image: null
  },
  {
    id: 370,
    topic: "DNA",
    difficulty: "Medium",
    questionText: "Which process copies DNA into messenger RNA?",
    answerOptions: [
      { answerText: "Transcription", isCorrect: true },
      { answerText: "Translation", isCorrect: false },
      { answerText: "Replication", isCorrect: false },
      { answerText: "Mutation", isCorrect: false },
    ],
    explanation: "Transcription produces mRNA from a DNA template, which then guides protein synthesis.",
    image: null
  },
   {
    id: 381,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "During DNA replication, what is meant by the term 'semi-conservative'?",
    answerOptions: [
      { answerText: "Both strands in the new molecule are new", isCorrect: false },
      { answerText: "Each new DNA molecule has one old strand and one new strand", isCorrect: true },
      { answerText: "Both strands in the new molecule are from the parent", isCorrect: false },
      { answerText: "Each DNA molecule has identical old strands", isCorrect: false },
    ],
    explanation: "Semi-conservative replication means that each daughter DNA molecule consists of one original (parental) strand and one newly synthesised strand.",
    image: null
  },
  {
    id: 382,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "What role does mRNA play in protein synthesis?",
    answerOptions: [
      { answerText: "It brings amino acids to the ribosome", isCorrect: false },
      { answerText: "It catalyses peptide bond formation", isCorrect: false },
      { answerText: "It carries the genetic code from the DNA to the ribosome", isCorrect: true },
      { answerText: "It forms part of the ribosome structure", isCorrect: false },
    ],
    explanation: "mRNA is transcribed from DNA in the nucleus and carries the instructions for protein synthesis to the ribosome.",
    image: null
  },
  {
    id: 383,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "If a DNA strand has the base sequence A-T-G-C-A-T, what is the complementary DNA sequence?",
    answerOptions: [
      { answerText: "T-U-G-A-T-U", isCorrect: false },
      { answerText: "U-A-C-G-U-A", isCorrect: false },
      { answerText: "T-A-C-G-T-A", isCorrect: true },
      { answerText: "A-T-G-C-A-T", isCorrect: false },
    ],
    explanation: "In DNA, A pairs with T and G pairs with C, so the complementary strand of A-T-G-C-A-T is T-A-C-G-T-A.",
    image: null
  },
  {
    id: 384,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "Which process produces an exact copy of a DNA molecule?",
    answerOptions: [
      { answerText: "Transcription", isCorrect: false },
      { answerText: "DNA replication", isCorrect: true },
      { answerText: "Translation", isCorrect: false },
      { answerText: "Mutation", isCorrect: false },
    ],
    explanation: "DNA replication produces two identical DNA molecules before cell division.",
    image: null
  },
  {
    id: 385,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "During transcription, which enzyme unwinds the DNA and joins RNA nucleotides?",
    answerOptions: [
      { answerText: "DNA ligase", isCorrect: false },
      { answerText: "DNA polymerase", isCorrect: false },
      { answerText: "RNA polymerase", isCorrect: true },
      { answerText: "Helicase", isCorrect: false },
    ],
    explanation: "RNA polymerase unwinds a section of the DNA molecule and assembles the RNA strand from free nucleotides.",
    image: null
  },
  {
    id: 386,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "Which part of the nucleotide determines the genetic code?",
    answerOptions: [
      { answerText: "Nitrogenous base", isCorrect: true },
      { answerText: "Deoxyribose sugar", isCorrect: false },
      { answerText: "Phosphate group", isCorrect: false },
      { answerText: "Hydrogen bond", isCorrect: false },
    ],
    explanation: "The sequence of nitrogenous bases encodes genetic information.",
    image: null
  },
  {
    id: 387,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "What is the anticodon for the mRNA codon AUG?",
    answerOptions: [
      { answerText: "TAC", isCorrect: false },
      { answerText: "UAC", isCorrect: true },
      { answerText: "AUG", isCorrect: false },
      { answerText: "CAU", isCorrect: false },
    ],
    explanation: "In RNA, A pairs with U and G pairs with C, so the anticodon for AUG is UAC.",
    image: null
  },
  {
    id: 388,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "Which organelle is the site of protein synthesis?",
    answerOptions: [
      { answerText: "Ribosome", isCorrect: true },
      { answerText: "Nucleus", isCorrect: false },
      { answerText: "Mitochondrion", isCorrect: false },
      { answerText: "Golgi body", isCorrect: false },
    ],
    explanation: "Ribosomes, either free in the cytoplasm or attached to the ER, are where proteins are assembled.",
    image: null
  },
  {
    id: 389,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "Which type of RNA has anticodons?",
    answerOptions: [
      { answerText: "mRNA", isCorrect: false },
      { answerText: "rRNA", isCorrect: false },
      { answerText: "snRNA", isCorrect: false },
      { answerText: "tRNA", isCorrect: true },
    ],
    explanation: "Transfer RNA (tRNA) carries amino acids and has anticodons that pair with mRNA codons.",
    image: null
  },
  {
    id: 390,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "What is the start codon in mRNA and what amino acid does it code for?",
    answerOptions: [
      { answerText: "UAA – Stop", isCorrect: false },
      { answerText: "UAG – Stop", isCorrect: false },
      { answerText: "AUG – Methionine", isCorrect: true },
      { answerText: "UGA – Stop", isCorrect: false },
    ],
    explanation: "The start codon AUG codes for the amino acid methionine and signals the start of translation.",
    image: null
  },
  {
    id: 391,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "Which bonds hold the two strands of the DNA double helix together?",
    answerOptions: [
      { answerText: "Peptide bonds between bases", isCorrect: false },
      { answerText: "Covalent bonds between bases", isCorrect: false },
      { answerText: "Ionic bonds between sugars", isCorrect: false },
      { answerText: "Hydrogen bonds between complementary bases", isCorrect: true },
    ],
    explanation: "Hydrogen bonds between complementary bases (A-T, G-C) hold the two DNA strands together.",
    image: null
  },
  {
    id: 392,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "Which process converts the message in mRNA into a sequence of amino acids?",
    answerOptions: [
      { answerText: "Translation", isCorrect: true },
      { answerText: "Transcription", isCorrect: false },
      { answerText: "Replication", isCorrect: false },
      { answerText: "Mutation", isCorrect: false },
    ],
    explanation: "Translation at the ribosome reads mRNA codons to assemble amino acids into proteins.",
    image: null
  },
  {
    id: 393,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "If a section of DNA is damaged by a mutation, what may occur?",
    answerOptions: [
      { answerText: "A different protein may be produced", isCorrect: true },
      { answerText: "The organism will always die immediately", isCorrect: false },
      { answerText: "The DNA will be unchanged", isCorrect: false },
      { answerText: "A protein will never be made again", isCorrect: false },
    ],
    explanation: "Mutations can change the amino acid sequence in a protein, altering its function or structure.",
    image: null
  },
  {
    id: 394,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "Why is DNA replication important before cell division?",
    answerOptions: [
      { answerText: "It increases the number of chromosomes", isCorrect: false },
      { answerText: "It changes the genetic code for variation", isCorrect: false },
      { answerText: "It shortens the DNA molecule", isCorrect: false },
      { answerText: "It ensures each daughter cell receives an identical copy of genetic material", isCorrect: true },
    ],
    explanation: "DNA replication ensures genetic continuity by giving each new cell a complete set of instructions.",
    image: null
  },
  {
    id: 395,
    topic: "DNA",
    difficulty: "Hard",
    questionText: "In protein synthesis, which molecule directly determines the order of amino acids?",
    answerOptions: [
      { answerText: "The anticodons in tRNA", isCorrect: false },
      { answerText: "The DNA backbone", isCorrect: false },
      { answerText: "The ribosomal RNA structure", isCorrect: false },
      { answerText: "The sequence of codons in mRNA", isCorrect: true },
    ],
    explanation: "The sequence of codons in mRNA dictates the specific order in which amino acids are assembled into a protein.",
    image: null
  },
  // MEIOSIS  // EASY (396–410)
  {
    id: 396,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "What is the main purpose of meiosis in sexually reproducing organisms?",
    answerOptions: [
      { answerText: "To repair damaged cells", isCorrect: false },
      { answerText: "To grow new tissues", isCorrect: false },
      { answerText: "To produce gametes", isCorrect: true },
      { answerText: "To produce identical cells", isCorrect: false },
    ],
    explanation: "Meiosis produces gametes (sperm and eggs) with half the normal chromosome number for sexual reproduction.",
    image: null
  },
  {
    id: 397,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "How many daughter cells are produced after one complete meiotic division?",
    answerOptions: [
      { answerText: "Two", isCorrect: false },
      { answerText: "Four", isCorrect: true },
      { answerText: "One", isCorrect: false },
      { answerText: "Eight", isCorrect: false },
    ],
    explanation: "Meiosis results in four non-identical haploid daughter cells.",
    image: null
  },
  {
    id: 398,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "What is the chromosome number in gametes compared to somatic cells?",
    answerOptions: [
      { answerText: "The same number", isCorrect: false },
      { answerText: "Double the number", isCorrect: false },
      { answerText: "A quarter of the number", isCorrect: false },
      { answerText: "Half the number", isCorrect: true },
    ],
    explanation: "Gametes are haploid, containing half the chromosome number of somatic (diploid) cells.",
    image: null
  },
  {
    id: 399,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "In which stage of meiosis does crossing over occur?",
    answerOptions: [
      { answerText: "Prophase I", isCorrect: true },
      { answerText: "Metaphase II", isCorrect: false },
      { answerText: "Anaphase I", isCorrect: false },
      { answerText: "Telophase II", isCorrect: false },
    ],
    explanation: "Crossing over happens in Prophase I, allowing genetic exchange between homologous chromosomes.",
    image: null
  },
  {
    id: 400,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "What type of cells undergo meiosis?",
    answerOptions: [
      { answerText: "Skin cells", isCorrect: false },
      { answerText: "Reproductive cells", isCorrect: true },
      { answerText: "Muscle cells", isCorrect: false },
      { answerText: "Nerve cells", isCorrect: false },
    ],
    explanation: "Only reproductive cells in the gonads undergo meiosis to produce gametes.",
    image: null
  },
  {
    id: 401,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "Which phase involves homologous chromosomes lining up at the equator?",
    answerOptions: [
      { answerText: "Anaphase II", isCorrect: false },
      { answerText: "Prophase II", isCorrect: false },
      { answerText: "Telophase I", isCorrect: false },
      { answerText: "Metaphase I", isCorrect: true },
    ],
    explanation: "In Metaphase I, homologous chromosome pairs align at the equator of the cell.",
    image: null
  },
  {
    id: 402,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "What is the result of crossing over?",
    answerOptions: [
      { answerText: "Identical DNA copies", isCorrect: false },
      { answerText: "Chromosome loss", isCorrect: false },
      { answerText: "Genetic variation", isCorrect: true },
      { answerText: "Cell death", isCorrect: false },
    ],
    explanation: "Crossing over exchanges genetic material, leading to variation in offspring.",
    image: null
  },
  {
    id: 403,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "What does the term 'haploid' mean?",
    answerOptions: [
      { answerText: "Two sets of chromosomes", isCorrect: false },
      { answerText: "Three sets of chromosomes", isCorrect: false },
      { answerText: "Four sets of chromosomes", isCorrect: false },
      { answerText: "One set of chromosomes", isCorrect: true },
    ],
    explanation: "Haploid cells have one complete set of chromosomes, as in gametes.",
    image: null
  },
  {
    id: 404,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "Which type of reproduction involves meiosis?",
    answerOptions: [
      { answerText: "Asexual reproduction", isCorrect: false },
      { answerText: "Sexual reproduction", isCorrect: true },
      { answerText: "Budding", isCorrect: false },
      { answerText: "Vegetative propagation", isCorrect: false },
    ],
    explanation: "Meiosis is essential for sexual reproduction as it produces gametes.",
    image: null
  },
  {
    id: 405,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "Which of the following is NOT a stage of meiosis?",
    answerOptions: [
      { answerText: "Prophase I", isCorrect: false },
      { answerText: "Metaphase II", isCorrect: false },
      { answerText: "Prometaphase", isCorrect: true },
      { answerText: "Anaphase I", isCorrect: false },
    ],
    explanation: "Prometaphase is a mitosis stage; it is not typically named in meiosis.",
    image: null
  },
  {
    id: 406,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "How many times does the cell divide during meiosis?",
    answerOptions: [
      { answerText: "Four times", isCorrect: false },
      { answerText: "Once", isCorrect: false },
      { answerText: "Twice", isCorrect: true },
      { answerText: "Three times", isCorrect: false },
    ],
    explanation: "Meiosis consists of two successive cell divisions: meiosis I and meiosis II.",
    image: null
  },
  {
    id: 407,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "What separates during Anaphase I of meiosis?",
    answerOptions: [
      { answerText: "Sister chromatids", isCorrect: false },
      { answerText: "Centromeres", isCorrect: false },
      { answerText: "DNA molecules", isCorrect: false },
      { answerText: "Homologous chromosomes", isCorrect: true },
    ],
    explanation: "In Anaphase I, homologous chromosomes are pulled apart to opposite poles.",
    image: null
  },
  {
    id: 408,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "During which stage are sister chromatids separated?",
    answerOptions: [
      { answerText: "Anaphase I", isCorrect: false },
      { answerText: "Metaphase I", isCorrect: false },
      { answerText: "Anaphase II", isCorrect: true },
      { answerText: "Prophase II", isCorrect: false },
    ],
    explanation: "In Anaphase II, sister chromatids are separated into individual chromosomes.",
    image: null
  },
  {
    id: 409,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "Meiosis produces cells that are genetically...",
    answerOptions: [
      { answerText: "Identical to the parent cell", isCorrect: false },
      { answerText: "Identical to each other", isCorrect: false },
      { answerText: "Larger than the parent cell", isCorrect: false },
      { answerText: "Different from each other", isCorrect: true },
    ],
    explanation: "Genetic variation arises from crossing over and independent assortment during meiosis.",
    image: null
  },
  {
    id: 410,
    topic: "Meiosis",
    difficulty: "Easy",
    questionText: "What process restores the diploid chromosome number after meiosis?",
    answerOptions: [
      { answerText: "Replication", isCorrect: false },
      { answerText: "Transcription", isCorrect: false },
      { answerText: "Fertilisation", isCorrect: true },
      { answerText: "Translation", isCorrect: false },
    ],
    explanation: "Fertilisation combines two haploid gametes to form a diploid zygote.",
    image: null
  },
   // MEDIUM (411–425)
  {
    id: 411,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "Which event in meiosis is responsible for the independent assortment of genes?",
    answerOptions: [
      { answerText: "Crossing over in Prophase I", isCorrect: false },
      { answerText: "Separation of sister chromatids in Anaphase II", isCorrect: false },
      { answerText: "Random alignment of homologous pairs in Metaphase I", isCorrect: true },
      { answerText: "Replication during Interphase", isCorrect: false },
    ],
    explanation: "Independent assortment occurs when homologous pairs line up randomly in Metaphase I.",
    image: null
  },
  {
    id: 412,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "Why is crossing over important for evolution?",
    answerOptions: [
      { answerText: "It ensures cells are identical", isCorrect: false },
      { answerText: "It speeds up cell division", isCorrect: false },
      { answerText: "It increases genetic variation", isCorrect: true },
      { answerText: "It prevents mutations", isCorrect: false },
    ],
    explanation: "Crossing over allows exchange of genetic material, producing new combinations for natural selection to act on.",
    image: null
  },
  {
    id: 413,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "How does meiosis differ from mitosis in terms of chromosome number?",
    answerOptions: [
      { answerText: "Meiosis halves the chromosome number", isCorrect: true },
      { answerText: "Meiosis doubles the chromosome number", isCorrect: false },
      { answerText: "Meiosis keeps chromosome number the same", isCorrect: false },
      { answerText: "Meiosis triples the chromosome number", isCorrect: false },
    ],
    explanation: "Meiosis produces haploid cells, while mitosis produces diploid cells.",
    image: null
  },
  {
    id: 414,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "What is a tetrad in meiosis?",
    answerOptions: [
      { answerText: "Four sister chromatids from one chromosome", isCorrect: false },
      { answerText: "Four identical gametes", isCorrect: false },
      { answerText: "A pair of homologous chromosomes, each with two chromatids", isCorrect: true },
      { answerText: "A group of four cells", isCorrect: false },
    ],
    explanation: "A tetrad forms in Prophase I when homologous chromosomes pair up.",
    image: null
  },
  {
    id: 415,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "What would happen if homologous chromosomes failed to separate in Anaphase I?",
    answerOptions: [
      { answerText: "Cells would become polyploid", isCorrect: false },
      { answerText: "Crossing over would be prevented", isCorrect: false },
      { answerText: "Gametes would have abnormal chromosome numbers", isCorrect: true },
      { answerText: "Meiosis would stop immediately", isCorrect: false },
    ],
    explanation: "This is nondisjunction, leading to gametes with extra or missing chromosomes.",
    image: null
  },
  {
    id: 416,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "Why is meiosis called a 'reduction division'?",
    answerOptions: [
      { answerText: "Because the chromosome number is halved", isCorrect: true },
      { answerText: "Because the DNA amount stays constant", isCorrect: false },
      { answerText: "Because the cell size decreases", isCorrect: false },
      { answerText: "Because the number of cells decreases", isCorrect: false },
    ],
    explanation: "Meiosis reduces the chromosome number from diploid to haploid.",
    image: null
  },
  {
    id: 417,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "During which phase of meiosis do chromosomes line up in single file at the equator?",
    answerOptions: [
      { answerText: "Anaphase II", isCorrect: false },
      { answerText: "Metaphase I", isCorrect: false },
      { answerText: "Metaphase II", isCorrect: true },
      { answerText: "Prophase I", isCorrect: false },
    ],
    explanation: "Metaphase II sees haploid chromosomes (with sister chromatids) aligned at the equator.",
    image: null
  },
  {
    id: 418,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "Which of the following contributes most to genetic variation in meiosis?",
    answerOptions: [
      { answerText: "Replication and cytokinesis", isCorrect: false },
      { answerText: "Mutation and transcription", isCorrect: false },
      { answerText: "Crossing over and independent assortment", isCorrect: true },
      { answerText: "Cell elongation and condensation", isCorrect: false },
    ],
    explanation: "Both crossing over and random assortment of chromosomes generate variation.",
    image: null
  },
  {
    id: 419,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "If a cell starts meiosis with 20 chromosomes, how many will each gamete have?",
    answerOptions: [
      { answerText: "20", isCorrect: false },
      { answerText: "5", isCorrect: false },
      { answerText: "10", isCorrect: true },
      { answerText: "40", isCorrect: false },
    ],
    explanation: "Gametes are haploid, so they have half the number of chromosomes as the original cell.",
    image: null
  },
  {
    id: 420,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "In humans, which cells are formed by meiosis?",
    answerOptions: [
      { answerText: "Blood cells", isCorrect: false },
      { answerText: "Skin cells", isCorrect: false },
      { answerText: "Sperm and egg cells", isCorrect: true },
      { answerText: "Liver cells", isCorrect: false },
    ],
    explanation: "Meiosis in the gonads produces gametes—sperm in males and eggs in females.",
    image: null
  },
  {
    id: 421,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "What is the outcome of meiosis II?",
    answerOptions: [
      { answerText: "Two diploid cells", isCorrect: false },
      { answerText: "Four haploid cells", isCorrect: true },
      { answerText: "Two haploid cells", isCorrect: false },
      { answerText: "Four diploid cells", isCorrect: false },
    ],
    explanation: "Meiosis II separates sister chromatids, resulting in four haploid cells.",
    image: null
  },
  {
    id: 422,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "Why do siblings from the same parents look different?",
    answerOptions: [
      { answerText: "Because DNA changes after birth", isCorrect: false },
      { answerText: "Because mitosis changes genes", isCorrect: false },
      { answerText: "Because of genetic variation from meiosis", isCorrect: true },
      { answerText: "Because fertilisation destroys DNA", isCorrect: false },
    ],
    explanation: "Variation from crossing over and independent assortment makes each gamete unique.",
    image: null
  },
  {
    id: 423,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "When does DNA replication occur in relation to meiosis?",
    answerOptions: [
      { answerText: "Before meiosis II", isCorrect: false },
      { answerText: "During anaphase", isCorrect: false },
      { answerText: "After telophase II", isCorrect: false },
      { answerText: "Before meiosis I, during interphase", isCorrect: true },
    ],
    explanation: "DNA is replicated before meiosis begins, during the S phase of interphase.",
    image: null
  },
  {
    id: 424,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "What separates during Anaphase II?",
    answerOptions: [
      { answerText: "Homologous chromosomes", isCorrect: false },
      { answerText: "Centrioles", isCorrect: false },
      { answerText: "Nuclear membranes", isCorrect: false },
      { answerText: "Sister chromatids", isCorrect: true },
    ],
    explanation: "Sister chromatids split apart in Anaphase II, moving to opposite poles.",
    image: null
  },
  {
    id: 425,
    topic: "Meiosis",
    difficulty: "Medium",
    questionText: "Which of the following is a key difference between meiosis I and meiosis II?",
    answerOptions: [
      { answerText: "Chromosomes replicate in both divisions", isCorrect: false },
      { answerText: "Both reduce chromosome number", isCorrect: false },
      { answerText: "Both involve crossing over", isCorrect: false },
      { answerText: "Homologous chromosomes separate in meiosis I, sister chromatids in meiosis II", isCorrect: true },
    ],
    explanation: "Meiosis I separates homologues; meiosis II separates chromatids.",
    image: null
  },

  // HARD (426–440)
  {
    id: 426,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "Nondisjunction in meiosis II would result in...",
    answerOptions: [
      { answerText: "All gametes abnormal", isCorrect: false },
      { answerText: "Only normal gametes", isCorrect: false },
      { answerText: "Two normal gametes, one with an extra chromosome, and one missing a chromosome", isCorrect: true },
      { answerText: "Gametes with double the chromosome number", isCorrect: false },
    ],
    explanation: "If sister chromatids fail to separate in meiosis II, only two gametes are affected.",
    image: null
  },
  {
    id: 427,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "A diploid organism has 14 chromosomes. After meiosis, how many possible chromosome combinations can a gamete have from independent assortment alone?",
    answerOptions: [
      { answerText: "64", isCorrect: false },
      { answerText: "128", isCorrect: true },
      { answerText: "256", isCorrect: false },
      { answerText: "14", isCorrect: false },
    ],
    explanation: "Independent assortment gives 2ⁿ combinations, where n = haploid number (7). 2⁷ = 128.",
    image: null
  },
  {
    id: 428,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "How does crossing over increase the number of possible gamete combinations?",
    answerOptions: [
      { answerText: "By doubling chromosome number", isCorrect: false },
      { answerText: "By preventing mutation", isCorrect: false },
      { answerText: "By reducing genetic diversity", isCorrect: false },
      { answerText: "By creating recombinant chromosomes with new allele combinations", isCorrect: true },
    ],
    explanation: "Crossing over exchanges segments between homologues, making new allele arrangements possible.",
    image: null
  },
  {
    id: 429,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "Why is meiosis essential for maintaining chromosome number across generations?",
    answerOptions: [
      { answerText: "It doubles chromosome number in gametes", isCorrect: false },
      { answerText: "It halves chromosome number so fertilisation restores diploidy", isCorrect: true },
      { answerText: "It prevents gamete formation", isCorrect: false },
      { answerText: "It eliminates mutations", isCorrect: false },
    ],
    explanation: "Without meiosis, chromosome number would double each generation.",
    image: null
  },
  {
    id: 430,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "If crossing over occurs between linked genes, what is the outcome?",
    answerOptions: [
      { answerText: "Only parental type gametes", isCorrect: false },
      { answerText: "Loss of genetic variation", isCorrect: false },
      { answerText: "Recombinant gametes with new allele combinations", isCorrect: true },
      { answerText: "No effect on alleles", isCorrect: false },
    ],
    explanation: "Crossing over can break linkage between genes, producing recombinants.",
    image: null
  },
  {
    id: 431,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "During meiosis I, homologous chromosomes fail to separate. This is an example of...",
    answerOptions: [
      { answerText: "Crossing over", isCorrect: false },
      { answerText: "Nondisjunction", isCorrect: true },
      { answerText: "Independent assortment", isCorrect: false },
      { answerText: "Synapsis", isCorrect: false },
    ],
    explanation: "Nondisjunction leads to gametes with abnormal chromosome numbers.",
    image: null
  },
  {
    id: 432,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "Which of the following correctly matches a stage of meiosis with its key event?",
    answerOptions: [
      { answerText: "Prophase I – homologous chromosomes pair and exchange segments", isCorrect: true },
      { answerText: "Anaphase I – sister chromatids separate", isCorrect: false },
      { answerText: "Metaphase II – homologous chromosomes line up in pairs", isCorrect: false },
      { answerText: "Telophase II – chromosomes condense", isCorrect: false },
    ],
    explanation: "Prophase I involves synapsis and crossing over between homologous chromosomes.",
    image: null
  },
  {
    id: 433,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "If a species has a diploid number of 6, how many chromosomes are in each gamete?",
    answerOptions: [
      { answerText: "12", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "2", isCorrect: false },
      { answerText: "3", isCorrect: true },
    ],
    explanation: "Gametes are haploid and contain half the chromosome number of diploid cells.",
    image: null
  },
  {
    id: 434,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "Why is genetic variation important for a population?",
    answerOptions: [
      { answerText: "It ensures all individuals are identical", isCorrect: false },
      { answerText: "It reduces adaptation ability", isCorrect: false },
      { answerText: "It eliminates competition", isCorrect: false },
      { answerText: "It increases chances of survival in changing environments", isCorrect: true },
    ],
    explanation: "Variation provides a pool of traits that may be advantageous under new conditions.",
    image: null
  },
  {
    id: 435,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "If nondisjunction occurs in meiosis I, how many gametes will be abnormal?",
    answerOptions: [
      { answerText: "Half of them", isCorrect: false },
      { answerText: "All of them", isCorrect: true },
      { answerText: "One", isCorrect: false },
      { answerText: "None", isCorrect: false },
    ],
    explanation: "If homologues fail to separate in meiosis I, all gametes receive abnormal chromosome numbers.",
    image: null
  },
  {
    id: 436,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "Which feature distinguishes meiosis from mitosis?",
    answerOptions: [
      { answerText: "Separation of sister chromatids", isCorrect: false },
      { answerText: "DNA replication", isCorrect: false },
      { answerText: "Cytokinesis", isCorrect: false },
      { answerText: "Pairing of homologous chromosomes", isCorrect: true },
    ],
    explanation: "Only meiosis involves synapsis of homologous chromosomes in Prophase I.",
    image: null
  },
  {
    id: 437,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "In which stage of meiosis do spindle fibers first attach to kinetochores?",
    answerOptions: [
      { answerText: "Prophase I", isCorrect: false },
      { answerText: "Telophase II", isCorrect: false },
      { answerText: "Anaphase I", isCorrect: false },
      { answerText: "Metaphase I", isCorrect: true },
    ],
    explanation: "Spindle fibers attach to kinetochores when chromosomes align at the equator in Metaphase I.",
    image: null
  },
  {
    id: 438,
    topic: "Meiosis",
    difficulty: "Hard",
    questionText: "How does meiosis contribute to Mendel’s law of segregation?",
    answerOptions: [
      { answerText: "It duplicates alleles in gametes", isCorrect: false },
      { answerText: "It separates allele pairs into different gametes", isCorrect: true },
      { answerText: "It fuses gametes into zygotes", isCorrect: false },
      { answerText: "It prevents recombination", isCorrect: false },
    ],
    explanation: "During meiosis I, homologous chromosomes carrying different alleles separate into different gametes.",
    image: null
  },
  //INHERITENCE AND GENETICS
  {
    "id": 441,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "What term describes the physical appearance of an organism based on its genes?",
    "answerOptions": [
      { "answerText": "Genotype", "isCorrect": false },
      { "answerText": "Allele", "isCorrect": false },
      { "answerText": "Phenotype", "isCorrect": true },
      { "answerText": "Chromosome", "isCorrect": false },
    ],
    "explanation": "Phenotype refers to observable characteristics, while genotype refers to the genetic makeup.",
    "image": null
  },
  {
    "id": 442,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "In Mendel's pea plant experiments, tall (T) was dominant over short (t). What is the genotype of a homozygous tall plant?",
    "answerOptions": [
      { "answerText": "Tt", "isCorrect": false },
      { "answerText": "tt", "isCorrect": false },
      { "answerText": "Ttt", "isCorrect": false },
      { "answerText": "TT", "isCorrect": true },
    ],
    "explanation": "Homozygous dominant means both alleles are the dominant form, TT.",
    "image": null
  },
  {
    "id": 443,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "Which type of allele is only expressed when paired with another identical allele?",
    "answerOptions": [
      { "answerText": "Recessive allele", "isCorrect": true },
      { "answerText": "Dominant allele", "isCorrect": false },
      { "answerText": "Codominant allele", "isCorrect": false },
      { "answerText": "Multiple allele", "isCorrect": false },
    ],
    "explanation": "A recessive allele is masked by a dominant allele and only expressed when homozygous.",
    "image": null
  },
  {
    "id": 444,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "Which genetic cross involves only one trait?",
    "answerOptions": [
      { "answerText": "Dihybrid cross", "isCorrect": false },
      { "answerText": "Monohybrid cross", "isCorrect": true },
      { "answerText": "Test cross", "isCorrect": false },
      { "answerText": "Back cross", "isCorrect": false },
    ],
    "explanation": "A monohybrid cross tracks the inheritance of a single characteristic.",
    "image": null
  },
  {
    "id": 445,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "Which scientist is considered the father of genetics?",
    "answerOptions": [
      { "answerText": "Charles Darwin", "isCorrect": false },
      { "answerText": "James Watson", "isCorrect": false },
      { "answerText": "Francis Crick", "isCorrect": false },
      { "answerText": "Gregor Mendel", "isCorrect": true },
    ],
    "explanation": "Gregor Mendel's experiments with pea plants laid the foundation of genetics.",
    "image": null
  },
  {
    "id": 446,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "What is the term for different versions of the same gene?",
    "answerOptions": [
      { "answerText": "Chromatids", "isCorrect": false },
      { "answerText": "Loci", "isCorrect": false },
      { "answerText": "Alleles", "isCorrect": true },
      { "answerText": "Gametes", "isCorrect": false },
    ],
    "explanation": "Alleles are alternative forms of the same gene that occupy the same locus on homologous chromosomes.",
    "image": null
  },
  {
    "id": 447,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "If a trait is sex-linked and found on the X chromosome, who is more likely to express it?",
    "answerOptions": [
      { "answerText": "Females", "isCorrect": false },
      { "answerText": "Both equally", "isCorrect": false },
      { "answerText": "Neither", "isCorrect": false },
      { "answerText": "Males", "isCorrect": true },
    ],
    "explanation": "Males have only one X chromosome, so a single recessive allele will be expressed.",
    "image": null
  },
  {
    "id": 448,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "Which process during meiosis increases genetic variation?",
    "answerOptions": [
      { "answerText": "DNA replication", "isCorrect": false },
      { "answerText": "Mitosis", "isCorrect": false },
      { "answerText": "Crossing over", "isCorrect": true },
      { "answerText": "Cytokinesis", "isCorrect": false },
    ],
    "explanation": "Crossing over during prophase I of meiosis results in recombination of alleles.",
    "image": null
  },
  {
    "id": 449,
    "topic": "Inheritance and Genetics",
    "difficulty": "Easy",
    "questionText": "If both alleles contribute equally to the phenotype, this is known as:",
    "answerOptions": [
      { "answerText": "Incomplete dominance", "isCorrect": false },
      { "answerText": "Dominance", "isCorrect": false },
      { "answerText": "Codominance", "isCorrect": true },
      { "answerText": "Polygenic inheritance", "isCorrect": false },
    ],
    "explanation": "In codominance, both alleles are fully expressed, such as in AB blood type.",
    "image": null
  },
  {
    "id": 1000,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "In a dihybrid cross of RrYy × RrYy, what is the expected phenotypic ratio according to Mendel's second law?",
    "answerOptions": [
      { "answerText": "3:1", "isCorrect": false },
      { "answerText": "9:3:3:1", "isCorrect": true },
      { "answerText": "1:2:1", "isCorrect": false },
      { "answerText": "4:0", "isCorrect": false },
    ],
    "explanation": "The 9:3:3:1 ratio is the classic result of independent assortment for two traits in heterozygous parents.",
    "image": null
  },
  //MEDIUM
  {
    "id": 450,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "In humans, brown eyes (B) are dominant over blue eyes (b). If two heterozygous parents have children, what is the probability of them having a blue-eyed child?",
    "answerOptions": [
      { "answerText": "50%", "isCorrect": false },
      { "answerText": "75%", "isCorrect": false },
      { "answerText": "25%", "isCorrect": true },
      { "answerText": "0%", "isCorrect": false },
    ],
    "explanation": "A cross between Bb × Bb produces a 1:2:1 genotype ratio, with 1 out of 4 being bb (blue-eyed).",
    "image": null
  },
  {
    "id": 451,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "In a dihybrid cross of RrYy × RrYy, what is the expected phenotypic ratio according to Mendel's second law?",
    "answerOptions": [
      { "answerText": "3:1", "isCorrect": false },
      { "answerText": "1:2:1", "isCorrect": false },
      { "answerText": "4:0", "isCorrect": false },
      { "answerText": "9:3:3:1", "isCorrect": true },
    ],
    "explanation": "The 9:3:3:1 ratio is the classic result of independent assortment for two traits in heterozygous parents.",
    "image": null
  },
  {
    "id": 452,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "Haemophilia is a sex-linked recessive disorder. If a carrier mother has children with a normal father, what percentage of sons are expected to have haemophilia?",
    "answerOptions": [
      { "answerText": "25%", "isCorrect": false },
      { "answerText": "0%", "isCorrect": false },
      { "answerText": "50%", "isCorrect": true },
      { "answerText": "75%", "isCorrect": false },
    ],
    "explanation": "Carrier mothers (XHXh) pass the defective X chromosome to half of their sons, who lack a second X chromosome to mask it.",
    "image": null
  },
  {
    "id": 453,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "A cross between a red-flowered plant (RR) and a white-flowered plant (WW) produces pink flowers (RW). What type of inheritance is this?",
    "answerOptions": [
      { "answerText": "Codominance", "isCorrect": false },
      { "answerText": "Incomplete dominance", "isCorrect": true },
      { "answerText": "Polygenic inheritance", "isCorrect": false },
      { "answerText": "Multiple alleles", "isCorrect": false },
    ],
    "explanation": "Incomplete dominance results in a blending of phenotypes in heterozygotes.",
    "image": null
  },
  {
    "id": 454,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "Which blood group is known as the universal donor in the ABO blood group system?",
    "answerOptions": [
      { "answerText": "O negative", "isCorrect": true },
      { "answerText": "O positive", "isCorrect": false },
      { "answerText": "AB positive", "isCorrect": false },
      { "answerText": "A negative", "isCorrect": false },
    ],
    "explanation": "O negative blood lacks A, B, and Rh antigens, so it can be given to most recipients.",
    "image": null
  },
  {
    "id": 455,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "If a man with genotype IAi and a woman with genotype IBi have children, which blood group will not appear in their offspring?",
    "answerOptions": [
      { "answerText": "AB only", "isCorrect": false },
      { "answerText": "O only", "isCorrect": false },
      { "answerText": "A only", "isCorrect": false },
      { "answerText": "None – all groups possible", "isCorrect": true },
    ],
    "explanation": "Cross IAi × IBi can produce all four ABO blood types: A, B, AB, and O.",
    "image": null
  },
  {
    "id": 456,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "Which law states that alleles for different traits are distributed to gametes independently?",
    "answerOptions": [
      { "answerText": "Law of Independent Assortment", "isCorrect": true },
      { "answerText": "Law of Segregation", "isCorrect": false },
      { "answerText": "Law of Dominance", "isCorrect": false },
      { "answerText": "Law of Linkage", "isCorrect": false },
    ],
    "explanation": "Mendel’s second law describes independent assortment of alleles during gamete formation.",
    "image": null
  },
  {
    "id": 457,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "Which genetic disorder is caused by an extra copy of chromosome 21?",
    "answerOptions": [
      { "answerText": "Klinefelter syndrome", "isCorrect": false },
      { "answerText": "Cystic fibrosis", "isCorrect": false },
      { "answerText": "Down syndrome", "isCorrect": true },
      { "answerText": "Turner syndrome", "isCorrect": false },
    ],
    "explanation": "Trisomy 21 results in Down syndrome.",
    "image": null
  },
  {
    "id": 458,
    "topic": "Inheritance and Genetics",
    "difficulty": "Medium",
    "questionText": "Which of the following is NOT a polygenic trait?",
    "answerOptions": [
      { "answerText": "Eye colour", "isCorrect": false },
      { "answerText": "Blood type", "isCorrect": true },
      { "answerText": "Skin colour", "isCorrect": false },
      { "answerText": "Height", "isCorrect": false },
    ],
    "explanation": "Blood type is determined by multiple alleles but not polygenic; polygenic traits are influenced by many genes.",
    "image": null
  },
  // HARD
   {
    "id": 459,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "In a cross between two organisms, the phenotypic ratio 1:1:1:1 is observed. Which parental genotypes are most likely responsible?",
    "answerOptions": [
      { "answerText": "AaBb × AaBb", "isCorrect": false },
      { "answerText": "AABB × aabb", "isCorrect": false },
      { "answerText": "AaBb × aabb", "isCorrect": true },
      { "answerText": "AaBB × aaBB", "isCorrect": false },
    ],
    "explanation": "A heterozygous dihybrid crossed with a double recessive gives four equally likely phenotypes in a 1:1:1:1 ratio.",
    "image": null
  },
  {
    "id": 460,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "A man with haemophilia has children with a woman who is not a carrier. What is the probability that their daughters will be carriers?",
    "answerOptions": [
      { "answerText": "50%", "isCorrect": false },
      { "answerText": "25%", "isCorrect": false },
      { "answerText": "100%", "isCorrect": true },
      { "answerText": "0%", "isCorrect": false },
    ],
    "explanation": "All daughters inherit the father's X chromosome with the haemophilia allele and the mother’s normal X, making them carriers.",
    "image": null
  },
  {
    "id": 461,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "In snapdragon flowers, red (RR) and white (WW) show incomplete dominance to produce pink (RW). If two pink flowers are crossed, what percentage of the offspring will be pink?",
    "answerOptions": [
      { "answerText": "25%", "isCorrect": false },
      { "answerText": "75%", "isCorrect": false },
      { "answerText": "50%", "isCorrect": true },
      { "answerText": "100%", "isCorrect": false },
    ],
    "explanation": "RW × RW produces 25% RR, 50% RW, and 25% WW; RW are the pink flowers.",
    "image": null
  },
  {
    "id": 462,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "In humans, free earlobes (F) are dominant over attached earlobes (f). A free-eared man whose mother had attached earlobes marries a woman with attached earlobes. What is the probability of them having a child with attached earlobes?",
    "answerOptions": [
      { "answerText": "75%", "isCorrect": false },
      { "answerText": "25%", "isCorrect": false },
      { "answerText": "0%", "isCorrect": false },
      { "answerText": "50%", "isCorrect": true },
    ],
    "explanation": "The man must be heterozygous (Ff), so Ff × ff gives a 1:1 ratio of Ff to ff.",
    "image": null
  },
  {
    "id": 463,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "A certain genetic disorder is caused by a dominant allele. If two heterozygous parents have children, what is the probability that a child will be unaffected?",
    "answerOptions": [
      { "answerText": "50%", "isCorrect": false },
      { "answerText": "0%", "isCorrect": false },
      { "answerText": "25%", "isCorrect": true },
      { "answerText": "75%", "isCorrect": false },
    ],
    "explanation": "For Dd × Dd, the genotypes are 1 DD : 2 Dd : 1 dd, so only dd (25%) are unaffected.",
    "image": null
  },
  {
    "id": 464,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "Which of the following would be evidence that two genes are linked?",
    "answerOptions": [
      { "answerText": "Observed ratios match exactly 9:3:3:1", "isCorrect": false },
      { "answerText": "Each trait segregates independently", "isCorrect": false },
      { "answerText": "All offspring show dominant traits", "isCorrect": false },
      { "answerText": "Observed ratios deviate from expected Mendelian ratios", "isCorrect": true },
    ],
    "explanation": "Linked genes are inherited together more often than expected by independent assortment, altering ratios.",
    "image": null
  },
  {
    "id": 465,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "If crossing-over occurs between two linked genes, what is the expected effect on offspring phenotypes?",
    "answerOptions": [
      { "answerText": "Decrease in recombinant phenotypes", "isCorrect": false },
      { "answerText": "No change", "isCorrect": false },
      { "answerText": "Increase in recombinant phenotypes", "isCorrect": true },
      { "answerText": "Only parental phenotypes produced", "isCorrect": false },
    ],
    "explanation": "Crossing-over exchanges genetic material, producing recombinants among linked genes.",
    "image": null
  },
  {
    "id": 466,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "Which type of mutation involves the insertion or deletion of a nucleotide that shifts the reading frame?",
    "answerOptions": [
      { "answerText": "Frameshift mutation", "isCorrect": true },
      { "answerText": "Point mutation", "isCorrect": false },
      { "answerText": "Silent mutation", "isCorrect": false },
      { "answerText": "Nonsense mutation", "isCorrect": false },
    ],
    "explanation": "Frameshift mutations alter the triplet reading frame, often severely affecting protein function.",
    "image": null
  },
  {
    "id": 467,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "A woman with type AB blood and a man with type O blood have children. Which blood type(s) can their children have?",
    "answerOptions": [
      { "answerText": "A, B, or AB", "isCorrect": false },
      { "answerText": "O only", "isCorrect": false },
      { "answerText": "A or B", "isCorrect": true },
      { "answerText": "A, B, AB, or O", "isCorrect": false },
    ],
    "explanation": "AB × O produces either A or B phenotypes, never AB or O.",
    "image": null
  },
  {
    "id": 468,
    "topic": "Inheritance and Genetics",
    "difficulty": "Hard",
    "questionText": "In fruit flies, eye colour is a sex-linked trait. If a red-eyed female is crossed with a white-eyed male, and all offspring have red eyes, what is the female's genotype?",
    "answerOptions": [
      { "answerText": "Homozygous dominant", "isCorrect": true },
      { "answerText": "Heterozygous", "isCorrect": false },
      { "answerText": "Homozygous recessive", "isCorrect": false },
      { "answerText": "Carrier", "isCorrect": false },
    ],
    "explanation": "A homozygous dominant female (XRXR) ensures all offspring inherit at least one red-eye allele.",
    "image": null
  },
  //EVOLUTION: EASY
   {
    "id": 469,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What does the term 'evolution' mean?",
    "answerOptions": [
      { "answerText": "Growth of an individual organism", "isCorrect": false },
      { "answerText": "Movement of animals between areas", "isCorrect": false },
      { "answerText": "Increase in population size", "isCorrect": false },
      { "answerText": "Change in species over time", "isCorrect": true },
    ],
    "explanation": "Evolution is the process by which species change over many generations.",
    "image": null
  },
  {
    "id": 470,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "Which scientist is most closely linked with the theory of natural selection?",
    "answerOptions": [
      { "answerText": "Albert Einstein", "isCorrect": false },
      { "answerText": "Charles Darwin", "isCorrect": true },
      { "answerText": "Louis Pasteur", "isCorrect": false },
      { "answerText": "Isaac Newton", "isCorrect": false },
    ],
    "explanation": "Darwin developed the idea of natural selection to explain how evolution happens.",
    "image": null
  },
  {
    "id": 471,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What does 'natural selection' mean?",
    "answerOptions": [
      { "answerText": "Humans choose which animals to breed", "isCorrect": false },
      { "answerText": "Species change instantly when the environment changes", "isCorrect": false },
      { "answerText": "Only the strongest animals survive", "isCorrect": false },
      { "answerText": "Organisms with traits that help them survive are more likely to reproduce", "isCorrect": true },
    ],
    "explanation": "Natural selection favours traits that help survival and reproduction.",
    "image": null
  },
  {
    "id": 472,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "Which of the following is a fossil?",
    "answerOptions": [
      { "answerText": "A bird flying in the sky", "isCorrect": false },
      { "answerText": "A tree in a forest", "isCorrect": false },
      { "answerText": "A preserved bone from a dinosaur", "isCorrect": true },
      { "answerText": "A rock formed last year", "isCorrect": false },
    ],
    "explanation": "Fossils are remains or impressions of ancient organisms preserved in rock.",
    "image": null
  },
  {
    "id": 473,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What is the main source of variation in a population?",
    "answerOptions": [
      { "answerText": "Eating different foods", "isCorrect": false },
      { "answerText": "Learning new skills", "isCorrect": false },
      { "answerText": "Mutations and sexual reproduction", "isCorrect": true },
      { "answerText": "Climate change", "isCorrect": false },
    ],
    "explanation": "Mutations and genetic recombination produce variation.",
    "image": null
  },
  {
    "id": 474,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What are homologous structures?",
    "answerOptions": [
      { "answerText": "Body parts with the same function but different structures", "isCorrect": false },
      { "answerText": "Body parts with similar structures due to a common ancestor", "isCorrect": true },
      { "answerText": "Organs that no longer function", "isCorrect": false },
      { "answerText": "Newly formed body parts", "isCorrect": false },
    ],
    "explanation": "Homologous structures have the same basic anatomy, even if they serve different functions.",
    "image": null
  },
  {
    "id": 475,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "Which of these is an example of natural selection in action?",
    "answerOptions": [
      { "answerText": "A person training to run faster", "isCorrect": false },
      { "answerText": "A dog learning tricks", "isCorrect": false },
      { "answerText": "Bacteria becoming resistant to antibiotics", "isCorrect": true },
      { "answerText": "Moving to a new country", "isCorrect": false },
    ],
    "explanation": "Bacteria that survive antibiotics pass on resistance genes to offspring.",
    "image": null
  },
  {
    "id": 476,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What does 'extinction' mean?",
    "answerOptions": [
      { "answerText": "A species moving to another area", "isCorrect": false },
      { "answerText": "A species changing colour", "isCorrect": false },
      { "answerText": "The complete disappearance of a species", "isCorrect": true },
      { "answerText": "An individual animal dying", "isCorrect": false },
    ],
    "explanation": "Extinction happens when no individuals of a species are left alive.",
    "image": null
  },
  {
    "id": 477,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "Which evidence for evolution comes from studying where organisms live?",
    "answerOptions": [
      { "answerText": "Genetics", "isCorrect": false },
      { "answerText": "Comparative anatomy", "isCorrect": false },
      { "answerText": "Fossils", "isCorrect": false },
      { "answerText": "Biogeography", "isCorrect": true },
    ],
    "explanation": "Biogeography looks at the distribution of species across the planet.",
    "image": null
  },
  {
    "id": 478,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What are vestigial organs?",
    "answerOptions": [
      { "answerText": "Newly developed organs", "isCorrect": false },
      { "answerText": "Organs that work the same in all species", "isCorrect": false },
      { "answerText": "Structures with no current function but present in ancestors", "isCorrect": true },
      { "answerText": "Organs that appear only in young animals", "isCorrect": false },
    ],
    "explanation": "Vestigial organs are evolutionary leftovers from ancestors.",
    "image": null
  },
  {
    "id": 479,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "Which of these is a cause of extinction?",
    "answerOptions": [
      { "answerText": "Increased reproduction", "isCorrect": false },
      { "answerText": "Better camouflage", "isCorrect": false },
      { "answerText": "Habitat loss", "isCorrect": true },
      { "answerText": "Seasonal migration", "isCorrect": false },
    ],
    "explanation": "Loss of habitat removes resources needed for survival.",
    "image": null
  },
  {
    "id": 480,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What is the study of fossils called?",
    "answerOptions": [
      { "answerText": "Biogeography", "isCorrect": false },
      { "answerText": "Archaeology", "isCorrect": false },
      { "answerText": "Paleontology", "isCorrect": true },
      { "answerText": "Geology", "isCorrect": false },
    ],
    "explanation": "Paleontology studies fossils to understand ancient life.",
    "image": null
  },
  {
    "id": 481,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "Which type of selection favours the average form of a trait?",
    "answerOptions": [
      { "answerText": "Directional selection", "isCorrect": false },
      { "answerText": "Disruptive selection", "isCorrect": false },
      { "answerText": "Artificial selection", "isCorrect": false },
      { "answerText": "Stabilising selection", "isCorrect": true },
    ],
    "explanation": "Stabilising selection keeps traits close to the average.",
    "image": null
  },
  {
    "id": 482,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "Which type of evolution happens when unrelated species develop similar traits?",
    "answerOptions": [
      { "answerText": "Convergent evolution", "isCorrect": true },
      { "answerText": "Divergent evolution", "isCorrect": false },
      { "answerText": "Co-evolution", "isCorrect": false },
      { "answerText": "Parallel evolution", "isCorrect": false },
    ],
    "explanation": "Convergent evolution produces similar traits due to similar environments, not ancestry.",
    "image": null
  },
  {
    "id": 483,
    "topic": "Evolution",
    "difficulty": "Easy",
    "questionText": "What is meant by 'species'?",
    "answerOptions": [
      { "answerText": "Any group of similar-looking animals", "isCorrect": false },
      { "answerText": "Animals living in the same place", "isCorrect": false },
      { "answerText": "Organisms that eat the same food", "isCorrect": false },
      { "answerText": "A group of organisms that can breed and produce fertile offspring", "isCorrect": true },
    ],
    "explanation": "A species is a group that can interbreed and produce fertile offspring.",
    "image": null
  },
  // MEDUIM
  {
    "id": 484,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is natural selection?",
    "answerOptions": [
      { "answerText": "When all individuals reproduce equally", "isCorrect": false },
      { "answerText": "When individuals with better traits survive and reproduce more", "isCorrect": true },
      { "answerText": "When humans choose which traits to breed", "isCorrect": false },
      { "answerText": "When all traits are passed on", "isCorrect": false },
    ],
    "explanation": "Natural selection means organisms with beneficial traits are more likely to survive and pass them on.",
    "image": null
  },
  {
    "id": 485,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "Why are fossils important for studying evolution?",
    "answerOptions": [
      { "answerText": "They show how organisms have changed over time", "isCorrect": true },
      { "answerText": "They prove all organisms are the same", "isCorrect": false },
      { "answerText": "They are the only evidence for life", "isCorrect": false },
      { "answerText": "They show only bones", "isCorrect": false },
    ],
    "explanation": "Fossils give a record of past life and show how species have evolved.",
    "image": null
  },
  {
    "id": 486,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What does ‘variation’ mean in evolution?",
    "answerOptions": [
      { "answerText": "The process of making fossils", "isCorrect": false },
      { "answerText": "When all individuals are the same", "isCorrect": false },
      { "answerText": "Differences between individuals in a population", "isCorrect": true },
      { "answerText": "A sudden change in climate", "isCorrect": false },
    ],
    "explanation": "Variation is the range of differences in traits among individuals of the same species.",
    "image": null
  },
  {
    "id": 487,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "Why is Charles Darwin famous in biology?",
    "answerOptions": [
      { "answerText": "He discovered DNA", "isCorrect": false },
      { "answerText": "He invented microscopes", "isCorrect": false },
      { "answerText": "He classified plants", "isCorrect": false },
      { "answerText": "He explained natural selection", "isCorrect": true },
    ],
    "explanation": "Darwin’s theory of natural selection is a major idea in evolution.",
    "image": null
  },
  {
    "id": 488,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is meant by ‘common ancestor’?",
    "answerOptions": [
      { "answerText": "The first species ever on Earth", "isCorrect": false },
      { "answerText": "A modern species that is related to all others", "isCorrect": false },
      { "answerText": "An earlier species that gave rise to later species", "isCorrect": true },
      { "answerText": "An unrelated extinct species", "isCorrect": false },
    ],
    "explanation": "A common ancestor is an earlier organism from which different species evolved.",
    "image": null
  },
  {
    "id": 489,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "Why are homologous structures evidence for evolution?",
    "answerOptions": [
      { "answerText": "They show organisms are unrelated", "isCorrect": false },
      { "answerText": "They have exactly the same function", "isCorrect": false },
      { "answerText": "They suggest organisms share a common ancestor", "isCorrect": true },
      { "answerText": "They are always identical in shape", "isCorrect": false },
    ],
    "explanation": "Homologous structures are similar in form and suggest shared ancestry.",
    "image": null
  },
  {
    "id": 490,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is artificial selection?",
    "answerOptions": [
      { "answerText": "Nature choosing the strongest organisms", "isCorrect": false },
      { "answerText": "When traits change without cause", "isCorrect": false },
      { "answerText": "Humans choosing which organisms to breed", "isCorrect": true },
      { "answerText": "Random genetic changes", "isCorrect": false },
    ],
    "explanation": "Artificial selection happens when humans select which traits to keep in a population.",
    "image": null
  },
  {
    "id": 491,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is speciation?",
    "answerOptions": [
      { "answerText": "The extinction of a species", "isCorrect": false },
      { "answerText": "A change in colour only", "isCorrect": false },
      { "answerText": "The formation of new species", "isCorrect": true },
      { "answerText": "A seasonal change in behaviour", "isCorrect": false },
    ],
    "explanation": "Speciation occurs when populations change enough to form new species.",
    "image": null
  },
  {
    "id": 492,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is the main role of mutations in evolution?",
    "answerOptions": [
      { "answerText": "They remove harmful traits instantly", "isCorrect": false },
      { "answerText": "They keep species unchanged", "isCorrect": false },
      { "answerText": "They only occur in large animals", "isCorrect": false },
      { "answerText": "They create new traits in a population", "isCorrect": true },
    ],
    "explanation": "Mutations add new genetic variation for natural selection to act upon.",
    "image": null
  },
  {
    "id": 493,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "Which type of isolation happens when species live in different places?",
    "answerOptions": [
      { "answerText": "Behavioural isolation", "isCorrect": false },
      { "answerText": "Geographical isolation", "isCorrect": true },
      { "answerText": "Temporal isolation", "isCorrect": false },
      { "answerText": "Mechanical isolation", "isCorrect": false },
    ],
    "explanation": "Geographical isolation occurs when physical barriers separate populations.",
    "image": null
  },
  {
    "id": 494,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "Why do species produce more offspring than can survive?",
    "answerOptions": [
      { "answerText": "To increase the chances that some will survive", "isCorrect": true },
      { "answerText": "Because there is unlimited food", "isCorrect": false },
      { "answerText": "Because no predators exist", "isCorrect": false },
      { "answerText": "Because all offspring survive", "isCorrect": false },
    ],
    "explanation": "Producing many offspring ensures survival despite competition and predation.",
    "image": null
  },
  {
    "id": 495,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is adaptation?",
    "answerOptions": [
      { "answerText": "A random feature with no purpose", "isCorrect": false },
      { "answerText": "A sudden climate change", "isCorrect": false },
      { "answerText": "A feature that helps an organism survive in its environment", "isCorrect": true },
      { "answerText": "A decrease in population size", "isCorrect": false },
    ],
    "explanation": "Adaptations are traits that improve survival or reproduction.",
    "image": null
  },
  {
    "id": 496,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is genetic drift?",
    "answerOptions": [
      { "answerText": "A change due to migration", "isCorrect": false },
      { "answerText": "A random change in allele frequencies in a population", "isCorrect": true },
      { "answerText": "A sudden mutation in one organism", "isCorrect": false },
      { "answerText": "Selection for the best traits", "isCorrect": false },
    ],
    "explanation": "Genetic drift is a random process affecting small populations most strongly.",
    "image": null
  },
  {
    "id": 497,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "Why are vestigial structures important in evolution?",
    "answerOptions": [
      { "answerText": "They are leftovers from ancestors", "isCorrect": true },
      { "answerText": "They are used every day", "isCorrect": false },
      { "answerText": "They show unrelatedness", "isCorrect": false },
      { "answerText": "They only occur in plants", "isCorrect": false },
    ],
    "explanation": "Vestigial structures show that organisms evolved from ancestors with different lifestyles.",
    "image": null
  },
  {
    "id": 498,
    "topic": "Evolution",
    "difficulty": "Medium",
    "questionText": "What is the difference between microevolution and macroevolution?",
    "answerOptions": [
      { "answerText": "Fast changes vs. slow changes", "isCorrect": false },
      { "answerText": "Natural vs. artificial changes", "isCorrect": false },
      { "answerText": "They are the same", "isCorrect": false },
      { "answerText": "Small changes within a species vs. formation of new species", "isCorrect": true },
    ],
    "explanation": "Microevolution changes traits in a species; macroevolution creates new species.",
    "image": null
  },
  //HARD
   {
    "id": 501,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which type of natural selection results in extreme phenotypes being favoured over intermediate ones?",
    "answerOptions": [
      { "answerText": "Directional selection", "isCorrect": false },
      { "answerText": "Disruptive selection", "isCorrect": true },
      { "answerText": "Stabilising selection", "isCorrect": false },
      { "answerText": "Artificial selection", "isCorrect": false },
    ],
    "explanation": "Disruptive selection favours both extremes of a trait, potentially leading to the formation of new species.",
    "image": null
  },
  {
    "id": 502,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which characteristic is unique to humans when compared with apes?",
    "answerOptions": [
      { "answerText": "Opposable thumbs", "isCorrect": false },
      { "answerText": "Colour vision", "isCorrect": false },
      { "answerText": "Use of tools", "isCorrect": false },
      { "answerText": "Fully bipedal locomotion", "isCorrect": true },
    ],
    "explanation": "While apes can walk bipedally for short distances, humans are fully adapted to bipedal locomotion.",
    "image": null
  },
  {
    "id": 503,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "In a phylogenetic tree, what does a node represent?",
    "answerOptions": [
      { "answerText": "A common ancestor", "isCorrect": true },
      { "answerText": "A mutation event", "isCorrect": false },
      { "answerText": "An extinct species", "isCorrect": false },
      { "answerText": "A fossil site", "isCorrect": false },
    ],
    "explanation": "A node represents the most recent common ancestor shared by the branches that emerge from it.",
    "image": null
  },
  {
    "id": 504,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Allopatric speciation is caused primarily by:",
    "answerOptions": [
      { "answerText": "Behavioural differences", "isCorrect": false },
      { "answerText": "Geographical isolation", "isCorrect": true },
      { "answerText": "Temporal isolation", "isCorrect": false },
      { "answerText": "Artificial breeding", "isCorrect": false },
    ],
    "explanation": "In allopatric speciation, physical barriers such as mountains or rivers separate populations, preventing gene flow.",
    "image": null
  },
  {
    "id": 505,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which theory suggests that species remain unchanged for long periods before rapid evolutionary change occurs?",
    "answerOptions": [
      { "answerText": "Gradualism", "isCorrect": false },
      { "answerText": "Catastrophism", "isCorrect": false },
      { "answerText": "Punctuated equilibrium", "isCorrect": true },
      { "answerText": "Directional selection", "isCorrect": false },
    ],
    "explanation": "Punctuated equilibrium proposes rapid speciation events separated by long periods of stability.",
    "image": null
  },
  {
    "id": 506,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which type of evidence compares the DNA sequences of humans and chimpanzees to show common ancestry?",
    "answerOptions": [
      { "answerText": "Fossil evidence", "isCorrect": false },
      { "answerText": "Anatomical evidence", "isCorrect": false },
      { "answerText": "Molecular evidence", "isCorrect": true },
      { "answerText": "Biogeographical evidence", "isCorrect": false },
    ],
    "explanation": "Molecular evidence uses similarities in DNA sequences to support evolutionary relationships.",
    "image": null
  },
  {
    "id": 507,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which feature in the human skeleton is most directly linked to upright posture?",
    "answerOptions": [
      { "answerText": "Long arms relative to legs", "isCorrect": false },
      { "answerText": "Curved phalanges", "isCorrect": false },
      { "answerText": "Long clavicles", "isCorrect": false },
      { "answerText": "Foramen magnum positioned under the skull", "isCorrect": true },
    ],
    "explanation": "The forward placement of the foramen magnum allows the head to balance on an upright spine.",
    "image": null
  },
  {
    "id": 508,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which dating method measures the decay of carbon-14 in organic material?",
    "answerOptions": [
      { "answerText": "Potassium-argon dating", "isCorrect": false },
      { "answerText": "Relative dating", "isCorrect": false },
      { "answerText": "Thermoluminescence", "isCorrect": false },
      { "answerText": "Radiocarbon dating", "isCorrect": true },
    ],
    "explanation": "Radiocarbon dating is used to determine the age of once-living materials up to about 50 000 years old.",
    "image": null
  },
  {
    "id": 509,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which factor can cause sympatric speciation?",
    "answerOptions": [
      { "answerText": "Continental drift", "isCorrect": false },
      { "answerText": "Mountain formation", "isCorrect": false },
      { "answerText": "Behavioural isolation", "isCorrect": true },
      { "answerText": "Sea-level rise", "isCorrect": false },
    ],
    "explanation": "In sympatric speciation, new species form without geographical barriers, often due to behavioural or temporal isolation.",
    "image": null
  },
  {
    "id": 510,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which genus includes the earliest known bipedal hominins?",
    "answerOptions": [
      { "answerText": "Homo", "isCorrect": false },
      { "answerText": "Pan", "isCorrect": false },
      { "answerText": "Gorilla", "isCorrect": false },
      { "answerText": "Australopithecus", "isCorrect": true },
    ],
    "explanation": "Australopithecus species walked upright and are among the earliest direct human ancestors.",
    "image": null
  },
  {
    "id": 511,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Why is the pelvis of humans shorter and broader than that of apes?",
    "answerOptions": [
      { "answerText": "To support internal organs during upright walking", "isCorrect": true },
      { "answerText": "To allow greater arm rotation", "isCorrect": false },
      { "answerText": "To increase stride length", "isCorrect": false },
      { "answerText": "To aid in tree climbing", "isCorrect": false },
    ],
    "explanation": "A short, broad pelvis stabilises the body’s centre of gravity in bipedal locomotion.",
    "image": null
  },
  {
    "id": 512,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which evolutionary concept explains the rapid diversification of mammals after the extinction of dinosaurs?",
    "answerOptions": [
      { "answerText": "Punctuated equilibrium", "isCorrect": false },
      { "answerText": "Adaptive radiation", "isCorrect": true },
      { "answerText": "Convergent evolution", "isCorrect": false },
      { "answerText": "Gradualism", "isCorrect": false },
    ],
    "explanation": "Adaptive radiation occurs when a group rapidly evolves into a variety of forms adapted to different environments.",
    "image": null
  },
  {
    "id": 513,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which is the most important anatomical change that enabled precise speech in humans?",
    "answerOptions": [
      { "answerText": "Opposable thumbs", "isCorrect": false },
      { "answerText": "Longer femur", "isCorrect": false },
      { "answerText": "Forward-facing eyes", "isCorrect": false },
      { "answerText": "Lowered larynx", "isCorrect": true },
    ],
    "explanation": "The lowering of the larynx in humans increased the range of possible vocal sounds, aiding speech development.",
    "image": null
  },
  {
    "id": 514,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "Which evidence best supports the theory that humans and apes share a common ancestor?",
    "answerOptions": [
      { "answerText": "Different reproductive strategies", "isCorrect": false },
      { "answerText": "Similarities in DNA and protein structure", "isCorrect": true },
      { "answerText": "Differences in social behaviour", "isCorrect": false },
      { "answerText": "Unique skeletal structures", "isCorrect": false },
    ],
    "explanation": "DNA evidence shows that humans and chimpanzees share about 98–99% of their genetic material.",
    "image": null
  },
  {
    "id": 515,
    "topic": "Evolution",
    "difficulty": "Hard",
    "questionText": "What role did continental drift play in human evolution?",
    "answerOptions": [
      { "answerText": "It directly caused genetic mutations", "isCorrect": false },
      { "answerText": "It increased gene flow between populations", "isCorrect": false },
      { "answerText": "It eliminated all natural predators", "isCorrect": false },
      { "answerText": "It altered climate and habitats, driving adaptation", "isCorrect": true },
    ],
    "explanation": "Continental drift changed habitats and climates, influencing evolutionary pressures on populations.",
    "image": null
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

const QuizEngine3 = () => {
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
      toast.success('Generating quiz')
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
      const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
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

  const { theme } = useTheme();
  // Picked the right style based on theme
    const genTheme = theme === "light" ? styles.genLight : styles.genDark;

  return (
    <div className={genTheme}>
      {requested ? (
        <div className={styles.quiz}>
          {loading ? (
            <BeatLoad />
          ) : (
            <div>
              <h2 className={styles.topic}>{current.topic}</h2>

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
                      {currentQuestion < questions.length - 1 ? 
                      <button
                        className={styles.nxtQ}
                        onClick={handleNextQ}
                        disabled={!answered || currentQuestion >= questions.length - 1}
                      > Next Question
                      </button>
                      : 
                      <Link className={styles.finish} to='/Home'><button className={styles.nxtQ}>Finish</button></Link>
                      }
                      
                    </div>
          
                    <div className={styles.explanation}>
                      {answered === true && isCorrect === false && current.explanation && (
                        <p>{current.explanation}</p>
                      )}
                    </div>
          
                    <div className={styles.qNo}>
                      <p>Question {currentQuestion + 1} of {questions.length} Score: {score} / {questions.length} </p>
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
                  <option value="Human Reproduction">Human Reproduction</option>
                  <option value="Vertebrate Reproduction">Vertabrate Reproduction</option>
                  <option value="Response to the Environment(Humans)">Human`s Response to the Environment</option>
                  <option value="Response to the Environment(Plants)">Plants`s Response to the Environment</option>
                  <option value="Endocrine System">Endocrine System</option>
                  <option value="Homeostasis">Homeostasis</option>
                  <option value="Human Impact on the Enviroment">Human Impact:Environment</option>
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

export default QuizEngine3;
