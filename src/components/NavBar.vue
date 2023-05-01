<template>
    <div id="app" fixed>
        <div id=" nav" class="bg-gradient-to-r from-gray-700 via-gray-900 to-black
       py-4">

            <nav class="container px-6 py-2 mx-auto md:flex md:justify-between md:items-center">

                <div class="flex items-center justify-between">
                    <a to="/" class="font-bold text-transparent text-blue-200 md:text-2xl hover:text-blue-200">Beautiful
                        Countries
                    </a>

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
</style>