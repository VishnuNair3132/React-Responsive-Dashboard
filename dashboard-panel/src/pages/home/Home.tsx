import ChartBox from "../../components/chartBox/ChartBox";
import BarChartBox from "../../components/boxChartBox/BoxChartBox"
import TopBox from "../../components/topBox/TopBox";
import "./home.scss";
import PieChartBox from "../../components/pieChartBox/PieChartBox"


import { chartBoxUser, chartBoxProduct,chartBoxRevenue,chartBoxConversion, barChartBoxRevenue,barChartBoxVisit } from "../../data";
import BigChartBox from "../../components/bigChartBox/BigChartBox";

const home = () => {
  return (
    <div className="home">
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7"><BigChartBox/></div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue}/></div>
      </div>
  )
}

export default home 