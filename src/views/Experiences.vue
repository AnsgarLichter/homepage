<template>
  <div class="mt-24 mr-44 ml-44" id="experiences">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("experiences.title") }}</div>
    </div>
    <div class="flex flex-row mt-10">
      <div class="flex flex-col w-1/2 self-center text-center">
        <div class="text-3xl font-bold">{{ $t("experiences.education") }}</div>
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
