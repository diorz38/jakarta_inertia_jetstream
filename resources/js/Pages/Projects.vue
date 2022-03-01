<template>
    <app-layout title="Kegiatan Tahun Ini">
        <div class="max-w-screen-xl mx-auto">
            <div class="mt-4 pt-4 mx-8 md:flex justify-between items-center">
                <!-- flash message -->
                <!-- <div v-if="$page.props.flash.message" class="alert alert-success" role="alert">
                    {{ $page.props.flash.message }}
                </div> -->
                <!-- flash message -->

                <div class="">
                    <h3 class="text-gray-600 text-sm">
                        <a href="" class="text-indigo-600">
                            <i class='bx bx-list-ul'></i>
                            {{ $page.props.subTitle }}
                        </a>
                    </h3>

                    <div>
                        <h1 class="text-2xl mt-1 font-medium">{{ $page.props.title }}</h1>
                    </div>
                </div>

                <div class="md:pt-0 pt-4">
                    <button class="px-4 py-2 border text-sm mx-1 border-transparent rounded bg-indigo-500 text-white hover:bg-indigo-400 focus:outline-none focus:border-indigo-500 focus:shadow-outline-indigo active:bg-indigo-500 transition duration-150 ease-in-out inline-flex items-center">
                        <i class="bx bx-world text-white mr-2 text-base"></i>
                        Publish
                    </button>
                    <button class="px-4 py-2 border text-sm mx-1 rounded bg-white hover:bg-gray-100 focus:outline-none focus:shadow-outline-white active:bg-white transition duration-150 ease-in-out inline-flex items-center">
                        <i class="bx bx-plus text-gray-700 mr-2 text-base"></i>
                        Create
                    </button>
                </div>
            </div>
        </div>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                                    <th scope="col" class="relative px-6 py-3">
                                                        <span class="sr-only">Edit</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-for="item in $page.props.projects" :key="item.id">
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 h-10 w-10">
                                                                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                                                            </div>
                                                            <div class="ml-4">
                                                                <div class="text-sm font-medium text-gray-900">{{ item.nama }}</div>
                                                                <div class="text-sm text-gray-500">Basis Kegiatan</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">Target: {{ Number(item.target).toLocaleString() }}</div>
                                                        <div class="text-sm text-gray-900">Realisasi: {{ item.realisai }}</div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                                                    </td>
                                                </tr>
                                                <!-- More people... -->
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
import { defineComponent } from 'vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import Welcome from '@/Jetstream/Welcome.vue'

export default defineComponent({
    props: ['sessions'],

    components: {
        AppLayout,
        Welcome,
    },

    //props
    // props: {
    //     projects: Array, // <- nama props yang dibuat di controller saat parsing data
    // },
})
</script>
