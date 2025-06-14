import { useState } from "react";
import "./ProductsPage.css"; // Ensure the CSS file is linked
import { ChevronDown, ChevronUp } from "lucide-react";
import essential from "../../assets/images/products/essential.webp"
import hydrosol from "../../assets/images/products/hydrosol.webp"
import herbal from "../../assets/images/products/herbal.webp"
import dry from "../../assets/images/products/dry.webp"
import liquid from "../../assets/images/products/liquid.webp"
import chicks from "../../assets/images/products/chicks.webp"
import cow from "../../assets/images/products/cow.webp"
import crop from "../../assets/images/products/crop.webp"
import insecticide from "../../assets/images/products/insecticide.webp"

import lemongrass from "../../assets/images/products/herbal/lemongrass.webp";
import palmarosa from "../../assets/images/products/herbal/palmarosa.webp";
import vettiver from "../../assets/images/products/herbal/vettiver.webp";
import rose from "../../assets/images/products/herbal/rose.webp";
import jasmine from "../../assets/images/products/herbal/jasmine.webp";
import sambangi from "../../assets/images/products/herbal/sambangi.webp";
import turmeric from "../../assets/images/products/herbal/turmeric.webp";
import marikolunthu from "../../assets/images/products/herbal/marikolunthu.webp";
import pitchi from "../../assets/images/products/herbal/pitchi.webp";
import mullai from "../../assets/images/products/herbal/mullai.webp";
import mint from "../../assets/images/products/herbal/mint.webp";
import coriander from "../../assets/images/products/herbal/coriander.webp";
import sikakai from "../../assets/images/products/herbal/sikakai.webp";
import adathodai from "../../assets/images/products/herbal/adathodai.webp";
import satavari from "../../assets/images/products/herbal/satavari.webp";
import neem from "../../assets/images/products/herbal/neem.webp";
import brahmi from "../../assets/images/products/herbal/brahmi.webp";
import greenTea from "../../assets/images/products/herbal/greenTea.webp";
import cumin from "../../assets/images/products/herbal/cumin.webp";
import vallarai from "../../assets/images/products/herbal/vallarai.webp";
import licorice from "../../assets/images/products/herbal/licorice.webp";
import sembaruthi from "../../assets/images/products/herbal/sembaruthi.webp";
import neeli from "../../assets/images/products/herbal/neeli.webp";
import henna from "../../assets/images/products/herbal/henna.webp";
import drumstick from "../../assets/images/products/herbal/drumstick.webp";
import curryLeaves from "../../assets/images/products/herbal/curryLeaves.webp";
import cloves from "../../assets/images/products/herbal/cloves.webp";
import blackcumin from "../../assets/images/products/herbal/blackcumin.webp";
import tulsi from "../../assets/images/products/herbal/tulsi.webp";
import tipili from "../../assets/images/products/herbal/tippili.webp";
import milagu from "../../assets/images/products/herbal/milagu.webp";
import kilanelli from "../../assets/images/products/herbal/kilanelli.webp";
import poondikottai from "../../assets/images/products/herbal/poondikottai.webp";
import ellu from "../../assets/images/products/herbal/ellu.webp";
import fenugreek from "../../assets/images/products/herbal/fenugreek.webp";
import nerunjil from "../../assets/images/products/herbal/nerunjil.webp";
import kadukai from "../../assets/images/products/herbal/kadukai.webp";
import thandrikai from "../../assets/images/products/herbal/thandrikai.webp";
import seenthal from "../../assets/images/products/herbal/seenthal.webp";
import amukkarakizhangu from "../../assets/images/products/herbal/amukkarakizhangu.webp";
import ginger from "../../assets/images/products/herbal/ginger.webp";
import Granules_organic from "../../assets/images/products/agri/Granulesorganic.webp";
/*Personal Care*/
import aswaganthapowder from "../../assets/images/products/powders/aswaganthapowder.webp";
import amlapowder from "../../assets/images/products/powders/amla.webp";
import gingerpowder from "../../assets/images/products/powders/ginger.webp";
import hennaPowder from "../../assets/images/products/powders/henna.webp";
import licoricPowder from "../../assets/images/products/powders/licorice.webp";
import moringapowder from "../../assets/images/products/powders/moringa.webp";
import tulsiPowder from "../../assets/images/products/powders/tulsi.webp";
import turmericPowder from "../../assets/images/products/powders/turmeric.webp";
import tripalapowder from "../../assets/images/products/powders/tripala.webp";
import rosePetalPowder from "../../assets/images/products/powders/rosepetal.webp";
import nalanguMavuPowder from "../../assets/images/products/powders/nalanguMavu.webp";
import curryLeavesPowder from "../../assets/images/products/powders/curryLeaves.webp";
import aloegel from "../../assets/images/products/powders/aloeGel.webp";
import aloePowder from "../../assets/images/products/powders/aloePowder.webp";
import cucumbergel from "../../assets/images/products/powders/cucumberGel.webp";

/*agri care*/
import seaweedgel from "../../assets/images/products/agri/seaweedgel.webp";
import seaweedpowder from "../../assets/images/products/agri/seaweedpowder.webp";
import seaweedliquid from "../../assets/images/products/agri/seaweedliquid.webp";
import neemseed from "../../assets/images/products/agri/neemseed.webp";
import pongamia from "../../assets/images/products/agri/pongamia.webp";
import aamankku from "../../assets/images/products/agri/aamankku.webp";
import azardictin from "../../assets/images/products/agri/azardictin.webp";
import karanja from "../../assets/images/products/agri/karanja.webp";


import { image } from "framer-motion/client";

const herbal_care = [
  {
    image: essential,
    title: "Essential oil (Perfumers World of Aroma)",
    content: [
      {
        heading: "Lemongrass",
        image: lemongrass,
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
        image: palmarosa,
        points: [
          "Strongly antimicrobial",
          "Plays an effective role in personal care products (skincare)",
          "Used in aromatherapy for ENT infections and to relieve stress and anxiety",
        ],
      },
      {
        heading: "Vettiver",
        image: vettiver,
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
    image: hydrosol,
    title: "Hydrosol",
    content: [
      {
        heading: "Rose",
        image: rose,
        points: [
          "Hydrates and Moisturizes All Skin Types",
          "Maintains the skin Ph, Skin Toner and controls excess oil",
          "Excellent anti-inflammatory agent, reduce the redness of irritated skin, get rid of acne, dermatitis, and eczema",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Jasmine",
        image: jasmine,
        points: [
          "Natural brightener, enhance skin tone, fades dark spot, promotes complexion",
          "Promotes shiny hair and soothes scalp",
          "Moisturizer, induce sleep and mood uplifter",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Sambangi (Magnolia champaca)",
        image: sambangi,
        points: [
          "Exhibit excellent anti-microbial, anti-inflammatory agent",
          "Hydrates and moisturizes the skin",
          "Excellent hair conditioner, soothing itchy and irridated scalp tissues",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Turmeric",
        image: turmeric,
        points: [
          "Loveable facial toner for all skin types, reducing skin inflammation and aiding in wound healing",
          "Notable antimicrobial, anti-oxidant, anti-inflammatory agent, can reduce acne and scaring",
          "Great remedy for oily skin types, helps to control excess oil",
          "Replacement to water in many personal and health care products",
        ],
      },
      {
        heading: "Vettiver",
        image: vettiver,
        points: [
          "Used in skin care, for clear and glowing skin appearances",
          "Anti-acne, anti aging agent",
          "Ability to relieve stress and helps in skin cell regeneration and boosting the growth of new cells",
          "best used to add flavor & nutrition to food, beverages, deserts &tone skin",
        ],
      },
      {
        heading: "Lemongrass",
        image: lemongrass,
        points: [
          "Significant skin toner for oily& acne prone skin ",
          "Antimicrobial, antiseptic, and  strengthens the skin reduces irridation",
        ],
      },
      {
        heading: "Palmarosa",
        image: palmarosa,
        points: [
          "Excellent soothing and calming effect on sking after shaving",
          "Aromatherepeutic agent",
        ],
      },
      {
        heading: "Marikolunthu Davana (Artemisia pallens)",
        image: marikolunthu,
        points: [
          "Antispasmodic, can reduce joint and muscle pain",
          "As antibacterial agent- used in making personal care products",
        ],
      },
      {
        heading: "Pitchi(Jasminum Angustifolium)",
        image: pitchi,
        points: [
          "It has conditioner-like properties that help in nourishing and moisturizing our hair",
          "Natural skintoner used to promote a clear and even complexion",
          "Abitity to soothe, calm and uplift the spirit. Used to room, hair and body sprays",
        ],
      },
      {
        heading: "Mullai(Jasminum auriculatum)",
        image: mullai,
        points: [
          "Facial toner and skin care products",
          "Aromatic bath and therepeutic potential",
          "Room fresheners and wide cosmetic applications",
        ],
      },
      {
        heading: "Mint",
        image: mint,
        points: [
          "Excellent moisturizer, General soothing, cooling, calming effect on skin and hair care",
          "Antiwrinkle and antiaging",
          "Excellent toner for oily and acne prone skin",
        ],
      },
      {
        heading: "Coriander",
        image: coriander,
        points: [
          "Filled with Vitamin E and C",
          "Natural cleanser, reduces acne and pimples and brightens the skin luster",
          "Aromatherapeutic- pain reliever",
        ],
      },
    ],
  },
  {
    image: herbal,
    title: "Herbal Extract (Natural, Greeny, Standardized and speciality Extracts)",
    content: [
      {
        heading: "Acacia concinna (Sikakai)",
        image: sikakai,
        points: [
          "Saponins 10-25%",
          "Detergent",
        ],
      },
      {
        heading: "Adathoda vasica (Adathodai)",
        image: adathodai,  
        points: [
          "Alkaloids 0.5-1.5%",
          "Expectorant",
        ],
      },
      {
        heading: "Asparagus racemosus (Satavari)",
        image: satavari,
        points: [
          "Saponins 20",
          "Galactagogue",
        ],
      },
      {
        heading: "Azadiracta indica (Neem)",
        image: neem,
        points: [
          "Bitter 2.5%",
          "Blood purifier",
        ],
      },
      {
        heading: "Bacopa monnieri (Brahmi)",
        image: brahmi,
        points: [
          "Saponins 20%",
          "Nerve Tonic, Memory stimulant",
        ],
      },
      {
        heading: "Camellia Sinensis (Green Tea)",
        image: greenTea,
        points: [
          "Polyphenol 45-95%",
          "Antioxidant",
        ],
      },
      {
        heading: "Centella asiatica (Vallarai)",
        image: vallarai,
        points: [
          "Memory booster",
        ],
      },
      {
        heading: "Cuminum cyminum (Cummin)",
        image: cumin,
        points: [
          "Vol oil 1%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Coriandrum sativum (Coriander)",
        image: coriander,
        points: [
          "Vol oil 1%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Curcuma longa (Turmeric)",
        image: turmeric,
        points: [
          "Curcuminoids",
          "Anti-inflammatory",
        ],
      },
      {
        heading: "Glycyrrhiza glabra (Licorice)",
        image: licorice,
        points: [
          "Glycrrhizin 5-40% ",
          "Expectorant",
        ],
      },
      {
        heading: "Hibiscus rosa sinensis (Sembaruthi)",
        image: sembaruthi,
        points: [
          "Cardio",
        ],
      },
      {
        heading: "Indigofera tinctoria (Neeli)",
        image: neeli, 
        points: [
          "Saponins 5-10%",
          "Antiseptic, Astringent",
        ],
      },
      {
        heading: "Lawsonia alba (Henna)",
        image: henna,
        points: [
          "Tannins 5-10%",
          "Astringent, Anti-infla",
        ],
      },
      {
        heading: "Mentha arvensis (Mint)",
        image: mint,
        points: [
          "Vol oil 3%",
          "Flavone 2%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Moringa oleifera (Drumstick)",
        image: drumstick,
        points: [
          "Glycosides 5%",
          "Alkaloids 0.5%",
          "Abortifacient, Anti-infla",
        ],
      },
      {
        heading: "Murraya koenigii (Curry leaf)",
        image: curryLeaves,
        points: [
          "Alkaloids",
          "Antioxidant",
        ],
      },
      {
        heading: "Myrtus caryophyllus (Cloves)",
        image: cloves,
        points: [
          "Tannins",
          "Volatiles, Flavoring agent",
        ],
      },
      {
        heading: "Nigella Sativa (Black cumin)",
        image: blackcumin,
        points: [
          "Saponins 15%",
          "Bitters 3%",
          "Anthelmintic, carminative",
        ],
      },
      {
        heading: "Ocimum sanctum (Tulsi)",
        image: tulsi,
        points: [
          "Tanins 1-7%",
          "Ursolic acid 2%",
          "Stimulant, Immunomodulator",
        ],
      },
      {
        heading: "Piper longum (Tippili)",
        image: tipili,
        points: [
          "Piperine 5%",
          "Vol.oil 10%",
          "Carminative, stimulant",
        ],
      },
      {
        heading: "Piper nigrum (Milagu)",
        image: milagu,
        points: [
          "Piperine 10%",
          "Vol.oil 7%",
          "Carminative, Antiperiodic",
        ],
      },
      {
        heading: "Phyllanthus niruri (Kilanelli)",
        image: kilanelli,
        points: [
          "Kidney stone and liver, hair grow",
        ],
      },
      {
        heading: "Sapindus mukorossi (Poondikottai)",
        image: poondikottai,
        points: [
          "Saponins 10-20%",
          "Detergent",
        ],
      },
      {
        heading: "Sesamum indicum (Ellu)",
        image: ellu,
        points: [
          "Proteins 5-15%",
          "Hepatoprotective, antioxidant",
        ],
      },
      {
        heading: "Tringonella foenum graecum (Fenugreek)",
        image: fenugreek,
        points: [
          "Saponins 15-40%",
          "Antipemic, Anticholestemic, carminative",
        ],
      },
      {
        heading: "Tribulus terrestris (Nerunjil)",
        image: nerunjil,
        points: [
          "Saponins 20-40%",
          "Increase power and strength",
        ],
      },
      {
        heading: "Terminalia chebula (Kadukai)",
        image: kadukai,
        points: [
          "Tannins 20-40%",
        ],
      },
      {
        heading: "Terminalia belerica (Thandrikai)",
        image: thandrikai,
        points: [
          "Tannins 20-40%",
        ],
      },
      {
        heading: "Tinospora cardifolia (Seenthal)",
        image: seenthal,
        points: [
          "Bitters 1-3%",
        ],
      },
      {
        heading: "Withania somnifera (Amukkara kizhangu)",
        image: amukkarakizhangu,
        points: [
          "Alkaloids 1%",
          "Immunomodulator",
        ],
      },
      {
        heading: "Zingiber officinale (Ginger)",
        image: ginger,
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
    image: dry,
    title: "Dry Powders",
    content: [
      {
        heading: "Aswagantha powder",
        image: aswaganthapowder,
        points: [
          "Reducing stress", "Improving sleep", "Boosting athletic performance", "Improving memory", "Increasing male fertility",
        ],
      },
      {
        heading: "Amla powder",
        image: amlapowder,
        points: [
          "Reduces fine lines and wrinkles", "Improves & beautifies skin and hair", "Optimum eye health", "Immunity booster", "Improves digestion",
        ],
      },
      {
        heading: "Ginger powder",
        image: gingerpowder,
        points: [
          "Better digestion", "Immunity booster", "Relieves nausea and upset stomach", "Healthier skin", "Weight loss aid",
        ],
      },
      {
        heading: "Henna powder",
        image: hennaPowder,
        points: [
          "Improves hair growth", "Acts as a conditioner", "Maintains scalp health", "Reduce inflammation", "Prevents dandruff and baldness",
        ],
      },
      {
        heading: "Licorice powder",
        image: licoricPowder,
        points: [
          "Anti ulcerative and inflammatory", "Cures dandruff, prevents hairfall", "Soothes stomach tissues", "Treats hyperpigmentation", "Anti wrinkle agent",
        ],
      },
      {
        heading: "Moringa powder",
        image: moringapowder,
        points: [
          "Controls blood sugar", "Rich in amino acids", "Good for nervous system", "Boosts overall energy level", "Balancing influence on hormones",
        ],
      },
      {
        heading: "Tulsi leaves powder",
        image: tulsiPowder,
        points: [
          "Fights diabetes", "Immunity booster", "Promising herb for skin care", "Anti aging and anti wrinkling agent", "Beats stress and anxiety",
        ],
      },
      {
        heading: "Turmeric powder",
        image: turmericPowder,
        points: [
          "Decreases cancer risk", "Boosts immunity", "Anti inflammatory & anti oxidant", "Improves digestion and memory", "Anti aging agent",
        ],
      },
      {
        heading: "Tripala powder",
        image: tripalapowder,
        points: [
          "Supports healthy digestion", "Enhances vision", "Boosts immunity", "Healthy hair and glowing skin", "Blood purifier",
        ],
      },
      {
        heading: "Rose Petals powder",
        image: rosePetalPowder,
        points: [
          "Cleanse your skin", "Lightens blemishes and scar", "Anti acne and oil prone skin", "Anti inflammatory and exfoliant", "Improves hair growth and hydrate",
        ],
      },
      {
        heading: "Nalangu mavu powder",
        image: nalanguMavuPowder,
        points: [
          "Natural exfoliate, promote smooth, soft and glowing skin", "Revitalize skin", "Skin moisturizer", "Anti aging and anti wrinkling agent and treats hyper pigmentation", "Anti inflammatory, reducing skin irridations",
        ],
      },
      {
        heading: "Curry leaves powder",
        image: curryLeavesPowder,
        points: [
          "Rich source of vitamin A,B,C,B2", "Good for respiratory issues", "Treatment of anemia, diabetes, indigestion, obesity, kidney problems, and hair and skin problems", "Boost hair growth, adds shine and bounce", "Improves scalp health",
        ],
      },
    ],
  },
  {
    image: liquid,
    title: "Gel and Powders",
    content: [
      {
        heading: "Aloe gel",
        image: aloegel,
        points: [
          "Scalp soothing and nourishing",
        ],
      },
      {
        heading: "Aloe powder",
        image: aloePowder,
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
        image: cucumbergel,
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
    image: chicks,
    title: "Chicken (Healthy Chicks; Wealthy Farms)",
    content: [
      {
        heading: "Vcal",
        image: "https://imgs.search.brave.com/hTo7THhSUvzdIDurhTKC5xBjRH4bLl4XI4bN_00Izl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODcy/NjQ2Mjc2L3Bob3Rv/L2NoaWNrZW4tc3Vu/c2V0LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz02QVMxZzE5/MmR3OUM4WXpRYkJH/ZUNYT1M0OU4yTUlU/SW9XellnRUtDeEM4/PQ",
        points: [
          "For growth, weight and activeness", "Helps prevent problems of thin shell and broken egg and controls lameness",
        ],
      },
      {
        heading: "Vpro",
        image: "https://imgs.search.brave.com/YFTIh1xGfBmwmfM3DFaMc_hxUP66ik3QhHOZXlcvpRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTQw/NTAyMDE4L3Bob3Rv/L2JhYnktY2hpY2tl/bnMtYXQtdGhlLWZh/cm0tZHJpbmtpbmct/d2F0ZXIuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVJTbE9M/MDRFVllpSU54SlFr/bWQ2V2x5QkFfNFRs/TmpGU2xjaEh4eTF2/Q0E9",
        points: [
          "For better growth and better production in layers", "Better digestion and absorption", "Enhance productivity and performance", "Increase stress tolerance and immunity", "Improves egg hatchability",
        ],
      },
      {
        heading: "Vvita",
        image: "https://imgs.search.brave.com/JfKzN7XlsHS5DBle2P0nBDlBTqHiGE28QHkSiEPa-XM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTc3/OTYwMzEwL3Bob3Rv/L2NoaWNrZW5zLWVh/dGluZy1pbi1iYWNr/Z3JvdW5kLW9mLW11/bHRpLWNvbG9yZWQt/ZWdncy5qcGc_Yj0x/JnM9NjEyeDYxMiZ3/PTAmaz0yMCZjPUpp/N2hUdEw5eHF0dUtq/YmctbnZKNGMydkJV/LWxMZ1dCZEV3c2Vo/SzlKVnc9",
        points: [
          "Improves Productivity, egg shell quality", "Optimizes young animal growth", "Stimulates immune system", "Energy booster& increase milk yield",
        ],
      },
      {
        heading: "Vherbcare",
        image: "https://imgs.search.brave.com/WbG-W5FjhTyKp_jrU_LZeYdwV05DF7xyRAIjWrFCbKk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTEz/MDQ2NTUyL3N0b2Nr/LXBob3RvLWNoaWNr/ZW5zLW9uLXRyYWRp/dGlvbmFsLWZyZWUt/cmFuZ2UtcG91bHRy/eS1mYXJt",
        points: [
          "Improves livability", "Herbs to supports liver, gallbladder and stimulates bile production", "Herbs to anti-inflammatory properties", "Detoxifying and toxin binder herbs", "Helps indigestion and sluggish liver", "Better shell quality and reduced breakages",
        ],
      },
    ],
  },
  {
    image: cow,
    title: "Cow",
    content: [
      {
        heading: "Vvinmin",
        image: "https://imgs.search.brave.com/1Lzcx2DLHGcAeJPNH9ayaUXy-ZkTesNAE09HcuD31wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjgy/MTcyNjEvc3RvY2st/cGhvdG8tY293LWFu/ZC1jYWxm",
        points: [
          "Prevents vitamins and minerals deficiency",
          "Improves Milk Production, Enhance Growth & Immune Function, Helps in Overall Growth",
          "For better fertility, rumen health and nutrition absorption",
        ],
      },
      {
        heading: "Vmilk+",
        image: "https://imgs.search.brave.com/yePwQf5YXBw5Tiba3UTf9cU8rRE-Ga-m6uqAZFr7eVo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9mYXJtLWZyZXNo/LW1pbGstcHJvZmVz/c2lvbmFsLWNhcHR1/cmVzLW1pbGstYmVp/bmctY29sbGVjdGVk/LWZyb20tZGFpcnkt/Y293cy1mYXJtLWVt/cGhhc2l6aW5nLWZy/ZXNobmVzcy1xdS1h/aS1nZW5lcmF0ZWQt/aWxsdXN0cmF0aW9u/Xzg2NjY2My0yNTA5/OS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw",
        points: [
          "Assured High and quality milk production", "Improved immunity leads growth, productivity and performance", "Supreme SNF, Protein and taste content in milk", "Better udder health",
        ],
      },
      {
        heading: "Vherbomilk++",
        image: "https://imgs.search.brave.com/KuA5HCJ9v-7htmR5W242e7Wtlpfi54ZSLsOzkZjg0aw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDIwMzQz/MDQuanBn",
        points: [
          "Assured High and quality milk production", "Improved immunity leads growth, productivity and performance", "Supreme SNF, Protein and taste content in milk", "Better udder health",
        ],
      },
    ],
  },
];

const agri_care = [
  {
    image: crop,
    title: "Nature's care for crops",
    content: [
      {
        heading: "Humic",
        points: [],
      },
      {
        heading: "Micronutrients",
        points: [],
      },
      {
        heading: "Amino acids",
        points: [],
      },
      {
        heading: "Granules organic",
        image: Granules_organic,
        points: [],
      },
      {
        heading: "Seaweed gel",
        image: seaweedgel,
        points: [],
      },
      {
        heading: "Seaweed powder",
        image: seaweedpowder,
        points: [],
      },
      {
        heading: "Seaweed liquid",
        image: seaweedliquid,
        points: [],
      },
    ],
  },
  {
    image: insecticide,
    title: "Insecticide",
    content: [
      {
        heading: "Neem seed",
        image: neemseed,
        points: [],
      },
      {
        heading: "Pongamia glabra seed",
        image: pongamia,
        points: [],
      },
      {
        heading: "Aamankku seed",
        image: aamankku,
        points: [],
      },
      {
        heading: "Azardictin",
        image: azardictin,
        points: [],
      },
      {
        heading: "karanja oil--seeds",
        image: karanja,
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

  const toggleContent = (index, setIndex, currentIndex) => {
    setIndex(currentIndex === index ? null : index);
  };

  const renderContentGrid = (extract) => (
    <div className="productcontent active">
      {/* Optional top image grid if you still want the separate group of images */}
      {extract.dropdownImages && (
        <div className="dropdown-grid">
          {extract.dropdownImages.map((imgSrc, k) => (
            <div key={k} className="dropdown-grid-item">
              <img src={imgSrc} alt={`sub-${k}`} className="dropdown-product-image" />
            </div>
          ))}
        </div>
      )}

      {/* Text with individual images */}
      <div className="dropdown-grid">
        {extract.content.map((section, i) => (
          <div key={i} className="dropdown-grid-item">
            {section.image && (
              <img
                src={section.image}
                alt={section.heading}
                className="dropdown-product-image"
              />
            )}
            <h3 className="productheading">{section.heading}</h3>
            <ul>
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );


  return (
    <div className="body mobile-bg">
      <div className="productcontainer">
        {/* HERBAL CARE */}
        <h2 className="producttitle1">HERBAL CARE</h2>
        {herbal_care.map((extract, index) => (
          <div key={index} className="productfield">
            <button
              onClick={() => toggleContent(index, setOpenHerbalIndex, openHerbalIndex)}
              className="productbutton"
            >
              <img src={extract.image} alt={extract.title} className="product-image" /><br />
              {extract.title}
              {openHerbalIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openHerbalIndex === index && renderContentGrid(extract)}
          </div>
        ))}

        {/* PERSONAL CARE */}
        <h2 className="producttitle">PERSONAL CARE COSMETICS</h2>
        {personal_care_cosemetics.map((extract, index) => (
          <div key={index} className="productfield">
            <button
              onClick={() => toggleContent(index, setOpenPersonalIndex, openPersonalIndex)}
              className="productbutton"
            >
              <img src={extract.image} alt={extract.title} className="product-image" />
              {extract.title}
              {openPersonalIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openPersonalIndex === index && renderContentGrid(extract)}
          </div>
        ))}

        {/* ANIMAL CARE */}
        <h2 className="producttitle">ANIMAL CARE</h2>
        {animal_care.map((extract, index) => (
          <div key={index} className="productfield">
            <button
              onClick={() => toggleContent(index, setOpenAnimalIndex, openAnimalIndex)}
              className="productbutton"
            >
              <img src={extract.image} alt={extract.title} className="product-image" />
              {extract.title}
              {openAnimalIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openAnimalIndex === index && renderContentGrid(extract)}
          </div>
        ))}

        {/* AGRI CARE */}
        <h2 className="producttitle">AGRI CARE</h2>
        <center>
          <h3 className="productsubheading">Green chemistry Greener fields</h3>
        </center>
        {agri_care.map((extract, index) => (
          <div key={index} className="productfield">
            <button
              onClick={() => toggleContent(index, setOpenAgriIndex, openAgriIndex)}
              className="productbutton"
            >
              <img src={extract.image} alt={extract.title} className="product-image" />
              {extract.title}
              {openAgriIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openAgriIndex === index && renderContentGrid(extract)}
          </div>
        ))}
      </div>
    </div>
  );
}
