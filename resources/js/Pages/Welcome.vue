<template>
    <Head title="Welcome" />

    <div class="bg-gray-100">
        <!-- Navbar -->
        <nav class="bg-white border-b border-gray-300 sticky top-0">
            <div class="flex items-center justify-between flex-wrap mx-auto max-w-screen-xl">
                <div class="flex items-center mx-2 py-3 md:py-0">
                    <div class="flex items-center">
                        <button class="md:hidden mx-3">
                            <i class="text-2xl bx bx-menu"></i>
                        </button>
                        <a href="#" class="font-bold text-xl pr-6">Jakarta<span class="text-gray-500 font-normal">LTE</span></a>
                    </div>
                    <ul class="text-sm font-normal hidden md:flex">
                        <li class="mx-3 py-4 font-medium text-green-500 border-b-2 border-green-500">
                            <a href="#" class="inline-flex items-center">
                                <i class="bx bx-home mr-1"></i>
                                Home
                            </a>
                        </li>
                        <li class="mx-3 py-4 text-gray-600 hover:text-gray-900 inline-block relative text-left">
                            <a href="#" class="inline-flex text-sm items-center text-gray-600 dropdown-toggle" data-dropdown="dropdownMenuDashboard">
                                <i class="bx bx-pie-chart-alt mr-1"></i>
                                <span>Dashboard</span>
                                <i class="bx bx-chevron-down ml-1"></i>
                            </a>

                            <div class="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden" id="dropdownMenuDashboard">
                                <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1">
                                        <a href="./../index.html" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Dashboard v1</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Dashboard v2</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Dashboard v3</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mx-3 py-4 text-gray-600 hover:text-gray-900 relative inline-block text-left">
                            <a href="#" class="inline-flex items-center dropdown-toggle" data-dropdown="uiComponentMenu">
                                <i class="bx bx-outline mr-1"></i>
                                <span>UI Component</span>
                                <i class="bx bx-chevron-down ml-1"></i>
                            </a>

                            <div class="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden" id="uiComponentMenu">
                                <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1">
                                        <a href="./form.html" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Form</a>
                                        <a href="./card.html" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Card</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Chart</a>
                                        <a href="./button.html" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Buttons</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Dropdown</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Navbar</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Maps</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mx-3 py-4 text-gray-600 hover:text-gray-900 relative inline-block text-left">
                            <a href="#" class="inline-flex items-center dropdown-toggle" data-dropdown="pagesNav">
                                <i class="bx bx-book mr-1"></i>
                                <span>Pages</span>
                                <i class="bx bx-chevron-down ml-1"></i>
                            </a>

                            <div class="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden" id="pagesNav">
                                <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1">
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Login</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Register</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">User Profile</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">User Settings</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Blog</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Timeline</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mx-3 py-4 text-gray-600 hover:text-gray-900 relative inline-block text-left">
                            <a href="#" class="inline-flex items-center dropdown-toggle" data-dropdown="layoutNav"
                                ><i class="bx bx-dock-right mr-1"></i>
                                <span> Layout</span>
                                <i class="bx bx-chevron-down ml-1"></i
                            ></a>

                            <div class="origin-top-right absolute right-0 mt-3 z-10 w-40 rounded-md shadow-lg hidden" id="layoutNav">
                                <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1">
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Vertical</a>
                                        <a href="#" class="block px-3 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Vertical fluid</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="flex items-center">
                    <!-- <div v-if="canLogin" class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                        <Link v-if="$page.props.user" :href="route('dashboard')" class="text-sm text-gray-700 underline"> Dashboard </Link>

                        <template v-else>
                            <Link :href="route('login')" class="text-sm text-gray-700 underline"> Log in </Link>

                            <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 underline"> Register </Link>
                        </template>
                    </div> -->

                    <div v-if="canLogin">
                        <!-- <button class="mt-1 relative mx-2">
                            <i class="bx bx-bell text-xl text-gray-600"></i>
                            <span aria-hidden="true" class="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"></span>
                        </button> -->

                        <div class="inline-block relative text-left">
                            <Link v-if="$page.props.user" :href="route('dashboard')" class="text-sm mx-2 text-gray-700"> Dashboard </Link>

                            <template v-else>
                                <Link :href="route('login')" class="text-sm text-gray-700 underline"> Log in </Link>

                                <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-gray-700 underline"> Register </Link>
                            </template>

                            <!-- <a class="flex items-center mx-2 dropdown-toggle" href="" data-dropdown="dropDownMenu">
                                <img class="w-8 h-8 mr-3 rounded-full object-cover" src="./../dist/avatar/nis.png" alt="Avatar"/>
                                <Link v-if="$page.props.user" :href="route('dashboard')" class="mt-1 hidden md:block">
                                    <div class="leading-3 text-sm text-gray-700">Zero Black Coder</div>
                                    <small class="text-xs text-gray-500">Anggota DPR</small>
                                </Link>
                            </a> -->

                            <!-- <div class="origin-top-right absolute right-0 mt-3 z-56 w-56 rounded-md shadow-lg hidden" id="dropDownMenu">
                                <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <div class="py-1">
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Settings</a>
                                        <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Logout</a>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- End navbar -->

        <!-- Wrapper -->
        <div class="max-w-screen-xl mx-auto">
            <!-- Title -->
            <div class="mt-4 mx-2 md:flex justify-between items-center">
                <div class="">
                    <h3 class="text-gray-600 text-sm">
                        <a href="" class="text-green-600">
                            <i class="bx bx-home mr-1"></i>

                            Home
                        </a>
                        / Dashboard v1
                    </h3>

                    <div>
                        <h1 class="text-2xl mt-1 font-medium">Performance Product</h1>
                    </div>
                </div>

                <div class="md:pt-0 pt-4">
                    <button class="px-4 py-2 border text-sm mx-1 border-transparent rounded bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:border-green-500 focus:shadow-outline-green active:bg-green-500 transition duration-150 ease-in-out inline-flex items-center">
                        <i class="bx bx-world text-white mr-2 text-base"></i>
                        Publish
                    </button>
                    <button class="px-4 py-2 border text-sm mx-1 rounded bg-white hover:bg-gray-100 focus:outline-none focus:shadow-outline-white active:bg-white transition duration-150 ease-in-out inline-flex items-center">
                        <i class="bx bx-plus text-gray-700 mr-2 text-base"></i>
                        Create
                    </button>
                </div>
            </div>
            <!-- End title -->

            <!-- Content -->
            <div class="mt-3 w-full">
                <!-- Content chart 1 -->
                <div class="flex flex-wrap mb-2">
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="bg-white my-2 mx-2 border rounded-md flex-col flex h-40">
                            <div class="px-4 py-3 pb-0 flex-auto">
                                <div class="flex justify-between">
                                    <div class="text-gray-600 text-sm">Total Revenue</div>
                                    <div class="relative inline-block text-left text-sm">
                                        <a href="" class="inline-flex items-center text-gray-600 dropdown-toggle" data-dropdown="totalRevenueDropdown">
                                            <span>Last 30 days </span>
                                            <i class="inline-flex items-center bx bx-chevron-down ml-1"></i>
                                        </a>

                                        <div class="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden" id="totalRevenueDropdown">
                                            <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <div class="py-1">
                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Today</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 7 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 30 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 60 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 1 Year</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="text-3xl inline font-medium text-gray-700">$2,820</div>
                                    <span class="text-sm text-green-500">+4.61% <i class="bx bx-up-arrow-alt"></i></span>
                                </div>
                            </div>
                            <div id="chart-sparkline-1"></div>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="bg-white my-2 mx-2 border rounded-md flex-col flex h-40">
                            <div class="px-4 py-3 pb-0 flex-auto">
                                <div class="pb-0 flex justify-between">
                                    <div class="text-gray-600 text-sm">Sales Product</div>
                                    <div class="relative inline-block text-left text-sm">
                                        <a href="" class="inline-flex items-center text-gray-600 dropdown-toggle" data-dropdown="salesProductDropdown">
                                            <span>Last 30 days </span>
                                            <i class="inline-flex items-center bx bx-chevron-down ml-1"></i>
                                        </a>

                                        <div class="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden" id="salesProductDropdown">
                                            <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <div class="py-1">
                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Today</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 7 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 30 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 60 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 1 Year</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-3xl inline font-medium text-gray-700">760</div>
                                <span class="text-sm text-green-500">+5.66% <i class="bx bx-up-arrow-alt"></i></span>
                            </div>
                            <div id="chart-sparkline-2" class="my-2 ml-1 mr-2"></div>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="bg-white my-2 mx-2 border rounded-md flex-col flex h-40">
                            <div class="px-4 py-3 pb-0 flex-auto">
                                <div class="flex justify-between flex-auto">
                                    <div class="text-gray-600 text-sm">User Activity</div>
                                    <div class="relative inline-block text-left text-sm">
                                        <a href="" class="inline-flex items-center text-gray-600 dropdown-toggle" data-dropdown="userActifityDropDown">
                                            <span>Last 30 days </span>
                                            <i class="inline-flex items-center bx bx-chevron-down ml-1"></i>
                                        </a>

                                        <div class="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden" id="userActifityDropDown">
                                            <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <div class="py-1">
                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Today</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 7 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 30 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 60 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 1 Year</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-3xl inline font-medium text-gray-700">2,169K</div>
                                <span class="text-sm text-red-500">-23.24% <i class="bx bx-down-arrow-alt"></i></span>
                            </div>
                            <div id="chart-sparkline-3" class="my-2 mx-2"></div>
                        </div>
                    </div>
                    <div class="lg:w-1/4 md:w-1/2 w-full">
                        <div class="bg-white my-2 mx-2 border rounded-md flex-col flex h-40">
                            <div class="px-4 py-3 flex-auto">
                                <div class="pb-0 flex justify-between">
                                    <div class="text-gray-600 text-sm">Feedback</div>
                                    <div class="relative inline-block text-left text-sm">
                                        <a href="" class="inline-flex items-center text-gray-600 dropdown-toggle" data-dropdown="FeedbackDropdown">
                                            <span>Last 30 days </span>
                                            <i class="inline-flex items-center bx bx-chevron-down ml-1"></i>
                                        </a>

                                        <div class="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden" id="FeedbackDropdown">
                                            <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                                <div class="py-1">
                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Today</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 7 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 30 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 60 days</a>

                                                    <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 1 Year</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-3xl inline font-medium text-gray-700">456</div>
                            </div>
                            <div class="px-4 pb-6">
                                <div class="flex justify-between mb-2">
                                    <div class="text-gray-700 text-sm"><b>83%</b> Good Feedback</div>
                                    <div>
                                        <span class="text-sm text-green-500">2.75% <i class="bx bx-up-arrow-alt"></i></span>
                                    </div>
                                </div>
                                <div class="px-auto bg-gray-200">
                                    <div class="bg-green-500 py-1" style="width: 83%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Content chart 1 -->

                <!-- Content chart 2 -->
                <div class="flex flex-wrap mb-2">
                    <div class="md:w-2/3 w-full">
                        <div class="bg-white my-2 mx-2 border rounded-md px-2 py-4">
                            <div class="flex justify-between px-2">
                                <div>
                                    <h1 class="text-2xl font-medium inline">1875</h1>
                                    <span class="text-sm text-green-500">2.75% <i class="bx bx-up-arrow-alt"></i></span>
                                    <div class="text-gray-700">Sales Product Categories</div>
                                </div>
                                <!--  -->
                                <div class="relative inline-block text-left text-base">
                                    <a href="" class="inline-flex items-center text-gray-600 dropdown-toggle" data-dropdown="SalesCategoryDropdown">
                                        <span>Last 60 days </span>
                                        <i class="inline-flex items-center bx bx-chevron-down ml-1"></i>
                                    </a>

                                    <div class="origin-top-right absolute right-0 mt-1 z-10 w-48 rounded-md shadow-lg hidden" id="SalesCategoryDropdown">
                                        <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            <div class="py-1">
                                                <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Today</a>

                                                <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 7 days</a>

                                                <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 30 days</a>

                                                <a href="#" class="block px-3 py-1 leading-5 text-gray-600 bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 60 days</a>

                                                <a href="#" class="block px-3 py-1 leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700">Last 1 Year</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ejs-chart id="container" :title="title" :primaryXAxis="primaryXAxis">
                                <e-series-collection>
                                    <e-series :dataSource="seriesData" type="Line" xName="month" yName="sales" name="Sales"> </e-series>
                                </e-series-collection>
                            </ejs-chart>
                            <!-- <div id="chart-bar" class="flex-auto"></div> -->
                        </div>
                    </div>
                    <div class="md:w-1/3 w-full">
                        <div class="bg-white border rounded-md my-2 mx-2">
                            <div class="px-2 py-3">
                                <div class="text-gray-700 px-2 text-xl">Top Sales by Country</div>
                                <div id="chart-pie-1" class="flex-auto"></div>
                            </div>
                            <table class="w-full text-md bg-white rounded">
                                <tbody>
                                    <tr>
                                        <td class="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200">1</td>
                                        <td class="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200">USA</td>
                                        <td class="px-4 py-1.5 border-t border-gray-200 text-green-500 text-right">+ 10% <i class="bx bx-up-arrow-alt ml-1"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200">2</td>
                                        <td class="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200">India</td>
                                        <td class="px-4 py-1.5 border-t border-gray-200 text-red-500 text-right">- 12% <i class="bx bx-down-arrow-alt ml-1"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200">3</td>
                                        <td class="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200">Japan</td>
                                        <td class="px-4 py-1.5 border-t border-gray-200 text-green-500 text-right">+ 17% <i class="bx bx-up-arrow-alt ml-1"></i></td>
                                    </tr>
                                    <tr>
                                        <td class="px-4 py-1.5 text-gray-700 border-t w-8 border-gray-200">4</td>
                                        <td class="px-4 py-1.5 text-gray-700 border-t font-medium border-gray-200">Indonesia</td>
                                        <td class="px-4 py-1.5 border-t border-gray-200 text-green-500 text-right">+ 11% <i class="bx bx-up-arrow-alt ml-1"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- End Content chart 2 -->
            </div>
            <!-- End Content -->
        </div>
        <!-- End wrapper -->
        <!-- Footer -->
        <div class="max-w-screen-xl mx-auto mb-4">
            <div class="mt-4 mx-2 flex justify-between items-center">
                <div class="text-gray-600">
                    MIT License- Copyright (c) 2021
                    <strong class="font-bold">Under-X</strong>
                </div>
            </div>
        </div>
        <!-- End footer -->
    </div>
</template>

<style scoped></style>

<script>
import { defineComponent } from 'vue'
import { Head, Link } from '@inertiajs/inertia-vue3'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Legend, Category } from '@syncfusion/ej2-vue-charts'

export default defineComponent({
    components: {
        Head,
        Link,
        'ejs-chart': ChartComponent,
        'e-series-collection': SeriesCollectionDirective,
        'e-series': SeriesDirective,
    },

    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
        chartData: [
                { month: 'Jan', sales: 35 },
                { month: 'Feb', sales: 28 },
                { month: 'Mar', sales: 34 },
                { month: 'Apr', sales: 32 },
                { month: 'May', sales: 40 },
                { month: 'Jun', sales: 32 },
                { month: 'Jul', sales: 35 },
                { month: 'Aug', sales: 55 },
                { month: 'Sep', sales: 38 },
                { month: 'Oct', sales: 30 },
                { month: 'Nov', sales: 25 },
                { month: 'Dec', sales: 32 },
            ],
    },
    data() {
        return {
            primaryXAxis: {
                valueType: 'Category',
            },
            seriesData: $page.props.chartData,
        }
    },
    provide: {
        chart: [LineSeries, Legend, Category],
    },
})
</script>
