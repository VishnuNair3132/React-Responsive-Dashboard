import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
import "./chartbox.scss"


type Props={
    color:string;
    icon:string;
    title:string;
    number:string | number;
    dataKey:string;
    percentage:number;
    chartData:object[]; 

}


const ChartBox = (props:Props) => {
    return (
        <div className='chartbox'>
            <div className='boxInfo'>
                <div className='title'>
                    <img src={props.icon} alt="" />
                    <span>{props.title}</span>
                </div>
                <h1>{props.number}</h1>
                <Link style={{color:props.color}} to="/">View all</Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart width={300} height={100} data={props.chartData}>
                            <Tooltip contentStyle={{background:"transparent" ,border:"none"}}
                            labelStyle={{display:"none"}}
                            position={{x:40,y:60}}/>
                            <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>

                </div>
                <div className="texts">
                    <span className="percentage" style={{color:props.percentage<0? "red":"limegreen"}}>{props.percentage}</span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox