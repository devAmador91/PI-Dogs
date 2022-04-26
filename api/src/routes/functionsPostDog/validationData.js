const validationData = (name, height, weight, yearsLife, temperament, img, res) => {
  if ((name, height, weight, yearsLife, temperament, img)) {

    if (typeof (name, height, weight, yearsLife, img) !== "string") {
      return res
        .status(400)
        .json({ msg: "Type data not valid", error: 400 });
    }

    if(!Array.isArray(temperament)){
        return res.status(400).json({msg: "Type data not valid" ,error: 400});
    }

  } else {
    return res.status(400).json({ msg: "Some data is null" });
  }
};

module.exports = validationData;
