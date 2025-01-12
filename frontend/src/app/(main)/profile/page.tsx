"use client";

import Sidebar from "@/lib/components/Sidebar";
import { Button, Input } from "@nextui-org/react";
import { CheckSquare, User2 } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 py-20 px-16">
                <div className="mx-auto space-y-12 divide-y divide-dashed divide-gray-400">
                    {/* Personal Information Section */}
                    <section className="flex space-y-6">
                        <div className="basis-1/4 space-y-2">
                            <h2 className="text-2xl font-semibold text-white">
                                Personal Information
                            </h2>
                            <p className="text-slate-400">
                                Update your personal information to keep your
                                profile current.
                            </p>
                        </div>
                        <div className="basis-1/2 px-10 flex flex-col items-center gap-8">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-200/20">
                                <User2 className="h-12 w-12 text-blue-300" />
                            </div>
                            <div className="space-y-4 w-full">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm text-slate-400"
                                    >
                                        Full Name
                                    </label>
                                    <Input
                                        id="fullName"
                                        placeholder="Enter your full name"
                                        className="placeholder:text-slate-600"
                                    />
                                </div>
                                <Button className="flex items-center p-1 rounded-sm w-full bg-blue-200 text-blue-950 hover:bg-blue-200/30">
                                    <CheckSquare />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Email Section */}
                    <section className="flex space-y-6 pt-10">
                        <div className="basis-1/4 space-y-2">
                            <h2 className="text-2xl font-semibold text-white">
                                Email Address
                            </h2>
                            <p className="text-slate-400">
                                Your email address is used for account
                                notifications and password recovery.
                            </p>
                        </div>
                        <div className="basis-1/2 px-10 flex flex-col items-center gap-8">
                            <div className="space-y-4 w-full">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-slate-400"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        placeholder="you@example.com"
                                        className="placeholder:text-slate-600"
                                    />
                                </div>
                                <Button className="flex items-center p-1 rounded-sm w-full bg-blue-200 text-blue-950 hover:bg-blue-200/30">
                                    <CheckSquare />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Delete Account Section */}
                    <section className="flex space-y-6 pt-10">
                        <div className="basis-1/4 space-y-2">
                            <h2 className="text-2xl font-semibold text-white">
                                Delete Account
                            </h2>
                            <p className="text-slate-400">
                                If you wish to delete your account, please be
                                aware that this action is irreversible.
                            </p>
                        </div>
                        <div className="flex px-2 basis-1/2 items-center justify-center">
                            <Button className="bg-red-700 items-center justify-center h-8 text-red-100 rounded-sm hover:bg-red-500/30">
                                Delete My Account
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
