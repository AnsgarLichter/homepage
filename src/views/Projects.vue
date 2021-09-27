<template>
  <div class="mt-10 sm:mt-24 mx-8 sm:mx-22 lg:mx-4" id="projects">
    <div class="flex flex-row justify-center">
      <div class="text-5xl font-bold">{{ $t("projects.title") }}</div>
    </div>

    <div class="flex flex-wrap justify-center mx-44 my-10">
      <b-card class="w-full my-3" no-body>
        <b-tabs pills card>
          <b-tab :title="$t('projects.funnyFart.title')" active>
            <b-card-text>
              <div class="flex flex-row justify-center">
                <div class="flex flex-col w-1/2 items-center">
                  <b-carousel
                    class="h-auto 64"
                    :interval="10000"
                    controls
                    fade
                    indicators
                  >
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/funnyFart/formula.jpg')
                      "
                    />
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/funnyFart/calculate.jpg')
                      "
                    />
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/funnyFart/overview.jpg')
                      "
                    />
                  </b-carousel>
                </div>
                <div class="flex flex-col w-1/2 items-center">Funny Fart</div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab :title="$t('projects.catchTheTrain.title')">
            <b-card-text>
              <div class="flex flex-row justify-center">
                <div class="flex flex-col w-1/2 items-center">
                  <b-carousel
                    class="h-auto w-64"
                    :interval="10000"
                    controls
                    fade
                    indicators
                  >
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/catchTheTrain/favorites.png')
                      "
                    />
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/catchTheTrain/stop.png')
                      "
                    />
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/catchTheTrain/filter.png')
                      "
                    />
                  </b-carousel>
                </div>
                <div class="flex flex-col w-1/2">Catch The Train</div>
              </div>
            </b-card-text>
          </b-tab>
          <b-tab :title="$t('projects.dhbwApp.title')">
            <b-card-text
              ><div class="flex flex-row justify-center">
                <div class="flex flex-col w-1/2 items-center">
                  <b-carousel
                    class="h-auto w-64"
                    :interval="10000"
                    controls
                    fade
                    indicators
                  >
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/dhbwApp/overview.png')
                      "
                    />
                    <b-carousel-slide
                      :img-src="require('@/assets/projects/dhbwApp/mensa.png')"
                    />
                    <b-carousel-slide
                      :img-src="require('@/assets/projects/dhbwApp/rapla.png')"
                    />
                    <b-carousel-slide
                      :img-src="require('@/assets/projects/dhbwApp/events.png')"
                    />
                  </b-carousel>
                </div>
                <div class="flex flex-col w-1/2">DHBW App</div>
              </div></b-card-text
            >
          </b-tab>
          <b-tab
            :title="$t('projects.projectInitializationAutomation.title')"
            active
          >
            <b-card-text>
              <div class="flex flex-row justify-center">
                <div class="flex flex-col w-1/2 items-center">
                  <b-carousel
                    class="h-auto w-64"
                    :interval="10000"
                    controls
                    fade
                    indicators
                  >
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/projectInitializationAutomation/params.jpg')
                      "
                    />
                    <b-carousel-slide
                      :img-src="
                        require('@/assets/projects/projectInitializationAutomation/execution.jpg')
                      "
                    />
                  </b-carousel>
                </div>
                <div class="flex flex-col w-1/2">
                  Project Initialization Automation
                </div>
              </div>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>
