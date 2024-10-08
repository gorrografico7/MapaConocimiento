export default function Login() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="max-w-lg w-full">
            <div
                style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                className="bg-gray-200 rounded-lg shadow-xl overflow-hidden"
            >
                <div className="p-8">
                    <h2 className="text-center text-3xl font-extrabold text-purple-500">
                        Login
                    </h2>
                    <form method="POST" action="#" className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm">
                            <div>
                                <label className="sr-only" htmlFor="email">Email </label>
                                <input
                                    placeholder="Email address"
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-500 bg-gray-300  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="sr-only" htmlFor="password">Password</label>
                                <input
                                    placeholder="Password"
                                    className="appearance-none relative block w-full px-3 py-3 border border-gray-500 bg-gray-300  rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    required
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <input
                                    className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                                    type="checkbox"
                                    name="remember-me"
                                    id="remember-me"
                                />
                                <label className="ml-2 block text-sm text-gray-400" htmlFor="remember-me">
                                    Recuerdame 
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    className="font-medium text-purple-500 hover:text-indigo-400"
                                    href="#"
                                >
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                className="text-white group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-purple-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
                <div className="px-8 py-4 bg-gray-400 text-center">
                    <span className="text-gray-900">¿No tienes cuenta? </span>
                    <a className="font-medium text-purple-500 hover:text-indigo-400" href="#">
                        Registrate
                    </a>
                </div>
            </div>
        </div>
        </div>
        
    );
}
