<template>
    <div id="app" fixed>
        <div id=" nav" class="bg-gradient-to-r from-gray-700 via-gray-900 to-black
       py-4">

            <nav class="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">

                <div class="flex items-center justify-between">
                    <router-link to="/" class="font-bold  text-white md:text-2xl hover:text-blue-200">
                        Countries
                    </router-link>
                    <button type="button"
                        class="text-white  hover:-translate-y-1 hover:scale-110  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2">
                        <router-link to="Mylist"
                            class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                            <span
                                class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                            <span
                                class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                                <span
                                    class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full blur-md"></span>
                                <span
                                    class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full blur-md"></span>
                            </span>
                            <span class="relative text-white"> List of countries</span>
                        </router-link> </button>

                </div>
            </nav>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Nav-bar",

};
</script>
  
<style lang="css">
.scale-slide-enter-active,
.scale-slide-leave-active {
    position: fixed;
    transition: all 0.85s ease;
}

.scale-slide-enter-from {
    left: -100%;
}

.scale-slide-enter-to {
    left: 0%;
}

.scale-slide-leave-from {
    transform: scale(1);
}

.scale-slide-leave-to {
    transform: scale(0.8);
}



.v-application a {
    color: #aeb7c0;
}
</style>