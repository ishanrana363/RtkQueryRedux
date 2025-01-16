import React, { useState } from 'react';
import {  useSingleUserQuery, useUserUpdateByIdMutation,  } from '../../redux/features/users/userApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"

const UpdateUser = () => {
    const { id } = useParams();

    const [userUpdateById] = useUserUpdateByIdMutation();

    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        
        reset,
        formState: { errors },
    } = useForm();

    const { data, isLoading, error } = useSingleUserQuery(id);

    const navigate = useNavigate();

    const userData = data?.data
    if (userData && !isLoading && !error && !reset.called) {
        reset(userData);
        reset.called = true
    }

    const onHandleSubmit = async(data)=>{
        console.log(data);
        try {
            setLoader(true);
            await userUpdateById({id,data }).unwrap();
            setLoader(false);
            alert('User updated successfully!')
        } catch (error) {
            console.log(error)
        }
    }






    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-700">User Form</h2>
                {
                    id
                }
                <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                            Name
                        </label>
                        <input

                            {...register('name')}

                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register('email')}
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Age */}
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-600">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            {...register('age')}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your age"
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            {...register('gender')}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="" disabled>
                                Select your gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* City */}
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-600">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            {...register('city')}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your city"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {
                                loader ? 'Loading...' : 'Submit'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
