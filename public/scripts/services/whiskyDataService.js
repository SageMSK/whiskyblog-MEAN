'use strict';

angular.module('myApp')

.factory('fpWhiskyFactory', () => {

  let whiskyFac = {};

  let whiskies = [
    {
      _id: 0,
      name: "Highland Park 12 years",
      image: "images/hlp12.jpg",
      price: 36.16,
      year: 12,
      nose: "Fresh, clean and very aromatic. Floral notes abound the senses with a light grassiness. Notes of creamy manuka honey and a touch of juicy citrus with cream and a well-balanced sweetness.",
      taste: "Rather full with a pleasant subtlety to the depths. Lurking somewhere in the substratum a grilled orange lies. Notes of granary toast and green tea with jasmine. A touch of sweetness.",
      finish: "Quite long with peppered spicy and wood shavings.",
      description: "The entry level bottling from Scotland's most northerly distillery, Highland Park, aged for 12 years with plenty of citrus and green notes.  Source: masterofmalt.com"
    },
    {
      _id: 1,
      name: "Lagavulin 16 Year Old",
      image: "images/laga16.jpg",
      price: 55.38,
      year: 16,
      nose: "More like Lapsang Souchong tea than Lapsang Souchong! One of the smokiest noses from Islay. It's big, very, very concentrated, and redolent of iodine, sweet spices, good, mature sherry and creamy vanilla. Stunning.",
      taste: "Very thick and rich. A massive mouthful of malt and sherry with good fruity sweetness, but also a wonderful sweetness. Big, powerful peat and oak.",
      finish: "Long, spicy finish, figs, dates, peat smoke, vanilla.",
      description: "A much sought-after single malt with the massive peat-smoke that's typical of southern Islay - but also offering richness and a dryness that turns it into a truly interesting dram. The 16 year old has become a benchmark Islay dram from the Lagavulin distillery. Source: masterofmalt.com"
    },
    {
      _id: 2,
      name: "Laphroaig Quarter Cask",
      image: "images/lqc.jpg",
      price: 45.29,
      year: 0,
      nose: "Oily and buttery nose, with toffee, nuttiness, hickory, bicarbonate of soda, rum and raisin ice cream and zest.",
      taste: "Big rush of sweetness, in fact it’s an explosion of sweetness, with fiery chilli heat, TCP, sweet cereals and a touch of cola syrup.",
      finish: "Medium length, but becomes fruity, with custard and cigar smoke.",
      description: "Released in 2004, this bottling was aged for around five years before being finished in a quarter cask for several months, the size of the cask is quite small, thus does not require such a long maturation. This remains a truly great achievement from Laphroaig. Source: masterofmalt.com"
    }
  ];

  whiskyFac.getWhiskies = () => {
    return whiskies;
  };

  whiskyFac.getWhisky = (index) => {
    return whiskies[index];
  };

  return whiskyFac;
})

.factory('ReviewFactory', () => {
  let reviewFac = {};

  let listWhisky = [
    {
      _id: 0,
      name: "Yamazaki 12 Year Old",
      image: "images/lqc.jpg",
      price: 106.22,
      year: 12,
      nose: "Good body with plenty of nut oils and zest, a pleasant floral character with a little tropical fruit and a rooty note.",
      taste: "Smooth and soft with good sweetness and winter spice. A lovely citrus note develops with more tropical fruit notes and a little rum.",
      finish: "Medium length, but becomes fruity, with custard and cigar smoke.",
      description: "This 12 year old from Yamazaki first came onto the market in 1984 and was the first seriously marketed Japanese single malt whisky. Source: masterofmalt.com",
      date: new Date().toISOString()
    }
  ];

  reviewFac.getList = () => {
    return listWhisky;
  };

  reviewFac.getListItem = (index) => {
    return listWhisky[index];
  };

  return reviewFac;
});
