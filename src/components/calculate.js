
function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

class CallFunction {

    //คำนวนดินขุด ดินถม
    cutandfill(manyfoundation, wide, deep, long) {
        let result = []
        let error = null
        if (manyfoundation !== 0) {
            if (wide !== 0) {
                if (deep !== 0) {
                    if (long !== 0) {
                        result.push("Cut And Fill : " + financial((wide * long * deep * manyfoundation) * 1.30) + " ลบ.ม.")
                    } else {
                        error = ("Pleas enter the many long.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many wide.")
            }

        } else {
            error = ("Pleas enter the many foundation.")
        }
        return {
            result: result,
            error: error
        }
    }
    // ทรายหยาบ
    coarsesand(manyfoundation, wide, long, deep) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        result.push("coarsesand : " + financial((wide * long * deep * manyfoundation) * 1.25) + " ลบ.ม.")

                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // คอนกรีตหยาบ
    roughconcrete(manyfoundation, wide, long, deep) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        result.push("roughconcrete : " + financial((wide * long * deep * manyfoundation)) + " ลบ.ม.")

                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // คอนกรีตโครงสร้าง
    structuralconcrete(manyfoundation, wide, long, deep) {
        let result = []
        let error = null
        //deep = 0.5
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        result.push("structuralconcrete : " + financial((wide * long * deep * manyfoundation)) + " ลบ.ม.")

                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // ไม้แบบ
    Shutterboards(manyfoundation, wide, long, deep, numberH) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        //console.log("roughconcrete : "+financial((wide*long*deep*manyfoundation))+" ลบ.ม.")
                        const A = ((((wide + long) * 2) * (deep * manyfoundation)))
                        result.push("Shutterboards : " + financial(A) + " ลบ.ม.")

                        if (A !== 0) {
                            if (numberH === 1) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.8) + " ลบ.ม.")
                            } else if (numberH === 2) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.7) + " ลบ.ม.")
                            } else if (numberH === 3) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.6) + " ลบ.ม.")
                            } else if (numberH >= 4) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.5) + " ลบ.ม.")
                            }

                        }
                        if (numberH !== 0) {
                            if (numberH === 1) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.8 * 0.3) + " ลบ.ม.")
                            } else if (numberH === 2) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.7 * 0.3) + " ลบ.ม.")
                            } else if (numberH === 3) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.6 * 0.3) + " ลบ.ม.")
                            } else if (numberH >= 4) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.5 * 0.3) + " ลบ.ม.")
                            }
                        }
                        if (numberH !== 0) {
                            /*if(numberH === 1){
                                result.push(A*0.8*0.3)
                            }else if(numberH === 2){
                                result.push(A*0.7*0.3)
                            }else if(numberH === 3){
                                result.push(A*0.6*0.3)
                            }else if(numberH >= 4){
                                result.push(A*0.5*0.3)
                            }*/
                            result.push("Nail : " + (financial(A * 0.25)) + " ลบ.ม.")

                        }
                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // คอนกรีตเสาหลัก
    concretegroundColumn_main(manyfoundation, wide, long, deep, manycolunm_main, hight) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        let concreate = (wide * long * hight * manycolunm_main)
                        result.push("concretegroundColumn : " + financial((concreate)) + " ลบ.ม.")

                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // ปริมาณคอนกรีตเสาหลัก
    concretequantity_main(manyfoundation, wide, long, deep, hight, manycolunm_main) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        let concreate = (wide * long * hight * manycolunm_main)
                        result.push("concretequantity : " + financial((concreate)) + " ลบ.ม.")

                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // ไม้แบบเสาหลัก
    Shutterboardscolunm_main(manyfoundation, wide, long, deep, hight, manycolunm_main, numberH) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        //console.log("roughconcrete : "+financial((wide*long*deep*manyfoundation))+" ลบ.ม.")
                        console.log(typeof manyfoundation, wide, long, deep, hight, manycolunm_main, numberH)
                        const A = ((((wide + long) * 2) * (hight * manycolunm_main)))
                        console.log(A)
                        result.push("Shutterboards : " + financial(A) + " ลบ.ม.")

                        if (A !== 0) {

                            if (numberH === 1) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.8) + " ลบ.ม.")
                            } else if (numberH === 2) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.7) + " ลบ.ม.")
                            } else if (numberH === 3) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.6) + " ลบ.ม.")
                            } else if (numberH >= 4) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.5) + " ลบ.ม.")
                            }

                        }
                        if (numberH !== 0) {
                            if (numberH === 1) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.8 * 0.3) + " ลบ.ม.")
                            } else if (numberH === 2) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.7 * 0.3) + " ลบ.ม.")
                            } else if (numberH === 3) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.6 * 0.3) + " ลบ.ม.")
                            } else if (numberH >= 4) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.5 * 0.3) + " ลบ.ม.")
                            }

                        }
                        if (numberH !== 0) {
                            result.push("Nail : " + (financial(A * 0.25)) + " ลบ.ม.")
                        }
                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // คอนกรีตเสา
    concretegroundColumn(manyfoundation, wide, long, deep, hight, manycolunm) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        let concreate = (wide * long * hight * manycolunm)
                        result.push("concretegroundColumn : " + financial((concreate)) + " ลบ.ม.")

                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // ปริมาณคอนกรีต
    concretequantity(manyfoundation, wide, long, deep, hight, manycolunm) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        let concreate = (wide * long * hight * manycolunm)
                        result.push("concretequantity : " + financial((concreate)) + " ลบ.ม.")

                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // ไม้แบบเสา
    Shutterboardscolunm(manyfoundation, wide, long, deep, hight, manycolunm, numberH) {
        let result = []
        let error = null
        if (wide !== 0) {
            if (long !== 0) {
                if (deep !== 0) {
                    if (manyfoundation !== 0) {
                        //console.log("roughconcrete : "+financial((wide*long*deep*manyfoundation))+" ลบ.ม.")
                        const A = ((((wide + long) * 2) * (hight * manycolunm)))
                        result.push("Shutterboards : " + financial(A) + " ลบ.ม.")

                        if (A !== 0) {

                            if (numberH === 1) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.8) + " ลบ.ม.")
                            } else if (numberH === 2) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.7) + " ลบ.ม.")
                            } else if (numberH === 3) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.6) + " ลบ.ม.")
                            } else if (numberH >= 4) {
                                result.push("วัสดุไม้แบบ : " + financial(A * 0.5) + " ลบ.ม.")
                            }

                        }
                        if (numberH !== 0) {
                            if (numberH === 1) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.8 * 0.3) + " ลบ.ม.")
                            } else if (numberH === 2) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.7 * 0.3) + " ลบ.ม.")
                            } else if (numberH === 3) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.6 * 0.3) + " ลบ.ม.")
                            } else if (numberH >= 4) {
                                result.push("ไม้คร่าวยึดไม้แบบ : " + financial(A * 0.5 * 0.3) + " ลบ.ม.")
                            }

                        }
                        if (numberH !== 0) {
                            result.push("Nail : " + (financial(A * 0.25)) + " ลบ.ม.")

                        }
                    } else {
                        error = ("Pleas enter the many foundation.")
                    }
                } else {
                    error = ("Pleas enter the many deep.")
                }
            } else {
                error = ("Pleas enter the many long.")
            }
        } else {
            error = ("Pleas enter the many wide.")
        }
        return {
            result: result,
            error: error
        }
    }
    // คอนกรีตคาน
    concreatebeam(wide, deepbeam, longbeam) {
        let result = []
        let error = null
        /*wide = 0.25
        deepbeam = 0.6
        longbeam = 54.50*/
        result.push("Beam : " + financial(longbeam) + " ลบ.ม.")
        result.push("Quantityconcreatebeam : " + (financial(wide * deepbeam * longbeam) + " ลบ.ม."))
        return {
            result: result,
            error: error
        }
    }
    // ไม้แบบคาน
    Shutterboardsbeam(deepbeam, longbeam, numberH) {
        let result = []
        let error = null
        const A = ((deepbeam * 2) * longbeam)
        result.push("เนื้อที่ไม้แบบคานทั้งหมด : " + financial(A) + " ลบ.ม.")

        if (numberH !== 0) {
            if (numberH === 1) {
                const material = (A * 0.8)
                result.push("วัสดุไม้แบบ : " + (financial(material)))
            } else if (numberH === 2) {
                const material = (A * 0.7)
                result.push("วัสดุไม้แบบ : " + (financial(material)))
            } else if (numberH === 3) {
                const material = (A * 0.6)
                result.push("วัสดุไม้แบบ : " + (financial(material)))
            } else if (numberH >= 4) {
                const material = (A * 0.5)
                result.push("วัสดุไม้แบบ : " + (financial(material)))
            }
        }
        return {
            result: result,
            error: error
        }
    }
    // พื้น S
    floor_S(areasfloor, numberH) {
        let result = []
        let error = null
        if (numberH !== 0) {
            if (numberH === 1) {
                let quantity_material_shutterboardfloor = (areasfloor * 0.8)
                result.push("ปริมาณวัสดุไม้แบบ : " + (financial(quantity_material_shutterboardfloor)) + " ลบ.ม.")

                if (quantity_material_shutterboardfloor !== 0) {
                    let wood = (quantity_material_shutterboardfloor * 0.8 * 0.3)
                    result.push("ไม้คร่าวยึดไม้แบบ : " + (financial(wood) + " ลบ.ม."))

                    if (wood !== 0) {
                        let nail = (wood * 0.25)
                        result.push("ตะปู : " + (financial(nail) + " กก."))

                    }
                }
            } else if (numberH === 2) {
                let quantity_material_shutterboardfloor = (areasfloor * 0.7)
                result.push("ปริมาณวัสดุไม้แบบ : " + (financial(quantity_material_shutterboardfloor)) + " ลบ.ม.")
                if (quantity_material_shutterboardfloor !== 0) {
                    let wood = (quantity_material_shutterboardfloor * 0.8 * 0.3)
                    result.push("ไม้คร่าวยึดไม้แบบ : " + (financial(wood) + " ลบ.ม."))

                    if (wood !== 0) {
                        let nail = (wood * 0.25)
                        result.push("ตะปู : " + (financial(nail) + " กก."))

                    }
                }
            } else if (numberH === 3) {
                let quantity_material_shutterboardfloor = (areasfloor * 0.6)
                result.push("ปริมาณวัสดุไม้แบบ : " + (financial(quantity_material_shutterboardfloor)) + " ลบ.ม.")
                if (quantity_material_shutterboardfloor !== 0) {
                    let wood = (quantity_material_shutterboardfloor * 0.8 * 0.3)
                    result.push("ไม้คร่าวยึดไม้แบบ : " + (financial(wood) + " ลบ.ม."))

                    if (wood !== 0) {
                        let nail = (wood * 0.25)
                        result.push("ตะปู : " + (financial(nail) + " กก."))

                    }
                }
            } else if (numberH >= 4) {
                let quantity_material_shutterboardfloor = (areasfloor * 0.5)
                result.push("ปริมาณวัสดุไม้แบบ : " + (financial(quantity_material_shutterboardfloor)) + " ลบ.ม.")
                if (quantity_material_shutterboardfloor !== 0) {
                    let wood = (quantity_material_shutterboardfloor * 0.8 * 0.3)
                    result.push("ไม้คร่าวยึดไม้แบบ : " + (financial(wood) + " ลบ.ม."))

                    if (wood !== 0) {
                        let nail = (wood * 0.25)
                        result.push("ตะปู : " + (financial(nail) + " กก."))

                    }
                }
            }
        }
        return {
            result: result,
            error: error
        }
    }
    // พื้น PS
    floor_PS(area_all) {
        let result = []
        let error = null
        let amountconcreate = (area_all * 0.05)
        if (amountconcreate !== 0) {
            result.push("เหล็ก ไวร์เมช : " + (financial(area_all + "ตร.ม.")))

        } else {
            error = ("ปริมาณคอนกรีตไม่ถูกต้อง")

        }
        return {
            result: result,
            error: error
        }
    }
    // หาความลาดเอียงหลังคา
    getAngleDeg(ax, ay, bx, by) {
        let result = []
        let error = null
        var angleRad = Math.atan((ay - by) / (ax - bx));
        var angleDeg = angleRad * 180 / Math.PI;

        return {
            result: [angleDeg],
            error: error
        }
        //return(angleDeg);
    }
    // หลังคาทรงปั้นหยา
    hipped_roof(tiebeam, tiebeam_size, wide, hight, purlin, purlin_size, purlins_size, distance_purlins_2, distance_rafter, rafter_size, long_roof_1, long_roof_2_1, long_roof_2_2, long_roof_2_3, amount_post, amount_post_per, iron_post_type, amount_hip, hip_size) {
        let result = []
        let error = null
        // wide = 6.00
        let wide_1 = (wide - 1)
        // let long_roof_1 = 12.00
        // hight = 3.55
        var angleRad = Math.atan((hight) / (wide_1));
        var angleDeg = angleRad * 180 / Math.PI;
        //let sloping = (hight/wide_1)
        // console.log("หามุมลาดเอียงหลังคา : "+financial(angleDeg)+" ตร.ม.")

        //let find_area_1 = (0.5*)
        //let radians = 35.37
        const radians = (financial(Math.cos(35.37 / 57.3)))
        // console.log("Cos Key : "+radians)


        let find_area_1 = (0.5 * long_roof_1 * wide / radians * 2)
        // console.log("หาพื้นที่รูปที่ 1 : "+financial(find_area_1))

        if (find_area_1 !== 0) {
            // let long_roof_2_1 = 6.00
            // let long_roof_2_2 = 6.50
            // let long_roof_2_3 = 6.00
            const all_long_roof = (long_roof_2_1 + long_roof_2_2 + long_roof_2_3)
            const find_area_2 = (0.5 * long_roof_2_1 / radians * (long_roof_2_2 + all_long_roof) * 2)
            //let find_area_2 = (0.5*long_roof_2*wide/radians*2)
            result.push("หาพื้นที่รูปที่ 2 : " + financial(find_area_2))

            if (find_area_2 !== 0) {
                const sum_roof_all = (find_area_1 + find_area_2)
                result.push("ผลรวมหลังคาทั้งหมด : " + financial(sum_roof_all))

                //อะเส Tie-beam 
                if (sum_roof_all !== 0) {
                    if (tiebeam !== 0) {
                        result.push("หาความยาว อะเส ...")

                        if (tiebeam_size === 1) {
                            const count_tiebeam = (tiebeam)
                            result.push("ความยาว อะเส : " + (financial(tiebeam * 1.05)))
                        } else if (tiebeam_size === 2) {
                            const count_tiebeam = (tiebeam)
                            result.push("ความยาว อะเส : " + (financial(tiebeam * 2 * 1.05)))
                        }

                    } else {
                        error = ("ผลรวมของหลังผิด")
                    }
                }
                if (amount_post.length !== 0) {
                    let amount_x = 1
                    for (let x = 0; x < amount_post.length; x++) {
                        result.push("ความสูงดั้ง  " + amount_x + " : " + (financial(amount_post[x])))
                        amount_x += 1

                    }

                }
                if (amount_post_per.length !== 0) {
                    let amount_y = 1
                    for (let x = 0; x < amount_post_per.length; x++) {
                        result.push("จำนวนดั้ง  " + amount_y + " : " + (financial(amount_post_per[x])))
                        amount_y += 1

                    }
                }
                let round = 1
                let array_post = []
                if (amount_post.length === amount_post_per.length) {
                    for (let sum_post = 0; sum_post < amount_post.length; sum_post++) {
                        const sum_post_all = (amount_post[sum_post] * amount_post_per[sum_post])
                        result.push("ความยาวเหล็กดั้ง " + round + " : " + (financial(sum_post_all)))
                        round += 1

                        array_post.push(sum_post_all)

                    }

                    let sum = 0
                    for (let xxx = 0; xxx < array_post.length; xxx++) {
                        sum += (array_post[xxx])
                    }
                    result.push("รวมความยาวดั้งเหล็ก : " + financial(sum))

                    if (iron_post_type !== 0) {
                        if (iron_post_type === 1) {
                            result.push("เผื่อ 5% : " + financial(sum * 1.05))
                        } else if (iron_post_type === 2) {
                            result.push("เผื่อ 5% : " + financial(sum * 2 * 1.05))
                        }

                    }
                    if (purlin !== 0) {
                        if (purlin_size === 1) {
                            result.push("อกไก่เผื่อ 5% : " + (financial(purlin * 1.05)))
                        } else if (purlin_size === 2) {
                            result.push("อกไก่ 5% : " + (financial(purlin * 2 * 1.05)))
                        }
                    } else {
                        console.log("โปรดป้อนค่าของอกไก่")
                    }


                    if (distance_rafter !== 0) {
                        //console.log("ความยาวจันทันทั้งหมด : "+sum_roof_all)
                        if (rafter_size === 1) {
                            result.push("จันทัน : " + (financial(sum_roof_all * distance_rafter * 1.05)))
                        } else if (rafter_size === 2) {
                            result.push("จันทัน : " + (financial(sum_roof_all * distance_rafter * 2 * 1.05)))
                        }
                    } else {
                        error = ("ระยะห่างจันทันไม่ถูกต้อง")
                    }


                    if (long_roof_1 !== 0) {
                        const length_rafter = ((long_roof_1 / 2) / radians)
                        result.push("ความยาวจันทัน : " + (financial(length_rafter)))

                        if (distance_purlins_2 !== 0) {
                            const sum_perlin_2 = (Math.ceil(length_rafter / distance_purlins_2) + 1)
                            result.push("จำนวนแป : " + sum_perlin_2)

                            if (sum_perlin_2 !== 0) {
                                result.push("ความยาวแปทั้งหมด : " + (long_roof_1 / 2) * (sum_perlin_2))
                            }

                            if (purlins_size !== 0) {
                                if (purlins_size === 1) {
                                    result.push("จำนวน 2 พื้นที่ : " + ((financial(long_roof_1 / 2) * (sum_perlin_2) * 2)))

                                    result.push("จำนวน 2 พื้นที่ เผื่อ 5% : " + ((financial(long_roof_1 / 2) * (sum_perlin_2) * 2 * 1.05)))
                                } else if (purlins_size === 2) {
                                    result.push("จำนวน 2 พื้นที่ : " + ((financial(long_roof_1 / 2) * (sum_perlin_2) * 2 * 2)))

                                    result.push("จำนวน 2 พื้นที่ เผื่อ 5% : " + ((financial(long_roof_1 / 2) * (sum_perlin_2) * 2 * 2 * 1.05)))
                                }

                                //console.log("หาความยาวแป :--->")

                                const find_perlin_2 = (long_roof_2_1 + long_roof_2_2)
                                result.push("หาความยาวของแป : " + financial(find_perlin_2))

                                const long_perlin2_2 = (find_perlin_2 * sum_perlin_2)
                                result.push("ความยาวแปทั้งหมด : " + financial(long_perlin2_2))

                                if (purlins_size !== 0) {
                                    if (purlins_size === 1) {
                                        result.push("จำนวน 2 พื้นที่ : " + long_perlin2_2 * 2)

                                        result.push("จำนวน 2 พื้นที่ เผื่อ 5%  : " + long_perlin2_2 * 2 * 1.05)

                                    } else if (purlins_size === 2) {
                                        result.push("จำนวน 2 พื้นที่ : " + long_perlin2_2 * 2 * 2)

                                        result.push("จำนวน 2 พื้นที่ เผื่อ 5%  : " + long_perlin2_2 * 2 * 2 * 1.05)

                                    }
                                }

                                //console.log("ตะเฆ่สัน :------->")
                                const sumhip = Math.sqrt((wide * wide) + ((long_roof_1 / 2) * long_roof_1 / 2))
                                result.push("หาความยาวตะเฆ่สัน : " + financial(sumhip / radians) + " ม.")

                                result.push("ความยาวตะเฆ่สันทั้งหมด  : " + (amount_hip * financial(sumhip / radians)) + " ม.")

                                if (hip_size !== 0) {
                                    if (hip_size === 1) {
                                        result.push("ความยาวตะเฆ่สันทั้งหมด : " + amount_hip * financial(sumhip / radians) * 1.05 + " ม.")
                                    } else if (hip_size === 2) {
                                        result.push("ความยาวตะเฆ่สันทั้งหมด : " + amount_hip * financial(sumhip / radians) * 2 * 1.05 + " ม.")
                                    }
                                }
                            }


                        }
                    } else {
                        error = ("ความยาวหลังคาผิด!")
                    }
                }
            }
        } else {
            error = ("กรุณาหาพื้นที่หลังคารูป 1 ")

        }

        //console.log(Math.abs(radians))
        return {
            result: result,
            error: error
        }
    }
    // เหล็กฐานราก
    iron_factor(iron_factor, ad_db, wide, long, manyfoundation) {
        let result = []
        let error = null
        //กรอกชนิดเหล็ก
        // let iron_factor = "DB12"
        // let ad_db = ['0.20']
        // let radians_iron = ['0']
        //console.log(ad_db[0])
        //let ad_rb = 0.20
        let percent = 0
        /*if(ad_db.length === 1){
            let calculate_length_sum_iron = ((wide/ad_db[0]+1)+(long/ad_db[0]+1))
            let new_length_sum_iron = (financial(calculate_length_sum_iron))
            console.log("ความยาวเหล็กต่อท่อน : "+new_length_sum_iron+" ท่อน")
            
            let length_iron_per = (wide*new_length_sum_iron*manyfoundation)
            console.log("ความยาวเหล็กฐานรากทั้งหมด : "+length_iron_per+" ม.")
            
        }*/if (ad_db.length) {
            for (let x = 0; x < ad_db.length; x++) {
                let calculate_length_sum_iron = ((wide / ad_db[x] + 1) + (long / ad_db[x] + 1))
                let new_length_sum_iron = (financial(calculate_length_sum_iron))
                result.push("ความยาวเหล็กต่อท่อน : " + new_length_sum_iron + " ท่อน")

                let length_iron_per = (long * new_length_sum_iron * manyfoundation)
                result.push("ความยาวเหล็กฐานรากทั้งหมด : " + length_iron_per + " ม.")
                for (let xx = 0; xx < iron_factor.length; xx++) {
                    if (iron_factor[xx] === "RB6") {
                        percent = 1.05
                        let count_percent = financial(length_iron_per * percent)
                        result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

                    } else if (iron_factor[xx] === "RB9") {
                        percent = 1.07
                        let count_percent = financial(length_iron_per * percent)
                        result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

                    }
                    if (iron_factor[xx] === "DB12") {
                        percent = 1.09
                        let count_percent = financial(length_iron_per * percent)
                        result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


                    }
                    else if (iron_factor[xx] === "DB15") {
                        percent = 1.11
                        let count_percent = financial(length_iron_per * percent)
                        result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

                    }
                    else if (iron_factor[xx] === "DB20") {
                        percent = 1.13
                        let count_percent = financial(length_iron_per * percent)
                        result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

                    }
                    else if (iron_factor[xx] === "DB25") {
                        percent = 1.15
                        let count_percent = financial(length_iron_per * percent)
                        result.push("DB25 เผื่อ 15% " + count_percent + " ม.")
                    }
                }
            }

        }
        return {
            result: result,
            error: error
        }

    }
    //เหล็กปลอกฐานราก
    Stirrup_factor(iron_factor, ad_db, wide, long, manyfoundation) {
        let result = []
        let error = null
        //กรอกชนิดเหล็ก
        //let iron_factor = "RB6"
        //let ad_db = ['0']
        let radians_iron = ['0']
        //console.log(ad_db[0])
        //let ad_rb = 0.20
        let percent = 0
        if (ad_db.length) {
            for (let x = 0; x < ad_db.length; x++) {
                let calculate_length_sum_Stirrup = ((wide + long) * (2) * manyfoundation)
                let new_length_sum_Stirrup = (financial(calculate_length_sum_Stirrup))

                /*let length_iron_per = (wide*new_length_sum_Stirrup*manyfoundation)
                console.log("ความยาวเหล็กฐานรากทั้งหมด : "+length_iron_per+" ม.")
                */
                for (let xx = 0; xx < iron_factor.length; xx++) {
                    if (iron_factor[xx] === "RB6") {
                        percent = 1.05
                        let count_percent = financial(new_length_sum_Stirrup * percent)
                        result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

                    } else if (iron_factor[xx] === "RB9") {
                        percent = 1.07
                        let count_percent = financial(new_length_sum_Stirrup * percent)
                        result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

                    }
                    if (iron_factor[xx] === "DB12") {
                        percent = 1.09
                        let count_percent = financial(new_length_sum_Stirrup * percent)
                        result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


                    }
                    else if (iron_factor[xx] === "DB15") {
                        percent = 1.11
                        let count_percent = financial(new_length_sum_Stirrup * percent)
                        result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

                    }
                    else if (iron_factor[xx] === "DB20") {
                        percent = 1.13
                        let count_percent = financial(new_length_sum_Stirrup * percent)
                        result.push("DB20 เผื่อ 13% " + count_percent + " ม.")
                    }
                    else if (iron_factor[xx] === "DB25") {
                        percent = 1.15
                        let count_percent = financial(new_length_sum_Stirrup * percent)
                        result.push("DB25 เผื่อ 15% " + count_percent + " ม.")
                    }
                }
            }
        }
        return {
            result: result,
            error: error
        }
    }
    //เสาตอม่อ
    stanchion(iron_factor, hight_colunm, manycolunm, manyfoundation) {
        let result = []
        let error = null
        //ระบุเองว่ามีเหล็กชนิดไหนบ้าง
        //let iron_factor = ['DB12','DB16']
        // let hight_colunm = 1.20

        //console.log(count_sum)
        //แก้ไขเอง
        //let amount_colunm = 6 
        let percent = 0
        let sum_iron = (hight_colunm * manycolunm * manyfoundation)
        for (let x = 0; x < iron_factor.length; x++) {
            if (iron_factor[x] === "RB6") {
                percent = 1.05
                let count_percent = financial(sum_iron * percent)
                result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

            } else if (iron_factor[x] === "RB9") {
                percent = 1.07
                let count_percent = financial(sum_iron * percent)
                result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

            }
            if (iron_factor[x] === "DB12") {
                percent = 1.09
                let count_percent = financial(sum_iron * percent)
                result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


            }
            else if (iron_factor[x] === "DB15" || "DB16") {
                percent = 1.11
                let count_percent = financial(sum_iron * percent)
                result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB20") {
                percent = 1.13
                let count_percent = financial(sum_iron * percent)
                result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB25") {
                percent = 1.15
                let count_percent = financial(sum_iron * percent)
                result.push("DB25 เผื่อ 15% " + count_percent + " ม.")

            }
        }
        return {
            result: result,
            error: error
        }

    }
    //เหล็กปลอกเสาตอม่อ
    Stirrup_stanchion(iron_factor, hight_Stirrup, hight_colunm, ad, wide, long, deep, manyfoundation) {
        let result = []
        let error = null
        //ระบุเองว่ามีเหล็กชนิดไหนบ้าง
        // wide = 0.35
        // long = 0.35
        // let ad = 0.20
        // hight_colunm = 1.20
        // let iron_factor = ['DB12','DB16']
        // let hight_Stirrup = 2
        let count = (wide + 4)
        //console.log("เสาตอม่อ : ------>")
        //
        let amount = (hight_Stirrup + deep / ad)
        let count_all = financial(count + amount * manyfoundation)

        //แก้ไขเอง
        //let amount_colunm = 6 
        //let sum_iron = (hight_colunm*amount_colunm*manyfoundation)
        let percent = 0
        for (let x = 0; x < iron_factor.length; x++) {
            if (iron_factor[x] === "RB6") {
                percent = 1.05
                let count_percent = financial(count_all * percent)
                result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

            } else if (iron_factor[x] === "RB9") {
                percent = 1.07
                let count_percent = financial(count_all * percent)
                result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

            }
            if (iron_factor[x] === "DB12") {
                percent = 1.09
                let count_percent = financial(count_all * percent)
                result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


            }
            else if (iron_factor[x] === "DB15" || "DB16") {
                percent = 1.11
                let count_percent = financial(count_all * percent)
                result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB20") {
                percent = 1.13
                let count_percent = financial(count_all * percent)
                result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB25") {
                percent = 1.15
                let count_percent = financial(count_all * percent)
                result.push("DB25 เผื่อ 15% " + count_percent + " ม.")

            }
        }
        return {
            result: result,
            error: error
        }
    }
    //เหล็กเสาตอม่อหลัก
    iron_colunm(iron_factor, ad, hight_colunm, manycolunm, wide, long, amount_piece) {
        let result = []
        let error = null
        //ระบุเองว่ามีเหล็กชนิดไหนบ้าง
        // wide = 0.35
        // long = 0.35
        // let ad = 0.20
        // let iron_factor = ['DB12','DB16']
        // let hight_colunm = 3.2
        //กรอกเอง
        // let amount_piece = 4
        let length_all_colunm = (hight_colunm * amount_piece * manycolunm)

        //console.log(iron_factor)
        let percent = 0
        for (let x = 0; x < iron_factor.length; x++) {
            if (iron_factor[x] === "RB6") {
                percent = 1.05
                let count_percent = financial(length_all_colunm * percent)
                result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

            } else if (iron_factor[x] === "RB9") {
                percent = 1.07
                let count_percent = financial(length_all_colunm * percent)
                result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

            }
            if (iron_factor[x] === "DB12") {
                percent = 1.09
                let count_percent = financial(length_all_colunm * percent)
                result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


            }
            else if (iron_factor[x] === "DB15") {
                percent = 1.11
                let count_percent = financial(length_all_colunm * percent)
                result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB16") {
                percent = 1.11
                let count_percent = financial(length_all_colunm * percent)
                result.push("DB16 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB20") {
                percent = 1.13
                let count_percent = financial(length_all_colunm * percent)
                result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB25") {
                percent = 1.15
                let count_percent = financial(length_all_colunm * percent)
                result.push("DB25 เผื่อ 15% " + count_percent + " ม.")

            }
        }
        // console.log("หาความยาวปลอกทั้งหมด --------> ")

        let legth_all_casing = ((wide + long) * 2)
        let amount_casing = ((hight_colunm / ad) + 1)
        let sumall = (legth_all_casing * amount_casing * manycolunm)
        for (let x = 0; x < iron_factor.length; x++) {
            if (iron_factor[x] === "RB6") {
                percent = 1.05
                let count_percent = financial(sumall * percent)
                result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

            } else if (iron_factor[x] === "RB9") {
                percent = 1.07
                let count_percent = financial(sumall * percent)
                result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

            }
            if (iron_factor[x] === "DB12") {
                percent = 1.09
                let count_percent = financial(sumall * percent)
                result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


            }
            else if (iron_factor[x] === "DB15") {
                percent = 1.11
                let count_percent = financial(sumall * percent)
                result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB16") {
                percent = 1.11
                let count_percent = financial(length_all_colunm * percent)
                result.push("DB16 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB20") {
                percent = 1.13
                let count_percent = financial(sumall * percent)
                result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

            }
            else if (iron_factor[x] === "DB25") {
                percent = 1.15
                let count_percent = financial(sumall * percent)
                result.push("DB25 เผื่อ 15% " + count_percent + " ม.")

            }
        }
        return {
            result: result,
            error: error
        }
    }
    //เหล็กคาน
    iron_beam(iron_factor, length_beam, amount_iron_beam) {
        let result = []
        let error = null

        // let iron_factor = ['DB16']
        let sum1 = 0
        amount_iron_beam.forEach(sum => {
            sum1 += sum
        });
        let percent = 0
        for (let x = 0; x < length_beam.length; x++) {
            let all_beam = (length_beam[x] * sum1)
            result.push("Beam " + x + " : " + all_beam)
            for (let xx = 0; xx < iron_factor.length; xx++) {
                if (iron_factor[xx] === "RB6") {
                    percent = 1.05
                    let count_percent = financial(all_beam * percent)
                    result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

                } else if (iron_factor[xx] === "RB9") {
                    percent = 1.07
                    let count_percent = financial(all_beam * percent)
                    result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

                }
                if (iron_factor[xx] === "DB12") {
                    percent = 1.09
                    let count_percent = financial(all_beam * percent)
                    result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


                }
                else if (iron_factor[xx] === "DB15") {
                    percent = 1.11
                    let count_percent = financial(all_beam * percent)
                    result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

                }
                else if (iron_factor[xx] === "DB16") {
                    percent = 1.11
                    let count_percent = financial(all_beam * percent)
                    result.push("DB16 เผื่อ 11% " + count_percent + " ม.")

                }
                else if (iron_factor[xx] === "DB20") {
                    percent = 1.13
                    let count_percent = financial(all_beam * percent)
                    result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

                }
                else if (iron_factor[xx] === "DB25") {
                    percent = 1.15
                    let count_percent = financial(all_beam * percent)
                    result.push("DB25 เผื่อ 15% " + count_percent + " ม.")

                }
            }
        }
        return {
            result: result,
            error: error
        }
    }
    //เหล็กปลอกคาน
    iron_beam_caszing(iron_factor, length_beam, ad, wide_beam1) {
        let result = []
        let error = null
        // let iron_factor = ['DB16']
        // let ad = [0.2]
        /*let sum1 =  0
        amount_iron_beam.forEach(sum => {
             sum1 += sum
        });*/
        let arraynew = []
        let c = 0
        let d = 1
        let percent = 0
        for (let m = 0; m < (length_beam.length); m++) {
            /*console.log(wide_beam1)
            console.log(wide_beam1[c])
            console.log(wide_beam1[c+d])*/
            let all = financial(wide_beam1[c] + wide_beam1[c + d])
            arraynew.push(all)
            c += 2
            // console.log(c)
        }
        //console.log(arraynew)
        let lorpor = []
        for (let xx = 0; xx < arraynew.length; xx++) {
            let sumarr = financial(arraynew[xx] * 2)
            result.push("เหล็กปลอก : " + sumarr + " ม.")

            lorpor.push(sumarr)
        }
        let amountlorpor = []
        for (let yy = 0; yy < length_beam.length; yy++) {
            let sumarr1 = financial(arraynew[yy] / ad[0])
            result.push("จำนวนปลอก : " + sumarr1 + " ม.")

            amountlorpor.push(sumarr1)
        }
        for (let zz = 0; zz < amountlorpor.length; zz++) {
            let sumarr2 = financial(lorpor[zz] * amountlorpor[zz])
            result.push("ความยาวเหล็กปลอกทั้งหมด : " + sumarr2 + " ม.")

            //amountlorpor.push(sumarr1)
            for (let x = 0; x < iron_factor.length; x++) {
                if (iron_factor[x] === "RB6") {
                    percent = 1.05
                    let count_percent = financial(sumarr2 * percent)
                    result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

                } else if (iron_factor[x] === "RB9") {
                    percent = 1.07
                    let count_percent = financial(sumarr2 * percent)
                    result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

                }
                if (iron_factor[x] === "DB12") {
                    percent = 1.09
                    let count_percent = financial(sumarr2 * percent)
                    result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


                }
                else if (iron_factor[x] === "DB15") {
                    percent = 1.11
                    let count_percent = financial(sumarr2 * percent)
                    result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

                }
                else if (iron_factor[x] === "DB16") {
                    percent = 1.11
                    let count_percent = financial(sumarr2 * percent)
                    result.push("DB16 เผื่อ 11% " + count_percent + " ม.")

                }
                else if (iron_factor[x] === "DB20") {
                    percent = 1.13
                    let count_percent = financial(sumarr2 * percent)
                    result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

                }
                else if (iron_factor[x] === "DB25") {
                    percent = 1.15
                    let count_percent = financial(sumarr2 * percent)
                    result.push("DB25 เผื่อ 15% " + count_percent + " ม.")

                }
            }
        }
        return {
            result: result,
            error: error
        }
    }
    //พื้น
    slap(iron_factor, ad, areasfloor) {
        let result = []
        let error = null
        // let iron_factor = ['DB16']
        // let ad = [0.2]
        let sum = ((areasfloor) * (1 / ad))
        let percent = 0
        //amountlorpor.push(sumarr1)
        for (let xx = 0; xx < iron_factor.length; xx++) {
            if (iron_factor[xx] === "RB6") {
                percent = 1.05
                let count_percent = financial(sum * percent)
                result.push("RB6 เผื่อ 5% " + count_percent + " ม.")

            } else if (iron_factor[xx] === "RB9") {
                percent = 1.07
                let count_percent = financial(sum * percent)
                result.push("RB9 เผื่อ 7% " + count_percent + " ม.")

            }
            if (iron_factor[xx] === "DB12") {
                percent = 1.09
                let count_percent = financial(sum * percent)
                result.push("DB12 เผื่อ 9% " + count_percent + " ม.")


            }
            else if (iron_factor[xx] === "DB15") {
                percent = 1.11
                let count_percent = financial(sum * percent)
                result.push("DB15 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[xx] === "DB16") {
                percent = 1.11
                let count_percent = financial(sum * percent)
                result.push("DB16 เผื่อ 11% " + count_percent + " ม.")

            }
            else if (iron_factor[xx] === "DB20") {
                percent = 1.13
                let count_percent = financial(sum * percent)
                result.push("DB20 เผื่อ 13% " + count_percent + " ม.")

            }
            else if (iron_factor[xx] === "DB25") {
                percent = 1.15
                let count_percent = financial(sum * percent)
                result.push("DB25 เผื่อ 15% " + count_percent + " ม.")
            }
        }
        return {
            result: result,
            error: error
        }
    }
}

export default CallFunction

// console.log("Starting calculate...")








































