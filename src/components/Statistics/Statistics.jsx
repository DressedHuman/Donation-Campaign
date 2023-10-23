import { Cell, Pie, PieChart } from "recharts";
import { getDonatedItemIds } from "../../utilities/LocalStorage";
import TextWithBar from "../TextWithBar/TextWithBar";
import { useContext } from "react";
import { DisplayDataContext } from "../Root/Root";

const Statistics = () => {
    const donatedItems = getDonatedItemIds().length;
    const { donationItems } = useContext(DisplayDataContext);

    const data = [
        { name: 'Total Donations', value: donationItems.length - donatedItems },
        { name: 'Your Donations', value: donatedItems },
    ]

    const colors = ["#FF444A", "#00C49F"]

    const RADIAN = Math.PI / 180;
    const customLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                style={{ fontWeight: 700, fontSize: '1.5rem' }}
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    }


    return (
        <div className="">
            <PieChart width={375} height={375} className="mx-auto">
                <Pie
                    data={data}
                    cx={180}
                    cy={175}
                    label={customLabel}
                    labelLine={false}
                    outerRadius={175}
                    fill="#FFFFFF"
                    dataKey="value"
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))
                    }
                </Pie>
            </PieChart>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-14">
                <TextWithBar text={"Your Donation"} width={100} color={colors[1]} />
                <TextWithBar text={"Total Donation"} width={100} color={colors[0]} />
            </div>
        </div>
    );
};

export default Statistics;