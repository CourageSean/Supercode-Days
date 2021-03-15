import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4())
let overview = [
    {
        id: 0,
        name: 'Gehalt',
        date: '01.03.2021',
        amount: 1000,
        isIncome: true
    },
    {
        id: 1,
        name: 'Miete',
        date: '01.03.2021',
        amount: 500,
        isIncome: false
    },
    {
        id: 2,
        name: 'Internet',
        date: '04.03.2021',
        amount: 10,
        isIncome: false
    }
]
const ListItem = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Income or Expenses</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <Item
                    name={overview[0].name}
                    date={overview[0].date}
                    amount={overview[0].amount}
                    isIncome={overview[0].isIncome}
                />
                <Item
                    name={overview[1].name}
                    date={overview[1].date}
                    amount={overview[1].amount}
                    isIncome={overview[1].isIncome}
                />
                <Item
                    name={overview[2].name}
                    date={overview[2].date}
                    amount={overview[2].amount}
                    isIncome={overview[2].isIncome}
                />
                {overview.map((elt, i) => <Item
                    // key={i}
                    // key={uuidv4()}
                    key={elt.id}
                    name={elt.name}
                    date={elt.date}
                    amount={elt.amount}
                    isIncome={elt.isIncome}
                />)}
            </tbody>
        </table>
    );
}

export default ListItem;