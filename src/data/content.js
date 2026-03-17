export const site = {
  name: 'Addis Tour Guide',
  tagline: 'Experience the Real Ethiopia',
  description:
    'Tours and guides in Addis Ababa. Experience the real Ethiopia with local guides.',
  tripadvisorUrl:
    'https://www.tripadvisor.com/Attraction_Review-g293791-d17803298-Reviews-Addis_Tour_Guide-Addis_Ababa.html',
  tripadvisorWidgetScript:
    'https://www.jscache.com/wejs?wtype=linkingWidgetRedesign&uniq=287&locationId=17803298&lang=en_US&border=true&display_version=2',
}

export const guide = {
  name: 'Abenezer Endale',
  licencedSince: 2019,
  location: 'Addis Ababa, Ethiopia',
  phone: '+251909538319',
  email: 'addistourguide@outlook.com',
  photo: '/img/56106028_373432636716187_6558496012535595008_n.jpg',
  bio: [
    'Originally from southern Ethiopia, I grew up facing many challenges that shaped my resilience and determination. Over time, my dreams grew into a deep passion for learning and exploration. That passion led me to Addis Ababa, where I pursued my university studies and began building the foundation of my career.',
    'Since 2019, I have been a licensed local guide in Ethiopia. Guiding is more than a job for me — it is a calling. I love sharing the rich history, diverse cultures, and natural beauty of my country while meeting incredible people from all around the world. Every tour is an opportunity to connect, learn, and create unforgettable memories together.',
  ],
  credentials: [
    { label: 'Licensed guide since', value: '2019' },
    { label: 'Location', value: 'Addis Ababa, Ethiopia' },
    { label: 'Languages', value: 'Amharic, English' },
    { label: 'Speciality', value: 'History, Culture & Nature' },
  ],
}

export const tours = [
  {
    id: 'city-highlights',
    title: 'Addis Ababa City Highlights',
    duration: 'Full day',
    groupSize: 'Up to 8',
    image: '/img/cityscape.jpg',
    summary:
      'Discover the beating heart of Ethiopia\'s vibrant capital — from the National Museum and Lucy to the Mercato, Africa\'s largest open-air market.',
    highlights: [
      'National Museum of Ethiopia (home of "Lucy")',
      'Mercato — Africa\'s largest open-air market',
      'Holy Trinity Cathedral',
      'Entoto Hill viewpoint',
      'Traditional Ethiopian coffee ceremony',
    ],
  },
  {
    id: 'cultural-immersion',
    title: 'Cultural Immersion Walk',
    duration: 'Half day',
    groupSize: 'Up to 6',
    image: '/img/jumbotron.jpg',
    summary:
      'Step off the tourist trail and into real Addis Ababa — local neighbourhoods, artisan workshops, street food, and genuine human connection.',
    highlights: [
      'Local neighbourhood walks',
      'Artisan workshops and craft markets',
      'Street food tasting',
      'Ethiopian music and art scene',
      'Personal introductions to local community',
    ],
  },
  {
    id: 'history-heritage',
    title: 'History & Heritage Day',
    duration: 'Full day',
    groupSize: 'Up to 10',
    image: '/img/home-jumbotron.jpg',
    summary:
      'Journey through thousands of years of Ethiopian civilisation — ancient churches, royal palaces, and artefacts that tell the story of one of the world\'s oldest nations.',
    highlights: [
      'Ethnological Museum at Haile Selassie\'s old palace',
      'St George Cathedral and Museum',
      'Institute of Ethiopian Studies',
      'Traditional injera lunch',
      'Guided storytelling throughout',
    ],
  },
  {
    id: 'day-trip',
    title: 'Day Trip: Debre Libanos & Blue Nile Gorge',
    duration: 'Full day',
    groupSize: 'Up to 8',
    image: '/img/blog-index.jpg',
    summary:
      'Escape the city for breathtaking highland scenery, an ancient monastery, and one of Africa\'s most spectacular natural wonders.',
    highlights: [
      'Debre Libanos Monastery (16th century)',
      'Blue Nile Gorge panoramic viewpoint',
      'Gelada baboon spotting',
      'Portuguese bridge historical site',
      'Scenic highland road journey',
    ],
  },
  {
    id: 'custom',
    title: 'Custom Tour',
    duration: 'Your choice',
    groupSize: 'Any size',
    image: '/img/og-image.jpg',
    summary:
      'Have something specific in mind? Abenezer builds personalised itineraries tailored to your interests, pace, and travel dates.',
    highlights: [
      'Fully personalised itinerary',
      'Flexible dates and duration',
      'Private or small group',
      'Any interest: food, faith, history, nature, photography',
      'Direct planning with your guide',
    ],
  },
]

export const stats = [
  { value: '5+', label: 'Years guiding' },
  { value: '500+', label: 'Happy travellers' },
  { value: '5★', label: 'TripAdvisor rating' },
  { value: '10+', label: 'Tour experiences' },
]

export const nav = [
  { label: 'Tours', path: '/tours' },
  { label: 'Your Guide', path: '/guide' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
]
