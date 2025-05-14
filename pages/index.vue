<template>
  <div style="overflow: hidden;">
    <div class="p-2  pl-15 pr-15">
      <p class="text-2xl">Category</p>
      <div style="overflow-x: auto; display: flex; flex: 1;">
        <template v-for="index in 20">
          <div class="pl-3 pt-3 pb-2">
            <div style="display: flex; flex-direction: column; min-height: 300px; min-width: 250px">



              <img :src="`https://picsum.photos/id/${index}/250/200`" width="250" height="200"
                class="border-solid rounded-t-lg flex-1" />
              <div style="position: relative;">
                <div style="position: absolute; right: 10px; top: -20px; ">
                  <div class="border-10 border-primary rounded-full bg-primary w-11 h-11">
                    <UIcon name="ic-baseline-favorite-border" class="size-6 bg-slate-200" />
                  </div>
                </div>
              </div>
              <div class="bg-slate-300 pt-2 border-solid rounded-b-lg p-3 flex-1">

                <h1 class="text-slate-800 pb-2 font-bold">Pasta tuti fruti</h1>

                <div class="flex place-content-between pb-2">
                  <div class="flex" >
                    <UIcon name="ic-outline-access-time" class="size-5 bg-slate-600" />
                    <p class="w-full text-center text-sm text-slate-600">45 min</p>
                  </div>
                  <div class="flex">
                    <UIcon name="ic-baseline-people-outline" class="size-5 bg-slate-600" />
                    <p class="w-full text-center text-sm text-slate-600">2 people</p>
                  </div>
                  <div class="flex">
                    <UIcon name="ic-outline-bar-chart" class="size-5 bg-slate-600" />
                    <p class="w-full text-center text-sm text-slate-600">Beginner</p>
                  </div>
                </div>

                <UButton color="primary" class="w-full text-center">
                  <p class="w-full text-center text-slate-200">Recepie</p>
                </UButton>

              </div>



            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #CAD5E2;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #314158;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #243041;
}
</style>