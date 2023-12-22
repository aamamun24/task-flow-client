import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddTask = () => {
    const { user } = useAuth()
    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        if (data) {
            const addTask = {
                title: data.title,
                name: user.displayName,
                email: user.email,
                description: data.description,
                deadline: data.deadline,
                priority: data.priority
            }

            console.log(addTask);
            const taskRes = await axiosSecure.post('/task', addTask)
            if (taskRes.data.insertedId) {
                toast.success('Task added')
                navigate('/dashboard/task')
            }
        }
    }

    return (
        <div className="p-10 bg-white rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Title *</span>
                    </label>
                    <input
                        {...register('title', { required: true })}
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text">Description *</span>
                    </label>
                    <textarea
                        {...register('description', { required: true })}
                        placeholder="Description"
                        className="textarea textarea-bordered w-full" />
                </div>

                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Deadline *</span>
                    </label>
                    <input
                        {...register('deadline', { required: true })}
                        type="date"
                        className="input input-bordered w-full" />
                </div>

                <div className="w-full">
                    <label className="label">
                        <span className="label-text">Priority  *</span>
                    </label>
                    <select defaultValue="default" {...register('priority', { required: true })}
                        className="select select-bordered w-full">
                        <option disabled value="default">Select a category</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <div className="mt-4 flex justify-center">
                <button type="submit" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;