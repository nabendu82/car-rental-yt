import { createBooking } from "@/services";
import { useEffect, useState } from "react"

const Form = ({ car }: any) => {
    const [formValue, setFormValue] = useState({ location: '', pickUpDate: '', dropOffDate: '', pickUpTime: '', dropOffTime: '', contactNumber: '', carId: "" })

    useEffect(() => {
        if (car) setFormValue({ ...formValue, carId: car.id });
    }, [car])

    const handleChange = (event: any) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    }

    const handleSubmit = async () => {
        console.log(formValue)
        const resp = await createBooking(formValue);
        console.log(resp);
    }

    return (
        <div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">PickUp Location</label>
                <select className="select select-bordered w-full max-w-lg" name="location" onChange={handleChange}>
                    <option disabled selected>PickUp Location?</option>
                    <option>Shop No. 23, MP Nagar, Zone-2, Bhopal</option>
                    <option>Shop No. 89, Lokmanya Nagar, Indore</option>
                </select>
            </div>
            <div className="flex flec-col gap-5 mb-5">
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">Pick Up Date</label>
                    <input type="date" placeholder="Type here" name="pickUpDate" className="input input-bordered w-full max-w-lg" onChange={handleChange} />
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-gray-400">Drop Off Date</label>
                    <input type="date" placeholder="Type here" name="dropOffDate" className="input input-bordered w-full max-w-lg" onChange={handleChange} />
                </div>
            </div>
            <div className="flex gap-5 ">
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">Pick Up Time</label>
                    <input type="time" name="pickUpTime" placeholder="Type here" className="input input-bordered w-full max-w-lg" onChange={handleChange} />
                </div>
                <div className="flex flex-col w-full mb-5">
                    <label className="text-gray-400">Drop Off Time</label>
                    <input type="time" name="dropOffTime" placeholder="Type here" className="input input-bordered w-full max-w-lg" onChange={handleChange} />
                </div>
            </div>
            <div className="flex flex-col w-full mb-5">
                <label className="text-gray-400">Contact Number</label>
                <input type="text" placeholder="Type here" name="contactNumber" className="input input-bordered w-full max-w-lg" onChange={handleChange} />
            </div>
            <div className="modal-action">
                <button className="btn">Close</button>
                <button className="btn bg-blue-500 text-white hover:bg-blue-800" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default Form