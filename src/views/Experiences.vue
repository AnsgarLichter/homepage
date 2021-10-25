<template>
  <div class="mt-10 sm:mt-24 mx-8 sm:mx-22 lg:mx-4" id="experiences">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("experiences.title") }}</div>
    </div>

    <div class="mt-10">
      <Timeline :events="events">
        <template #marker="markerSlotProps">
          <font-awesome-icon
            class="fa-lg"
            :icon="[
              markerSlotProps.item.icon.prefix,
              markerSlotProps.item.icon.name,
            ]"
            :color="markerSlotProps.item.icon.color"
          />
        </template>
        <template #content="contentSlotProps">
          <div
            v-for="(item, index) in contentSlotProps.item.experiences"
            :key="index"
          >
            <Card
              :images="item.images"
              :title="item.title"
              :yearStart="item.yearStart"
              :yearEnd="item.yearEnd"
              :organisation="item.organisation"
              :location="item.location"
              :description="item.description"
            />
          </div>
        </template>
      </Timeline>
    </div>
    
  </div>
</template>

<script>
import Card from "../components/Card";
import Timeline from "../components/Timeline";

export default {
  name: "Expieriences",
  components: { Card, Timeline },
  data() {
    return {
      events: [
        {
          experiences: [
            {
              images: [
                { src: "dhbw.svg", alt: this.$t("experiences.images.dhbw") },
                { src: "sew.svg", alt: this.$t("experiences.images.sew") },
              ],
              title: this.$t("experiences.education.studies.title"),
              yearStart: this.$t("experiences.education.studies.yearStart"),
              yearEnd: this.$t("experiences.education.studies.yearEnd"),
              organisation: this.$t(
                "experiences.education.studies.organisation"
              ),
              location: this.$t("experiences.education.studies.location"),
              description: this.$t("experiences.education.studies.description"),
            },
            {
              images: [
                { src: "china.png", alt: this.$t("experiences.images.china") },
                { src: "sew.svg", alt: this.$t("experiences.images.sew") },
              ],
              title: this.$t("experiences.education.abroad.title"),
              yearStart: this.$t("experiences.education.abroad.yearStart"),
              yearEnd: this.$t("experiences.education.abroad.yearEnd"),
              organisation: this.$t(
                "experiences.education.abroad.organisation"
              ),
              location: this.$t("experiences.education.abroad.location"),
              description: this.$t("experiences.education.abroad.description"),
            },
          ],
          icon: {
            prefix: "fa",
            name: "user-graduate",
            color: "black",
          },
        },
        {
          experiences: [
            {
              images: [
                { src: "sew.svg", alt: this.$t("experiences.images.sew") },
              ],
              title: this.$t("experiences.work.itpa.title"),
              yearStart: this.$t("experiences.work.itpa.yearStart"),
              yearEnd: this.$t("experiences.work.itpa.yearEnd"),
              organisation: this.$t("experiences.work.itpa.organisation"),
              location: this.$t("experiences.work.itpa.location"),
              description: this.$t("experiences.work.itpa.description"),
            },
          ],
          icon: {
            prefix: "fa",
            name: "industry",
            color: "black",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.dhbw {
  background-image: url("~@/assets/images/dhbw.jpg");
}

.timeline > div:nth-child(even) {
  flex-direction: row;
}

@screen xl {
  .timeline > div:nth-child(even) {
    flex-direction: row-reverse;
  }
}
</style>