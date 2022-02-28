<template>
    <app-layout title="Dashboard">
        <!-- <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template> -->
        <div class="max-w-screen-xl mx-auto">
            <div class="mt-4 pt-4 mx-8 md:flex justify-between items-center">
                <div class="">
                    <h3 class="text-gray-600 text-sm">
                        <a href="" class="text-indigo-600">
                            <i class="bx bx-home mr-1"></i>
                            Dashboard
                        </a>
                    </h3>

                    <div>
                        <h1 class="text-2xl mt-1 font-medium">
                            Welcome
                        </h1>
                    </div>
                </div>

                <div class="md:pt-0 pt-4">
                    <button
                        class="px-4 py-2 border text-sm mx-1 border-transparent rounded bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo active:bg-indigo-500 transition duration-150 ease-in-out inline-flex items-center"
                    >
                        <i class="bx bx-world text-white mr-2 text-base"></i>
                        Publish
                    </button>
                    <button
                        class="px-4 py-2 border text-sm mx-1 rounded bg-white hover:bg-gray-100 focus:outline-none focus:shadow-outline-white active:bg-white transition duration-150 ease-in-out inline-flex items-center"
                    >
                        <i class="bx bx-plus text-gray-700 mr-2 text-base"></i>
                        Create
                    </button>
                </div>
            </div>
        </div>

        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <welcome />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Jetstream/Welcome.vue";

export default defineComponent({
    components: {
        AppLayout,
        Welcome,
    },
});
</script>
