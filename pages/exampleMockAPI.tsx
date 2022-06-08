import React, {useState, useEffect} from 'react';
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import axiosClient from '../services/api-service/axiosClient';

interface DataInterface {
    id: number,
    product_name: string,
    product_category: string,
    unit_price: number
}

interface FinalDataInterface {
    id: number,
    product_name: string,
    product_category: string,
    unit_price: number,
    checked: boolean
}

const ExamplePage = () => {

    //if you only put [] in useState, this array type will be never[] 
    // your code: const [data, setData] = useState([]);
    //=> you need to define a type like this
    const [data, setData] = useState<FinalDataInterface[]>([]);
    //^ with this one it will know that this data will hold a lot of object which has structure like DataInterface
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupData, setPopupData] = useState({});


    const fetchData = async () => {
        try {
            const res : DataInterface[] = await axiosClient.get("https://6291e4f99d159855f081e673.mockapi.io/data");
            const finalList : FinalDataInterface[] = res.map((item) => ({
                ...item,
                checked: false
            }))
            setData(finalList);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        <div className="popup-container" style={{display: popupVisible ? 'block' :'none', position: 'absolute', top: '50px', left: '50vw'}}>
            <DetailModal data={popupData} setData={setData} setPopupVisible={setPopupVisible}/>
        </div>
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
                                <td><input type="checkbox" id={`${item.id}`} checked={item.checked} onChange={(event) => {
                                    setPopupData(item);
                                    setPopupVisible(true);
                                    
                                }}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </>
    );

}

const DetailModal = ({data, setData, setPopupVisible}) => {

    const onSubmit = (formData: FormValues) => {
        setData((prevList) => {
            const tmp = [...prevList];
            tmp.forEach(item => {
                if(item.id === data.id) {
                    item.product_name = formData.product_name;
                    item.product_category = formData.product_category;
                    item.unit_price = formData.unit_price;
                    item.checked = true;
                }
            })
            return [...tmp];
        });

        //TODO: you might call API update in here before deciding to close the popup or not, remember that
        setPopupVisible(false);
        
    }

    return (
        <>
        <Form<FormValues> onSubmit={onSubmit}>
        {({ register ,setValue }) => {
            setValue("product_category", data.product_name);
            setValue("product_name", data.product_category);
            setValue("unit_price", data.unit_price);
            return (
            <>
            <Input {...register("product_name")} />
            <Input {...register("product_category")}/>
            <Input {...register("unit_price")}/>
            <Input type="submit" />
            <button onClick={() => setPopupVisible(false)}>Cancel</button>
            </>
        )
        }}
        </Form>
    </>
    );
}

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { options: Option[] };

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...props }, ref) => (
    <select ref={ref} {...props}>
      {options.map(({ label, value }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
);

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};

const Form = <TFormValues extends Record<string, any>>({
  onSubmit,
  children
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>();
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type FormValues = {
    product_name: string,
    product_category: string,
    unit_price: number
};

export default ExamplePage;