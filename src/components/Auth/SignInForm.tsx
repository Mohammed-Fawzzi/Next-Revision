"use client";
import React from 'react'
import Link from 'next/link'
import Button from '@/components/common/ui/Button'
import { useForm } from "react-hook-form";
import { FormData } from '@/types/types';

export default function SignInForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg w-full mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >

            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>

            {/* Inputs */}
            <div className="flex flex-col gap-4 mb-4">

                {/* Email */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email"
                            }
                        })}
                        className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Min 6 characters"
                            }
                        })}
                        className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.password && (
                        <span className="text-red-500 text-sm">{errors.password.message}</span>
                    )}
                </div>
            </div>

            {/* Remember + Forget */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <input type="checkbox" {...register("remember")} />
                    <label className="text-sm text-gray-600">
                        Remember me
                    </label>
                </div>
                
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-400 text-sm">OR</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Continue
            </Button>
        </form>
    )
}