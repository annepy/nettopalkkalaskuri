import './App.css'
import {useState} from "react";
import FillOptions from './FillOptions';

function App () {
  const [brutto, setBrutto] = useState("");
  const [vero, setVero] = useState("");
  const [veroSumma, setVeroSumma] = useState(0);
  const [tv,setTv] = useState(1);
  const [tyottomyysvakuutusSumma, setTyottomyysvakuutusSumma] = useState(0);
  const [te,setTe] = useState(1);
  const [tyoelakeSumma, setTyoelakeSumma] = useState(0);
  const [netto,setNetto] = useState(0);

  function calculate (e) {
    e.preventDefault();
    const veroEurot = brutto / 100 * vero;
    const teEurot = brutto / 100 * te;
    const tvEurot = brutto / 100 * tv;
    setVeroSumma(veroEurot);
    setTyoelakeSumma(tvEurot);
    setTyottomyysvakuutusSumma(teEurot);
    setNetto(brutto - veroEurot - teEurot - tvEurot);
  }

  return (
    
      <div id="container">
        <h3>Palkkalaskuri</h3>
        <form onSubmit={calculate}>
        <div>
          <label>Bruttopalkka</label>
        </div>
        <input tyype='number' value={brutto} onChange={e => setBrutto(e.target.value)}/>

        <div>
          <label>Vero (%)</label>
          <output>{veroSumma} €</output>

        </div>
        <input tyype='number' value={vero} onChange={e => setVero(e.target.value)}/>

        <div>
          <label>Työttömyysvakuutus (%)</label>
          <output>{tyottomyysvakuutusSumma} €</output>
        </div>
        <select value={tv} onChange={e => setTv(e.target.value)}>
          <FillOptions />
        </select>

        <div>
          <label>Työeläke (%)</label>
          <output>{tyoelakeSumma} €</output>
        </div>
        <select value={te} onChange={e => setTe(e.target.value)}>
        <FillOptions />
        </select>

        <div>
          <label>Palkkasi</label>
          <output id="netto">{netto}</output>
        </div>

        <button>Laske</button>

        </form>
      </div>
    
  )
}

export default App
