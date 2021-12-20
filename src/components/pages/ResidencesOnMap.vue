<template>
  <div class="map_section">
    <Header class="descTop-version"/>
    <div id="locationOfRes" class="map">
      <div class="wrapper-map">
        <div>
          <l-map
            ref="myMap"
            :center="center"
            :options="mapOptions"
            :zoom="zoom"
            style="height: 100vh; width: 100%"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
          >
            <l-tile-layer
              :attribution="attribution"
              :url="url"
            />
            <l-marker v-for="(item, index) in this.markers" :key="index" :icon="item.icon"
                      :lat-lng="item.latLng"
                      @add="onAdd($event)"
                      @click="onMarkerClick(item.id)">
              <l-tooltip :options="{ permanent: false, interactive: true }">
                <div class="map-tooltip">
                  <div class="price">
                    <b> {{ item.name }} </b>
                    <p v-if="item.price">от {{ item.price.min_price }} смн</p>
                  </div>
                  <img :src="item.img" alt="">

                </div>

              </l-tooltip>
            </l-marker>
          </l-map>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>
<style scoped>
.map {
  height: calc(100vh - 70px);
  overflow: hidden;
}

.footer {
  display: none;
}

.map-tooltip {
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.map-tooltip img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.map-tooltip .price {
  display: flex;
  flex-direction: column;
  justify-content: center;
}


@media (max-width: 992px) {

  .map {
    height: calc(100vh - 65px);
  }

  .map .vue2leaflet-map{
    height: calc(100vh - 65px) !important;
  }

  .footer {
    display: none;
  }

  .mobVersion {
    display: none !important;
  }

  .descTop-version {
    display: none !important;
  }
}
</style>
<script>
import Vue from 'vue'
import Header from '../subcomponents/Header.vue'
import Footer from '../subcomponents/Footer.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import SliderItems from './slider-for-jkh/Slider-component.vue'
import {LIcon, LMap, LMarker, LPopup, LTileLayer, LTooltip} from "vue2-leaflet";
import * as L from "leaflet";
import {Icon} from "leaflet";
import Slick from "vue-slick";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../assets/img/map/1.svg'),
  iconUrl: require('../../assets/img/map/1.svg'),
  shadowUrl: require('../../assets/img/map/1.svg'),
});

Vue.use(VueAxios, axios)

var config = require('../../../config/prod.env')

export default {
  components: {
    Header,
    Footer,
    Slick,
    SliderItems,
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
    LTooltip
  },
  data() {

    return {
      myLatLng: [],
      markers: [],
      zoom: 13,
      center: [38.57420592623844, 68.7916660308838],
      currentCenter: [38.57420592623844, 68.7916660308838],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5
      },
      showParagraph: false,
      showMap: true,

      icon: L.icon({
        iconUrl: require('../../assets/img/map/1.svg'),
        iconSize: [40, 48],
        iconAnchor: [20, 48],
        tooltipAnchor: [20, -24]
      }),
      jkhInfo: [],

    }
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    }
  },

  beforeUpdate() {

  },
  updated() {

  },
  created() {

  },
  methods: {

    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },

    addMarker() {

      axios.get(config.BASE_URL + 'residences-map')
        .then((res) => {
          this.jkhInfo = res.data.data.map((element) => {

            Array.prototype.hasMin = function (attrib) {
              return (this.length && this.reduce(function (prev, curr) {
                return prev[attrib] < curr[attrib] ? prev : curr;
              })) || null;
            }

            let blocks = element.blocks.hasMin('min_price')
            var obj = {"ID": 3, "Cost": 50}
            this.markers.push({
              id: element.id,
              latLng: [parseFloat(element.lat), parseFloat(element.lng)],
              content: element.name,
              icon: this.icon,
              name: element.name,
              price: blocks,
              img: element.img
            })

          })

        })
    },
    onAdd: function (e) {
      this.$nextTick(() => e.target.openPopup())
    },

    onMarkerClick(id) {
      this.$router.push({path: "/residence/" + id})

    }
  },
  mounted() {
    window.setTimeout(this.addMarker, 2000);


    this.$nextTick(() => {
      //this.$refs.myMap.mapObject.scrollWheelZoom.disable();
    });
  }
}
</script>
