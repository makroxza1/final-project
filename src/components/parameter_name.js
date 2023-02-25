
const parameters_name_type = [
    { funcName: "cutandfill", parameter_name: ["manyfoundation", "wide", "deep", "long"],type:[0,0,0,0] },
    { funcName: "coarsesand", parameter_name: ["manyfoundation", "wide", "long", "deep"],type:[0,0,0,0] },
    { funcName: "roughconcrete", parameter_name: ["manyfoundation", "wide", "long", "deep"],type:[0,0,0,0] },
    { funcName: "structuralconcrete", parameter_name: ["manyfoundation", "wide", "long", "deep"],type:[0,0,0,0] },
    { funcName: "Shutterboards", parameter_name: ["manyfoundation", "wide", "long", "deep", "numberH"],type:[0,0,0,0,0] },
    { funcName: "concretegroundColumn_main", parameter_name: ["manyfoundation", "wide", "long", "deep", "manycolunm_main", "hight"],type:[0,0,0,0,0,0] },
    { funcName: "concretequantity_main", parameter_name: ["manyfoundation", "wide", "long", "deep", "hight", "manycolunm_main"],type:[0,0,0,0,0,0] },
    { funcName: "Shutterboardscolunm_main", parameter_name: ["manyfoundation", "wide", "long", "deep", "hight", "manycolunm_main", "numberH"],type:[0,0,0,0,0,0,0] },
    { funcName: "concretegroundColumn", parameter_name: ["manyfoundation", "wide", "long", "deep", "hight", "manycolunm"],type:[0,0,0,0,0,0] },
    { funcName: "concretequantity", parameter_name: ["manyfoundation", "wide", "long", "deep", "hight", "manycolunm"],type:[0,0,0,0,0,0] },
    { funcName: "Shutterboardscolunm", parameter_name: ["manyfoundation", "wide", "long", "deep", "hight", "manycolunm", "numberH"],type:[0,0,0,0,0,0,0] },
    { funcName: "concreatebeam", parameter_name: ["wide", "deepbeam", "longbeam"],type:[0,0,0] },
    { funcName: "Shutterboardsbeam", parameter_name: ["deepbeam", "longbeam", "numberH"],type:[0,0,0] },
    { funcName: "floor_S", parameter_name: ["areasfloor", "numberH"],type:[0,0] },
    { funcName: "floor_PS", parameter_name: ["area_all"],type:[0] },
    { funcName: "getAngleDeg", parameter_name: ["ax", "ay", "bx", "by"],type:[0,0,0,0] },
    { funcName: "hipped_roof", parameter_name: ["tiebeam", "tiebeam_size", "wide", "hight", "purlin", "purlin_size", "purlins_size", "distance_purlins_2", "distance_rafter", "rafter_size", "long_roof_1", "long_roof_2_1", "long_roof_2_2", "long_roof_2_3", "amount_post", "amount_post_per", "iron_post_type", "amount_hip", "hip_size"],type:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0] },
    { funcName: "iron_factor", parameter_name: ["iron_factor", "ad_db", "wide", "long", "manyfoundation"],type:[1,1,0,0,0] },
    { funcName: "Stirrup_factor", parameter_name: ["iron_factor", "ad_db", "wide", "long", "manyfoundation"],type:[1,1,0,0,0] },
    { funcName: "stanchion", parameter_name: ["iron_factor", "hight_colunm", "manycolunm", "manyfoundation"],type:[1,0,0,0] },
    { funcName: "Stirrup_stanchion", parameter_name: ["iron_factor", "hight_Stirrup", "hight_colunm", "ad", "wide", "long", "deep", "manyfoundation"],type:[1,0,0,0,0,0,0,0] },
    { funcName: "iron_colunm", parameter_name: ["iron_factor", "ad", "hight_colunm", "manycolunm", "wide", "long", "amount_piece"],type:[1,0,0,0,0,0,0] },
    { funcName: "iron_beam", parameter_name: ["iron_factor", "length_beam", "amount_iron_beam"],type:[1,1,1] },
    { funcName: "iron_beam_caszing", parameter_name: ["iron_factor", "length_beam", "ad", "wide_beam1"],type:[1,1,1,1] },
    { funcName: "slap", parameter_name: ["iron_factor", "ad", "areasfloor"],type:[1,0,0] },
  ]

  export default parameters_name_type