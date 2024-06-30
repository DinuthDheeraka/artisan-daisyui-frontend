// eslint-disable-next-line react/prop-types
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function MyOrdersTableRow({order}) {

    const navigate = useNavigate();

    // eslint-disable-next-line react/prop-types
    const {orderId, createdAt, items} = order;

    let orderTotal = calculateOrderTotal();

    // calculate order total
    function calculateOrderTotal() {
        let orderTotal = 0;
        // eslint-disable-next-line react/prop-types
        if (items && items.length > 0) {
            // eslint-disable-next-line react/prop-types
            items.forEach(item => {
                orderTotal += item.price * item.qty;
            })
            // eslint-disable-next-line no-unused-vars,react/prop-types
            orderTotal += 150 * items.length;
        }
        return orderTotal;
    }

    function formatDate(dateParam) {

        const date = new Date(dateParam);

        return date.toUTCString();
    }

    return (<tr>
        <th>
            <label>
                <input type="checkbox" className="checkbox"/>
            </label>
        </th>
        <td>
            <p className={'text-sm font-semibold'}>#{orderId}</p>
        </td>
        <td>
            <p className={''}>{formatDate(createdAt)}</p>
            {/*<br/>*/}
            {/*<span className="badge badge-ghost badge-sm">Desktop Support Technician</span>*/}
        </td>
        <td><p className={'font-semibold'}>LKR {orderTotal.toLocaleString()}</p></td>
        <th>
            <button className="btn btn-ghost btn-xs" onClick={() => {
                navigate(`/order-detail/${orderId}`, {state: {data: {id: orderId}}})
            }}>details
            </button>
        </th>
    </tr>);
}