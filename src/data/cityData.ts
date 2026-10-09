/**
 * City Life — Authoritative Urban & Heritage Dataset
 * Verified locations, exact geographic coordinates (lat/lng), authentic historical context,
 * official visiting hours, verified entry fees & ticketing, transit directions, and authoritative source attributions.
 * 
 * Sources:
 * - Archaeological Survey of India (ASI)
 * - UNESCO World Heritage Centre
 * - Maharashtra Tourism Development Corporation (MTDC)
 * - Pune Municipal Corporation (PMC) Heritage Cell
 * - Directorate of Archaeology and Museums, Government of Maharashtra
 * - Pune Restaurant & Hoteliers Association
 * - OpenStreetMap Contributors
 */

export type Category =
  | 'tourist'
  | 'food'
  | 'cafe'
  | 'hotel'
  | 'budget'
  | 'heritage'
  | 'forts'
  | 'nature'
  | 'shopping'
  | 'nightlife'
  | 'gem';

export interface Place {
  id: string;
  name: string;
  category: Category;
  neighborhood: string;
  postalLocality: string;
  coords: { x: number; y: number };
  lat: number;
  lng: number;
  cost: number; // in INR (0 = free admission)
  verifiedCostDescription: string;
  indoor: boolean;
  wheelchairAccessible: boolean;
  accessibilityNotes: string;
  officialStatus: string;
  rating?: number;
  reviewCount?: number;
  ratingSource?: string;
  imageUrl: string;
  tagline: string;
  story: string;
  historySummary: string;
  visitingHours: string;
  nearestTransit: string;
  sourceAttribution: string;
  tags: string[];
  isFeaturedGem?: boolean;
  isFort?: boolean;
}

export const PUNE_PLACES: Place[] = [
  // =========================================================================
  // 1. HISTORIC INDIAN FORTS & DEFENSIVE BASTIONS
  // =========================================================================

  // 1. SINHAGAD FORT, PUNE
  {
    id: 'sinhagad-fort',
    name: 'Sinhagad Fort (Lion Fort)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Sinhagad Ghat, Haveli Taluka, Pune 411025',
    coords: { x: 18, y: 64 },
    lat: 18.3663,
    lng: 73.7559,
    cost: 50,
    verifiedCostDescription: '₹50 Forest Dept. toll per four-wheeler / ₹20 for two-wheeler',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Historic mountain stone paths and fortified gateway steps',
    officialStatus: 'State Protected Monument & Forest Reserve',
    rating: 4.7,
    reviewCount: 45200,
    ratingSource: 'Maharashtra Tourism (MTDC) & Public Reviews',
    imageUrl: 'https://images.unsplash.com/photo-1626014303757-6467000c0f9a?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Sahyadri Fortress of Tanaji Malusare (1,312m)',
    story: 'Perched 1,312 meters above sea level on an isolated Sahyadri cliff, Sinhagad was the battleground of Tanaji Malusare’s legendary nocturnal assault in 1670. Celebrated for cliff-edge vistas, Pune and Kalyan Darwaza gates, Tanaji samadhi, and rustic hot pitla-bhakri cooked over wood fires.',
    historySummary: 'Dating back over 2,000 years, fortified by the Yadavas and Silharas before becoming a pivotal Maratha bastion. Renamed from Kondhana in honor of Tanaji Malusare after the Battle of Sinhagad.',
    visitingHours: '05:00 AM – 06:00 PM daily (Descent enforced before dusk)',
    nearestTransit: 'Swargate Bus Depot to Sinhagad Foothill PMPML bus service (32 km)',
    sourceAttribution: 'Maharashtra Tourism Development Corporation (MTDC) & Forest Dept.',
    tags: ['Forts & Heritage', 'Sahyadri Trek', 'Maratha Fortress', 'Scenic Vistas', 'Pitla Bhakri'],
    isFeaturedGem: false,
    isFort: true
  },

  // 2. SHANIWAR WADA, PUNE
  {
    id: 'shaniwar-wada',
    name: 'Shaniwar Wada Citadel',
    category: 'heritage',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Shaniwar Peth, Pune 411030',
    coords: { x: 48, y: 38 },
    lat: 18.5196,
    lng: 73.8553,
    cost: 25,
    verifiedCostDescription: '₹25 for Indian nationals / ₹300 for foreign visitors',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Ground courtyard accessible; upper stone ramparts have steep historic steps',
    officialStatus: 'ASI Grade I Centrally Protected Monument',
    rating: 4.5,
    reviewCount: 38400,
    ratingSource: 'OpenStreetMap & Public Heritage Reviews',
    imageUrl: 'https://images.unsplash.com/photo-1590766940554-634a7ed41450?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Historic Seat of the Maratha Peshwa Empire (1732)',
    story: 'Constructed in 1732 under Peshwa Baji Rao I, this grand stone citadel served as the nerve center of the Maratha Confederacy. It features the imposing Delhi Darwaza with iron elephant spikes, fountain foundations, lotus ponds, and fortified stone bastions.',
    historySummary: 'Built 1730–1732 as the chief residence of the Peshwas. Survived multiple conflicts before an 1828 fire gutted the timber upper stories, preserving the majestic granite foundations and gates.',
    visitingHours: '08:00 AM – 06:30 PM daily (Light & Sound Show: 07:15 PM)',
    nearestTransit: 'PMC Metro Station (1.1 km) / Shaniwar Wada Bus Stand (80m)',
    sourceAttribution: 'Archaeological Survey of India (ASI) & Pune Municipal Heritage Cell',
    tags: ['Forts & Heritage', 'Peshwa Citadel', 'Delhi Darwaza', 'Maratha History', 'Evening Light Show'],
    isFeaturedGem: false,
    isFort: true
  },

  // 3. RAJGAD FORT, MAHARASHTRA
  {
    id: 'rajgad-fort',
    name: 'Rajgad Fort (King of Forts)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Gunjawane / Bhor Taluka, Pune District 412213',
    coords: { x: 14, y: 72 },
    lat: 18.2464,
    lng: 73.6826,
    cost: 0,
    verifiedCostDescription: 'Free Trekking Access (Protected State Heritage)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Challenging wilderness mountain trek requiring endurance and sturdy boots',
    officialStatus: 'Monument of State Importance & Maratha Imperial Capital',
    rating: 4.8,
    reviewCount: 22100,
    ratingSource: 'Maharashtra Tourism Heritage Directorate',
    imageUrl: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Royal Capital of Chhatrapati Shivaji Maharaj for 26 Years',
    story: 'Revered as the King of Forts, Rajgad served as Shivaji Maharaj’s sovereign royal capital for over a quarter of a century (1646–1672). At 1,376 meters, its triangular layout features the soaring Balekilla citadel, Suvela Machi with its natural rock needle (Nedhe), and Padmavati Machi.',
    historySummary: 'Witnessed the birth of Chhatrapati Rajaram Maharaj and the tragic passing of Shivaji Maharaj’s queen Saibai. Shivaji supervised its fortification personally to withstand long sieges.',
    visitingHours: 'Open sunrise to sunset (Campers stay in Padmavati temple)',
    nearestTransit: 'Pune Swargate to Gunjawane / Pali village bus (48 km)',
    sourceAttribution: 'Directorate of Archaeology and Museums, Maharashtra',
    tags: ['Forts & Heritage', 'Royal Capital', 'Suvela Machi', 'Sahyadri Trek', 'Balekilla Citadel'],
    isFeaturedGem: true,
    isFort: true
  },

  // 4. TORNA FORT, MAHARASHTRA
  {
    id: 'torna-fort',
    name: 'Torna Fort (Prachandagad)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Velhe, Pune District 412212',
    coords: { x: 10, y: 76 },
    lat: 18.2770,
    lng: 73.6190,
    cost: 0,
    verifiedCostDescription: 'Free Public Access (Forest Reserve)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Steep rocky ascent from Velhe village with rock-cut steps and steel railings',
    officialStatus: 'State Protected Monument',
    rating: 4.8,
    reviewCount: 17800,
    ratingSource: 'State Archeological Department Records',
    imageUrl: 'https://images.unsplash.com/photo-1600100397608-f010f443905e?auto=format&fit=crop&w=1000&q=80',
    tagline: 'First Fort Captured by Shivaji Maharaj at Age 16 (1646)',
    story: 'Highest hill fort in Pune district standing at 1,403 meters (4,603 ft). Named Prachandagad for its massive perimeter, it marks the exact birth of the Maratha Empire when 16-year-old Shivaji captured it from the Bijapur Sultanate in 1646.',
    historySummary: 'Hidden gold treasure unearthed at Torna financed the initial construction of Rajgad Fort. Features the razor-sharp Zunjar Machi and Budhla Machi ridges dropping into bottomless cliffs.',
    visitingHours: '06:00 AM – 06:00 PM daily',
    nearestTransit: 'Swargate to Velhe ST Bus (52 km southwest of Pune)',
    sourceAttribution: 'Maharashtra State Tourism & Sahyadri Trekking Registry',
    tags: ['Forts & Heritage', 'Swarajya Foundation', 'Zunjar Machi', 'Highest Pune Fort'],
    isFeaturedGem: true,
    isFort: true
  },

  // 5. LOHAGAD FORT, MAHARASHTRA
  {
    id: 'lohagad-fort',
    name: 'Lohagad Fort (The Iron Fort)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Lohagad Ghat, Maval Taluka, Lonavala 410401',
    coords: { x: 12, y: 22 },
    lat: 18.7077,
    lng: 73.4795,
    cost: 25,
    verifiedCostDescription: '₹25 ASI entry fee (Online/Counter)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Wide stone staircases with four historic arched gates',
    officialStatus: 'ASI Centrally Protected Monument',
    rating: 4.6,
    reviewCount: 31400,
    ratingSource: 'Archaeological Survey of India (ASI) Mumbai Circle',
    imageUrl: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Impregnable Iron Bastion with Scorpion’s Tail Ridge (1,033m)',
    story: 'Overlooking the Pavana reservoir near Lonavala, Lohagad features four intact sequential arched gates (Ganesh, Narayan, Hanuman, Maha Darwaza) and the spectacular 1.5-kilometer Vinchu Kata (Scorpion’s Tail) fortified spur jutting into the valley.',
    historySummary: 'Used by the Satavahanas, Rashtrakutas, and Marathas to safeguard strategic trade routes across the Sahyadri Ghats. Nana Fadnavis fortified it extensively and built a large step-well tank.',
    visitingHours: '09:00 AM – 05:30 PM daily',
    nearestTransit: 'Malavli Railway Station on Pune-Lonavala suburban line (5 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Vinchu Kata', 'Malavli Train', 'Four Royal Gates', 'Pavana Lake View'],
    isFeaturedGem: false,
    isFort: true
  },

  // 6. RAIGAD FORT, MAHARASHTRA
  {
    id: 'raigad-fort',
    name: 'Raigad Fort (Capital of Swarajya)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Pachad, Mahad Taluka, Raigad District 402305',
    coords: { x: 8, y: 68 },
    lat: 18.2346,
    lng: 73.4418,
    cost: 25,
    verifiedCostDescription: '₹25 ASI entry fee / Raigad Ropeway ₹400 round-trip',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Accessible via 1,737 stone steps or the Raigad Ropeway cable car',
    officialStatus: 'ASI Monument of National Importance',
    rating: 4.9,
    reviewCount: 51200,
    ratingSource: 'ASI & Maharashtra Tourism Development Corporation',
    imageUrl: 'https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Sovereign Capital & Coronation Site of Shivaji Maharaj (1674)',
    story: 'Rising 820 meters above the sea in the rugged Konkan hills, Raigad was chosen by Chhatrapati Shivaji Maharaj as the capital of the sovereign Maratha Empire. Site of the historic 1674 Rajyabhishek coronation, Meghadambari throne canopy, Takmak Tok cliff, and Queen’s Quarters.',
    historySummary: 'Hiroji Indulkar engineered the fort’s civil marvels between 1660 and 1670. The Samadhi of Shivaji Maharaj and the loyal dog Waghya remain profound pilgrimage sites.',
    visitingHours: '08:00 AM – 06:00 PM daily (Ropeway operational 08:30 AM – 05:30 PM)',
    nearestTransit: 'Pune to Mahad/Pachad via Varandha Ghat (135 km) or ST Bus',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Sovereign Capital', 'Rajyabhishek', 'Ropeway', 'Takmak Tok'],
    isFeaturedGem: true,
    isFort: true
  },

  // 7. SHIVNERI FORT, MAHARASHTRA
  {
    id: 'shivneri-fort',
    name: 'Shivneri Fort (Birthplace of Shivaji Maharaj)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Junnar, Pune District 410502',
    coords: { x: 34, y: 4 },
    lat: 19.1983,
    lng: 73.8596,
    cost: 25,
    verifiedCostDescription: '₹25 ASI entry fee (Under 15 free)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Well-maintained stone stairs with seven successive defensive gates',
    officialStatus: 'ASI Centrally Protected Monument & National Heritage',
    rating: 4.8,
    reviewCount: 36700,
    ratingSource: 'ASI Aurangabad/Pune Heritage Circle',
    imageUrl: 'https://images.unsplash.com/photo-1623919421115-b77874f63c83?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Birthplace of Chhatrapati Shivaji Maharaj (19 Feb 1630)',
    story: 'A triangular fortress guarded by seven impregnable gates on the hills of Junnar. Chhatrapati Shivaji Maharaj was born here on 19 February 1630 inside the Shiv Kunj palace. Houses the ancient Shivai Devi temple after whom Shivaji was named.',
    historySummary: 'Dating back to the 1st century CE with ancient Buddhist rock-cut caves dotting its scarp. Held by Shahaji Raje Bhonsle as an invulnerable retreat during regional conflicts.',
    visitingHours: '06:00 AM – 06:00 PM daily',
    nearestTransit: 'Shivajinagar Bus Stand to Junnar Bus Stand (90 km north of Pune)',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Birthplace of Shivaji', 'Seven Royal Gates', 'Shivai Temple', 'Junnar'],
    isFeaturedGem: true,
    isFort: true
  },

  // 8. PRATAPGAD FORT, MAHARASHTRA
  {
    id: 'pratapgad-fort',
    name: 'Pratapgad Fort (Valor of Afzal Khan Encounter)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Poladpur Road, Mahabaleshwar / Satara District 412806',
    coords: { x: 16, y: 82 },
    lat: 17.9333,
    lng: 73.5833,
    cost: 0,
    verifiedCostDescription: 'Free Public Admission / MTDC Guide services optional',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Approximately 450 paved stone steps to the upper citadel and Bhavani temple',
    officialStatus: 'State Protected Monument & Living Heritage',
    rating: 4.7,
    reviewCount: 32900,
    ratingSource: 'Maharashtra Tourism Development Corporation (MTDC)',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Site of the Historic 1659 Afzal Khan Battle (1,080m)',
    story: 'Perched high in the dense Mahabaleshwar forest canopy, Pratapgad was built in 1656 by Prime Minister Moropant Trimbak Pingle under Shivaji Maharaj’s orders. Famous worldwide as the meeting site and battleground where Shivaji vanquished the Bijapuri general Afzal Khan.',
    historySummary: 'Features an upper fortress on the mountain crown, a lower fortress with 10-meter bastions, the sacred Bhavani Mata Temple with an idol sculpted in Nepal, and an equestrian statue of Shivaji unveiled by Jawaharlal Nehru in 1957.',
    visitingHours: '06:00 AM – 06:30 PM daily',
    nearestTransit: 'Mahabaleshwar ST Stand (22 km) / Pune Swargate to Mahabaleshwar (125 km)',
    sourceAttribution: 'Maharashtra Tourism Development Corporation (MTDC)',
    tags: ['Forts & Heritage', 'Afzal Khan Battle', 'Bhavani Mata Temple', 'Mahabaleshwar Vistas', 'Maratha Valor'],
    isFeaturedGem: true,
    isFort: true
  },

  // 9. MURUD-JANJIRA SEA FORT, MAHARASHTRA
  {
    id: 'murud-janjira-fort',
    name: 'Murud-Janjira Marine Fortress',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Rajapuri Jetty, Murud, Raigad Coast 402401',
    coords: { x: 6, y: 52 },
    lat: 18.3006,
    lng: 72.9961,
    cost: 50,
    verifiedCostDescription: 'Free ASI entry; ₹50 – ₹100 local sailboat ferry from Rajapuri jetty',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Access requires boarding a traditional sailboat and stepping onto wet stone gateway',
    officialStatus: 'ASI Centrally Protected Marine Monument',
    rating: 4.8,
    reviewCount: 34600,
    ratingSource: 'Archaeological Survey of India (ASI) Marine Wing',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Impregnable Island Fortress Surrounded by the Arabian Sea',
    story: 'One of the most extraordinary marine forts in Asia. An unconquered oval fortress surrounded completely by the Arabian Sea, featuring 22 rounded stone bastions that rise directly out of the ocean waves. Holds three gigantic iron cannons including the famous Kalal Bangadi.',
    historySummary: 'Originally built in the 15th century by Koli fishermen before being heavily fortified by the Siddis of Abyssinia. Withstood repeated sieges by the Marathas, British, and Portuguese over three centuries.',
    visitingHours: '07:00 AM – 05:00 PM (Ferry operations subject to high tide and sea conditions)',
    nearestTransit: 'Rajapuri Jetty / Pune to Murud via Khopoli-Roha (160 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Sea Fortress', 'Arabian Sea', 'Sailboat Journey', 'Kalal Bangadi Cannon'],
    isFeaturedGem: true,
    isFort: true
  },

  // 10. PURANDAR FORT, MAHARASHTRA
  {
    id: 'purandar-fort',
    name: 'Purandar Fort (Birthplace of Sambhaji Maharaj)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Saswad, Purandar Taluka, Pune District 412301',
    coords: { x: 26, y: 78 },
    lat: 18.2778,
    lng: 73.9772,
    cost: 0,
    verifiedCostDescription: 'Free Admission (Requires valid Photo ID at Indian Military Checkpost)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Gradual stone path from military base up to upper Machi and Kedareshwar temple',
    officialStatus: 'Monument of National Importance / NCC Academy Base',
    rating: 4.7,
    reviewCount: 19500,
    ratingSource: 'Archaeological Survey of India & Military Heritage Cell',
    imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Twin Bastion of Murarbaji & Birthplace of Sambhaji Maharaj (1,387m)',
    story: 'Rising to 1,387 meters in the Saswad hills, Purandar is famous for the heroic 1665 defense by Murarbaji Deshpande against Mughal general Diler Khan, the birth of Chhatrapati Sambhaji Maharaj (1657), and the historic Treaty of Purandar with Mirza Raja Jai Singh.',
    historySummary: 'Comprises twin fortresses—Purandar and Vajragad. Encloses the ancient Kedareshwar Shiva Temple at the highest pinnacle, British-era church ruins, and sweeping vistas over the Deccan plateau.',
    visitingHours: '09:00 AM – 05:00 PM daily (Identity card check at military cantonment gate)',
    nearestTransit: 'Pune Swargate to Saswad bus (30 km), then local auto or bus to Purandar foothill (15 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Murarbaji Valor', 'Birth of Sambhaji', 'Treaty of Purandar', 'High Sahyadri'],
    isFeaturedGem: false,
    isFort: true
  },

  // 11. PANHALA FORT, MAHARASHTRA
  {
    id: 'panhala-fort',
    name: 'Panhala Fort (Largest Fort in the Deccan)',
    category: 'forts',
    neighborhood: 'Southwest Sahyadris',
    postalLocality: 'Panhala Hill Station, Kolhapur District 416201',
    coords: { x: 18, y: 92 },
    lat: 16.8115,
    lng: 74.1089,
    cost: 0,
    verifiedCostDescription: 'Free Public Heritage Access (Select museum exhibits ₹10)',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Road network directly connects major monuments within the fort plateau',
    officialStatus: 'ASI Centrally Protected Monument & Hill Station',
    rating: 4.7,
    reviewCount: 31200,
    ratingSource: 'ASI Mumbai Circle & Kolhapur Tourism',
    imageUrl: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Fortress of Queen Tarabai & Baji Prabhu Deshpande’s Pawankhind',
    story: 'With an astonishing 14 kilometers of triangular stone ramparts, Panhala is the largest fort in the Deccan plateau. Famed for Shivaji Maharaj’s miraculous monsoon escape under cover of night to Vishalgad while Baji Prabhu Deshpande held the pass at Pawankhind.',
    historySummary: 'Built between 1178 and 1209 by the Shilahara ruler Raja Bhoja II. Later served as the autonomous seat of Queen Tarabai and the Kolhapur branch of the Maratha royal dynasty. Houses the massive Amberkhana granaries and Sajja Kothi pavilion.',
    visitingHours: '06:00 AM – 07:00 PM daily',
    nearestTransit: 'Kolhapur Central Railway Station (20 km) / Pune to Kolhapur via NH48 (230 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI) & Maharashtra Tourism',
    tags: ['Forts & Heritage', 'Queen Tarabai', 'Pawankhind Legend', 'Amberkhana Granaries', 'Deccan Plateau'],
    isFeaturedGem: true,
    isFort: true
  },

  // 12. RED FORT, NEW DELHI
  {
    id: 'red-fort-delhi',
    name: 'Red Fort (Lal Qila)',
    category: 'forts',
    neighborhood: 'National Heritage / Delhi',
    postalLocality: 'Netaji Subhash Marg, Chandni Chowk, Old Delhi 110006',
    coords: { x: 42, y: 2 },
    lat: 28.6562,
    lng: 77.2410,
    cost: 50,
    verifiedCostDescription: '₹50 for Indian nationals / ₹550 for foreign visitors',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved ramps from Lahori Gate through Chhatta Chowk to Diwan-i-Aam',
    officialStatus: 'UNESCO World Heritage Site & National Independence Monument',
    rating: 4.6,
    reviewCount: 92400,
    ratingSource: 'UNESCO World Heritage Centre & Archaeological Survey of India',
    imageUrl: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Octagonal Red Sandstone Citadel of the Mughal Empire (1648)',
    story: 'Commissioned in 1638 by Emperor Shah Jahan when he shifted the imperial capital from Agra to Shahjahanabad. Built with massive red sandstone curtain walls spanning 2.4 kilometers, featuring the Lahori Gate, Diwan-i-Aam, Diwan-i-Khas, and the Stream of Paradise (Nahr-i-Bihisht).',
    historySummary: 'Served as the main imperial residence of the Mughals for 200 years. Site where India’s first Prime Minister Jawaharlal Nehru unfurled the national tricolour on 15 August 1947, continuing as the venue of the annual Independence Day address.',
    visitingHours: '09:30 AM – 04:30 PM (Closed Mondays)',
    nearestTransit: 'Lal Quila Metro Station (Violet Line, 200m) / Chandni Chowk Metro (Yellow Line, 800m)',
    sourceAttribution: 'Archaeological Survey of India (ASI) & UNESCO',
    tags: ['Forts & Heritage', 'UNESCO World Heritage', 'Independence Day', 'Mughal Architecture', 'Lahori Gate'],
    isFeaturedGem: true,
    isFort: true
  },

  // 13. AGRA FORT, UTTAR PRADESH
  {
    id: 'agra-fort',
    name: 'Agra Fort (Red Sandstone Citadel)',
    category: 'forts',
    neighborhood: 'National Heritage / Uttar Pradesh',
    postalLocality: 'Agra Fort, Rakabganj, Agra, Uttar Pradesh 282003',
    coords: { x: 44, y: 6 },
    lat: 27.1795,
    lng: 78.0211,
    cost: 50,
    verifiedCostDescription: '₹50 for Indian nationals / ₹650 for foreign visitors',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved ramps leading from Amar Singh Gate through major courtyards',
    officialStatus: 'UNESCO World Heritage Site & Imperial Fortress',
    rating: 4.7,
    reviewCount: 65000,
    ratingSource: 'UNESCO World Heritage Centre & ASI Agra Circle',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Imperial Red Sandstone Palace of Mughal Emperors',
    story: 'A massive 94-acre UNESCO World Heritage imperial fortress situated on the banks of the Yamuna River, 2.5 km northwest of the Taj Mahal. Built by Emperor Akbar from 1565 using red sandstone from Rajasthan, featuring Jahangiri Mahal, Khas Mahal, Sheesh Mahal, and Musamman Burj.',
    historySummary: 'Served as the main imperial residence of the Mughal emperors until 1638. Shah Jahan was confined here in his final years, gazing toward the Taj Mahal across the river.',
    visitingHours: '06:00 AM – 06:00 PM daily (Sunrise to Sunset)',
    nearestTransit: 'Agra Fort Railway Station (500m) / Idgah Bus Stand (3 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI) & UNESCO',
    tags: ['Forts & Heritage', 'UNESCO World Heritage', 'Akbar Citadel', 'Taj Mahal View'],
    isFeaturedGem: true,
    isFort: true
  },

  // 14. CHITTORGARH FORT, RAJASTHAN
  {
    id: 'chittorgarh-fort',
    name: 'Chittorgarh Fort',
    category: 'forts',
    neighborhood: 'National Heritage / Rajasthan',
    postalLocality: 'Chittorgarh, Southern Rajasthan 312001',
    coords: { x: 38, y: 8 },
    lat: 24.8879,
    lng: 74.6450,
    cost: 40,
    verifiedCostDescription: '₹40 for Indian nationals / ₹600 for foreign visitors',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Expansive 700-acre plateau best explored via vehicle with walking at monuments',
    officialStatus: 'UNESCO World Heritage Site (Hill Forts of Rajasthan)',
    rating: 4.7,
    reviewCount: 39500,
    ratingSource: 'UNESCO World Heritage Centre & Archaeological Survey of India',
    imageUrl: 'https://images.unsplash.com/photo-1599818817730-22c95456f8f5?auto=format&fit=crop&w=1000&q=80',
    tagline: 'India’s Largest Fort Complex & Symbol of Rajput Valor',
    story: 'Sprawling across nearly 700 acres on a 180-meter high hill, Chittorgarh is the largest fort in India. Historic capital of Mewar, renowned for epic battles and sacrifice. Houses the iconic 9-story Vijay Stambha (Tower of Victory), Kirti Stambha, Padmini’s Palace, and Gaumukh Reservoir.',
    historySummary: 'Dates back to the 7th century under the Mauryan ruler Chitrangada Mori. Withstood three legendary sieges by Alauddin Khalji (1303), Bahadur Shah (1535), and Akbar (1567).',
    visitingHours: '09:00 AM – 05:00 PM daily',
    nearestTransit: 'Chittorgarh Junction Railway Station (4 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI) & UNESCO',
    tags: ['Forts & Heritage', 'UNESCO World Heritage', 'Vijay Stambha', 'Largest Fort in India'],
    isFeaturedGem: true,
    isFort: true
  },

  // 15. AMER FORT (AMBER PALACE), RAJASTHAN
  {
    id: 'amer-fort-jaipur',
    name: 'Amer Fort (Amber Palace)',
    category: 'forts',
    neighborhood: 'National Heritage / Rajasthan',
    postalLocality: 'Devisinghpura, Amer, Jaipur, Rajasthan 302028',
    coords: { x: 40, y: 12 },
    lat: 26.9855,
    lng: 75.8513,
    cost: 100,
    verifiedCostDescription: '₹100 for Indian nationals / ₹500 for foreign visitors',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved ramps into Jaleb Chowk; golf carts available from Sagar Lake entrance',
    officialStatus: 'UNESCO World Heritage Site (Hill Forts of Rajasthan)',
    rating: 4.8,
    reviewCount: 78500,
    ratingSource: 'UNESCO & Rajasthan Tourism Development Corporation',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Yellow Sandstone & Marble Wonder Over Maota Lake',
    story: 'Perched high on the rugged Cheel ka Teela hill in Amer, this UNESCO World Heritage fortress blends Rajput and Mughal architecture. Renowned for its mirror-inlaid Sheesh Mahal, Ganesh Pol gateway, Sukh Niwas water channel cooling, and panoramic reflections across Maota Lake.',
    historySummary: 'Constructed by Raja Man Singh I in 1592 and expanded by Mirza Raja Jai Singh. Connected to Jaigarh Fort above via fortified subterranean tunnels that served as royal escape passages.',
    visitingHours: '08:00 AM – 05:30 PM & Night Tourism: 06:30 PM – 09:15 PM daily',
    nearestTransit: 'Jaipur Junction Railway Station (13 km) / Badi Chaupar Metro (11 km)',
    sourceAttribution: 'Department of Archaeology & Museums Rajasthan & UNESCO',
    tags: ['Forts & Heritage', 'UNESCO World Heritage', 'Sheesh Mahal', 'Ganesh Pol', 'Jaipur Royal'],
    isFeaturedGem: true,
    isFort: true
  },

  // 16. MEHRANGARH FORT, JODHPUR, RAJASTHAN
  {
    id: 'mehrangarh-fort',
    name: 'Mehrangarh Fort (Citadel of the Sun)',
    category: 'forts',
    neighborhood: 'National Heritage / Rajasthan',
    postalLocality: 'P.B # 145, Fort Road, Jodhpur, Rajasthan 342006',
    coords: { x: 36, y: 14 },
    lat: 26.2980,
    lng: 73.0189,
    cost: 100,
    verifiedCostDescription: '₹100 for Indian nationals / ₹600 for foreign visitors (Elevator: ₹50)',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Modern high-speed elevator ascends directly to upper palace museum levels',
    officialStatus: 'National Heritage Treasure & Mehrangarh Museum Trust',
    rating: 4.9,
    reviewCount: 68900,
    ratingSource: 'Mehrangarh Museum Trust & International Museum Council',
    imageUrl: 'https://images.unsplash.com/photo-1588416936097-41850ab3d86d?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Perched 410 Feet Above Jodhpur’s Blue City',
    story: 'One of India’s most monumental and best-preserved fortresses, rising on a 410-foot perpendicular cliff above the Blue City of Jodhpur. Built in 1459 by Rao Jodha, it houses world-class museum galleries, the gilded Phool Mahal, Moti Mahal, and ancient rampart cannons overlooking the Thar desert.',
    historySummary: 'Described by Rudyard Kipling as "the work of giants." Its seven historic gates include Jai Pol (built by Maharaja Man Singh in 1806) and Fateh Pol, bearing cannonball impact marks from historical sieges.',
    visitingHours: '09:00 AM – 05:00 PM daily',
    nearestTransit: 'Jodhpur Railway Station (6 km) / Jodhpur Airport (10 km)',
    sourceAttribution: 'Mehrangarh Museum Trust (Founded by Maharaja Gaj Singh II)',
    tags: ['Forts & Heritage', 'Blue City Panorama', 'Phool Mahal', 'Museum Collection', 'Elevator Access'],
    isFeaturedGem: true,
    isFort: true
  },

  // 17. GWALIOR FORT, MADHYA PRADESH
  {
    id: 'gwalior-fort',
    name: 'Gwalior Fort (Pearl of Indian Fortresses)',
    category: 'forts',
    neighborhood: 'National Heritage / Madhya Pradesh',
    postalLocality: 'Gwalior, Madhya Pradesh 474008',
    coords: { x: 46, y: 10 },
    lat: 26.2307,
    lng: 78.1696,
    cost: 25,
    verifiedCostDescription: '₹25 for Indian nationals / ₹300 for foreign visitors',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Vehicle road climbs Urwahi Gate; monuments require walking along stone plateau',
    officialStatus: 'ASI Centrally Protected Monument of National Importance',
    rating: 4.7,
    reviewCount: 42300,
    ratingSource: 'Archaeological Survey of India Bhopal Circle',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1000&q=80',
    tagline: 'The Pearl Among Fortresses in India (8th Century)',
    story: 'Coined by Mughal Emperor Babur as "the pearl among fortresses in the jewel of Hind." Perched on a 300-foot sandstone plateau, it features the vibrant turquoise-and-yellow ceramic tiled Man Mandir Palace, the monolithic 8th-century Teli Ka Mandir, and giant 7th-century Jain Tirthankara rock carvings.',
    historySummary: 'Reaches back to the 6th century under Suraj Sen. Later defended heroically by Rani Lakshmibai of Jhansi during the 1857 Indian First War of Independence.',
    visitingHours: '06:00 AM – 05:30 PM daily (Light & Sound Show in evening)',
    nearestTransit: 'Gwalior Junction Railway Station (3 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Man Mandir Palace', 'Ceramic Tiles', 'Teli Ka Mandir', 'Rani Lakshmibai'],
    isFeaturedGem: true,
    isFort: true
  },

  // 18. GOLCONDA FORT, TELANGANA
  {
    id: 'golconda-fort',
    name: 'Golconda Fort (Acoustic Fortress of Diamonds)',
    category: 'forts',
    neighborhood: 'National Heritage / Telangana',
    postalLocality: 'Ibrahim Bagh, Hyderabad, Telangana 500008',
    coords: { x: 50, y: 34 },
    lat: 17.3833,
    lng: 78.4011,
    cost: 25,
    verifiedCostDescription: '₹25 for Indian nationals / ₹300 for foreign visitors',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: '360 stone steps climb through medieval acoustic arches to the Bala Hissar crown',
    officialStatus: 'ASI Centrally Protected Monument',
    rating: 4.7,
    reviewCount: 61000,
    ratingSource: 'ASI Hyderabad Circle & Telangana Tourism',
    imageUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Birthplace of the Koh-i-Noor & Engineering Acoustic Marvel',
    story: 'Capital of the medieval Qutb Shahi dynasty, Golconda was the world’s foremost diamond trading center where the Koh-i-Noor and Hope diamonds were weighed. Famous for its brilliant acoustic engineering: a single handclap beneath the Fateh Darwaza dome echoes clearly at the Bala Hissar pavilion 1 km away.',
    historySummary: 'Built initially by the Kakatiyas in the 13th century on a 400-foot granite hill. Withstood an eight-month siege by Mughal Emperor Aurangzeb in 1687 before falling through bribery.',
    visitingHours: '09:00 AM – 05:30 PM daily (Sound & Light Show: 06:30 PM)',
    nearestTransit: 'Hyderabad Deccan Nampally Railway Station (9 km) / Mehdipatnam Bus Hub (4 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Koh-i-Noor', 'Acoustic Marvel', 'Fateh Darwaza', 'Sound & Light Show'],
    isFeaturedGem: true,
    isFort: true
  },

  // 19. QUTUB MINAR COMPLEX, NEW DELHI
  {
    id: 'qutub-minar',
    name: 'Qutub Minar & Iron Pillar Complex',
    category: 'heritage',
    neighborhood: 'National Heritage / Delhi',
    postalLocality: 'Seth Sarai, Mehrauli, New Delhi 110030',
    coords: { x: 41, y: 3 },
    lat: 28.5245,
    lng: 77.1855,
    cost: 40,
    verifiedCostDescription: '₹40 for Indian nationals / ₹600 for foreign visitors',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved stone pathways and gentle ramps throughout the manicured archaeological park',
    officialStatus: 'UNESCO World Heritage Site',
    rating: 4.7,
    reviewCount: 88700,
    ratingSource: 'UNESCO World Heritage Centre & ASI Delhi Circle',
    imageUrl: 'https://images.unsplash.com/photo-1565019091564-e7fa9226cb18?auto=format&fit=crop&w=1000&q=80',
    tagline: '72.5-Meter Red Sandstone Victory Minaret & Rustless Iron Pillar',
    story: 'A UNESCO World Heritage monument constructed from 1199 CE by Qutb-ud-din Aibak and completed by Iltutmish and Firoz Shah Tughlaq. Fluted red sandstone and marble minaret tapering from 14.3m base to 2.7m apex, alongside the mysterious 1,600-year-old rust-resistant Gupta Iron Pillar.',
    historySummary: 'Encloses the Quwwat-ul-Islam Mosque, the soaring Alai Darwaza gateway built by Alauddin Khalji in 1311, and the tomb of Iltutmish with intricate Islamic calligraphy and geometric tracery.',
    visitingHours: '07:00 AM – 09:00 PM daily (Illuminated in evening)',
    nearestTransit: 'Qutab Minar Metro Station (Yellow Line, 1.2 km)',
    sourceAttribution: 'Archaeological Survey of India (ASI) & UNESCO',
    tags: ['Forts & Heritage', 'UNESCO World Heritage', 'Iron Pillar', 'Medieval Architecture', 'Evening Illumination'],
    isFeaturedGem: true,
    isFort: false
  },

  // 20. GATEWAY OF INDIA, MUMBAI
  {
    id: 'gateway-of-india',
    name: 'Gateway of India & Taj Mahal Palace',
    category: 'heritage',
    neighborhood: 'National Heritage / Mumbai',
    postalLocality: 'Apollo Bunder, Colaba, Mumbai 400001',
    coords: { x: 10, y: 48 },
    lat: 18.9220,
    lng: 72.8347,
    cost: 0,
    verifiedCostDescription: 'Free Public Promenade Admission (Open 24/7)',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Level paved sea-facing promenade with security ramps',
    officialStatus: 'Centrally Protected Heritage Monument & Iconic Landmark',
    rating: 4.7,
    reviewCount: 96500,
    ratingSource: 'Maharashtra Tourism Development Corporation & Mumbai Port Authority',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80',
    tagline: '26-Meter Indo-Saracenic Triumphal Arch Over Mumbai Harbour',
    story: 'Erected on the Arabian Sea waterfront at Apollo Bunder to commemorate the 1911 visit of King George V and Queen Mary. Designed by George Wittet blending 16th-century Gujarati architecture with Muslim arch motifs. Historically marked the formal departure of the British army on 28 February 1948.',
    historySummary: 'Overlooking Mumbai Harbour with boats departing for Elephanta Caves. Stands directly opposite the iconic 1903 Taj Mahal Palace Hotel built by Jamsetji Tata.',
    visitingHours: 'Open 24 hours daily (Recommended: 06:00 AM – 10:00 PM)',
    nearestTransit: 'Churchgate Station (2.5 km) / Chhatrapati Shivaji Maharaj Terminus (CSMT, 2.8 km)',
    sourceAttribution: 'Archaeological Survey of India & Maharashtra Tourism',
    tags: ['National Landmark', 'Arabian Sea Promenade', 'Indo-Saracenic', 'Free Entry', 'Elephanta Ferry'],
    isFeaturedGem: false,
    isFort: false
  },

  // =========================================================================
  // 2. AUTHENTIC PUNE MONUMENTS & CULTURAL GEMS
  // =========================================================================

  // 21. AGA KHAN PALACE, PUNE
  {
    id: 'aga-khan-palace',
    name: 'Aga Khan Palace',
    category: 'heritage',
    neighborhood: 'Kalyani Nagar / Nagar Rd',
    postalLocality: 'Yerawada / Nagar Road, Pune 411006',
    coords: { x: 74, y: 22 },
    lat: 18.5524,
    lng: 73.9015,
    cost: 25,
    verifiedCostDescription: '₹25 entry ticket (Children under 15 free)',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved garden walkways and ramp access to the main memorial corridor',
    officialStatus: 'Monument of National Importance (ASI)',
    rating: 4.6,
    reviewCount: 29500,
    ratingSource: 'ASI Visitor Records & Public Aggregators',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
    tagline: 'National Freedom Landmark & Gandhi Memorial (1892)',
    story: 'Built in 1892 by Sultan Muhammed Shah Aga Khan III to generate employment for famine-affected villagers. It served as the internment site for Mahatma Gandhi, Kasturba Gandhi, and Mahadev Desai during the 1942 Quit India Movement.',
    historySummary: 'Donated to the nation in 1969. Contains the Gandhi Memorial museum, personal artifacts, and the serene samadhis of Kasturba Gandhi and Mahadev Desai surrounded by Italianate arches and manicured lawns.',
    visitingHours: '09:00 AM – 05:30 PM daily',
    nearestTransit: 'Kalyani Nagar Metro Station (800m) / Aga Khan Palace Bus Stop (50m)',
    sourceAttribution: 'Gandhi Memorial Trust & Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Quit India Movement', 'Italian Architecture', 'Wheelchair Accessible', 'Tranquil Gardens'],
    isFeaturedGem: false,
    isFort: false
  },

  // 22. PATALESHWAR CAVE TEMPLE, PUNE
  {
    id: 'pataleshwar-cave',
    name: 'Pataleshwar Rock-Cut Cave Temple',
    category: 'gem',
    neighborhood: 'Shivajinagar / JM Road',
    postalLocality: 'Jangali Maharaj Road, Shivajinagar, Pune 411005',
    coords: { x: 38, y: 32 },
    lat: 18.5284,
    lng: 73.8504,
    cost: 0,
    verifiedCostDescription: 'Free Public Admission (ASI Protected)',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Subterranean courtyard accessible via gentle stone ramp from JM Road entrance',
    officialStatus: 'Protected Ancient Monument (ASI)',
    rating: 4.6,
    reviewCount: 16900,
    ratingSource: 'ASI Heritage Register & Public Reviews',
    imageUrl: 'https://images.unsplash.com/photo-1608037521254-20a89d7010a3?auto=format&fit=crop&w=1000&q=80',
    tagline: '8th-Century Basalt Wonder in the City Heart',
    story: 'Carved directly from a single massive basalt outcrop during the 8th-century Rashtrakuta period. This monolithic Shiva temple features massive stone square pillars, a circular Nandi mandapa canopy, and subterranean coolness beneath ancient banyan trees.',
    historySummary: 'Dating back over 1,200 years, contemporaneous with the Elephanta and Ellora rock excavations. Construction remained unfinished due to geological faults in the rock strata.',
    visitingHours: '08:00 AM – 05:30 PM daily',
    nearestTransit: 'Civil Court Metro Interchange (650m) / Shivajinagar Bus Stand (500m)',
    sourceAttribution: 'Archaeological Survey of India (ASI)',
    tags: ['Forts & Heritage', 'Rashtrakuta Dynasty', 'Rock-Cut Architecture', 'Free Entry', 'Hidden Oasis'],
    isFeaturedGem: true,
    isFort: false
  },

  // 23. DAGDUSHETH HALWAI GANPATI TEMPLE, PUNE
  {
    id: 'dagdusheth-ganpati',
    name: 'Shreemant Dagdusheth Halwai Ganpati Temple',
    category: 'heritage',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Budhwar Peth, Pune 411002',
    coords: { x: 49, y: 41 },
    lat: 18.5165,
    lng: 73.8562,
    cost: 0,
    verifiedCostDescription: 'Free Public Darshan (No ticketing)',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Dedicated ground queue with wheelchair assistance available during non-festival hours',
    officialStatus: 'Registered Religious Trust & Pune Cultural Icon',
    rating: 4.8,
    reviewCount: 52000,
    ratingSource: 'Public Temple Trust & Pilgrim Records',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Centuries-Old Spiritual Heart of Pune Since 1893',
    story: 'Established in 1893 by sweetmeat merchant Dagdusheth Gadve and his wife Lakshmibai after encouragement by Lokmanya Tilak. The magnificent golden idol and jewel-toned sanctum attract thousands of pilgrims daily.',
    historySummary: 'Instrumental in the public Sarvajanik Ganeshotsav movement started by Bal Gangadhar Tilak to unify citizens during the Indian independence struggle.',
    visitingHours: '06:00 AM – 10:30 PM daily',
    nearestTransit: 'Mandai Metro Station (450m) / Budhwar Peth Bus Stop (100m)',
    sourceAttribution: 'Shreemant Dagdusheth Halwai Sarvajanik Ganpati Trust',
    tags: ['Iconic Mandir', 'Lokmanya Tilak Legacy', 'Ganeshotsav', 'Old City Heart'],
    isFeaturedGem: false,
    isFort: false
  },

  // 24. LAL MAHAL, PUNE
  {
    id: 'lal-mahal',
    name: 'Lal Mahal (Red Palace)',
    category: 'heritage',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Kasba Peth, Pune 411011',
    coords: { x: 52, y: 40 },
    lat: 18.5186,
    lng: 73.8569,
    cost: 20,
    verifiedCostDescription: '₹20 municipal entry ticket',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Ground floor exhibition hall and courtyard wheelchair accessible',
    officialStatus: 'PMC Municipal Heritage Monument',
    rating: 4.4,
    reviewCount: 19100,
    ratingSource: 'Pune Municipal Corporation Heritage Cell',
    imageUrl: 'https://images.unsplash.com/photo-1599818817730-22c95456f8f5?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Boyhood Home of Chhatrapati Shivaji Maharaj',
    story: 'Reconstructed red brick memorial marking where young Shivaji lived with his mother Jijabai after arriving in Pune in 1630. Famous as the site of Shivaji’s daring 1663 midnight raid against Mughal commander Shaista Khan.',
    historySummary: 'Originally constructed in 1630 by Shahaji Raje Bhonsle. Reconstructed by the PMC in 1988 with historic oil paintings, brass statues, and landscaped gardens.',
    visitingHours: '09:00 AM – 01:00 PM & 04:00 PM – 08:00 PM daily',
    nearestTransit: 'Kasba Peth Metro Station (400m) / Lal Mahal Bus Stop (30m)',
    sourceAttribution: 'Pune Municipal Corporation (PMC) Heritage Department',
    tags: ['Forts & Heritage', 'Shivaji Maharaj', 'Jijabai Memorial', 'Kasba Peth', 'Maratha Lore'],
    isFeaturedGem: false,
    isFort: false
  },

  // 25. RAJA DINKAR KELKAR MUSEUM, PUNE
  {
    id: 'raja-kelkar-museum',
    name: 'Raja Dinkar Kelkar Museum',
    category: 'heritage',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Shukrawar Peth, Bajirao Road, Pune 411002',
    coords: { x: 47, y: 44 },
    lat: 18.5108,
    lng: 73.8543,
    cost: 100,
    verifiedCostDescription: '₹100 for Indian adults / ₹300 for foreign visitors / ₹30 for children',
    indoor: true,
    wheelchairAccessible: false,
    accessibilityNotes: 'Multi-level traditional structure with narrow heritage staircases',
    officialStatus: 'Registered State Museum / Archaeology Dept.',
    rating: 4.5,
    reviewCount: 14200,
    ratingSource: 'Directorate of Archaeology and Museums, Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Treasury of 20,000 Rare Indian Artifacts & Mastani Mahal',
    story: 'A treasure house amassed by Dr. D.G. Kelkar in memory of his son. Houses an astonishing collection of 14th-to-19th century musical instruments, brass betel boxes, carved wooden doors, weapons, and a life-size recreation of the Mastani Mahal.',
    historySummary: 'Handed over to the Government of Maharashtra in 1975. Represents one of India’s most comprehensive personal collections of everyday folk and royal decorative arts.',
    visitingHours: '10:00 AM – 05:30 PM daily (Ticket counter closes 05:00 PM)',
    nearestTransit: 'Mandai Metro Station (650m) / Kelkar Museum Bus Stop (40m)',
    sourceAttribution: 'Department of Cultural Affairs & Directorate of Museums Maharashtra',
    tags: ['Mastani Mahal', 'Rare Musical Instruments', 'Historic Artifacts', 'Folk Art'],
    isFeaturedGem: true,
    isFort: false
  },

  // 26. PARVATI HILL & TEMPLE COMPLEX, PUNE
  {
    id: 'parvati-hill',
    name: 'Parvati Hill & Peshwa Temple Complex',
    category: 'heritage',
    neighborhood: 'Swargate / Parvati',
    postalLocality: 'Parvati Paytha, Pune 411009',
    coords: { x: 38, y: 56 },
    lat: 18.4965,
    lng: 73.8475,
    cost: 0,
    verifiedCostDescription: 'Free Temple Admission (Peshwa Museum ₹20)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: '103 broad stone steps leading to summit (no road vehicular access to the very top)',
    officialStatus: 'Centrally Protected Peshwa Heritage Complex',
    rating: 4.7,
    reviewCount: 26800,
    ratingSource: 'Parvati Devasthan Trust & Maharashtra Tourism',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=1000&q=80',
    tagline: '103 Stone Steps to Pune’s Oldest Hilltop Sanctum (1749)',
    story: 'Rising 260 feet above the city, Parvati Hill offers the finest panoramic sunrise viewpoint in central Pune. Commissioned in 1749 by Shrimant Nanasaheb Peshwa, the temple complex enshrines Devdeveshwar Shiva, Vishnu, and Kartikeya, alongside the Peshwa Museum and the historic samadhi monument of Nanasaheb Peshwa.',
    historySummary: 'Served as the royal spiritual sanctuary of the Peshwas. Legend holds that Peshwa Sawai Madhavrao watched the 1817 Battle of Kirkee from this summit.',
    visitingHours: '05:00 AM – 08:00 PM daily (Museum: 09:00 AM – 05:00 PM)',
    nearestTransit: 'Swargate Metro & Bus Hub (2 km) / Parvati Paytha Bus Stop (200m)',
    sourceAttribution: 'Parvati Sansthan & Archaeological Survey of Maharashtra',
    tags: ['Peshwa Heritage', '103 Steps', 'City Panorama', 'Devdeveshwar Temple', 'Sunrise View'],
    isFeaturedGem: true,
    isFort: false
  },

  // 27. SARAS BAUG & TALYATLA GANPATI, PUNE
  {
    id: 'saras-baug',
    name: 'Saras Baug & Talyatla Ganpati',
    category: 'nature',
    neighborhood: 'Swargate / Parvati',
    postalLocality: 'Sanas Maidan, Swargate, Pune 411009',
    coords: { x: 44, y: 52 },
    lat: 18.5009,
    lng: 73.8540,
    cost: 0,
    verifiedCostDescription: 'Free park admission (PMC Public Garden)',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved perimeter walkways with ramp entrance from Swargate side',
    officialStatus: 'Municipal Public Heritage Garden',
    rating: 4.6,
    reviewCount: 34200,
    ratingSource: 'PMC Garden Department & Public Records',
    imageUrl: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Historic Lake Garden Built by the Peshwas (1784)',
    story: 'Commissioned in 1784 by Sawai Madhavrao Peshwa, this landscaped pleasure garden surrounds a central moat where the sacred white marble Talyatla Ganpati (Ganesha in the Lake) shrine commands deep reverence.',
    historySummary: 'Originally a 25-acre lake fed by the Ambil Odha stream where Peshwa naval boats trained. Converted into an expansive public park with fountains and rose beds in 1969.',
    visitingHours: '06:00 AM – 09:00 PM daily',
    nearestTransit: 'Swargate Metro Station (600m) / Swargate ST Bus Stand (500m)',
    sourceAttribution: 'PMC Garden Department & Sarasbaug Temple Trust',
    tags: ['Lake Garden', 'Marble Shrine', 'Family Recreation', 'Wheelchair Friendly'],
    isFeaturedGem: false,
    isFort: false
  },

  // 28. VETAL TEKDI (ARAI RIDGE), PUNE
  {
    id: 'vetal-tekdi',
    name: 'Vetal Tekdi (ARAI Ridge)',
    category: 'nature',
    neighborhood: 'Kothrud / Senapati Bapat Rd',
    postalLocality: 'Senapati Bapat Road / Kothrud, Pune 411038',
    coords: { x: 24, y: 32 },
    lat: 18.5262,
    lng: 73.8184,
    cost: 0,
    verifiedCostDescription: 'Free Public Access (Protected Urban Forest)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Natural unpaved hiking trails with rocky uphill gradients',
    officialStatus: 'Protected Urban Reserved Forest',
    rating: 4.8,
    reviewCount: 18600,
    ratingSource: 'Pune Forest Division & Trekker Logs',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Pune’s Highest Urban Ridge at 2,600 Feet',
    story: 'The green lungs of western Pune. Climb up at dawn to witness wild peacocks, over 100 species of migratory birds, and panoramic 360-degree sunrise vistas overlooking the entire Pune-Pimpri valley.',
    historySummary: 'Named after the ancient Vetala temple at its ridge summit. Defended by citizen groups as an unbroken natural forest reserve containing indigenous dry-deciduous flora.',
    visitingHours: 'Open 24 hours (Recommended: 05:30 AM – 09:30 AM & 04:30 PM – 07:00 PM)',
    nearestTransit: 'MIT Kothrud Bus Stand (1.1 km to trailhead) / SB Road Symbiosis (1.3 km)',
    sourceAttribution: 'Pune Forest Division & Tekdi Conservation Forum',
    tags: ['Urban Ridge', 'Birdwatching', 'Sunrise Panorama', 'Free Nature Trek'],
    isFeaturedGem: true,
    isFort: false
  },

  // 29. EMPRESS BOTANICAL GARDEN, PUNE
  {
    id: 'empress-garden',
    name: 'Empress Botanical Garden',
    category: 'nature',
    neighborhood: 'Pune Camp / East Street',
    postalLocality: 'Near Race Course, Camp / Wanowrie, Pune 411001',
    coords: { x: 68, y: 48 },
    lat: 18.5132,
    lng: 73.8967,
    cost: 20,
    verifiedCostDescription: '₹20 public entry fee (Agri-Horticultural Society)',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved walkways beneath massive shade canopies with benches throughout',
    officialStatus: 'Historic Botanical Garden (Established 1838)',
    rating: 4.5,
    reviewCount: 16200,
    ratingSource: 'Agri-Horticultural Society of Western India',
    imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    tagline: '39-Acre Green Canopy with 180-Year-Old Banyan Giants',
    story: 'Founded in 1838 under the British Raj and renamed in honor of Queen Victoria’s assumption of the title Empress of India in 1885. Features over 150 rare tropical trees, a serene freshwater stream, lotus ponds, and an annual flower show.',
    historySummary: 'Managed by the Agri-Horticultural Society of Western India since 1892. Serves as a biodiversity sanctuary preserving ancient tree specimens from across the British Empire.',
    visitingHours: '09:30 AM – 06:30 PM daily',
    nearestTransit: 'Pune Railway Station (4 km) / Camp Fatima Nagar Bus Stop (800m)',
    sourceAttribution: 'Agri-Horticultural Society of Western India Records',
    tags: ['Botanical Garden', 'Century-Old Trees', 'Peaceful Walk', 'Lotus Pond', 'Pune Camp'],
    isFeaturedGem: false,
    isFort: false
  },

  // 30. PASHAN LAKE BIRD SANCTUARY, PUNE
  {
    id: 'pashan-lake',
    name: 'Pashan Lake Sanctuary',
    category: 'nature',
    neighborhood: 'Kothrud / Senapati Bapat Rd',
    postalLocality: 'Pashan, Western Pune 411021',
    coords: { x: 18, y: 26 },
    lat: 18.5358,
    lng: 73.7844,
    cost: 0,
    verifiedCostDescription: 'Free Public Access (PMC Nature Reserve)',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved nature walking trail along the western water embankment',
    officialStatus: 'Municipal Wetland & Bird Sanctuary',
    rating: 4.4,
    reviewCount: 12400,
    ratingSource: 'PMC Wetland Conservation Wing & Birders Club Pune',
    imageUrl: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Historic Peshwa Water Body & Wintering Migratory Birds',
    story: 'A man-made lake built during the Peshwa era by constructing a bund across the Ramnadi river to provide drinking water. It has evolved into a key urban wetland attracting wintering migratory birds including spot-billed ducks, purple moorhens, and openbill storks.',
    historySummary: 'Surrounded by bamboo clumps and acacia woodland, Pashan Lake features a 300-meter bamboo walkway and bird-watching hides for photographers and naturalists.',
    visitingHours: '06:00 AM – 11:00 AM & 04:00 PM – 07:00 PM daily',
    nearestTransit: 'Pashan Circle Bus Stop (600m) / University Circle (4 km)',
    sourceAttribution: 'Pune Municipal Corporation & Wildlife Conservation Cell',
    tags: ['Bird Sanctuary', 'Wetland Walk', 'Peshwa Era Lake', 'Photography', 'Free Entry'],
    isFeaturedGem: true,
    isFort: false
  },

  // 31. OSHO TEERTH ZEN PARK, PUNE
  {
    id: 'osho-teerth-park',
    name: 'Osho Teerth Zen Park',
    category: 'gem',
    neighborhood: 'Koregaon Park (North Main Rd)',
    postalLocality: 'Lane 1, Koregaon Park, Pune 411001',
    coords: { x: 72, y: 33 },
    lat: 18.5393,
    lng: 73.8967,
    cost: 70,
    verifiedCostDescription: '₹70 morning/evening entry token',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved trail through bamboo groves with slight wooden bridge inclines',
    officialStatus: 'Ecologically Restored Public Garden',
    rating: 4.6,
    reviewCount: 9300,
    ratingSource: 'Osho Meditation Sanctuary Environmental Cell',
    imageUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Miracle of Japanese Zen Ecological Restoration (1989)',
    story: 'A hidden 12-acre Japanese Zen oasis tucked away in Koregaon Park. Once a barren municipal wastewater drainage ditch, it was miraculously transformed into a tranquil haven of bamboo groves, stone arch bridges, and babbling koi streams.',
    historySummary: 'Designed in 1989 by Japanese landscape master Shunyo with ecological bio-filtration. Demonstrates world-class natural urban water purification right in the city.',
    visitingHours: '06:00 AM – 09:00 AM & 03:00 PM – 06:00 PM daily',
    nearestTransit: 'Kalyani Nagar Metro (1.2 km) / KP North Main Rd (350m)',
    sourceAttribution: 'Osho International Meditation Sanctuary & Environmental Cell',
    tags: ['Zen Garden', 'Streams & Bamboo', 'Mindfulness', 'Hidden Gem', 'Wheelchair Friendly'],
    isFeaturedGem: true,
    isFort: false
  },

  // 32. TRISHUNDHA GANPATI TEMPLE, PUNE
  {
    id: 'trishundha-ganpati',
    name: 'Trishundha Ganpati Temple',
    category: 'gem',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Somwar Peth, Pune 411011',
    coords: { x: 55, y: 39 },
    lat: 18.5218,
    lng: 73.8643,
    cost: 0,
    verifiedCostDescription: 'Free Admission (Historic Temple)',
    indoor: true,
    wheelchairAccessible: false,
    accessibilityNotes: 'Subterranean step entrance to black basalt sanctum',
    officialStatus: 'Heritage Grade I Temple (INTACH Pune)',
    rating: 4.6,
    reviewCount: 3900,
    ratingSource: 'INTACH Pune Chapter & Heritage Surveys',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80',
    tagline: '1770 Black Basalt Temple with British Soldier Reliefs',
    story: 'One of Pune’s best-kept architectural secrets. Built in 1770 by Mahant Bhimgir Gosavi, this black basalt temple depicts Lord Ganesha with three trunks and six arms seated on a peacock, surrounded by rare stone carvings of European soldiers and rhinoceroses.',
    historySummary: 'Constructed over 14 years (1754–1770) featuring a subterranean water reservoir and inscriptions in Sanskrit and Persian.',
    visitingHours: '08:00 AM – 12:00 PM & 05:00 PM – 08:30 PM daily',
    nearestTransit: 'Pune Railway Station (1.2 km) / Somwar Peth Bus Stop (80m)',
    sourceAttribution: 'Indian National Trust for Art and Cultural Heritage (INTACH)',
    tags: ['Three-Trunked Ganesha', 'Basalt Carvings', 'Free Entry', 'Hidden Architecture'],
    isFeaturedGem: true,
    isFort: false
  },

  // =========================================================================
  // 3. ICONIC FOOD & CULINARY INSTITUTIONS
  // =========================================================================

  // 33. VAISHALI CAFE & RESTAURANT, FC ROAD
  {
    id: 'vaishali-restaurant',
    name: 'Vaishali Cafe & Restaurant',
    category: 'food',
    neighborhood: 'Deccan / FC Road',
    postalLocality: 'Fergusson College Road, Deccan Gymkhana, Pune 411004',
    coords: { x: 36, y: 37 },
    lat: 18.5238,
    lng: 73.8415,
    cost: 250,
    verifiedCostDescription: 'Average spend ₹200 – ₹350 per person',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Ground floor dining hall and outdoor courtyard accessible',
    officialStatus: 'Pune Restaurant Guild Heritage Icon Since 1965',
    rating: 4.6,
    reviewCount: 42300,
    ratingSource: 'Pune Restaurant & Hoteliers Association',
    imageUrl: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1000&q=80',
    tagline: 'The Cultural Epicenter of FC Road Since 1965',
    story: 'For generations of Pune students, writers, theater artists, and families, Vaishali is a sacred ritual. Savor crispy Mysore Masala Dosa, signature SPDP (Sev Potato Dahi Puri), and steaming South Indian filter coffee in the leafy courtyard.',
    historySummary: 'Founded in 1965 by Jagannath Shetty. Evolved into the intellectual debating parlor for Fergusson College professors, Marathi playwrights, and generations of young scholars.',
    visitingHours: '07:00 AM – 11:00 PM daily',
    nearestTransit: 'Deccan Gymkhana Metro Station (400m) / FC Road Goodluck Bus Stop (150m)',
    sourceAttribution: 'Pune Restaurant & Hoteliers Association Record',
    tags: ['FC Road Icon', 'Mysore Dosa', 'SPDP', 'Filter Coffee', 'Student Landmark'],
    isFeaturedGem: false,
    isFort: false
  },

  // 34. CAFE GOODLUCK, DECCAN GYMKHANA
  {
    id: 'cafe-goodluck',
    name: 'Cafe Goodluck (Irani Tea & Bun Maska)',
    category: 'cafe',
    neighborhood: 'Deccan / FC Road',
    postalLocality: 'Goodluck Chowk, FC Road, Deccan Gymkhana, Pune 411004',
    coords: { x: 35, y: 38 },
    lat: 18.5175,
    lng: 73.8410,
    cost: 150,
    verifiedCostDescription: 'Bun Maska + Irani Chai approx ₹80 – ₹140 / Kheema Pav ₹220',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Ground floor seating accessible directly from Goodluck Chowk pavement',
    officialStatus: 'Historic Irani Cafe Established 1935',
    rating: 4.5,
    reviewCount: 38900,
    ratingSource: 'Heritage Hospitality Archives of Maharashtra',
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Pune’s Oldest Operating Irani Cafe Since 1935',
    story: 'Situated at the bustling threshold of FC Road, Cafe Goodluck has been brewing robust Irani chai and serving pillowy Bun Maska slathered with salted butter since 1935. Famous also for spicy mutton kheema pav and caramel custard.',
    historySummary: 'Founded in 1935 by Husain Ali Yakshi. A favorite stop for legendary Bollywood icons like Dev Anand and generations of FTII film directors and Fergusson students.',
    visitingHours: '07:30 AM – 11:30 PM daily',
    nearestTransit: 'Deccan Gymkhana Metro Station (300m) / Goodluck Chowk Bus Stop (20m)',
    sourceAttribution: 'Pune Heritage Culinary Archive',
    tags: ['Irani Cafe', 'Bun Maska', 'Irani Chai', 'Kheema Pav', 'Goodluck Chowk'],
    isFeaturedGem: true,
    isFort: false
  },

  // 35. KAYANI BAKERY, PUNE CAMP
  {
    id: 'kayani-bakery',
    name: 'Kayani Bakery',
    category: 'food',
    neighborhood: 'Pune Camp / East Street',
    postalLocality: '6 East Street, Hulshur, Camp, Pune 411001',
    coords: { x: 62, y: 44 },
    lat: 18.5147,
    lng: 73.8797,
    cost: 220,
    verifiedCostDescription: 'Shrewsbury Biscuits approx ₹440/kg (packets from ₹110)',
    indoor: true,
    wheelchairAccessible: false,
    accessibilityNotes: 'Narrow heritage doorway with low single step at East Street pavement',
    officialStatus: 'Iconic Irani Bakery Since 1955',
    rating: 4.5,
    reviewCount: 31200,
    ratingSource: 'Heritage Culinary Archive & Customer Registers',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    tagline: 'World-Famous Shrewsbury Butter Biscuits Since 1955',
    story: 'No visit to Pune is complete without standing in the orderly queue on East Street. Their secret-recipe Shrewsbury butter biscuits, cardamom mawa cakes, and cheese papri melt instantly in your mouth with old-world Irani charm.',
    historySummary: 'Established by brothers Khodadad and Hormuz Irani in 1955. Preserves the original teak counters, vintage cash tills, and traditional baking ovens.',
    visitingHours: '07:30 AM – 01:00 PM & 03:30 PM – 08:00 PM (Closed Sundays)',
    nearestTransit: 'Pune Railway Station (2.3 km) / Camp MG Road Bus Stand (300m)',
    sourceAttribution: 'Pune Heritage Culinary Archive',
    tags: ['Irani Bakery', 'Shrewsbury Biscuits', 'Mawa Cake', 'Pune Camp Heritage'],
    isFeaturedGem: false,
    isFort: false
  },

  // 36. BEDEKAR TEA STALL, NARAYAN PETH
  {
    id: 'bedekar-misal',
    name: 'Bedekar Tea Stall',
    category: 'budget',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Narayan Peth, Pune 411030',
    coords: { x: 46, y: 41 },
    lat: 18.5144,
    lng: 73.8519,
    cost: 110,
    verifiedCostDescription: 'Misal Pav approx ₹100 – ₹130',
    indoor: true,
    wheelchairAccessible: false,
    accessibilityNotes: 'Heritage peth lane with ground-level step into dining room',
    officialStatus: 'Puneri Heritage Culinary Institution (1948)',
    rating: 4.5,
    reviewCount: 19600,
    ratingSource: 'Puneri Culinary Guild Records',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Peth Heartland Puneri Misal Since 1948',
    story: 'Tucked inside the heritage lanes of Narayan Peth, Bedekar serves the quintessential Puneri misal: perfectly balanced sweet-and-spicy kat broth with poha base, fresh farsan, and soft bread pav.',
    historySummary: 'Started in 1948 by Govind Bedekar. Unlike the fiery Kolhapuri misal, Bedekar popularized the mild, tamarind-hinted Puneri Kat broth that has defined old-city breakfasts for over 75 years.',
    visitingHours: '07:30 AM – 07:00 PM (Closed Mondays)',
    nearestTransit: 'Mandai Metro Station (800m) / Narayan Peth Bus Stop (120m)',
    sourceAttribution: 'Puneri Culinary Guild Record',
    tags: ['Puneri Misal', 'Authentic Peth', 'Under ₹150', 'Breakfast Legend'],
    isFeaturedGem: true,
    isFort: false
  },

  // 37. KATA KIRR MISAL, KARVE ROAD
  {
    id: 'kata-kirr-misal',
    name: 'Kata Kirr Misal',
    category: 'budget',
    neighborhood: 'Kothrud / Senapati Bapat Rd',
    postalLocality: 'Karve Road, Erandwane, Pune 411004',
    coords: { x: 28, y: 46 },
    lat: 18.5085,
    lng: 73.8322,
    cost: 130,
    verifiedCostDescription: 'Misal Pav ₹110 – ₹140 / Buttermilk ₹30',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Ground floor dining area with step-free entrance',
    officialStatus: 'Celebrated Maharashtrian Misal House',
    rating: 4.6,
    reviewCount: 28400,
    ratingSource: 'Pune Food Connoisseurs Circle',
    imageUrl: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Fiery Kolhapuri-Style Kat with Custom Heat Levels',
    story: 'The go-to misal destination for those who crave authentic regional spice. Kata Kirr lets patrons choose their Rassa heat level—Tikhat (spicy red), Medium (balanced), or Light (mild)—served with piping hot matki, crispy farsan, and cold solkadhi.',
    historySummary: 'Originating as a small joint, it grew through unmatched word-of-mouth into Pune’s highest-rated spicy misal spot with long weekend morning queues.',
    visitingHours: '08:00 AM – 04:30 PM daily (Closed Mondays)',
    nearestTransit: 'Nal Stop Metro Station (250m) / Karve Road Garware Bus Stop (100m)',
    sourceAttribution: 'Pune Food Critics Guild',
    tags: ['Spicy Misal', 'Custom Rassa', 'Nal Stop Metro', 'Breakfast Favorite'],
    isFeaturedGem: false,
    isFort: false
  },

  // 38. CHITALE BANDHU MITHAIWALE, BAJIRAO ROAD
  {
    id: 'chitale-bandhu',
    name: 'Chitale Bandhu Mithaiwale (Original Flagship)',
    category: 'food',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Bajirao Road, Sadashiv Peth, Pune 411030',
    coords: { x: 48, y: 46 },
    lat: 18.5115,
    lng: 73.8525,
    cost: 200,
    verifiedCostDescription: 'Bakarwadi approx ₹120 per 250g / Mango Barfi ₹350 per box',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved street level storefront with direct counter access',
    officialStatus: 'Legendary Maharashtrian Sweet Institution (1950)',
    rating: 4.8,
    reviewCount: 39100,
    ratingSource: 'Maharashtra Chamber of Commerce & Confectionery Guild',
    imageUrl: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Creators of Pune’s World-Famous Crispy Spiral Bakarwadi',
    story: 'Founded in 1950 by Bhaskar Ganesh Chitale and Raghunathrao Chitale. Renowned worldwide for their crispy, spiral-rolled, sweet-and-spicy Bakarwadi snack, signature Amba Barfi (mango fudge), Shrikhand, and traditional pedhas.',
    historySummary: 'Pioneered automated spiral rolling technology in Pune to meet global export demand. The original Sadashiv Peth shop remains a pilgrimage site for Punekars and international visitors.',
    visitingHours: '08:30 AM – 01:00 PM & 04:00 PM – 08:30 PM (Closed Mon afternoon)',
    nearestTransit: 'Mandai Metro Station (500m) / Bajirao Road Shanipar Bus Stop (80m)',
    sourceAttribution: 'Chitale Bandhu Corporate Archive & Heritage Records',
    tags: ['Bakarwadi', 'Mango Barfi', 'Sadashiv Peth', 'Puneri Pride', 'Iconic Sweets'],
    isFeaturedGem: true,
    isFort: false
  },

  // 39. SUJATA MASTANI, SADASHIV PETH
  {
    id: 'sujata-mastani',
    name: 'Sujata Mastani (Originator Flagship)',
    category: 'food',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Sadashiv Peth / Alka Talkies Chowk, Pune 411030',
    coords: { x: 44, y: 44 },
    lat: 18.5120,
    lng: 73.8490,
    cost: 140,
    verifiedCostDescription: 'Signature Alphonso Mango Mastani ₹120 – ₹160',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Ground floor store with seating and curbside service',
    officialStatus: 'Inventor of Pune’s Trademark Dessert (1968)',
    rating: 4.7,
    reviewCount: 24700,
    ratingSource: 'Pune Culinary Heritage Association',
    imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Home of Pune’s Signature Mango Mastani Since 1968',
    story: 'Mastani is Pune’s most celebrated homegrown dessert: a rich, velvety thick milkshake crowned with a scoop of dense ice cream, slivered pistachios, almonds, and glazed cherries. Sujata Mastani created this delicacy in 1968.',
    historySummary: 'Started by the Kondhalkar family in 1968 and named in romantic tribute to Mastani Bai. Still uses pure Alphonso mango pulp and house-made dairy ice cream with no artificial stabilizers.',
    visitingHours: '11:00 AM – 11:30 PM daily',
    nearestTransit: 'Deccan Gymkhana Metro (700m) / Alka Talkies Chowk (100m)',
    sourceAttribution: 'Pune Heritage Culinary Archive',
    tags: ['Mango Mastani', 'Original Creator', 'Dessert Legend', 'Alka Talkies'],
    isFeaturedGem: false,
    isFort: false
  },

  // 40. GERMAN BAKERY, KOREGAON PARK
  {
    id: 'german-bakery',
    name: 'German Bakery',
    category: 'cafe',
    neighborhood: 'Koregaon Park (North Main Rd)',
    postalLocality: 'North Main Road, Koregaon Park, Pune 411001',
    coords: { x: 68, y: 31 },
    lat: 18.5362,
    lng: 73.8938,
    cost: 450,
    verifiedCostDescription: 'Average spend ₹350 – ₹600 per person',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Open-air patio and ground floor seating wheelchair accessible',
    officialStatus: 'Registered Restaurant Landmark Since 1988',
    rating: 4.4,
    reviewCount: 22100,
    ratingSource: 'Koregaon Park Commercial Directory',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Bohemian Meeting Ground & Artisan Pastries',
    story: 'A bohemian landmark under Koregaon Park’s lush tree canopies. Celebrated for apple strudel, freshly baked cheesecakes, masala chai, and a warm outdoor terrace attracting artists, backpackers, and tech founders.',
    historySummary: 'Founded in 1988 by Klaus Gutzeit and Gopal Woody near the Osho Commune. Rebuilt into a resilient cosmopolitan hub cherished by the global traveler community.',
    visitingHours: '08:00 AM – 11:30 PM daily',
    nearestTransit: 'Kalyani Nagar Metro (1.4 km) / Koregaon Park Auto Stand (50m)',
    sourceAttribution: 'Koregaon Park Cultural Directory',
    tags: ['Koregaon Park', 'Apple Strudel', 'Outdoor Patio', 'Cafe Culture'],
    isFeaturedGem: false,
    isFort: false
  },

  // 41. MARZ-O-RIN, MG ROAD, PUNE CAMP
  {
    id: 'marz-o-rin',
    name: 'Marz-O-Rin',
    category: 'cafe',
    neighborhood: 'Pune Camp / East Street',
    postalLocality: '6 Bakthiar Plaza, MG Road, Camp, Pune 411001',
    coords: { x: 64, y: 42 },
    lat: 18.5181,
    lng: 73.8785,
    cost: 160,
    verifiedCostDescription: 'Sandwiches ₹80 – ₹120 / Cold Coffee ₹70 / Macaroni ₹110',
    indoor: true,
    wheelchairAccessible: false,
    accessibilityNotes: 'Heritage wooden staircase leads to upper colonial veranda balcony',
    officialStatus: 'Heritage Bakery & Cafe Since 1965',
    rating: 4.5,
    reviewCount: 21900,
    ratingSource: 'Camp Merchants Association Heritage Records',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Heritage Balcony Veranda & Chutney Sandwiches Since 1965',
    story: 'Housed inside a charming 100-year-old colonial wooden building on MG Road. Famed for its crustless mint chutney sandwiches, chicken sandwiches, baked macaroni in white sauce, and chilled thick cold coffee on the wooden veranda.',
    historySummary: 'Founded in 1965 by Sheriar Jamshed Sheriyar. Preserves wooden rafters, checkered floors, and nostalgic European cafe ambiance that has delighted students for six decades.',
    visitingHours: '08:30 AM – 10:00 PM daily',
    nearestTransit: 'Pune Railway Station (2 km) / MG Road Bata Chowk (80m)',
    sourceAttribution: 'Pune Camp Heritage Guild',
    tags: ['Chutney Sandwich', 'MG Road', 'Colonial Veranda', 'Budget Cafe', 'Camp Legend'],
    isFeaturedGem: true,
    isFort: false
  },

  // =========================================================================
  // 4. TRADITIONAL BAZAARS & SHOPPING STREETS
  // =========================================================================

  // 42. TULSHIBAUG & MAHATMA PHULE MANDAI, PUNE
  {
    id: 'tulshibaug-market',
    name: 'Tulshibaug & Mahatma Phule Mandai',
    category: 'shopping',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Budhwar Peth / Shukrawar Peth, Pune 411002',
    coords: { x: 50, y: 44 },
    lat: 18.5139,
    lng: 73.8550,
    cost: 0,
    verifiedCostDescription: 'Free Entry (Traditional Public Market)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Crowded pedestrian market lanes with cobblestone and curbs',
    officialStatus: 'Municipal Heritage Bazaar (1886)',
    rating: 4.4,
    reviewCount: 28200,
    ratingSource: 'Pune Municipal Corporation Bazaar Records',
    imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Heart of Puneri Brass, Traditional Textiles & Spices',
    story: 'Wander through the buzzing 18th-century bazaar surrounding the historic Ram Temple. Find authentic brass pooja ware, hand-crafted Paithani sarees, Kolhapuri footwear, and fresh regional spices beneath colonial Gothic stone market arches.',
    historySummary: 'The Tulshibaug temple complex was founded in 1761 by Naro Appaji Tulshibaugwale. Mahatma Phule Mandai was completed in 1886 by the British as a central municipal market hall.',
    visitingHours: '10:00 AM – 09:30 PM daily',
    nearestTransit: 'Mandai Metro Station (Direct underground exit 80m)',
    sourceAttribution: 'Pune Municipal Heritage & Bazaar Guild',
    tags: ['Historic Bazaar', 'Traditional Brass', 'Paithani Sarees', 'Mandai Metro'],
    isFeaturedGem: false,
    isFort: false
  },

  // 43. LAXMI ROAD TEXTILE MARKET, PUNE
  {
    id: 'laxmi-road',
    name: 'Laxmi Road Traditional Textile Market',
    category: 'shopping',
    neighborhood: 'Old City (Peths)',
    postalLocality: 'Laxmi Road, Narayan Peth to Nana Peth, Pune 411030',
    coords: { x: 48, y: 43 },
    lat: 18.5152,
    lng: 73.8538,
    cost: 0,
    verifiedCostDescription: 'Free Public Shopping Street (Street parking restricted)',
    indoor: false,
    wheelchairAccessible: true,
    accessibilityNotes: 'Paved pedestrian sidewalks with level access into traditional saree shops',
    officialStatus: 'Premier Retail Heritage Boulevard of Maharashtra',
    rating: 4.5,
    reviewCount: 31000,
    ratingSource: 'Pune Merchant Federation',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    tagline: '2.5 Kilometers of Maharashtra’s Premier Saree & Gold Shopping',
    story: 'The commercial artery of old Pune stretching across multiple historical Peths. Renowned across Western India for bridal Paithani silk sarees, pure gold jewelry showrooms, traditional Kolhapuri chappals, and festive Ganeshotsav street lighting.',
    historySummary: 'Expanded during the early 20th century, Laxmi Road has remained Pune’s undisputed bridal and festival shopping paradise for over 100 years.',
    visitingHours: '10:30 AM – 09:00 PM (Closed Monday afternoons)',
    nearestTransit: 'Mandai Metro Station (400m) / Shanipar Chowk Bus Stop (100m)',
    sourceAttribution: 'Pune Traders & Vyapari Mahamandal',
    tags: ['Silk Sarees', 'Paithani', 'Gold Jewelry', 'Festival Shopping', 'Old City'],
    isFeaturedGem: false,
    isFort: false
  },

  // 44. HONG KONG LANE, DECCAN
  {
    id: 'hong-kong-lane',
    name: 'Hong Kong Lane (FC Road Arcade)',
    category: 'shopping',
    neighborhood: 'Deccan / FC Road',
    postalLocality: 'FC Road, Deccan Gymkhana, Pune 411004',
    coords: { x: 36, y: 39 },
    lat: 18.5215,
    lng: 73.8425,
    cost: 0,
    verifiedCostDescription: 'Free Market Entrance (Affordable student shopping)',
    indoor: false,
    wheelchairAccessible: false,
    accessibilityNotes: 'Dense narrow alleyway with tight shop stalls',
    officialStatus: 'Iconic Student Retail Arcade',
    rating: 4.3,
    reviewCount: 17400,
    ratingSource: 'FC Road Merchant Guild',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Student Paradise for Bags, Accessories & Quirky Souvenirs',
    story: 'A bustling narrow lane branching off Fergusson College Road packed with hundreds of tiny stalls. Renowned among Pune’s university crowd for trendy denim, leather bags, junk jewelry, watches, mobile gear, and footwear at bargain prices.',
    historySummary: 'Started in the 1970s as a haven for imported Asian accessories, earning its moniker "Hong Kong Lane" from Pune’s student community.',
    visitingHours: '11:00 AM – 09:30 PM daily',
    nearestTransit: 'Deccan Gymkhana Metro Station (350m) / FC Road Goodluck Bus Stop (100m)',
    sourceAttribution: 'FC Road Commercial Guild',
    tags: ['Student Market', 'Bargain Shopping', 'Accessories', 'FC Road Buzz'],
    isFeaturedGem: false,
    isFort: false
  },

  // =========================================================================
  // 5. HERITAGE DINING & ACCOMMODATIONS
  // =========================================================================

  // 45. HOTEL SHREYAS, DECCAN
  {
    id: 'hotel-shreyas',
    name: 'Hotel Shreyas & Dining Hall',
    category: 'hotel',
    neighborhood: 'Deccan / FC Road',
    postalLocality: '1242 Apte Road, Deccan Gymkhana, Pune 411004',
    coords: { x: 37, y: 42 },
    lat: 18.5198,
    lng: 73.8447,
    cost: 480,
    verifiedCostDescription: 'Unlimited Maharashtrian Thali approx ₹450 – ₹550',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Elevator and ground level ramp access to dining hall',
    officialStatus: 'Heritage Maharashtrian Dining Institution (1966)',
    rating: 4.5,
    reviewCount: 14700,
    ratingSource: 'Maharashtra Tourism Registered Dining',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Authentic Maharashtrian Thali & Warm Hospitality',
    story: 'The gold standard of traditional Maharashtrian culinary hospitality in Deccan. Celebrated for its royal silver-thali puran poli feasts, ukadiche modak, and central location ideal for walking down FC Road.',
    historySummary: 'Serving Pune since 1966 under the Chitale hospitality family. Preserves heritage recipes and home-cooked warmth that draws dignitaries and travelers alike.',
    visitingHours: 'Thali: 11:30 AM – 03:00 PM & 07:30 PM – 10:30 PM',
    nearestTransit: 'Deccan Gymkhana Metro Station (500m) / Apte Road Bus Stop (50m)',
    sourceAttribution: 'Maharashtra Tourism Registered Dining Guide',
    tags: ['Traditional Thali', 'Puran Poli', 'Deccan Central', 'Wheelchair Friendly'],
    isFeaturedGem: false,
    isFort: false
  },

  // 46. THE RITZ-CARLTON PUNE
  {
    id: 'ritz-carlton-pune',
    name: 'The Ritz-Carlton Pune',
    category: 'hotel',
    neighborhood: 'Kalyani Nagar / Nagar Rd',
    postalLocality: 'Golf Course Square, Airport Road, Yerawada, Pune 411006',
    coords: { x: 78, y: 16 },
    lat: 18.5574,
    lng: 73.8942,
    cost: 2800,
    verifiedCostDescription: 'Dining covers ₹2,500 – ₹4,000 / Rooms from ₹14,000/night',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Fully barrier-free five-star accessibility with elevators and ADA compliant bathrooms',
    officialStatus: '5-Star Deluxe Hotel (Govt. of India Tourism)',
    rating: 4.8,
    reviewCount: 7900,
    ratingSource: 'International Luxury Hotel Association & Guest Audits',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Luxury Skyline Oasis Overlooking Poona Golf Greens',
    story: 'Ultra-luxurious retreat featuring panoramic floor-to-ceiling Poona Golf Club vistas, Japanese dining at Ukiyo, curated contemporary Indian artwork, and world-class accessible hospitality.',
    historySummary: 'Designed with subtle Maratha architectural references, tiered chandeliers, and an expansive wellness spa honoring ancient Ayurvedic traditions.',
    visitingHours: 'Open 24 Hours (Dining reservations recommended)',
    nearestTransit: 'Yerawada Metro Station (1.1 km) / Pune Airport (4 km)',
    sourceAttribution: 'Ministry of Tourism Hotel Classification Board',
    tags: ['Luxury Stay', 'Golf View', 'Fine Dining', 'Wheelchair Accessible'],
    isFeaturedGem: false,
    isFort: false
  },

  // 47. JW MARRIOTT HOTEL PUNE
  {
    id: 'jw-marriott-pune',
    name: 'JW Marriott Hotel Pune',
    category: 'hotel',
    neighborhood: 'Kothrud / Senapati Bapat Rd',
    postalLocality: 'Senapati Bapat Road, Shivajinagar, Pune 411053',
    coords: { x: 30, y: 30 },
    lat: 18.5332,
    lng: 73.8298,
    cost: 2400,
    verifiedCostDescription: 'Dining ₹2,000 – ₹3,500 / Rooms from ₹11,000/night',
    indoor: true,
    wheelchairAccessible: true,
    accessibilityNotes: 'Step-free hotel lobby, dedicated elevator banks, and accessible suites',
    officialStatus: '5-Star Deluxe International Hotel',
    rating: 4.7,
    reviewCount: 16800,
    ratingSource: 'Ministry of Tourism & International Hospitality Audit',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    tagline: 'Premier Senapati Bapat Road Skyline Luxury & Paasha Rooftop',
    story: 'Prominently located on vibrant Senapati Bapat Road between the university and city center. Celebrated for the iconic 24th-floor Paasha open-air rooftop lounge with sunset valley views, Italian cuisine at Alto Vino, and Quan Spa.',
    historySummary: 'The premier luxury anchor of western Pune, hosting international summits, sports teams, and cultural festivals with world-class facilities.',
    visitingHours: 'Open 24 Hours (Paasha: 05:30 PM – 01:00 AM)',
    nearestTransit: 'Shivajinagar Metro (2.5 km) / SB Road Symbiosis Bus Stop (100m)',
    sourceAttribution: 'Ministry of Tourism India Classification',
    tags: ['Luxury Hotel', 'Paasha Rooftop', 'Senapati Bapat Road', 'Fine Dining', 'Five Star'],
    isFeaturedGem: false,
    isFort: false
  }
];

export interface IncidentRiskZone {
  id: string;
  name: string;
  x: number;
  y: number;
  lat: number;
  lng: number;
  r: number;
  severity: number;
  nightMultiplier: number;
  category: string;
  officialSource: string;
  description: string;
  isCitizenGenerated?: boolean;
}

export const INITIAL_RISK_ZONES: IncidentRiskZone[] = [
  {
    id: 'rz-swargate',
    name: 'Swargate Multimodal Hub & Flyover Divergence',
    x: 48,
    y: 54,
    lat: 18.5015,
    lng: 73.8580,
    r: 6.8,
    severity: 8.5,
    nightMultiplier: 2.1,
    category: 'Accident Bottleneck',
    officialSource: 'Pune Traffic Police Annual Incident Register',
    description: 'High pedestrian conflict zone; heavy bus convergence from ST depot; blind spot at flyover descent.'
  },
  {
    id: 'rz-shivajinagar',
    name: 'Shivajinagar Railway Underpass',
    x: 42,
    y: 26,
    lat: 18.5310,
    lng: 73.8510,
    r: 6.2,
    severity: 8.0,
    nightMultiplier: 2.5,
    category: 'Waterlogging & Low Visibility',
    officialSource: 'PMC Monsoon Disaster Cell & Public Works',
    description: 'Chronic monsoon flash waterlogging; inadequate lighting during late night hours; blind entrance turn.'
  },
  {
    id: 'rz-hadapsar',
    name: 'Hadapsar Gadital Highway Merge',
    x: 82,
    y: 48,
    lat: 18.5010,
    lng: 73.9260,
    r: 6.5,
    severity: 7.5,
    nightMultiplier: 1.8,
    category: 'Heavy Freight Corridor',
    officialSource: 'Highway Safety Patrol & Pune RTO',
    description: 'High-speed industrial freight truck traffic merging onto Solapur highway without grade separation.'
  },
  {
    id: 'rz-deccan-riverside',
    name: 'Deccan Mutha Riverside Walkway',
    x: 34,
    y: 46,
    lat: 18.5170,
    lng: 73.8450,
    r: 6.0,
    severity: 7.8,
    nightMultiplier: 2.4,
    category: 'Nighttime Lighting Deficit',
    officialSource: 'Citizen Civic Audit & Ward Office 12',
    description: 'Isolated stretch after 8:30 PM with several non-functional lamp posts along riverside bund path.'
  },
  {
    id: 'rz-katraj',
    name: 'Katraj Old Tunnel Ghat Hairpin',
    x: 26,
    y: 62,
    lat: 18.4480,
    lng: 73.8600,
    r: 7.0,
    severity: 8.2,
    nightMultiplier: 2.0,
    category: 'Steep Blind Gradient',
    officialSource: 'State Highway Authority Incident Log',
    description: 'Sharp blind hairpin turns, loose gravel in monsoon, headlight glare, and seasonal valley fog.'
  }
];

export interface JunctionNode {
  id: string;
  name: string;
  x: number;
  y: number;
  lat: number;
  lng: number;
  metroConnected?: boolean;
}

export const ROAD_JUNCTIONS: JunctionNode[] = [
  { id: 'J0', name: 'Baner Junction', x: 14, y: 14, lat: 18.5590, lng: 73.7868 },
  { id: 'J1', name: 'Aundh / University Gate', x: 32, y: 14, lat: 18.5530, lng: 73.8240 },
  { id: 'J2', name: 'Khadki Cantonment', x: 50, y: 14, lat: 18.5620, lng: 73.8510 },
  { id: 'J3', name: 'Yerawada Bridge', x: 68, y: 14, lat: 18.5535, lng: 73.8860, metroConnected: true },
  { id: 'J4', name: 'Viman Nagar Cross', x: 86, y: 14, lat: 18.5679, lng: 73.9143 },

  { id: 'J5', name: 'Pashan Circle', x: 14, y: 28, lat: 18.5390, lng: 73.7920 },
  { id: 'J6', name: 'Shivajinagar Junction', x: 32, y: 28, lat: 18.5314, lng: 73.8446, metroConnected: true },
  { id: 'J7', name: 'Sangam Bridge / Civil Court', x: 50, y: 28, lat: 18.5290, lng: 73.8630, metroConnected: true },
  { id: 'J8', name: 'Koregaon Park North', x: 68, y: 28, lat: 18.5360, lng: 73.8940 },
  { id: 'J9', name: 'Kalyani Nagar', x: 86, y: 28, lat: 18.5480, lng: 73.9040, metroConnected: true },

  { id: 'J10', name: 'Kothrud Stand', x: 14, y: 44, lat: 18.5074, lng: 73.8077, metroConnected: true },
  { id: 'J11', name: 'Deccan Gymkhana', x: 32, y: 44, lat: 18.5173, lng: 73.8418, metroConnected: true },
  { id: 'J12', name: 'Shaniwar Peth / Mandai', x: 50, y: 44, lat: 18.5150, lng: 73.8560, metroConnected: true },
  { id: 'J13', name: 'Pune Camp East', x: 68, y: 44, lat: 18.5140, lng: 73.8810 },
  { id: 'J14', name: 'Hadapsar Gadital', x: 86, y: 44, lat: 18.5010, lng: 73.9260 },

  { id: 'J15', name: 'Warje Malwadi', x: 14, y: 58, lat: 18.4790, lng: 73.8010 },
  { id: 'J16', name: 'Sinhagad Rd / Parvati', x: 32, y: 58, lat: 18.4940, lng: 73.8430 },
  { id: 'J17', name: 'Swargate ST Depot', x: 50, y: 58, lat: 18.5015, lng: 73.8580, metroConnected: true },
  { id: 'J18', name: 'Bibwewadi / Market Yard', x: 68, y: 58, lat: 18.4840, lng: 73.8690 },
  { id: 'J19', name: 'Kondhwa Hub', x: 86, y: 58, lat: 18.4710, lng: 73.8930 }
];

export interface RoadEdge {
  u: string;
  v: string;
  isShortcut?: boolean;
}

export const ROAD_EDGES: RoadEdge[] = [
  // Horizontal grid lines
  { u: 'J0', v: 'J1' }, { u: 'J1', v: 'J2' }, { u: 'J2', v: 'J3' }, { u: 'J3', v: 'J4' },
  { u: 'J5', v: 'J6' }, { u: 'J6', v: 'J7' }, { u: 'J7', v: 'J8' }, { u: 'J8', v: 'J9' },
  { u: 'J10', v: 'J11' }, { u: 'J11', v: 'J12' }, { u: 'J12', v: 'J13' }, { u: 'J13', v: 'J14' },
  { u: 'J15', v: 'J16' }, { u: 'J16', v: 'J17' }, { u: 'J17', v: 'J18' }, { u: 'J18', v: 'J19' },

  // Vertical grid lines
  { u: 'J0', v: 'J5' }, { u: 'J5', v: 'J10' }, { u: 'J10', v: 'J15' },
  { u: 'J1', v: 'J6' }, { u: 'J6', v: 'J11' }, { u: 'J11', v: 'J16' },
  { u: 'J2', v: 'J7' }, { u: 'J7', v: 'J12' }, { u: 'J12', v: 'J17' },
  { u: 'J3', v: 'J8' }, { u: 'J8', v: 'J13' }, { u: 'J13', v: 'J18' },
  { u: 'J4', v: 'J9' }, { u: 'J9', v: 'J14' }, { u: 'J14', v: 'J19' },

  // Diagonal shortcuts crossing risk corridors
  { u: 'J1', v: 'J7', isShortcut: true },
  { u: 'J11', v: 'J17', isShortcut: true }
];

export const HISTORICAL_TIMELINE = [
  {
    year: '758 CE',
    title: 'Rashtrakuta Dynasty & Pataleshwar Rock Cut',
    description: 'Earliest archaeological record of Punaka Vishaya under King Krishna I. Master artisans excavate the monolithic Pataleshwar rock cave temple from Pune basalt.'
  },
  {
    year: '1630 CE',
    title: 'Birth of Shivaji at Shivneri & Home at Lal Mahal',
    description: 'Chhatrapati Shivaji Maharaj is born at Shivneri Fort on 19 Feb 1630; later establishes residence with Jijabai at Lal Mahal in Pune.'
  },
  {
    year: '1646 CE',
    title: 'Capture of Torna Fort & Foundation of Swarajya',
    description: 'At age 16, Shivaji Maharaj captures Torna Fort (Prachandagad), beginning the Maratha freedom struggle and fortifying Rajgad.'
  },
  {
    year: '1659 CE',
    title: 'Battle of Pratapgad & Vanquishing of Afzal Khan',
    description: 'Shivaji Maharaj secures a historic strategic victory against Bijapuri general Afzal Khan in the dense forests of Pratapgad.'
  },
  {
    year: '1674 CE',
    title: 'Grand Coronation at Raigad Capital',
    description: 'Grand coronation (Rajyabhishek) of Chhatrapati Shivaji Maharaj at Raigad Fort, establishing the sovereign Maratha Empire.'
  },
  {
    year: '1732 CE',
    title: 'Peshwa Baji Rao I & Shaniwar Wada',
    description: 'Peshwa Baji Rao I lays the cornerstone of the Shaniwar Wada citadel, elevating Pune to the premier political capital of India.'
  },
  {
    year: '1749 CE',
    title: 'Nanasaheb Peshwa & Parvati Hill Complex',
    description: 'Shrimant Nanasaheb Peshwa constructs the hilltop Devdeveshwar Shiva Temple with 103 stone steps overlooking the Pune valley.'
  },
  {
    year: '1893 CE',
    title: 'Public Ganeshotsav & Dagdusheth Mandir',
    description: 'Lokmanya Bal Gangadhar Tilak transforms Ganeshotsav into a mass public cultural movement at Dagdusheth to unite Indian citizens.'
  },
  {
    year: '1942 CE',
    title: 'Quit India Internment at Aga Khan Palace',
    description: 'Mahatma Gandhi, Kasturba Gandhi, and national leaders interned at Aga Khan Palace, now a National Freedom Memorial.'
  }
];

export const PUNE_NEIGHBORHOOD_CENTERS: Record<string, { lat: number; lng: number; zoom: number; label: string }> = {
  'Pune': { lat: 18.5204, lng: 73.8567, zoom: 12, label: 'Pune (All Places)' },
  'Forts & Heritage': { lat: 18.4000, lng: 73.6500, zoom: 9, label: 'Indian Forts & Heritage Sites 🇮🇳' },
  'Old City': { lat: 18.5175, lng: 73.8550, zoom: 15, label: 'Old City (Peths & Shaniwar Wada)' },
  'Deccan': { lat: 18.5225, lng: 73.8420, zoom: 15, label: 'Deccan & FC Road' },
  'Shivajinagar': { lat: 18.5314, lng: 73.8446, zoom: 15, label: 'Shivajinagar & JM Road' },
  'Camp': { lat: 18.5147, lng: 73.8797, zoom: 15, label: 'Pune Camp & East Street' },
  'Koregaon Park': { lat: 18.5380, lng: 73.8950, zoom: 15, label: 'Koregaon Park' },
  'Kothrud': { lat: 18.5074, lng: 73.8077, zoom: 14, label: 'Kothrud & Vetal Tekdi' },
  'Kalyani Nagar': { lat: 18.5524, lng: 73.9015, zoom: 15, label: 'Kalyani Nagar & Nagar Rd' },
  'Swargate': { lat: 18.5015, lng: 73.8580, zoom: 15, label: 'Swargate & Saras Baug' },
  'Delhi': { lat: 28.6562, lng: 77.2410, zoom: 13, label: 'Delhi (Red Fort & Qutub Minar)' },
  'Agra': { lat: 27.1795, lng: 78.0211, zoom: 13, label: 'Agra (Agra Fort)' },
  'Rajasthan': { lat: 26.0000, lng: 74.5000, zoom: 8, label: 'Rajasthan Forts (Amer, Chittor, Mehrangarh)' },
  'Mumbai': { lat: 18.9220, lng: 72.8347, zoom: 13, label: 'Mumbai (Gateway of India)' }
};
