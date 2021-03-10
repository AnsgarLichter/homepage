<template>
  <div id="about">
    <div class="background">
      <div class="flex flex-row justify-center">
        <div class="flex flex-col w-1/2 self-center text-center text-white">
          <h1 class="text-5xl">Ansgar Lichter</h1>
          <h2 class="text-2xl text-white mt-3">SAP EWM Entwickler</h2>
          <h3 class="text-2xl text-white mt-3">
            Wirtschaftsinformatik (B. Sc.)
          </h3>
          <div class="flex flex-row justify-center mt-4">
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3"
                href="https://github.com/AnsgarLichter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  class="fa-lg"
                  :icon="['fab', 'github']"
                  color="white"
                />
              </a>
            </div>
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3"
                href="https://twitter.com/ansgarlichter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  class="fa-lg"
                  :icon="['fab', 'twitter']"
                  color="white"
                />
              </a>
            </div>
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3"
                href="https://www.instagram.com/_ansgar_l/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  class="fa-lg"
                  :icon="['fab', 'instagram']"
                  color="white"
                />
              </a>
            </div>
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3"
                href="https://www.xing.com/profile/Ansgar_Lichter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  class="fa-lg"
                  :icon="['fab', 'xing']"
                  color="white"
                />
              </a>
            </div>
            <div class="flex flex-col">
              <a
                class="rounded social-icon p-3"
                href="https://www.linkedin.com/in/ansgar-lichter-8532661b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <font-awesome-icon
                  class="fa-lg"
                  :icon="['fab', 'linkedin']"
                  color="white"
                />
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-1/2 py-16">
          <img
            class="rounded-full h-96 w-96 lg:h-174 md:w-174 object-cover"
            src="@/assets/images/me.jpg"
            alt="Ansgar Lichter"
            data-holder-rendered="true"
          />
        </div>
      </div>
    </div>
    <div class="col align-self-center text-center mt-8">
        <h1>About me</h1>
        <p class="text-justify">
          I am born 1998 in Karsrluhe. In this city I have finished my bachelor
          of science in business informatics at the Corpoarte State University.
          Currently I am working on interesting projects regarding SAP EWM at
          SEW-EURODRIVE GmbH &amp; Co KG. Feel free to take a look at my latest
          projects and skills below. Remotly available at
          <a href="mailto:mail@ansgarlichter.de">mail@ansgarlichter.de</a>
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about .background{
  background-image: url("~@/assets/images/code.png");
}

#about .background > div {
  background-color: rgba(255, 255, 255, 0.5);
}

#about .social-icon:hover {
  background-color: black;
}

#about .social-icon:hover .fa-github {
  color: hsla(0, 0%, 100%, 0.7);
}

#about .social-icon:hover .fa-twitter {
  color: #1da1f2;
}

#about .social-icon:hover .fa-instagram {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  background: -webkit-radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}

#about .social-icon:hover .fa-xing {
  color: #126576;
}

#about .social-icon:hover .fa-linkedin {
  color: #2867b2;
}
</style>
