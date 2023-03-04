
const sections = [
    { name: "ดินขุดดินถม", funcName: "cutandfill", heading: "การคำนวณดินขุด-ดินถมกลับคืน", subtitle: `สูตรที่ใช้ในการคำนวณ มีดังนี้ 
    1.กรอกจำนวนฐานราก
    2.กรอกความกว้างฐานราก
    3.กรอกความยาวฐานราก
    4.กรอกความลึกฐานราก
    ` },
    { name: "ทรายหยาบ", funcName: "coarsesand", heading: "การคำนวณทรายหยาบ", subtitle: `
    1.กรอกจำนวนฐานราก
    2.กรอกความกว้างฐานราก
    3.กรอกความยาวฐานราก
    4.กรอกความลึกฐานราก
    ` },
    { name: "คอนกรีตหยาบ", funcName: "roughconcrete", heading: "การคำนวณคอนกรีตหยาบ", subtitle: `
    1.กรอกจำนวนฐานราก
    2.กรอกความกว้างฐานราก
    3.กรอกความยาวฐานราก
    4.กรอกความลึกฐานราก
    `},
    { name: "คอนกรีตโครงสร้าง", funcName: "structuralconcrete", heading: "การคำนวณคอนกรีตโครงสร้าง", subtitle: `
    1.กรอกจำนวนฐานราก
    2.กรอกความกว้างฐานราก
    3.กรอกความยาวฐานราก
    4.กรอกความลึกฐานราก
    ` },
    { name: "ไม้แบบ", funcName: "Shutterboards", heading: "การคำนวณไม้แบบ", subtitle: `
    1.กรอกจำนวนฐานราก
    2.กรอกความกว้างฐานราก
    3.กรอกความยาวฐานราก
    4.กรอกความลึกฐานราก
    5.จำนวนชั้นของบ้าน
    ` },
    { name: "คอนกรีตเสาหลัก", funcName: "concretegroundColumn_main", heading: "การคำนวณคอนกรีตเสาหลัก", subtitle: "" },
    { name: "ปริมาณคอนกรีตเสาหลัก", funcName: "concretequantity_main", heading: "การคำนวณปริมาณคอนกรีตเสาหลัก", subtitle: "" },
    { name: "ไม้แบบเสาหลัก", funcName: "Shutterboardscolunm_main", heading: "การคำนวณไม้แบบเสาหลัก", subtitle: "" },
    { name: "คอนกรีตเสา", funcName: "concretegroundColumn", heading: "การคำนวณคอนกรีตเสา", subtitle: "" },
    { name: "ปริมาณคอนกรีต", funcName: "concretequantity", heading: "การคำนวณปริมาณคอนกรีต", subtitle: "" },
    { name: "ไม้แบบเสา", funcName: "Shutterboardscolunm", heading: "การคำนวณไม้แบบเสา", subtitle: "" },
    { name: "คอนกรีตคาน", funcName: "concreatebeam", heading: "การคำนวณคอนกรีตคาน", subtitle: "" },
    { name: "ไม้แบบคาน", funcName: "Shutterboardsbeam", heading: "การคำนวณไม้แบบคาน", subtitle: "" },
    { name: "พื้น S", funcName: "floor_S", heading: "การคำนวณพื้น S", subtitle: "" },
    { name: "พื้น PS", funcName: "floor_PS", heading: "การคำนวณพื้น PS", subtitle: "" },
    { name: "หาความลาดเอียงหลังคา", funcName: "getAngleDeg", heading: "การคำนวณหาความลาดเอียงหลังคา", subtitle: "" },
    { name: "หลังคาทรงปั้นหยา", funcName: "hipped_roof", heading: "การคำนวณหลังคาทรงปั้นหยา", subtitle: "" },
    { name: "เหล็กปลอกฐานราก", funcName: "Stirrup_factor", heading: "การคำนวณเหล็กปลอกฐานราก", subtitle: "" },
    { name: "เหล็กฐานราก", funcName: "iron_factor", heading: "การคำนวณเหล็กฐานราก", subtitle: "" },
    { name: "เสาตอม่อ", funcName: "stanchion", heading: "การคำนวณเสาตอม่อ", subtitle: "" },
    { name: "เหล็กปลอกเสาตอม่อ", funcName: "Stirrup_stanchion", heading: "การคำนวณเหล็กปลอกเสาตอม่อ", subtitle: "" },
    { name: "เหล็กเสาตอม่อหลัก", funcName: "iron_colunm", heading: "การคำนวณเหล็กเสาตอม่อหลัก", subtitle: "" },
    { name: "เหล็กคาน", funcName: "iron_beam", heading: "การคำนวณเหล็กคาน", subtitle: "" },
    { name: "เหล็กปลอกคาน", funcName: "iron_beam_caszing", heading: "การคำนวณเหล็กปลอกคาน", subtitle: "" },
    { name: "เหล็กพื้น", funcName: "slap", heading: "การคำนวณเหล็กพื้นพื้น", subtitle: "" },
  ]

  export default sections