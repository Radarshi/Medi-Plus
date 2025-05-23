import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
  return (
      <>
    <section class="w-full bg-white">
    <div class="px-8 py-12 mx-auto max-w-7xl">
        <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-12 lg:gap-20">
            <div class="col-span-3">
                <a href="#_" class="text-xl font-black leading-none text-gray-900 select-none logo">mediplus</a>
                <p class="my-4 text-xs leading-normal text-gray-500">
                    We are with your journey to make your health perfect.
                </p>
            </div>
            <nav class="col-span-1 md:col-span-1 lg:col-span-2">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Product</p>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Features</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Integrations</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Documentation</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">FAQs</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Pricing</a>
            </nav>
            <nav class="col-span-1 md:col-span-1 lg:col-span-2">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">About</p>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Our Story</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Company</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Privacy</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Blog</a>
            </nav>
            <nav class="col-span-2 md:col-span-1 lg:col-span-2">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">Contact</p>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Advertising</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Press</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Email</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Partners</a>
                <a href="#" class="flex mb-3 text-sm font-medium text-gray-500 transition hover:text-gray-700 md:mb-2 hover:text-primary">Jobs</a>
            </nav>
            <div class="col-span-3">
                <p class="mb-3 text-xs font-semibold tracking-wider text-gray-400 uppercase">SUBSCRIBE TO OUR LATEST BLOGS</p>
                <form action="#" class="mb-2">
                    <div class="relative flex items-center overflow-hidden border border-gray-200 rounded-lg">
                        <input class="w-full px-3 py-2 text-base leading-normal transition duration-150 ease-in-out bg-white appearance-none focus:outline-none" type="email" placeholder="Enter your email"/>
                        <button class="px-3 py-2 text-xs font-medium text-center text-white no-underline bg-indigo-500 border-2 border-indigo-500" type="submit">Subscribe</button>
                    </div>
                </form>
                <p class="text-xs leading-normal text-gray-500">Get the latest updates and news about our service.</p>
            </div>
        </div>
        <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
            <p class="mb-6 text-sm text-left text-gray-600 md:mb-0">© Copyright of mediplus</p>
            <div class="flex items-start justify-start space-x-6 md:items-center md:justify-center">
                <a href="#_" class="text-sm text-gray-600 transition hover:text-primary">Terms</a>
                <a href="#_" class="text-sm text-gray-600 transition hover:text-primary">Privacy</a>
            </div>
            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                     © 2025 Medi Plus
                 </p>
        </div>
    </div>
</section>

      </>
  );
};

export default Footer;