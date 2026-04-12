"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/common/ui/Button'
import { useForm } from "react-hook-form";
import { FormData } from '@/types/types';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

export default function SignUpForm() {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showRePassword, setShowRePassword] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
    };

    const password = watch("password");

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg w-full mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >

            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

            {/* Inputs */}
            <div className="flex flex-col gap-4 mb-4">

                {/* Name */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-600">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: "Name is required"
                        })}
                        className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )}
                </div>

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
                <div className="flex flex-col gap-1 relative">
                    <label className="text-sm text-gray-600">Password</label>

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Min 6 characters"
                            }
                        })}
                        className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Icon */}
                    {showPassword ? (
                        <FaEyeSlash
                            className="absolute right-3 top-10 cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(false)}
                        />
                    ) : (
                        <FaEye
                            className="absolute right-3 top-10 cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(true)}
                        />
                    )}

                    {errors.password && (
                        <span className="text-red-500 text-sm">{errors.password.message}</span>
                    )}
                </div>

                {/* Confirm Password */}
                <div className="flex flex-col gap-1 relative">
                    <label className="text-sm text-gray-600">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        {...register("confirmPassword", {
                            required: "Confirm your password",
                            validate: (value) =>
                                value === password || "Passwords do not match"
                        })}
                        className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Icon */}
                    {showPassword ? (
                        <FaEyeSlash
                            className="absolute right-3 top-10 cursor-pointer text-gray-500"
                            onClick={() => setShowRePassword(false)}
                        />
                    ) : (
                        <FaEye
                            className="absolute right-3 top-10 cursor-pointer text-gray-500"
                            onClick={() => setShowRePassword(true)}
                        />
                    )}

                    {errors.confirmPassword && (
                        <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                    )}
                </div>

            </div>

            {/* Login redirect */}
            <p className="text-center text-sm text-gray-600 mb-4">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-500 hover:underline">
                    Login
                </Link>
            </p>

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
                Create Account
            </Button>
        </form>
    )
}