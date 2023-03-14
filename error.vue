
<script setup>
    defineProps(['error'])

    function handleClearError(params) {
        clearError({
            redirect: '/',
            
        })
    }

</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <div class="mt-7 max-w-sm mx-auto text-center card h-[max-content] px-20 py-10">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Oops.</p>
        <p class="mt-7">{{ error.message }}</p>
            
            <button class="btn my-4" @click="handleClearError">Go back home</button>
        </div>
    </div>
</template>

