import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Task = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: tasks } = useQuery({
        queryKey: [user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/task/${user?.email}`)
            return res.data;
        }
    })

    console.log(tasks);

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-2 mb-6">Hi, <span className="text-rose-500">{user?.displayName}</span></h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
                <div className="border border-orange-500 rounded-md">
                    <h2 className="text-center bg-orange-500 font-bold  text-white rounded-t-md py-2 text-2xl">TODO List</h2>
                    {
                        tasks && tasks.map(task => (
                            <div key={task._id} className="max-w-sm p-4 m-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Deadline: {task.deadline}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Priority <span className="bg-indigo-500 p-1 rounded-md text-white font-semibold">{task.priority}</span></p>
                                <div className="flex justify-between">

                                </div>
                                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        ))
                    }
                </div>

                <div className="border border-purple-500 rounded-md">
                    <h2 className="text-center bg-purple-500 font-bold  text-white rounded-t-md py-2 text-2xl">Ongoing</h2>
                    {
                        tasks && tasks.map(task => (
                            <div key={task._id} className="max-w-sm p-4 m-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Deadline: {task.deadline}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Priority <span className="bg-indigo-500 p-1 rounded-md text-white font-semibold">{task.priority}</span></p>
                                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        ))
                    }
                </div>

                <div className="border border-red-500 rounded-md">
                    <h2 className="text-center bg-red-500 font-bold  text-white rounded-t-md py-2 text-2xl">Completed</h2>
                    {
                        tasks && tasks.map(task => (
                            <div key={task._id} className="max-w-sm p-4 m-4 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Deadline: {task.deadline}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Priority <span className="bg-indigo-500 p-1 rounded-md text-white font-semibold">{task.priority}</span></p>
                                <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Task;