<!--
 * @Author: xkloveme
 * @Date: 2021-12-29 13:49:13
 * @LastEditTime: 2021-12-29 17:57:17
 * @LastEditors: xkloveme
 * @Description: windows loading
 * @FilePath: /OS/src/views/windows.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="w-full px-2 py-1 sm:px-0">
    <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
        <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
          <button :class="[
              'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-gray-700 ring-opacity-60',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]">
            {{ category }}
            <!-- <div class="bg-cover bg-center ..." :style="{'background-image': url(...)}"></div> -->
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
            'bg-green-500 rounded-xl p-3',
            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
          ]">

          <div v-for="(post,imgIndex) in posts" :key="imgIndex" class="relative ">
            <a href="#" class="group cursor-pointer">
              <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img :src="post.img" :alt="post.title" class="w-full h-full object-center object-cover">
              </div>
              <p class="mt-1 text-lg text-center font-medium text-gray-900">
                预览-{{post.title}}(点击图片即可预览)
              </p>
            </a>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup () {
    let categories = ref({
      'Windows XP': [
        {
          title: '升级',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
        {
          title: "出错",
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
      ],
      'Windows 7': [
        {
          title: '升级',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
        {
          title: "预览4",
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
      ],
      'Windows 8': [
        {
          title: '首页5',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
        {
          title: "预览6",
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
      ],
      'Windows 11': [
        {
          title: '首页7',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
        {
          title: "预览8",
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
      ],
      Deepin: [
        {
          title: '首页',
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
        {
          title: "预览",
          img: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-fb13c39a-ce5d-4fbc-9fe5-96360b09fdec/2c46bea7-a40b-4f31-be88-4efe1da8018f.jpeg',
        },
      ],
    })

    return { categories }
  },
}
</script>