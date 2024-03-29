import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faGithub,
  faXing,
  faLinkedin,
  faGooglePlay,
  faMicrosoft
} from "@fortawesome/free-brands-svg-icons";

import {
  faGraduationCap,
  faCalendar,
  faUniversity,
  faMapMarkerAlt,
  faEnvelope,
  faUserGraduate,
  faIndustry,
  faBars,
  faTimes,
  faExpandArrowsAlt,
  faCompressArrowsAlt,
  faDownload,
  faExternalLinkAlt,
  faSearch,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

import {
  faFolder
} from "@fortawesome/free-regular-svg-icons";

library.add(faXing);
library.add(faGithub);
library.add(faLinkedin);
library.add(faGooglePlay);
library.add(faGraduationCap);
library.add(faCalendar);
library.add(faUniversity);
library.add(faMapMarkerAlt);
library.add(faEnvelope);
library.add(faIndustry);
library.add(faBars);
library.add(faUserGraduate);
library.add(faTimes);
library.add(faExpandArrowsAlt);
library.add(faCompressArrowsAlt);
library.add(faDownload);
library.add(faExternalLinkAlt);
library.add(faFolder);
library.add(faSearch);
library.add(faMoon);
library.add(faMicrosoft);

export interface Icon {
  prefix: string;
  name: string;
  styleClasses?: string[];
}

export default FontAwesomeIcon;