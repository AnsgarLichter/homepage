<template>
  <div class="mt-24 mr-44 ml-44" id="experiences">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("experiences.title") }}</div>
    </div>
    <div class="flex flex-row mt-10">
      <div class="flex flex-col w-1/2 self-center text-center">
        <div class="text-3xl font-bold">{{ $t("experiences.education") }}</div>
        <div class="flex flex-row justify-center">
          <div class="mt-10 lg:flex w-128 shadow">
            <div
              class="flex flex-col justify-center p-4 border-b border-l border-t flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            >
              <img
                class="w-44 mt-15 object-fill"
                src="@/assets/images/dhbw.svg"
                alt="Ansgar Lichter"
                data-holder-rendered="true"
              />
            </div>
            <div
              class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8 text-left">
                <div class="text-black font-bold text-xl mb-2">
                  Business Informatics
                </div>
                <p class="text-base text-grey-dark">
                  <font-awesome-icon
                    class="mr-1"
                    size="md"
                    :icon="['fas', 'calendar']"
                  />
                  2017 - 2020
                </p>
                <p class="text-grey-darker text-base">
                  <font-awesome-icon
                    class="mr-1"
                    size="md"
                    :icon="['fas', 'university']"
                  />
                  DHBW Karlsruhe
                </p>
                <p class="mt-3 text-grey-darker text-base">
                  Studienrichtung: Software Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-1/2 self-center text-center">
        <div class="text-3xl font-bold">{{ $t("experiences.work") }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Expieriences",
};
</script>

<style scoped>
.dhbw {
  background-image: url("~@/assets/images/dhbw.jpg");
}
</style>