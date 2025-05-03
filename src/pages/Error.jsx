import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <main className="flex min-h-screen items-center justify-center bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="text-center w-full max-w-md">
                <p className="text-base font-semibold text-primary-blue">404</p>
                <h1 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
                    Page not found
                </h1>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-8 flex justify-center">
                    <Link 
                        to="/" 
                        className="rounded-md bg-primary-blue px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
                    >
                        Go back home
                    </Link>
                </div>
            </div>
        </main>
    );
}
 
export default Error;