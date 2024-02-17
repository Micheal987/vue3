<script setup lang="ts">
import { ref, nextTick } from "vue"
import * as echarts from 'echarts';
import { echartsm, echartsp } from '@/types/echarts/index'
// 基于准备好的dom，初始化echarts实例
interface useCard {
  title: string,
  price: number,
  total: number,
  totaltitle: string,
  iconcolor: string,
}
const usecard = ref<useCard[]>([
  { title: '优惠列表', price: 99999, total: 10000, totaltitle: '优惠总数', iconcolor: '#fff' },
  { title: '销售额度', price: 99999, total: 10000, totaltitle: '销售总数', iconcolor: '#fff' },
  { title: '用户列表', price: 99999, total: 10000, totaltitle: '用户总数', iconcolor: '#fff' },
  { title: '商户列表', price: 99999, total: 10000, totaltitle: '商户总数', iconcolor: '#fff' },
  { title: '运营类别', price: 99999, total: 10000, totaltitle: '运营总数', iconcolor: '#fff' },
  { title: '结算清单', price: 99999, total: 10000, totaltitle: '结算总数', iconcolor: '#fff' },
  { title: '售后订单', price: 99999, total: 10000, totaltitle: '售后总数', iconcolor: '#fff' },
  { title: '订单列表', price: 99999, total: 10000, totaltitle: '订单总数', iconcolor: '#fff' }
])
nextTick(() => {
  echarts.init(document.getElementById('ch')).setOption(echartsm)
  echarts.init(document.getElementById('ch1')).setOption(echartsp)
})
</script>
<script lang="ts">
export default {
  route: { meta: { auth: true } }
}
</script>
<template>
  <div>
    <div class=" flex flex-wrap items-center gap-2 mt-2 px-2 cursor-pointer">
      <el-card class="box-card w-[400px]" shadow='hover' v-for="(item, index) in usecard" :key="index">
        <template #header>
          <div class="card-header flex justify-between items-center text-xm font-bold opacity-90">
            <span>{{ item.title }}</span>
            <el-tag class="ml-2" size="large" type="danger" :hit="false">月</el-tag>
          </div>
        </template>
        <template #default>
          <section class="flex justify-between items-center">
            <span class="font-bold">{{ '$' + item.price }}</span>
            <el-button type="danger">添加</el-button>
          </section>
        </template>
        <template #footer>
          <section class="flex justify-between items-center text-sm  mt-2 font-bold">
            <span>{{ item.totaltitle }}</span>
            <span>{{ item.total }}人</span>
          </section>
        </template>
      </el-card>
    </div>
    <div class="mt-2 px-2">
      <div class=" bg-slate-50 rounded-md px-2 flex flex-wrap items-center gap-3 py-2">
        <div class="ty " id="ch1"></div>
        <div class="ty" id="ch"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.ty {
  width: 800px;
  height: 600px;
}
</style>