import MyOrdersTableRow from "../my-orders-table-row/MyOrdersTableRow.jsx";
import MyOrdersTableHead from "../my-orders-table-head/MyOrdersTableHead.jsx";

// eslint-disable-next-line react/prop-types
export default function Table({orders}) {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <MyOrdersTableHead/>
                    <tbody>
                    {/* eslint-disable-next-line react/prop-types */}
                    {orders.map((order) => {
                        // eslint-disable-next-line react/jsx-key
                        return <MyOrdersTableRow order={order}/>
                    })}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                    {/*<tr>*/}
                    {/*    <th></th>*/}
                    {/*    <th>Name</th>*/}
                    {/*    <th>Job</th>*/}
                    {/*    <th>Favorite Color</th>*/}
                    {/*    <th></th>*/}
                    {/*</tr>*/}
                    </tfoot>
                </table>
            </div>
        </div>
    );
}