import React, {useState, useEffect} from 'react';
import axiosClient from '../services/api-service/axiosClient';

interface DataInterface {
    id: number,
    product_name: string,
    product_category: string,
    unit_price: number
}

const ExamplePage = () => {

    //if you only put [] in useState, this array type will be never[] 
    // your code: const [data, setData] = useState([]);
    //=> you need to define a type like this
    const [data, setData] = useState<DataInterface[]>([]);
    //^ with this one it will know that this data will hold a lot of object which has structure like DataInterface

    const fetchData = async () => {
        try {
            const res : DataInterface[] = await axiosClient.get(window.location.origin + "/data.json"); //i already prepared a data.json in public folder, please check it
            setData(res);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="container">
            <h1>Simple Inventory Table</h1>
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Category</th>
                    <th>Unit Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.product_name}</td>
                                <td>{item.product_category}</td>
                                <td>{item.unit_price}</td>
                                <td/>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );

}

export default ExamplePage;