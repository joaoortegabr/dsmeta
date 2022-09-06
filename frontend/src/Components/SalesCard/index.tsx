import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import NotificationButton from '../NotificationButton';
import { useState } from 'react';
import './styles.css';

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return(
        <section>
            <h2>Vendas</h2>
            <div>
                <div>
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="input-field"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div>
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="input-field"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <div>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="id-column">ID</th>
                            <th className="date-column">Data</th>
                            <th>Vendedor</th>
                            <th className="visits-column">Visitas</th>
                            <th className="sales-column">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="id-column">34</td>
                            <td className="date-column">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="visits-column">74</td>
                            <td className="sales-column">34</td>
                            <td>R$ 5520.00</td>
                            <td><NotificationButton /></td>
                        </tr>
                        <tr>
                            <td className="id-column">26</td>
                            <td className="date-column">08/07/2022</td>
                            <td>Sheila</td>
                            <td className="visits-column">45</td>
                            <td className="sales-column">67</td>
                            <td>R$ 1220.00</td>
                            <td><NotificationButton /></td>
                        </tr>
                        <tr>
                            <td className="id-column">14</td>
                            <td className="date-column">08/07/2022</td>
                            <td>Max</td>
                            <td className="visits-column">7</td>
                            <td className="sales-column">19</td>
                            <td>R$ 830.00</td>
                            <td><NotificationButton /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    )
}
  
export default SalesCard