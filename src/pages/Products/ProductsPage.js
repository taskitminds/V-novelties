import { useState } from "react";
import "./ProductsPage.css"; // Ensure the CSS file is linked

const extracts = [
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
    title: "Hydrosol (Natural, Greeny, Standardized and speciality Extracts)",
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
          "Nerve Tonic",
          "Memory stimulant",
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
          "Carminative",
          "stimulant",
        ],
      },
      {
        heading: "Coriandrum sativum (Coriander)",
        points: [
          "Vol oil 1%",
          "Carminative",
          "stimulant",
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
          "Antiseptic", 
          "Astringent",
        ],
      },//here after change the content
      {
        heading: "Indigofera tinctoria (Neeli)",
        points: [
          "Saponins 5-10%",
          "Antiseptic", 
          "Astringent",
        ],
      },
      {
        heading: "Indigofera tinctoria (Neeli)",
        points: [
          "Saponins 5-10%",
          "Antiseptic", 
          "Astringent",
        ],
      },
      {
        heading: "Indigofera tinctoria (Neeli)",
        points: [
          "Saponins 5-10%",
          "Antiseptic", 
          "Astringent",
        ],
      },
      {
        heading: "Indigofera tinctoria (Neeli)",
        points: [
          "Saponins 5-10%",
          "Antiseptic", 
          "Astringent",
        ],
      },

    ],
  },
  {
    title: "Carum copticum (Ajwain)",
    content: [
      {
        heading: "Ajwain",
        points: ["Description for Ajwain..."],
      },
    ],
  },
];

export default function DryExtracts() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleContent = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="productcontainer">
      <h2 className="producttitle">HERBAL CARE</h2>
      {extracts.map((extract, index) => (
        <div key={index} className="productfield">
          <button onClick={() => toggleContent(index)}>{extract.title}</button>
          {openIndex === index && (
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
  );
}
