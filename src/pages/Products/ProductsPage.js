import { useState } from "react";
import "./ProductsPage.css"; // Ensure the CSS file is linked

const herbal_care = [
  {
    title: "Essential oil (Perfumers World of Aroma)",
    content: [
      {
        heading: "Lemongrass",
        points: [
          "Powerful antioxidant",
          "Anti-inflammatory",
          "Antifungal and astringent",
          "Repels flies and insects",
          "Safe on all kinds of flooring - used as a floor cleaning agent",
          "Helps to relieve stress and anxiety (aromatherapy)",
        ],
      },
      {
        heading: "Palmarosa",
        points: [
          "Strongly antimicrobial",
          "Plays an effective role in personal care products (skincare)",
          "Used in aromatherapy for ENT infections and to relieve stress and anxiety",
        ],
      },
      {
        heading: "Vettiver",
        points: [
          "Excellent anti-oxidant and anti-inflammatory property",
          "Highly benficial in personal care products such as skin care and perfumery",
          "Extermination of scars, stretch and other skin marks",
          "Promising ingredient for aromatherapy, has improved alertness, concentration power and brain function",
        ],
      },
    ],
  },
  {
    title: "Hydrosol",
    content: [
      {
        heading: "Rose",
        points: [
          "Hydrates and Moisturizes All Skin Types",
          "Maintains the skin Ph, Skin Toner and controls excess oil",
          "Excellent anti-inflammatory agent, reduce the redness of irritated skin, get rid of acne, dermatitis, and eczema",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Jasmine",
        points: [
          "Natural brightener, enhance skin tone, fades dark spot, promotes complexion",
          "Promotes shiny hair and soothes scalp",
          "Moisturizer, induce sleep and mood uplifter",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Sambangi (Magnolia champaca)",
        points: [
          "Exhibit excellent anti-microbial, anti-inflammatory agent",
          "Hydrates and moisturizes the skin",
          "Excellent hair conditioner, soothing itchy and irridated scalp tissues",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Turmeric",
        points: [
          "Loveable facial toner for all skin types, reducing skin inflammation and aiding in wound healing",
          "Notable antimicrobial, anti-oxidant, anti-inflammatory agent, can reduce acne and scaring",
          "Great remedy for oily skin types, helps to control excess oil",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Vettiver",
        points: [
          "Used in skin care, for clear and glowing skin appearances",
          "Anti-acne, anti aging agent",
          "Ability to relieve stress and helps in skin cell regeneration and boosting the growth of new cells",
          "best used to add flavor & nutrition to food, beverages, deserts &tone skin",
        ],
      },
      {
        heading: "Lemongrass",
        points: [
          "Significant skin toner for oily& acne prone skin ",
          "Antimicrobial, antiseptic, and  strengthens the skin reduces irridation",
        ],
      },
      {
        heading: "Palmarosa",
        points: [
          "Excellent soothing and calming effect on sking after shaving",
          "Aromatherepeutic agent",
        ],
      },
      {
        heading: "Marikolunthu Davana (Artemisia pallens)",
        points: [
          "Antispasmodic, can reduce joint and muscle pain",
          "As antibacterial agent- used in making personal care products",
        ],
      },
      {
        heading: "Pitchi(Jasminum Angustifolium)",
        points: [
          "It has conditioner-like properties that help in nourishing and moisturizing our hair",
          "Natural skintoner used to promote a clear and even complexion",
          "Abitity to soothe, calm and uplift the spirit. Used to room, hair and body sprays",
        ],
      },
      {
        heading: "Mullai(Jasminum auriculatum)",
        points: [
          "Facial toner and skin care products",
          "Aromatic bath and therepeutic potential",
          "Room fresheners and wide cosmetic applications",
        ],
      },
      {
        heading: "Mint",
        points: [
          "Excellent moisturizer, General soothing, cooling, calming effect on skin and hair care",
          "Antiwrinkle and antiaging",
          "Excellent toner for oily and acne prone skin",
        ],
      },
      {
        heading: "Coriander",
        points: [
          "Filled with Vitamin E and C",
          "Natural cleanser, reduces acne and pimples and brightens the skin luster",
          "Aromatherapeutic- pain reliever",
        ],
      },
    ],
  },
  {
    title: "Herbal Extract (Natural, Greeny, Standardized and speciality Extracts)",
    content: [
      {
        heading: "Acacia concinna (Sikakai)",
        points: [
          "Saponins 10-25%",
          "Detergent",
        ],
      },
      {
        heading: "Adathoda vasica (Adathodai)",
        points: [
          "Alkaloids 0.5-1.5%",
          "Expectorant",
        ],
      },
      {
        heading: "Asparagus racemosus (Satavari)",
        points: [
          "Saponins 20",
          "Galactagogue",
        ],
      },
      {
        heading: "Azadiracta indica (Neem)",
        points: [
          "Bitter 2.5%",
          "Blood purifier",
        ],
      },
      {
        heading: "Bacopa monnieri (Brahmi)",
        points: [
          "Saponins 20%",
          "Nerve Tonic, Memory stimulant",
        ],
      },
      {
        heading: "Camellia Sinensis (Green Tea)",
        points: [
          "Polyphenol 45-95%",
          "Antioxidant",
        ],
      },
      {
        heading: "Centella asiatica (Vallarai)",
        points: [
          "Memory booster",
        ],
      },
      {
        heading: "Cuminum cyminum (Cummin)",
        points: [
          "Vol oil 1%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Coriandrum sativum (Coriander)",
        points: [
          "Vol oil 1%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Curcuma longa (Turmeric)",
        points: [
          "Curcuminoids",
          "Anti-inflammatory",
        ],
      },
      {
        heading: "Glycyrrhiza glabra (Licorice)",
        points: [
          "Glycrrhizin 5-40% ",
          "Expectorant",
        ],
      },
      {
        heading: "Hibiscus rosa sinensis (Sembaruthi)",
        points: [
          "Cardio",
        ],
      },
      {
        heading: "Indigofera tinctoria (Neeli)",
        points: [
          "Saponins 5-10%",
          "Antiseptic, Astringent",
        ],
      },
      {
        heading: "Lawsonia alba (Henna)",
        points: [
          "Tannins 5-10%",
          "Astringent, Anti-infla",
        ],
      },
      {
        heading: "Mentha arvensis (Mint)",
        points: [
          "Vol oil 3%",
          "Flavone 2%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Moringa oleifera (Drumstick)",
        points: [
          "Glycosides 5%",
          "Alkaloids 0.5%",
          "Abortifacient, Anti-infla",
        ],
      },
      {
        heading: "Murraya koenigii (Curry leaf)",
        points: [
          "Alkaloids",
          "Antioxidant",
        ],
      },
      {
        heading: "Myrtus caryophyllus (Cloves)",
        points: [
          "Tannins",
          "Volatiles, Flavoring agent",
        ],
      },
      {
        heading: "Nigella Sativa (Black cumin)",
        points: [
          "Saponins 15%",
          "Bitters 3%",
          "Anthelmintic, carminative",
        ],
      },
      {
        heading: "Ocimum sanctum (Tulsi)",
        points: [
          "Tanins 1-7%",
          "Ursolic acid 2%",
          "Stimulant, Immunomodulator",
        ],
      },
      {
        heading: "Piper longum (Tippili)",
        points: [
          "Piperine 5%",
          "Vol.oil 10%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Piper nigrum (Milagu)",
        points: [
          "Piperine 10%",
          "Vol.oil 7%",
          "Carminative, Antiperiodic",
        ],
      },
      {
        heading: "Phyllanthus niruri (Kilanelli)",
        points: [
          "Kidney stone and liver, hair grow",
        ],
      },
      {
        heading: "Sapindus mukorossi (Poondikottai)",
        points: [
          "Saponins 10-20%",
          "Detergent",
        ],
      },
      {
        heading: "Sesamum indicum (Ellu)",
        points: [
          "Proteins 5-15%",
          "Hepatoprotective, antioxidant",
        ],
      },
      {
        heading: "Tringonella foenum graecum (Fenugreek)",
        points: [
          "Saponins 15-40%",
          "Antipemic, Anticholestemic, carminative",
        ],
      },
      {
        heading: "Tribulus terrestris (Nerunjil)",
        points: [
          "Saponins 20-40%",
          "Increase power and strength",
        ],
      },
      {
        heading: "Terminalia chebula (Kadukai)",
        points: [
          "Tannins 20-40%",
        ],
      },
      {
        heading: "Terminalia belerica (Thandrikai)",
        points: [
          "Tannins 20-40%",
        ],
      },
      {
        heading: "Tinospora cardifolia (Seenthal)",
        points: [
          "Bitters 1-3%",
        ],
      },
      {
        heading: "Withania somnifera (Amukkara kizhangu)",
        points: [
          "Alkaloids 1%",
          "Immunomodulator",
        ],
      },
      {
        heading: "Zingiber officinale (Ginger)",
        points: [
          "Vol.oils",
          "Antidiabetic",
        ],
      },
    ],
  },
];

const personal_care_cosemetics = [
  {
    title: "Dry Powders",
    content: [
      {
        heading: "Aswagantha powder",
        points: [
          "Reducing stress", "Improving sleep", "Boosting athletic performance", "Improving memory", "Increasing male fertility",
        ],
      },
      {
        heading: "Amla powder",
        points: [
          "Reduces fine lines and wrinkles", "Improves & beautifies skin and hair", "Optimum eye health", "Immunity booster", "Improves digestion",
        ],
      },
      {
        heading: "Ginger powder",
        points: [
          "Better digestion", "Immunity booster", "Relieves nausea and upset stomach", "Healthier skin", "Weight loss aid",
        ],
      },
      {
        heading: "Henna powder",
        points: [
          "Improves hair growth", "Acts as a conditioner", "Maintains scalp health", "Reduce inflammation", "Prevents dandruff and baldness",
        ],
      },
      {
        heading: "Licorice powder",
        points: [
          "Anti ulcerative and inflammatory", "Cures dandruff, prevents hairfall", "Soothes stomach tissues", "Treats hyperpigmentation", "Anti wrinkle agent",
        ],
      },
      {
        heading: "Moringa powder",
        points: [
          "Controls blood sugar", "Rich in amino acids", "Good for nervous system", "Boosts overall energy level", "Balancing influence on hormones",
        ],
      },
      {
        heading: "Tulsi leaves powder",
        points: [
          "Fights diabetes", "Immunity booster", "Promising herb for skin care", "Anti aging and anti wrinkling agent", "Beats stress and anxiety",
        ],
      },
      {
        heading: "Turmeric powder",
        points: [
          "Decreases cancer risk", "Boosts immunity", "Anti inflammatory & anti oxidant", "Improves digestion and memory", "Anti aging agent",
        ],
      },
      {
        heading: "Tripala powder",
        points: [
          "Supports healthy digestion", "Enhances vision", "Boosts immunity", "Healthy hair and glowing skin", "Blood purifier",
        ],
      },
      {
        heading: "Rose Petals powder",
        points: [
          "Cleanse your skin", "Lightens blemishes and scar", "Anti acne and oil prone skin", "Anti inflammatory and exfoliant", "Improves hair growth and hydrate",
        ],
      },
      {
        heading: "Nalangu mavu powder",
        points: [
          "Natural exfoliate, promote smooth, soft and glowing skin", "Revitalize skin", "Skin moisturizer", "Anti aging and anti wrinkling agent and treats hyper pigmentation", "Anti inflammatory, reducing skin irridations",
        ],
      },
      {
        heading: "Curry leaves powder",
        points: [
          "Rich source of vitamin A,B,C,B2", "Good for respiratory issues", "Treatment of anemia, diabetes, indigestion, obesity, kidney problems, and hair and skin problems", "Boost hair growth, adds shine and bounce", "Improves scalp health",
        ],
      },
    ],
  },
  {
    title: "Others (Reveal the real)",
    content: [
      {
        heading: "Aloe gel",
        points: [
          "Scalp soothing and nourishing",
        ],
      },
      {
        heading: "Aloe powder",
        subheading: "Skin",
        points: [
          "Hydrates the skin",
          "Soothes sunburns and irridation",
          "Moisturizer",
          "Minimises open pore",
          "Beneficial for after shaving and waxing",
        ],
      },
      /*{
        heading: "Aloe liquid",
        points: [
          //no details about it
        ],
      },*/
      {
        heading: "Cucumber gel and liquid",
        points: [
          "Vitamin E, which helps to postpone skin ageing, hydrate the face, and stretch wrinkles.",
          "Antiaging and antiwrinkling",
          "Antiinflammatory",
          "Moisturizer",
          "Nourish, revitalize, rejuvenates skin",
          "Supple and improves the skin texture",
        ],
      },
    ],
  },
];

const animal_care = [
  {
    title: "Chicken (Healthy Chicks; Wealthy Farms)",
    content: [
      {
        heading: "Vcal",
        points: [
          "For growth, weight and activeness", "Helps prevent problems of thin shell and broken egg and controls lameness",
        ],
      },
      {
        heading: "Vpro",
        points: [
          "For better growth and better production in layers", "Better digestion and absorption", "Enhance productivity and performance", "Increase stress tolerance and immunity", "Improves egg hatchability",
        ],
      },
      {
        heading: "Vvita",
        points: [
          "Improves Productivity, egg shell quality", "Optimizes young animal growth", "Stimulates immune system", "Energy booster& increase milk yield",
        ],
      },
      {
        heading: "Vherbcare",
        points: [
          "Improves livability", "Herbs to supports liver, gallbladder and stimulates bile production", "Herbs to anti-inflammatory properties", "Detoxifying and toxin binder herbs", "Helps indigestion and sluggish liver", "Better shell quality and reduced breakages",
        ],
      },
    ],
  },
  {
    title: "Cow",
    content: [
      {
        heading: "Vvinmin",
        points: [
          "Prevents vitamins and minerals deficiency",
          "Improves Milk Production, Enhance Growth & Immune Function, Helps in Overall Growth",
          "For better fertility, rumen health and nutrition absorption",
        ],
      },
      {
        heading: "Vmilk+",
        points: [
          "Assured High and quality milk production", "Improved immunity leads growth, productivity and performance", "Supreme SNF, Protein and taste content in milk", "Better udder health",
        ],
      },
      {
        heading: "Vherbomilk++",
        points: [
          "Assured High and quality milk production", "Improved immunity leads growth, productivity and performance", "Supreme SNF, Protein and taste content in milk", "Better udder health",
        ],
      },
      {
        heading: "Cucumber gel and liquid",
        points: [
          "Vitamin E, which helps to postpone skin ageing, hydrate the face, and stretch wrinkles.",
          "Antiaging and antiwrinkling",
          "Antiinflammatory",
          "Moisturizer",
          "Nourish, revitalize, rejuvenates skin",
          "Supple and improves the skin texture",
        ],
      },
    ],
  },
];

const agri_care = [
  {
    title: "Nature's care for crops",
    content: [
      {
        heading: "Humic",
        points : [],
      },
      {
        heading: "Micronutrients",
        points: [],
      },
      {
        heading: "Seaweed gel",
        points: [],
      },
      {
        heading: "Seaweed powder",
        points: [],
      },
      {
        heading: "Seaweed liquid",
        points: [],
      },
      {
        heading: "Amino acids",
        points: [],
      },
      {
        heading: "Granules organic",
        points: [],
      },
    ],
  },
  {
    title: "Insecticide",
    content: [
      {
        heading: "Neem seed",
        points: [],
      },
      {
        heading: "Pongamia glabra seed",
        points: [],
      },
      {
        heading: "Aamankku seed",
        points: [],
      },
      {
        heading: "Azardictin",
        points: [],
      },
      {
        heading: "karanja oil--seeds",
        points: [],
      },
    ],
  },
];

export default function DryExtracts() {
  const [openHerbalIndex, setOpenHerbalIndex] = useState(null);
  const [openPersonalIndex, setOpenPersonalIndex] = useState(null);
  const [openAnimalIndex, setOpenAnimalIndex] = useState(null);
  const [openAgriIndex, setOpenAgriIndex] = useState(null);

  const toggleHerbalContent = (index) => {
    setOpenHerbalIndex(openHerbalIndex === index ? null : index);
  };

  const togglePersonalContent = (index) => {
    setOpenPersonalIndex(openPersonalIndex === index ? null : index);
  };

  const toggleAnimalContent = (index) => {
    setOpenAnimalIndex(openAnimalIndex === index ? null : index);
  };

  const toggleAgriContent = (index) => {
    setOpenAgriIndex(openAgriIndex === index ? null : index);
  };

  return (
    <div className="appli">
      
      <div className="a relative text-center py-6 overflow-hidden">
        {/* Banana Leaf Background */}
        <div className="relative inline-block px-10 py-6 bg-green-700 rounded-full shadow-lg leaf-bg">
          {/* About Us Title */}
          <h1 className="typing text-5xl font-extrabold text-white tracking-wide drop-shadow-lg nfont">
            Herbal Care
          </h1>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 10 }).map((_, index) => (
            <span
              key={index}
              className="absolute text-green-500 text-xl opacity-70 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                fontSize: `${Math.random() * 1.5 + 1}rem`,
              }}
            >
              🍃
              🍂
            </span>
          ))}
        </div>
        </div>   
    <div className="productcontainer">
      
      {extracts.map((extract, index) => (
        <div key={index} className="productfield">
          <button onClick={() => toggleAgriContent(index)}>{extract.title}</button>
          {openAgriIndex === index && (
            <div className="productcontent active">
              {extract.content.map((section, i) => (
                <div key={i}>
                  <h3 className="productheading">{section.heading}</h3>
                  <ul>
                    {section.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    </div>
  );
}
