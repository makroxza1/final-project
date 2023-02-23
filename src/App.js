import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Select from "@mui/material/Select";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CallFunction from "./components/calculate";
import getArgs from './components/get_args_name';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import CustomizedDialogs from './components/dialog'
import { MuiChipsInput } from 'mui-chips-input'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FFEFBA',
      main: '#ffb300',
      dark: '#fb8c00',
      contrastText: '#000',
    },
  },
});
theme = responsiveFontSizes(theme);

export const sections = [
  { name: "ดินขุดดินถม", funcName: "cutandfill", heading: "", subtitle: "" },
  { name: "ทรายหยาบ", funcName: "coarsesand", heading: "", subtitle: "" },
  { name: "คอนกรีตหยาบ", funcName: "roughconcrete", heading: "", subtitle: "" },
  { name: "คอนกรีตโครงสร้าง", funcName: "structuralconcrete", heading: "", subtitle: "" },
  { name: "คอนกรีตเสาหลัก", funcName: "concretegroundColumn_main", heading: "", subtitle: "" },
  { name: "ปริมาณคอนกรีตเสาหลัก", funcName: "concretequantity_main", heading: "", subtitle: "" },
  { name: "ไม้แบบเสาหลัก", funcName: "Shutterboardscolunm_main", heading: "", subtitle: "" },
  { name: "คอนกรีตเสา", funcName: "concretegroundColumn", heading: "", subtitle: "" },
  { name: "ปริมาณคอนกรีต", funcName: "concretequantity", heading: "", subtitle: "" },
  { name: "ไม้แบบเสา", funcName: "Shutterboardscolunm", heading: "", subtitle: "" },
  { name: "คอนกรีตคาน", funcName: "concreatebeam", heading: "", subtitle: "" },
  { name: "ไม้แบบคาน", funcName: "Shutterboardsbeam", heading: "", subtitle: "" },
  { name: "พื้น S", funcName: "floor_S", heading: "", subtitle: "" },
  { name: "พื้น PS", funcName: "floor_PS", heading: "", subtitle: "" },
  { name: "หาความลาดเอียงหลังคา", funcName: "getAngleDeg", heading: "", subtitle: "" },
  { name: "หลังคาทรงปั้นหยา", funcName: "hipped_roof", heading: "", subtitle: "" },
  { name: "เหล็กปลอกฐานราก", funcName: "Stirrup_factor", heading: "", subtitle: "" },
  { name: "เหล็กฐานราก", funcName: "iron_factor", heading: "", subtitle: "" },
  { name: "เสาตอม่อ", funcName: "stanchion", heading: "", subtitle: "" },
  { name: "เหล็กปลอกเสาตอม่อ", funcName: "Stirrup_stanchion", heading: "", subtitle: "" },
  { name: "เหล็กเสาตอม่อหลัก", funcName: "iron_colunm", heading: "", subtitle: "" },
  { name: "เหล็กคาน", funcName: "iron_beam", heading: "", subtitle: "" },
  { name: "เหล็กปลอกคาน", funcName: "iron_beam_caszing", heading: "", subtitle: "" },
]

function App() {
  const [sectionSelect, setSectionSelect] = useState("selectSection")
  const [inputOption, setInputOptions] = useState([])
  const [description, setDescription] = useState()
  const [funcName, setFuncName] = useState("")
  const [answer, setAnswer] = useState([])
  const [openAnswerDialog, setOpenAnswerDialog] = useState(false)
  const callFunction = new CallFunction()
  // const [chips, setChips] = React.useState([])

  const handleSelectSection = async (e) => {
    e.preventDefault();
    let select = e.target.value
    let value = sections.find(sec => sec.name === select)
    setDescription({ heading: value.heading, subtitle: value.subtitle })
    setSectionSelect(select)
    setFuncName(value.funcName)
    setInputOptions(getArgs(callFunction[value.funcName]).map(argsName => {
      if (["length_beam", "ad_db", "amount_post_per", "amount_post", "amountlorpor", "iron_factor","amount_iron_beam"].includes(argsName)) {
        console.log(argsName)
        return { name: argsName, value: [] }
      } else {
        return { name: argsName, value: 0 }
      }
    }))
  }

  const handleFromInputsChangeArray = index => (newChips) => {
    let value = newChips
    let newInput = inputOption
    newInput[index].value = value
    setInputOptions([...newInput])
  }

  const handleFromInputsChange = index => (e) => {
    e.preventDefault();
    let value = e.target.value
    let newInput = inputOption
    newInput[index].value = value
    setInputOptions([...newInput])
  }

  const handleSubmitCalulate = (e) => {
    e.preventDefault();
    let input = inputOption.map((input) => {
      if (input.name === "iron_factor") {
        return input.value
      } else if (["length_beam", "ad_db", "amount_post_per", "amount_post", "amountlorpor","amount_iron_beam"].includes(input.name)) {
        return input.value.map(v => parseFloat(v))
      } else {
        return parseFloat(input.value)
      }
    })
    const answer = callFunction[funcName](...input)
    console.log(answer)
    if (answer.error === null) {
      setAnswer(answer.result)
      setOpenAnswerDialog(true)
    } else {
      alert(answer.error)
    }
  }



  return (
    <div className='App-header'>
      <ThemeProvider theme={theme}>


        <CssBaseline />
        <Container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Box sx={{
            display: 'display-box',
            flexWrap: 'wrap',
            minHeight: "800px",
          }}>
            <Paper elevation={3} sx={{ padding: "3rem", marginY: "1rem", borderRadius: "5% 15%", minHeight: "800px" }}>
              <Grid container>
                <Grid item xs={12}>

                  <Typography variant="h2" sx={{ textAlign: "center", width: "100%", color: "#ff6f00", fontWeight: "bold" }}>ประมาณราคาโครงสร้าง</Typography>

                </Grid>
                <Grid item mt={2} xs={12} style={{ textAlign: 'center' }}>
                  <Grid container spacing={{ xs: 2, md: 3 }}>
                    <Grid item mt={2} xs={12} sm={12} md={6}>
                      <Box sx={{ borderRadius: "5%", border: "2px solid #fb8c00", minHeight: "300px", width: "100%", bgcolor: "#fb8c00" }}>

                        <Typography variant="h4" mt={2} mb={2} sx={{ textAlign: "center", width: "100%", color: "#fffde7", fontWeight: "bold" }}>
                          วิธีคำนวนราคาโครงสร้าง
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign: "center", width: "100%", color: "#fff9c4", paddingX: "1rem" }} gutterBottom>
                          {description ? description.heading : "โปรดเลือกสูตรคำนวนที่คุณต้องการก่อน"}
                        </Typography>
                        <Typography variant="subtitle1" style={{ whiteSpace: 'pre-line' }} sx={{ textAlign: "center", width: "100%", color: "#fff3e0", paddingX: "1rem", mb: "1rem" }}>
                          {description ? description.subtitle :
                            `
                          โปรเจ็คนี้สร้างขึ้นเพื่ออำนวยความสะดวกแก่... 
                          เพื่อเพิ่มความเร็วและง่ายต่อการคำนวนเราจึง...
                          วิธีใส่ค่าในแต่ละช่อง                          
                          Manyfoundation : bra bra bra
                          Wide : bra bra bra
                          Deep : bra bra bra
                          Long : bra bra bra
                          `}
                        </Typography>

                      </Box>
                    </Grid>
                    <Grid item mt={2} xs={12} sm={12} md={6}>
                      <FormControl sx={{ width: "100%", marginTop: "10px" }}>
                        <InputLabel color='secondary'>เลือกสิ่งที่คุณต้องการคำนวน</InputLabel>
                        <Select
                          autoFocus
                          required
                          id='menuSection'
                          name='menuSection'
                          color='secondary'
                          onChange={handleSelectSection}
                          value={sectionSelect === "" ? "" : sectionSelect}
                          label="เลือกสิ่งที่คุณต้องการคำนวน"
                        >
                          <MenuItem key="selectSection" value="selectSection" disabled>
                            {`--------- เลือกสิ่งที่คุณต้องการคำนวน ---------`}
                          </MenuItem>
                          {sections.map((data, index) => {
                            return <MenuItem key={`${index}`} value={data.name} name={`${data.name}`}>{`${index + 1}. ${data.name}`}</MenuItem>
                          })}
                        </Select>
                      </FormControl>
                      {inputOption &&
                        <Box component="form" variant="standard" onSubmit={handleSubmitCalulate} sx={{ width: "100%", height: "100%" }}>
                          <Grid item mt={2} xs={12}>
                            {inputOption.map((input, index) => {
                              if (["length_beam", "ad_db", "amount_post_per", "amount_post", "amountlorpor", "iron_factor", "amount_iron_beam"].includes(input.name)) {
                                return <MuiChipsInput
                                  label={`Please input ${input.name.toUpperCase()}`}
                                  key={index}
                                  value={inputOption[index].value}
                                  onChange={handleFromInputsChangeArray(index)}
                                  color='secondary'
                                  sx={{ width: "100%", marginTop: "10px" }}
                                  focused
                                />
                              } else {
                                return <TextField
                                  focused
                                  onChange={handleFromInputsChange(index)}
                                  value={inputOption[index].value}
                                  label={`Please input ${input.name.toUpperCase()}`}
                                  placeholder={`Please input ${input.name.toUpperCase()}`}
                                  name={input.name}
                                  id={input.name}
                                  key={input.name}
                                  color='secondary'
                                  sx={{ width: "100%", marginTop: "10px" }}
                                />
                              }
                            })}
                          </Grid>
                          <Grid item mt={2} xs={12}>
                            <Button variant="contained" type="submit" color='secondary' sx={{ width: "100%", marginTop: "20px" }} name="btnSubmit">คำนวนผลลัพธ์</Button>
                          </Grid>
                        </Box>
                      }
                    </Grid>
                    {openAnswerDialog === true && answer.length > 0 && <CustomizedDialogs answer={answer} openAnswerDialog={openAnswerDialog} setOpenAnswerDialog={setOpenAnswerDialog} />}
                    {/* <Grid item mt={2} xs={12} sm={12} md={12}>
                      <Typography style={{whiteSpace: 'pre-line'}} variant="h2" sx={{ textAlign: "center", width: "100%", color: "#c0392b", fontWeight: "bold" }}>{answer.length>0 && answer.map(ans=>ans).join("\n")}</Typography>
                    </Grid> */}
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>

        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
