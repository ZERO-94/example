import React, {useState, useEffect} from 'react';

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

    useEffect(() => {
        setData([
            {
                id: 1,
                product_name: "sth",
                product_category: "sth",
                unit_price: 1
            },
            {
                id: 2,
                product_name: "sth2",
                product_category: "sth2",
                unit_price: 1
            },
            {
                id: 3,
                product_name: "sth3",
                product_category: "sth3",
                unit_price: 1
            },
        ])
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