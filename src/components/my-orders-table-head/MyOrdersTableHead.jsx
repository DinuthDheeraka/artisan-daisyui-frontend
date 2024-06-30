export default function MyOrdersTableHead() {
    return (
        <thead>
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox"/>
                </label>
            </th>
            <th className={'text-sm font-bold'}>Order Code</th>
            <th className={'text-sm font-bold'}>Date</th>
            <th className={'text-sm font-bold'}>Total</th>
            <th></th>
        </tr>
        </thead>
    )
}